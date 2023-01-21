import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { DAppProvider, Config, Goerli } from "@usedapp/core"

const GOERLI_URL = import.meta.env.VITE_GOERLI_URL as string

const config: Config = {
	readOnlyChainId: Goerli.chainId,
	readOnlyUrls: {
		[Goerli.chainId]: GOERLI_URL,
	},
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DAppProvider config={config}>
			<App />
		</DAppProvider>
	</React.StrictMode>
)
