import * as fs from 'fs'
import * as path from 'path'

const uploadFile = (file: Express.Multer.File, name: string) => {
	const extension = file.originalname.split('.')[1]
	const directory = path.join(__dirname, '..', '..', 'images', `${name}.${extension}`)
	fs.writeFile(directory, file.buffer, (err) => {
		if (err) console.log('Error while uploading file', err)
	})

	return `${name}.${extension}`
}

const deleteFile = (filePath: string) => {
	fs.unlink(filePath, (err) => {
		if (err) console.log('An error occured while deleting file:', filePath)
	})
}

const getFilePath = (fileName: string) => {
	const directory = path.join(__dirname, '..', '..', 'images', fileName)
	return directory
}

export { uploadFile, deleteFile, getFilePath }
