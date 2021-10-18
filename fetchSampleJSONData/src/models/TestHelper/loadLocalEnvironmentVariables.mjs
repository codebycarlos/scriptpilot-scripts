import { dotenv, path, Meta } from "./_exports.mjs"

export function loadLocalEnvironmentVariables() {
	const defaultPath = path.join(Meta.getScriptName(), "/.env")
	dotenv.config({ path: defaultPath })
}
