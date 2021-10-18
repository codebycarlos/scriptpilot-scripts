import { loadLocalEnvironmentVariables } from "./loadLocalEnvironmentVariables.mjs"
export function setupPreTests() {
	if ("AWS_EXECUTION_ENV" in process.env) return
	loadLocalEnvironmentVariables()
}
