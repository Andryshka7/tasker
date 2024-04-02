import { database, host, password, username } from 'config'
import {
	RefreshTokenEntity,
	ReportEntity,
	ReportImageEntity,
	TaskEntity,
	TeamEntity,
	UserEntity
} from 'typeorm/entities'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

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
