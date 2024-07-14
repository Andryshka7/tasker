import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { database, host, password, username } from 'config'
import {
	RefreshTokenEntity,
	ReportEntity,
	ReportImageEntity,
	TaskEntity,
	TeamEntity,
	UserEntity
} from 'typeorm/entities'

const config: TypeOrmModuleOptions = {
	type: 'mysql',
	host,
	username,
	password,
	database,
	entities: [
		UserEntity,
		TaskEntity,
		TeamEntity,
		RefreshTokenEntity,
		ReportEntity,
		ReportImageEntity
	],
	synchronize: true
}

export default config
