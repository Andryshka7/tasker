interface Props {
	className?: string
}

const Loader = ({ className }: Props) => (
	<div className={className}>
		<div className='loader mx-auto flex h-5 w-fit items-center justify-center'>
			<div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
			<div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
			<div className='mx-1 my-5 inline-block h-5 w-5 rounded-full' />
		</div>
	</div>
)

export default Loader
