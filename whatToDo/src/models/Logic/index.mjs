import { Try, CustomAxiosAsync } from "./_exports.mjs"
export async function Logic({ event, context, callback }) {
	const axios = await CustomAxiosAsync()

	const [response, errorWithResponse] = await Try(() =>
		axios.get(`${process.env.ACTIVITY_SUGGESTIONS_API_PROVIDER}`),
	)
	if (errorWithResponse)
		throw Error("Sorry, we are not able to suggest an activity at this time.")

	return response?.data?.activity + "."
}
