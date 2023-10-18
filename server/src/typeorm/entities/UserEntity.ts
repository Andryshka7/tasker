import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TaskEntity } from '.'

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({ nullable: true })
    avatar: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    password: string

    @Column()
    role: string

    @OneToMany(() => TaskEntity, (task) => task.user)
    tasks: TaskEntity[]
}
