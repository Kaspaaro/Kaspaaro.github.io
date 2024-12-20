import { useEffect, useRef, useState } from "react";
import '../cssFiles/LoadingScreen.css';
import { Canvas, useThree } from "@react-three/fiber";
import LoadingBar from "./LoadingBar";

function MoveCamera() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.x = -0.025;
        camera.updateProjectionMatrix();
    }, [camera]);
    return null;
}

const LoadingScreen = () => {
    const visible = true;
    const lightRef = useRef();
    const pointLightRef = useRef();
    const targetColor = useRef({ r: Math.random(), g: Math.random(), b: Math.random() });
    const oppositeLightRef = useRef();
    const [pointLightIntensity, setPointLightIntensity] = useState(5);
    const [intensityLight, setIntensity] = useState(1000);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const rect = document.querySelector('canvas').getBoundingClientRect();
            const xone = ((event.clientX - rect.left) / rect.width) * 2 - 0.4;
            const yone = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            const xtwo = ((event.clientX - rect.left) / rect.width) * 1.5 - 0.5;
            const ytwo = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            if (lightRef.current) lightRef.current.position.set(xone * 10, yone * 10, 4);
            if (oppositeLightRef.current) oppositeLightRef.current.position.set(-xtwo * 30, -ytwo * 10, 4);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (lightRef.current) {
                const currentColor = lightRef.current.color;
                currentColor.r += (targetColor.current.r - currentColor.r) * 0.01;
                currentColor.g += (targetColor.current.g - currentColor.g) * 0.01;
                currentColor.b += (targetColor.current.b - currentColor.b) * 0.01;
                if (Math.floor(Date.now() / 1000) % 5 === 0) {
                    targetColor.current = { r: Math.random(), g: Math.random(), b: Math.random() };
                }
            }
            if (oppositeLightRef.current) {
                const currentColor = oppositeLightRef.current.color;
                currentColor.r += (targetColor.current.r - currentColor.r) * 0.01;
                currentColor.g += (targetColor.current.g - currentColor.g) * 0.01;
                currentColor.b += (targetColor.current.b - currentColor.b) * 0.01;
                if (Math.floor(Date.now() / 1000) % 5 === 0) {
                    targetColor.current = { r: Math.random(), g: Math.random(), b: Math.random() };
                }
            }
        }, 16);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const normalizedScroll = Math.min(window.scrollY / 200, 1);
            const easedScroll = Math.pow(normalizedScroll, 2);
            setPointLightIntensity(1000 - easedScroll * 1000);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isClicked) {
            let increasing = true;
            const interval = setInterval(() => {
                setIntensity((prev) => increasing ? Math.min(prev + 250, 10000) : Math.max(prev - 250, 1000));
            }, 1);
            const timeout = setTimeout(() => {
                increasing = false;
                setTimeout(() => setIsClicked(false), 2000);
            }, 1000);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [isClicked]);

    useEffect(() => {
        const handleClick = () => setIsClicked(true);
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
            <div className={'canvasHolderText'}>
                <Canvas style={{ pointerEvents: visible ? "auto" : "none" }}>
                    <MoveCamera />
                    <ambientLight color={'white'} />
                    <directionalLight ref={lightRef} intensity={intensityLight} color={'#f0f0f0'} position={[0, 0, 5]} />
                    <directionalLight ref={oppositeLightRef} intensity={intensityLight} color={'#f0f0f0'} position={[0, 0, 5]} />
                    <pointLight ref={pointLightRef} intensity={pointLightIntensity} color={'#bf8803'} position={[3, 2, 3.2]} />
                    <directionalLight ref={pointLightRef} intensity={pointLightIntensity} color={'#bf8803'} position={[10, -4, 5]} />
                    <group position={[0, 0, 2]}>
                        <LoadingBar />
                    </group>
                </Canvas>
            </div>
        </div>
    );
};

export default LoadingScreen;