import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { TaskEntity, UserEntity } from '../'

@Entity({ name: 'teams' })
export class TeamEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@OneToOne(() => UserEntity)
	creator: UserEntity

	@OneToMany(() => UserEntity, (user) => user.team)
	users: UserEntity[]

	@OneToMany(() => TaskEntity, (task) => task.team)
	tasks: TaskEntity[]
}
