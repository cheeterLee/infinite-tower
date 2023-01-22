import "./App.css"
import { Alert } from "antd"
import { InfiniteTower, Navbar, WalletInstall } from "./components"
import { useFloorInfo } from "./hooks/useFloorInfo"
import { Toaster } from "react-hot-toast"

function App() {
	const { ethereum } = window as any
	const { floors } = useFloorInfo()
	if (!ethereum) {
	}

	return (
		<>
			<Navbar />
			{!ethereum && (
				<Alert
					message="Warning"
					description="You don't have MetaMask Wallet installed yet :("
					type="warning"
					showIcon
					closable
					style={{
						position: 'fixed',
						top: '20rem'
					}}
				/>
			)}
			<InfiniteTower floors={floors} />
			<Toaster />
		</>
	)
}

export default App
