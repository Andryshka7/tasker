import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { ReportImageEntity } from '../'

@Entity({ name: 'reports' })
export class ReportEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ length: 500 })
	description: string

	@OneToMany(() => ReportImageEntity, (reportImage) => reportImage.report)
	images: ReportImageEntity[]
}
