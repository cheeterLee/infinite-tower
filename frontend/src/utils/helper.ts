export const convertStringToHex = (str: string) => {
	return Number(`0x${str.substring(1)}`)
}
