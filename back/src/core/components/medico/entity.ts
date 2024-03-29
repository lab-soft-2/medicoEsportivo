import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'medicos' })
export class Medico {
    @PrimaryGeneratedColumn('uuid')
    	id?: string

    @Column({ nullable: false, type: 'varchar', length: 255 })
    	name: string

    @Column({ nullable: false, type: 'varchar', length: 255, unique: true })
    	email: string

    @Column({ nullable: false, type: 'varchar', length: 255, select: false })
    	password: string

    @CreateDateColumn()
    	created_at?: Date

    @UpdateDateColumn()
    	updated_at?: Date

    @Column({ default: 5, type: 'integer' })
    	score?: number
    
    constructor(email: string, password: string, name: string) {
    	this.name = name
    	this.email = email
    	this.password = password
    }
}