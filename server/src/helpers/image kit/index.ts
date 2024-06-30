import { publicKey, privateKey, urlEndpoint } from 'config'

const ImageKit = require('imagekit')

const imageKit = new ImageKit({
	publicKey,
	privateKey,
	urlEndpoint
})

export default imageKit
