import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { UserEntity } from '..'
import { User } from 'types'

@Entity({ name: 'refreshtokens' })
export class RefreshTokenEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column()
    token: string

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: User
}
