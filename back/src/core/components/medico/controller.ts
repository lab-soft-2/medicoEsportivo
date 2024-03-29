import { Request, Response } from "express";
import * as util from 'util';
import { logger } from '../../../config/logger'
import { getRepository } from './../../../config/db/data-source'
import { Medico } from "./entity";
import { MedicoRepository } from './repository'

export class MedicoController {


    static async signup(req: Request, res: Response) {

        const { email, password, name } = req.body;

        const repository = new MedicoRepository(getRepository(Medico))

        const medico = new Medico(email, password, name);

        repository.create(medico)

        return res
            .status(200)
            .json({ message: "User created successfully", Medico });
    }

    static async getByEmail(req: Request, res: Response) {

        const { email } = req.body;

        const repository = new MedicoRepository(getRepository(Medico))

        const entity = await repository.findOneByEmail(email)

        return res.status(200).json(entity)
    }

    static async getAll(req: Request, res: Response) {

        const repository = new MedicoRepository(getRepository(Medico))

        const entity = await repository.findAll()
        console.log(entity)

        return res.status(200).json(entity)
    }

    static async deleteByEmail(req: Request, res: Response) {

        const { email } = req.body;

        const repository = new MedicoRepository(getRepository(Medico))

        const entity = await repository.deleteByEmail(email)

        return res.status(200).json(entity)
    }


    static async updateMedicoScore(req: Request, res: Response) {
        const log = logger({ context: 'App' })

        const { email, score } = req.body;

        const repository = new MedicoRepository(getRepository(Medico))

        const medico = await repository.findOneByEmail(email)
        if (medico && score) {
            medico.score = score

            repository.update(medico)

            return res.status(200).json(medico)
        }
        return res.status(400).json({ "erro": "medico nao encontrado ou score nao enviado" })
    }

    static async agendaMedico(req: Request, res: Response) {

        const { email } = req.body;
        const http = require('node:http')

        const resp = http.get({
            hostname: 'localhost',
            port: 3000,
            path: '/patient/vizualizar/agenda/medico',
            body: {
                "email": email
            }

        }, (resp) => {
            let data = '';
            // Um bloco de dados foi recebido.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // Toda a resposta foi recebida. Exibir o resultado.
            resp.on('end', () => {
                console.log(data);
                return res
                    .status(200).json(JSON.parse(data))
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        })
    }


    static async emitirDocumento(req: Request, res: Response) {

        const { profissional, paciente, documento } = req.body;
        const http = require('node:http')

        const resp = http.post({
            hostname: 'localhost',
            port: 3000,
            path: '/patient/postar/documento',
            body: {
                "profissional": profissional,
                "paciente": paciente,
                "documento": documento
            }

        }, (resp) => {
            let data = '';
            // Um bloco de dados foi recebido.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // Toda a resposta foi recebida. Exibir o resultado.
            resp.on('end', () => {
                console.log(data);
                return res
                    .status(200).json(JSON.parse(data))
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        })
    }

    static async updatePaciente(req: Request, res: Response) {

        return res.status(200).json({ "depende do paciente": "sim" })
    }

    static async exames(req: Request, res: Response) {

        return res.status(200).json({ "depende do paciente": "sim" })
    }

}