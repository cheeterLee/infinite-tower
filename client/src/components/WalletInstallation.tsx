import { Title, Text } from "@mantine/core"
import React from "react"

export interface IWalletInstallationProps {}

const WalletInstallation: React.FunctionComponent<IWalletInstallationProps> = (
	props
) => {
	return (
		<>
			<Title>Metamask is required</Title>
			<Text>
				Follow the link to install 
				<Text
					variant="link"
					component="a"
					href="https://metamask.io/download.html"
				>
					Metamask
				</Text>
			</Text>
		</>
	)
}

export default WalletInstallation
