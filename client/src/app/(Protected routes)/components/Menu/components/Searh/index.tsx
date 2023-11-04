'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Seacrh = () => {
	const [value, setValue] = useState('')

	return (
		<div className='mx-1 mt-3 flex items-center gap-3 rounded bg-white bg-opacity-20 px-4 py-1'>
			<label htmlFor='search'>
				<FaSearch color='white' size={15} />
			</label>
			<input
				className='h-4.5 bg-transparent text-sm font-semibold'
				id='search'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Search'
			/>
		</div>
	)
}

export default Seacrh
