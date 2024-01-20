import { database, host, password, username } from 'config'
import { RefreshTokenEntity, TaskEntity, TeamEntity, UserEntity } from 'typeorm/entities'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const config: TypeOrmModuleOptions = {
	type: 'mysql',
	host,
	username,
	password,
	database,
	entities: [UserEntity, TaskEntity, TeamEntity, RefreshTokenEntity],
	synchronize: true
}

export default config
