import { BiSolidUser } from 'react-icons/bi'

interface Props {
	src?: string | null
	className?: string
}

const Avatar = ({ src, className }: Props) =>
	src ? (
		<img src={src} className={className} />
	) : (
		<BiSolidUser className={`${className} scale-95`} color='white' />
	)

export default Avatar
