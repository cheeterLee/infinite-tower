import React, { useState } from "react"
import { Button } from "antd"
import { FloorCreationModal } from "."
import { Goerli, useEthers } from "@usedapp/core"
import { FloorItem } from "../utils/type"

export interface IInfiniteTowerProps {
	floors: FloorItem[]
}

const InfiniteTower: React.FunctionComponent<IInfiniteTowerProps> = ({ floors }) => {
	const [isFormModalOpen, setIsFormModalOpen] = useState(false)
	const { account, chainId } = useEthers()

	const handleModalOpen = () => setIsFormModalOpen(true)
	const handleModalClose = () => setIsFormModalOpen(false)
    
	return (
		<>
			<Button
				onClick={() => handleModalOpen()}
				type="primary"
				disabled={!account || chainId !== Goerli.chainId}
				style={{
					width: "10rem",
					position: "fixed",
					bottom: "3rem",
					right: "3rem",
				}}
			>
				Mint a new floor :)
			</Button>
			<FloorCreationModal
				isOpen={isFormModalOpen}
				handleModalClose={handleModalClose}
			/>
			

		</>
	)
}

export default InfiniteTower
