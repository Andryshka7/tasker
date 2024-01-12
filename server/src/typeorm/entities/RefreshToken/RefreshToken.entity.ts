import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from 'types'

import { UserEntity } from '../'

@Entity({ name: 'refreshtokens' })
export class RefreshTokenEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	token: string

	@OneToOne(() => UserEntity)
	@JoinColumn()
	user: User
}
