import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from '.'

@Entity({ name: 'tasks' })
export class TaskEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => UserEntity, (user) => user.tasks)
    user: UserEntity
}
