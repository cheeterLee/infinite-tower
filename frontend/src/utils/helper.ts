export const convertStringToHex = (str: string) => {
	return Number(`0x${str.substring(1)}`)
}

export const convertHexToString = (hex: string) => {
	return hex.replace("0x", "#")
}