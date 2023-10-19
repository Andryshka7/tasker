import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TaskEntity } from '.'

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column({ nullable: true })
    avatar: string
    @OneToMany(() => TaskEntity, (task) => task.user)
    tasks: TaskEntity[]
}
