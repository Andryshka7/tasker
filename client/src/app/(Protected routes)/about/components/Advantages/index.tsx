const advantages = [
	'Modern and convenient task management system',
	'Simple and intuitive user interface with extra options',
	'More than 1000 satisfied clients are using our services'
]

const Advantages = () => {
	return (
		<div className='mt-10 flex items-start gap-16'>
			<div className='rounded-xl bg-blue px-8 py-5'>
				{advantages.map((advantage) => (
					<div className='flex gap-2.5 p-2'>
						<img src='/advantage.png' className='mt-1.5 h-6 w-6' alt='' />
						<p className='max-w-[300px] text-lg font-semibold'>{advantage}</p>
					</div>
				))}
			</div>
			<div className='mt-7 rounded-xl bg-blue px-8 py-5'>
				{advantages.map((advantage) => (
					<div className='flex gap-2.5 p-2'>
						<img src='/advantage.png' className='mt-1.5 h-6 w-6' alt='' />
						<p className='max-w-[300px] text-lg font-semibold'>{advantage}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Advantages
