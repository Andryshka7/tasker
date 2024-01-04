import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from '..'
import { Priority } from 'types'

@Entity({ name: 'tasks' })
export class TaskEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	priority: Priority

	@Column()
	completed: boolean

	@Column({ type: 'datetime' })
	due: Date

	@ManyToOne(() => UserEntity, (user) => user.tasks)
	user: UserEntity

	@ManyToOne(() => UserEntity, (user) => user.createdTasks)
	creator: UserEntity
}
