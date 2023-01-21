import "./App.css"
import { Layout } from "antd"
import { InfiniteTower, Navbar, WalletInstall } from "./components"

function App() {
  const { ethereum } = window as any

	return (
		<Layout style={{ width: "100vw" }}>
			<Navbar />
      {!ethereum ? <WalletInstall /> : <InfiniteTower />}
		</Layout>
	)
}

export default App
