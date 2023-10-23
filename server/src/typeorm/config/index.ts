import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserEntity, TaskEntity, RefreshTokenEntity } from 'typeorm/entities'
import { host, username, password, database } from 'config'

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
