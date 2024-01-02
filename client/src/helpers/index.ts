const swapElements = <T>(array: T[], x: number, y: number) => {
	const temporary = array[x]
	array[x] = array[y]
	array[y] = temporary
}

export { swapElements }
