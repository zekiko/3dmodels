/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/AirbusA310.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.16, -1.7]} rotation={[1.7, 0, 0]}>
        <mesh geometry={nodes.Cylinder004_Cylinder009.geometry} material={materials['teker-demir']} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_1.geometry} material={materials.teker} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_2.geometry} material={materials.cam} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_3.geometry} material={materials.ucak} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_4.geometry} material={materials.motor_ic} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_5.geometry} material={materials['motor-kenar']} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_6.geometry} material={materials.motor} />
        <mesh geometry={nodes.Cylinder004_Cylinder009_7.geometry} material={materials.pervane} />
      </group>
    </group>
  )
}

useGLTF.preload('/AirbusA310.glb')
