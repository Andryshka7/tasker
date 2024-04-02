import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { ReportEntity } from '../'

@Entity({ name: 'reportimages' })
export class ReportImageEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@ManyToOne(() => ReportEntity, (report) => report.images)
	report: number
}
