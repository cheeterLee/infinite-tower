import { Button, Typography, Space } from "antd"
import React from "react"
import { Goerli, useEthers } from "@usedapp/core"

const { Text } = Typography

export interface IWalletConnectProps {}

const WalletConnect: React.FunctionComponent<IWalletConnectProps> = (props) => {
	const {
		activateBrowserWallet,
		account,
		deactivate,
		chainId,
		switchNetwork,
	} = useEthers()

	if (account) {
		if (chainId === Goerli.chainId) {
			return <Button onClick={() => deactivate()}>Disconnect</Button>
		} else {
			return (
				<Space>
					<Text style={{ color: "#fafafa" }}>Wrong Network :(</Text>
					<Button onClick={() => switchNetwork(Goerli.chainId)}>
						Swith network to Goerli
					</Button>
				</Space>
			)
		}
	} else {
		return (
			<Button onClick={() => activateBrowserWallet()}>
				Connect Wallet
			</Button>
		)
	}
}

export default WalletConnect
