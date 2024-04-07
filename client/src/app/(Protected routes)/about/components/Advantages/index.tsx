const advantages = [
	'Intuitive interface design for enhanced user experience',
	'Effortless and user-friendly onboarding process for new users',
	'Scalable architecture designed to accommodate growing teams',
	'Flexible task assignment options with role-based permissions',
	'Dynamic task prioritization based on project requirements',
	'Responsive customer support for any assistance needed'
]

const Advantages = () => {
	return (
		<div className='mt-8 flex items-start gap-16'>
			<div className='rounded-xl bg-blue px-8 py-5'>
				{advantages.slice(0, 3).map((advantage) => (
					<div className='flex gap-2.5 p-2'>
						<img src='/advantage.png' className='mt-1.5 h-6 w-6' alt='' />
						<p className='max-w-[320px] text-lg font-semibold'>{advantage}</p>
					</div>
				))}
			</div>
			<div className='mt-7 rounded-xl bg-blue px-8 py-5'>
				{advantages.slice(3).map((advantage) => (
					<div className='flex gap-2.5 p-2'>
						<img src='/advantage.png' className='mt-1.5 h-6 w-6' alt='' />
						<p className='max-w-[320px] text-lg font-semibold'>{advantage}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Advantages
