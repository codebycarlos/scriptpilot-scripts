export function setTestingMode({ event }) {
    const testingMode = event?.TESTING ?? event?.testing ?? process.env?.TESTING ?? process.env?.testing ?? "false"

    process.env.TESTING = testingMode.toLowerCase()
}
