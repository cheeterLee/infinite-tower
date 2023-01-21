import { useContractFunction } from "@usedapp/core"
import { contract } from "../utils/config"

export const useCreateFloor = () => {
	const { state, send } = useContractFunction(contract, "createFloor")
	const loading =
		state.status === "PendingSignature" || state.status === "Mining"
	const error = state.status === "Fail" || state.status === "Exception"
	const success = state.status === "Fail" || state.status === "Exception"
	return { send, loading, error, success }
}
