import React from "react"
import { Layout, Typography } from "antd"
import { WalletConnect } from "."

const { Header } = Layout
const { Title } = Typography

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
	return (
		<Header
			style={{
				width: "100%",
				backgroundColor: "#262626",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "2.5rem 4rem",
			}}
		>
			<Title level={1} style={{ margin: 0, color: "#fafafa" }}>
				Infinite Tower
			</Title>
			<WalletConnect />
		</Header>
	)
}

export default Navbar
