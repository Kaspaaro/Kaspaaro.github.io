import React, {useEffect, useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader, Vector2} from "three";

function LoadingBox({ position, delay }) {
    const boxRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [normalScale, setNormalScale] = useState(new Vector2(0.1, 0.1));

    useEffect(() => {
        // Your setup code here, including loading textures

        // Animation loop using react-three-fiber
        const handleFrame = () => {
            if (normalScale.x < 1) {
                setNormalScale((prevScale) => new Vector2(prevScale.x + 0.01, prevScale.y + 0.01));
            }
        };

        const animationFrameId = requestAnimationFrame(handleFrame);

        return () => cancelAnimationFrame(animationFrameId);
    }, []); // Run the setup code only once

    useFrame(({ clock }) => {
        // Add a delay before making the box visible
        if (clock.elapsedTime > delay) {
            setIsVisible(true);
        }
        if (boxRef.current && isVisible) {
            const bounce = Math.sin(clock.elapsedTime * 3 + delay) * 0.1; // Adjust the bounce intensity
            boxRef.current.position.y = bounce;
        }
        // Your animation or updates on each frame here
        if (boxRef.current) {
            // Access the mesh and update its properties
            boxRef.current.material.normalScale = normalScale.clone();
        }

        // Update the normalScale property gradually
        if (normalScale.x < 1) {
            setNormalScale((prevScale) => new Vector2(prevScale.x + 0.002, prevScale.y + 0.002));
        }
    });


    const roughnessTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianroughness.jpg`);
    const normalTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidiannormal.jpg`);
    const bumpTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianheight.png`);
    const AOTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/ObsidianambientOcclusion.jpg`);

    return (
        <mesh ref={boxRef} position={position}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                roughnessMap={roughnessTexture}
                roughness={0.083}
                metalness={0.203}
                color={0}
                bumpMap={bumpTexture}
                bumpScale={12}
                normalMap={normalTexture}
                normalScale={normalScale}
                aoMap={AOTexture}

            />
        </mesh>
    );
}

function LoadingBar() {
    const numBoxes = 10;
    const gap = 1.1;

    return (
        <group>
            {Array.from({ length: numBoxes }, (_, index) => (
                <LoadingBox key={index} position={[index * gap - (numBoxes - 1) * gap / 2, 0, 0]} delay={index * 0.2} />
            ))}
        </group>
    );
}
export default LoadingBar;
