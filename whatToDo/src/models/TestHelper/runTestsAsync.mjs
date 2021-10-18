import { setupPreTests } from "./setupPreTests.mjs"

export async function runTestsAsync(tests) {
	setupPreTests()
	tests.forEach(async (test) => {
		console.log("_______________________________________", "\n")
		console.log("Running test: ", test.name)
		console.log("Output: ")
		await test()
	})
}
