import { ConfigModule } from '@nestjs/config'

ConfigModule.forRoot()

const host = process.env.DATABASE_HOST
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME

const jwt_secret = process.env.JWT_SECRET

const client = process.env.CLIENT
const server = process.env.server

export { host, username, password, database, jwt_secret, client, server }
