export function getMap(variableName) {
	const array = process.env[variableName].split(",")

	return array.reduce((previousValue, initialValue) => {
		const key = initialValue.split(":")[0]
		const value = initialValue.split(":")[1]
		return { ...previousValue, [key]: value }
	}, {})
}
