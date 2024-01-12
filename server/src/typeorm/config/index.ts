import { database, host, password, username } from 'config'
import { RefreshTokenEntity, TaskEntity, UserEntity } from 'typeorm/entities'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const config: TypeOrmModuleOptions = {
	type: 'mysql',
	host,
	username,
	password,
	database,
	entities: [UserEntity, TaskEntity, RefreshTokenEntity],
	synchronize: true
}

export default config
