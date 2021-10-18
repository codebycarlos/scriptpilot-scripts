export function errorCheckInput({ event, context, callback }) {
    if (!("name" in event)) throw Error("Invalid Input - Parameter name not specified. As the script input, please set the key to name and provide an appropriate value (i.e. carlos).")
}
