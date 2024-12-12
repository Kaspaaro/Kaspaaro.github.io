import React, {useEffect, useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader, Vector2} from "three";

function LoadingBox({ position, delay }) {
    const boxRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [normalScale, setNormalScale] = useState(new Vector2(0.1, 0.1));

    useEffect(() => {
        const handleFrame = () => {
            if (normalScale.x < 1) {
                setNormalScale((prevScale) => new Vector2(prevScale.x + 0.01, prevScale.y + 0.01));
            }
        };

        const animationFrameId = requestAnimationFrame(handleFrame);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

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

    const roughnessTexture = useLoader(TextureLoader, '../Textures/Obsidian/Obsidianroughness.jpg');
    const normalTexture = useLoader(TextureLoader, `../Textures/Obsidian/Obsidiannormal.jpg`);
    const bumpTexture = useLoader(TextureLoader, `../Textures/Obsidian/Obsidianheight.jpg`);
    const AOTexture = useLoader(TextureLoader, `../Textures/Obsidian/ObsidianambientOcclusion.jpg`);

    return (
        <mesh ref={boxRef} position={position}>
            <boxGeometry args={[3,5,0.007]} />
            <meshStandardMaterial
                roughnessMap={roughnessTexture}
                roughness={0.083}
                metalness={0.6}
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
    const numBoxes = 6;
    const gap = 3;

    const boxes = Array.from({ length: numBoxes }, (_, index) => (
        <LoadingBox key={index} position={[index * gap - (numBoxes - 1) * gap / 2, 0, 0]} delay={index * 0.2} />
    )).filter((_, index) => index !== 2 && index !== 3); // Remove the second element (index 1)

    return (
        <group>
            {boxes}
        </group>
    );
}
export default LoadingBar;
