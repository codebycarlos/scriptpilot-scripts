import { Try, CustomAxiosAsync } from "./_exports.mjs"
import { errorCheckInput } from "./errorCheckInput.mjs"
export async function Logic({ event, context, callback }) {
	errorCheckInput({ event, context, callback })

	const axios = await CustomAxiosAsync()

	const [response, errorWithResponse] = await Try(() =>
		axios.get(`${process.env.AGE_GUESSING_API_PROVIDER}${event.name}`),
	)
	if (errorWithResponse) throw Error("Sorry, we couldn't guess your age at this time.")

	return "You are " + response?.data?.age + " years old. Did we get it right?"
}
