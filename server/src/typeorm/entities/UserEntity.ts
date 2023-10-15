import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({ nullable: true })
    avatar: string | null

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    password: string

    @Column()
    role: string
}
