interface Props {
	value: number
}
const Count = ({ value }: Props) => (
	<div className='flex h-8 w-12 items-center justify-center rounded bg-cyan'>
		<h3 className='text-lg font-semibold'>{value}</h3>
	</div>
)

export default Count
