export {}

declare global {
	interface Array<T> {
		swapElements(index1: number, index2: number): void
	}
}
