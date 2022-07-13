import { TypeTestimonial } from '../interfaces'

export const generateArray = (items: TypeTestimonial[]) => {
	items.sort((a: TypeTestimonial, b: TypeTestimonial) => b.id - a.id)
	const sums: number[] = [0, 0, 0]
	const arrays: TypeTestimonial[][] = [[], [], []]

	for (const item of items) {
		const index = sums.indexOf(Math.min.apply(null, sums))
		sums[index] += item.id
		arrays[index].push(item)
	}

	return arrays
}
