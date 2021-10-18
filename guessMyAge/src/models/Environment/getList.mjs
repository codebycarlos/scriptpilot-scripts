export function getList(variableName) {
	return process.env[variableName].split(",")
}
