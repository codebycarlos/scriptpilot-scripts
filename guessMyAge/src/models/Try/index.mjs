import { consola } from "./_exports.mjs"
import { TryAsync } from "./TryAsync.mjs"

export function Try(func) {
	try {
		const response = func()

		if (response instanceof Promise) return TryAsync(response)
		return [response, null]
	} catch (e) {
		consola.error(e)
		return [null, e]
	}
}
