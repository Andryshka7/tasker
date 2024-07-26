import { server } from 'config'
import { unlink, writeFile } from 'fs/promises'
import { extname, join } from 'path'
import { v4 as uuid } from 'uuid'

const uploadFile = async (file: Express.Multer.File) => {
	const fileName = uuid() + extname(file.originalname)

	const filePath = join(__dirname, '..', '..', 'images', fileName)
	await writeFile(filePath, file.buffer)

	return `${server}/images/${fileName}`
}

const deleteFile = async (url: string) => {
	const fileName = url.replace(`${server}/images/`, '')
	const filePath = join(__dirname, '..', '..', 'images', fileName)
	await unlink(filePath)
}

export { deleteFile, uploadFile }
