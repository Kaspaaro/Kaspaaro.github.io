import { useEffect, useRef, useState } from "react";
import '../cssFiles/LoadingScreen.css';
import {Canvas, useThree} from "@react-three/fiber";
import LoadingBar from "./LoadingBar";

function MoveCamera() {
    const { camera } = useThree(); // Get access to the camera

    useEffect(() => {
        camera.position.x = -0.025;  // Move camera 3 units to the right on the X axis
        camera.updateProjectionMatrix();
    }, [camera]);

    return null;
}
const LoadingScreen = () => {
    const [visible, setVisible] = useState(true);
    const lightRef = useRef(); // Reference to the directional light
    const pointLightRef = useRef();
    const targetColor = useRef({ r: Math.random(), g: Math.random(), b: Math.random() });
    const oppositeLightRef = useRef();
    const [pointLightIntensity, setPointLightIntensity] = useState(5);
    const [intensityLight, setIntensity] = useState(1000);
    const [isClicked, setIsClicked] = useState(false);
    // Handle mouse movement and update the light's position
    useEffect(() => {
    const handleMouseMove = (event) => {
        const canvas = document.querySelector('canvas');
        const rect = canvas.getBoundingClientRect();

        // Normalize mouse position to [-1, 1] relative to the canvas
        const xone = ((event.clientX - rect.left) / rect.width) * 2 - 4 /10;
        const yone = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        const xtwo = ((event.clientX - rect.left) / rect.width) * 1.5 - 4 /8;
        const ytwo = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        // Update the light's position based on mouse coordinates
        if (lightRef.current) {
            lightRef.current.position.set(xone * 10, yone * 10, 4);
        }
        if (oppositeLightRef.current) {
            oppositeLightRef.current.position.set(-xtwo * 30, -ytwo * 10, 4);
        }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
}, []);
    useEffect(() => {
        const interval = setInterval(() => {
            if (lightRef.current) {
                const currentColor = lightRef.current.color;
                currentColor.r += (targetColor.current.r - currentColor.r) * 0.01;
                currentColor.g += (targetColor.current.g - currentColor.g) * 0.01;
                currentColor.b += (targetColor.current.b - currentColor.b) * 0.01;

                // Change target color every 5 seconds
                if (Math.floor(Date.now() / 1000) % 5 === 0) {
                    targetColor.current = { r: Math.random(), g: Math.random(), b: Math.random() };
                }
            }
            if (oppositeLightRef.current) {
                const currentColor = oppositeLightRef.current.color;
                currentColor.r += (targetColor.current.r - currentColor.r) * 0.01;
                currentColor.g += (targetColor.current.g - currentColor.g) * 0.01;
                currentColor.b += (targetColor.current.b - currentColor.b) * 0.01;

                // Change target color every 5 seconds
                if (Math.floor(Date.now() / 1000) % 5 === 0) {
                    targetColor.current = { r: Math.random(), g: Math.random(), b: Math.random() };
                }
            }
        }, 16); // Approximately 60 FPS

        return () => clearInterval(interval);
    }, []);

    // uptade light when scrolling "Only the middle light"
    useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = 200;

        // Normalize scroll position to a range of 0 to 1
        const normalizedScroll = Math.min(scrollTop / maxScroll, 1);

        // Adjust the easing function to start fading almost at the start
        const easedScroll = Math.pow(normalizedScroll, 2);

        // Map normalized scroll to light intensity (1000 to 0)
        const intensity = 1000 - easedScroll * 1000;

        setPointLightIntensity(intensity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    //Increase and decrease light intensity
    useEffect(() => {
    if (isClicked) {
        let increasing = true;
        const interval = setInterval(() => {
            setIntensity((prev) => {
                if (increasing) {
                    return Math.min(prev + 250, 10000);
                } else {
                    return Math.max(prev - 250, 1000);
                }
            });
        }, 1);

        const timeout = setTimeout(() => {
            increasing = false;
            setTimeout(() => {
                setIsClicked(false);
            }, 2000); // Reset isClicked after 4 seconds
        }, 1000); // Start decreasing after 4 seconds

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }
}, [isClicked]);

    // Reset light intensity on mouse click
    useEffect(() => {
        const handleClick = () => {
            setIsClicked(true);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
            <div className={'canvasHolderText'}>
                <Canvas style={{pointerEvents: visible ? "auto" : "none"}}>
                    <MoveCamera/>
                    {/* Ambient light */}
                    <ambientLight color={'white'}/>

                    {/* Directional light that follows the mouse */}
                    <directionalLight
                        ref={lightRef}
                        intensity={intensityLight}
                        color={'#f0f0f0'}
                        position={[0, 0, 5]} // Default position before the mouse move event

                    />
                    <directionalLight
                        ref={oppositeLightRef}
                        intensity={intensityLight}
                        color={'#f0f0f0'}
                        position={[0, 0, 5]} // Default position before the mouse move event

                    />
                    <pointLight
                        ref={pointLightRef}
                        intensity={pointLightIntensity}
                        color={'#bf8803'}
                        position={[3, 2, 3.2]}
                    />
                    <directionalLight
                        ref={pointLightRef}
                        intensity={pointLightIntensity}
                        color={'#bf8803'}
                        position={[10, -4, 5]}
                    />

                    {/* Loading bar */}
                    <group position={[0, 0, 2]}>
                    <LoadingBar/>
                    </group>
                </Canvas>
            </div>
        </div>
    );
};

export default LoadingScreen;
