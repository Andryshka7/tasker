import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from '..'
import { type Priority } from 'types'

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

	@ManyToOne(() => UserEntity, (user) => user.createdTasks)
	creator: UserEntity
}
