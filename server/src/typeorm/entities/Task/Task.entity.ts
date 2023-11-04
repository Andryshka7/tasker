import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from '..'

@Entity({ name: 'tasks' })
export class TaskEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	priority: number

	@Column({ type: 'datetime' })
	due: Date

	@ManyToOne(() => UserEntity, (user) => user.tasks)
	user: UserEntity

	@ManyToOne(() => UserEntity, (user) => user.createdTasks)
	creator: UserEntity
}
