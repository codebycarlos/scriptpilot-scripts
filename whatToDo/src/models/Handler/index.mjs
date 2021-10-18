import { Try, Logic } from "./_exports.mjs"
import { preprocessing } from "./preprocessing.mjs"

export async function Handler (event, context, callback) {
	const Input = await preprocessing({ event, context, callback })

	const [result, error] = await Try(() => Logic(Input))

	if (error)
		return {
			statusCode: 400,
			body: error?.message || "There was an error running this script.",
		}

	return {
		statusCode: 200,
		body: result,
	}
}
