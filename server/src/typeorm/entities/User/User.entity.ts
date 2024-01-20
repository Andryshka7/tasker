import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from 'types'

import { TaskEntity, TeamEntity } from '../'

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

	@ManyToOne(() => TeamEntity, (team) => team.users)
	team: TeamEntity

	@OneToMany(() => TaskEntity, (task) => task.user)
	tasks: TaskEntity[]
}
