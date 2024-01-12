import { client } from 'config'
import * as cookieParser from 'cookie-parser'

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({ origin: client, credentials: true })

	app.use(cookieParser())
	app.useGlobalPipes(new ValidationPipe())

	await app.listen(4000)
}
bootstrap()
