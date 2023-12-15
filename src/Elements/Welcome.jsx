
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {MeshStandardMaterial, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";
export function Model(props) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/welcome.glb`)
    const roughnessTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianroughness.jpg`);
    const shinyMaterial = new MeshStandardMaterial({
        metalness: 1,
        roughness: 1,
        roughnessMap: roughnessTexture,
    });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text.geometry} material={shinyMaterial} position={[-4.668, 0, 0]} rotation={[1.618, 0, 0]}/>
    </group>
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/welcome.glb`)
