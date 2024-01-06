'use client'

import { swapElements } from '@/helpers'
import { useUsers } from '@/hooks'
import { type User } from '@/types'

const useCalculateOptions = (selectedValue: User | null) => {
	const { data: users } = useUsers()

	const options = [
		{
			image: null,
			title: 'Everyone',
			value: null
		},
		...users!.map((user) => ({
			image: user.avatar,
			title: `${user.name} ${user.surname}`,
			value: user
		}))
	]

	if (selectedValue) {
		const index = options.findIndex(({ value }) => value?.id === selectedValue.id)
		swapElements(options, 0, index)
	}

	return options
}

export default useCalculateOptions
