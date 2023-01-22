/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 src/models/InfinityTower.gltf -ts
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { GroupProps } from "@react-three/fiber"

type GLTFResult = GLTF & {
	nodes: {
		Cylinder: THREE.Mesh
		Cylinder_1: THREE.Mesh
		Cylinder_2: THREE.Mesh
	}
	materials: {
		Floor: THREE.MeshStandardMaterial
		Glass: THREE.MeshPhysicalMaterial
		Metal: THREE.MeshStandardMaterial
	}
}

export type FloorProps = {
	color: string
	windowsTint: string
}

export const Floor = ({
	color,
	windowsTint,
	...props
}: GroupProps & FloorProps) => {
	const { nodes, materials } = useGLTF(
		"./InfinityTower.gltf"
	) as unknown as GLTFResult
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder.geometry}
			>
        <meshStandardMaterial 
          color={color}
          roughness={0.6}
          metalness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder_1.geometry}
			>
        <meshPhongMaterial
          color={windowsTint}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder_2.geometry}
			>
        <meshStandardMaterial metalness={0.8} roughness={0.4} color='#888888' />
      </mesh>
		</group>
	)
}

useGLTF.preload("/InfinityTower.gltf")
