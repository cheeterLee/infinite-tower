import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Config, DAppProvider, Goerli } from "@usedapp/core"

const config: Config = {
	readOnlyChainId: Goerli.chainId,
	readOnlyUrls: {
		[Goerli.chainId]:
			"https://goerli.infura.io/v3/8da6d334feba497f80b16d7b7665c63c",
	},
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DAppProvider config={config}>
			<App />
		</DAppProvider>
	</React.StrictMode>
)
