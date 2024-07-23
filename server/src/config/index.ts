import { ConfigModule } from '@nestjs/config'

ConfigModule.forRoot()

const port = process.env.PORT

const host = process.env.DATABASE_HOST
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT

const jwt_secret = process.env.JWT_SECRET

const client = process.env.CLIENT
const server = process.env.SERVER

const domainName = process.env.DOMAIN_NAME

export {
	port,
	host,
	username,
	password,
	database,
	jwt_secret,
	client,
	server,
	domainName,
	publicKey,
	privateKey,
	urlEndpoint
}
