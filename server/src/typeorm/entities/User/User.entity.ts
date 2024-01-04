import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TaskEntity } from '..'
import { Role } from 'types'

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	surname: string

	@Column({ unique: true })
	email: string

	@Column()
	password: string

	@Column()
	role: Role

	@Column({ nullable: true })
	avatar: string

	@OneToMany(() => TaskEntity, (task) => task.user)
	tasks: TaskEntity[]

	@OneToMany(() => TaskEntity, (task) => task.creator)
	createdTasks: TaskEntity[]
}
