import express from 'express'
import { env } from './config/env'
import {logger} from './config/logger'
import {MedicoRepository} from './core/components/medico/repository'
import {getRepository, MainDataSource} from './config/db/data-source'
import {Medico} from './core/components/medico/entity'
import { medicoRouter } from "./core/components/medico/router";
import cors from 'cors';

const PORT = env.serverPort
const log = logger({ context: 'App' })

async function main() {
	const app = express()
	// Nao funciona com formdata, usar json raw
	app.use(express.json())

	await MainDataSource.initialize()
	log.info('Database connected successfully!')

	app.get(`/${env.appName}/health`, (req, res) => {
		return res.status(200).send()
	})

	app.use(cors())


	app.use("/medico", medicoRouter);


	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}



main().catch(error => {
	log.error('catch main application')
	log.error(error)
	process.exit(1)
})
