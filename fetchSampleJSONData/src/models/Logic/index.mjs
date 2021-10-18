import { Try, CustomAxiosAsync } from "./_exports.mjs"

export async function Logic({ event, context, callback }) {
    const axios = await CustomAxiosAsync()

	const [response, errorWithResponse] = await Try(() => axios.get(process.env.FETCH_DATA_URL))
	if (errorWithResponse) throw Error("Unable to fetch data for the specified URL.")

	return response?.data
}
