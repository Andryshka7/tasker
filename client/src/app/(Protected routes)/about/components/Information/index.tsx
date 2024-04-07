const information = [
	{ amount: 3, text: 'Years experience', addPlusToNumber: false },
	{ amount: 80, text: 'Teams registered', addPlusToNumber: true },
	{ amount: 250, text: 'Projects completed', addPlusToNumber: true }
]

const Information = () => {
	return (
		<div className='mt-8 flex items-center gap-52'>
			{information.map(({ amount, text, addPlusToNumber }) => (
				<div className=''>
					<div className='mx-auto flex h-12 w-24 items-center justify-center rounded-xl bg-cyan text-2xl font-semibold'>
						{amount}
						{addPlusToNumber && '+'}
					</div>
					<p className='mt-2 font-semibold'>{text}</p>
				</div>
			))}
		</div>
	)
}

export default Information
