import { Logic } from "../../index.mjs"

export async function test1() {
	const result = await Logic({ event: { name: "carlos" } })
	console.log(result)
}
