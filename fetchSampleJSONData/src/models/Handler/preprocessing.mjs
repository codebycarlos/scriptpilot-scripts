import { setTestingMode } from "./setTestingMode.mjs"
export async function preprocessing({ event, context, callback }) {
	setTestingMode({ event })

	return { event, context, callback }
}
