import { ConfigModule } from '@nestjs/config'

ConfigModule.forRoot()

const host = process.env.DATABASE_HOST
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME

const jwt_secret = 'ADFLQ7230F1273HF08A7H3F07H0&Hf0Hf0hhsf0hHFSHAf0F0A8S0FH98120381;JASDF'

export { host, username, password, database, jwt_secret }
