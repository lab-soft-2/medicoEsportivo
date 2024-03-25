import { Repository } from 'typeorm'
import { Medico } from './entity'

export class MedicoRepository {
	constructor(private readonly db: Repository<Medico>) { }

	async findAll(): Promise<Medico[] | undefined> {
		return await this.db.find()
	}

	async findOneById(id: string): Promise<Medico | undefined> {
		return await this.db.findOne({
			where: {
				id
			}
		}) ?? undefined
	}

	async findOneByEmail(email: string): Promise<Medico | undefined> {
		return await this.db.findOne({
			where: {
				email
			}
		}) ?? undefined
	}

	async create(medico: Medico): Promise<Medico> {
		return await this.db.save(medico)
	}

	async update(medico: Medico): Promise<Medico> {
		return await this.db.save(medico)
	}

	async deleteByEmail(email: string) {
		return await this.db.delete({ email: email })
	}

}