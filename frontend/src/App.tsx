import "./App.css"
import { Layout } from "antd"
import { InfiniteTower, Navbar, WalletInstall } from "./components"
import { useFloorInfo } from "./hooks/useFloorInfo"

function App() {
	const { ethereum } = window as any
	const { floors } = useFloorInfo()
	console.log('floors', floors)

	return (
		<Layout style={{ width: "100vw" }}>
			<Navbar />
			{!ethereum ? <WalletInstall /> : <InfiniteTower floors={floors} />}
		</Layout>
	)
}

export default App
