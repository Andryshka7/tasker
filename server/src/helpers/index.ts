import imageKit from './image kit'

const uploadFile = async (file: Express.Multer.File, name: string) => {
	const extension = file.originalname.split('.')[1]

	const { url } = await imageKit.upload({
		file: file.buffer,
		fileName: `${name}.${extension}`
	})

	return url
}

const deleteFile = async (path: string) => {
	const filePath = path.split('/')
	const fileName = filePath[filePath.length - 1]

	const { fileId } = (await imageKit.listFiles({ name: fileName }))[0]

	await imageKit.deleteFile(fileId)
}

export { uploadFile, deleteFile }
