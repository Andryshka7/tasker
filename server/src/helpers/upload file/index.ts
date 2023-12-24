import * as fs from 'fs'
import * as path from 'path'

const uploadFile = (file: Express.Multer.File, name: string) => {
	const extension = file.originalname.split('.')[1]
	const directory = path.join(__dirname, '..', '..', '..', 'images', `${name}.${extension}`)
	fs.writeFile(directory, file.buffer, (err) => {
		if (err) console.log('Error while uploading file', err)
	})

	return `${name}.${extension}`
}

export default uploadFile
