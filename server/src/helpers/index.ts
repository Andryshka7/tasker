import { server } from 'config'
import { unlink, writeFile } from 'fs/promises'
import { extname, join } from 'path'
import { v4 as uuid } from 'uuid'

const uploadFile = async (file: Express.Multer.File) => {
	const fileName = uuid() + extname(file.originalname)

	const filePath = join(__dirname, '..', '..', '..', fileName)
	await writeFile(filePath, file.buffer)

	return `${server}/images/${fileName}`
}

const deleteFile = async (fileName: string) => {
	const filePath = join(__dirname, '..', '..', '..', fileName)
	await unlink(filePath)
}

export { deleteFile, uploadFile }
