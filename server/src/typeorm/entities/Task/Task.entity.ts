import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Priority } from 'types'

import { TeamEntity, UserEntity } from '../'

@Entity({ name: 'tasks' })
export class TaskEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column({ length: 500 })
	description: string

	@Column()
	priority: Priority

	@Column({ default: null })
	completed: string

	@Column()
	due: string

	@ManyToOne(() => UserEntity, (user) => user.tasks)
	user: UserEntity

	@ManyToOne(() => TeamEntity, (team) => team.tasks)
	team: TeamEntity

	@ManyToOne(() => UserEntity)
	creator: UserEntity
}
