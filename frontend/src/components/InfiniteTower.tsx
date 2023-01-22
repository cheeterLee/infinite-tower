import React, { useEffect, useState } from "react"
import { Button, Card, Space, Badge, Typography } from "antd"
import { FloorCreationModal } from "."
import { Goerli, useEthers } from "@usedapp/core"
import { FloorItem } from "../utils/type"
import { Canvas } from "@react-three/fiber"
import { Floor } from "../models/floor"
import ScrollableGroup from "./ScrollableGroup"
import { ContactShadows } from "@react-three/drei"
import { EffectComposer, Noise } from "@react-three/postprocessing"

const { Text, Link, Paragraph } = Typography

export interface IInfiniteTowerProps {
	floors: FloorItem[]
}

const InfiniteTower: React.FunctionComponent<IInfiniteTowerProps> = ({
	floors,
}) => {
	const [isFormModalOpen, setIsFormModalOpen] = useState(false)
	const { account, chainId } = useEthers()

	const [scrollPosition, setScrollPosition] = useState(0)
	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	const handleModalOpen = () => setIsFormModalOpen(true)
	const handleModalClose = () => setIsFormModalOpen(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<>
			<div id="InfiniteTowerCanvasWrapper">
				<Canvas
					camera={{
						position: [-12, 1, 14],
						fov: 35,
						near: 1,
						far: 100,
					}}
				>
					<ScrollableGroup scroll={scrollPosition}>
						<ambientLight intensity={0.5} />
						<pointLight position={[20, 30, 10]} />
						<pointLight position={[-10, -10, -10]} color="blue" />
						<spotLight
							position={[-2, 1, 32]}
							angle={0.2}
							intensity={1}
						/>
						<ContactShadows
							scale={12}
							blur={4}
							opacity={1}
							far={100}
							position={[0, -0.001, 0]}
						/>
					</ScrollableGroup>
					<ScrollableGroup scroll={scrollPosition}>
						{floors.map((floor, index) => (
							<Floor
								position={[0, index * 2, 0]}
								rotation={[0, Math.PI * index * 0.08, 0]}
								key={index}
								color={floor.color}
								windowsTint={floor.windowsTint}
							/>
						))}
					</ScrollableGroup>
					{/* <EffectComposer> // this decreased perfermance too much zzz...
						<Noise opacity={0.08} />
					</EffectComposer> */}
				</Canvas>
			</div>

			{floors.map((floor, index) => (
				<Space
					key={index}
					style={{
						height: "100vh",
						width: "100vw",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<Badge.Ribbon
						color="cyan"
						text={`#${index + 1} floor`}
						placement="start"
					>
						<Card
							style={{
								width: "300px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
							}}
						>
							<Paragraph>
								<Text
									strong
								>{`owner: ${floor.ownerName}`}</Text>
							</Paragraph>
							<Paragraph>
								<Text>{floor.message}</Text>
							</Paragraph>
							<Link href={floor.link} target="_blank">
								{floor.link}
							</Link>
						</Card>
					</Badge.Ribbon>
				</Space>
			))}

			<Button
				onClick={() => handleModalOpen()}
				type="primary"
				size="large"
				disabled={!account || chainId !== Goerli.chainId}
				style={{
					width: "12rem",
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
