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
			return <Button type="primary" onClick={() => deactivate()} style={{ backgroundColor: '#ffa940' }}>Disconnect</Button>
		} else {
			return (
				<Space>
					<Text style={{ color: "#fafafa" }}>Wrong Network :(</Text>
					<Button type="primary" onClick={() => switchNetwork(Goerli.chainId)} style={{ backgroundColor: '#ffa940' }}>
						Swith network to Goerli
					</Button>
				</Space>
			)
		}
	} else {
		return (
			<Button type="primary" onClick={() => activateBrowserWallet()} style={{ backgroundColor: '#ffa940' }}>
				Connect Wallet
			</Button>
		)
	}
}

export default WalletConnect
