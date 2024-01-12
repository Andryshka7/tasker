import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from 'types'

import { TaskEntity } from '../'

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

	@Column({ default: null })
	lastActive: string

	@Column({ default: null })
	avatar: string

	@OneToMany(() => TaskEntity, (task) => task.user)
	tasks: TaskEntity[]

	@OneToMany(() => TaskEntity, (task) => task.creator)
	createdTasks: TaskEntity[]
}
