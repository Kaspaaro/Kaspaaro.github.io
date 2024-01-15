import React, {useEffect, useRef, useState} from "react";
import '../cssFiles/LoadingScreen.css';
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {Model} from "./Welcome";
import {MathUtils, TextureLoader} from "three";
import {OrbitControls} from "@react-three/drei";
import LoadingBar from "./LoadingBar";

function Scene() {
    const group = useRef()

    useFrame(({ camera }) => {
        if (group.current) {
            group.current.lookAt(camera.position)
        }
    })
    useFrame(({ clock }) => {
        if (group.current) {
            const rotationSpeed = 0.5;
            const angleLimit = 15;

            const scaledRotation = angleLimit * Math.sin(clock.elapsedTime * rotationSpeed);

            group.current.rotation.y = MathUtils.degToRad(scaledRotation);
        }
    });


    return (
        <group ref={group}>
            <Model/>
        </group>
    )
}
const LoadingScreen = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
            <div className={'canvasHolderText'}>
            <Canvas style={{ pointerEvents: visible ? "auto" : "none"}}>
                <ambientLight color={'white'}/>
                <directionalLight position={[10, 0, 10]}
                                  intensity={1000}
                                  color={'#08aadc'}

                />
                <directionalLight position={[-4, -4, 1]}
                                  intensity={1000}
                                  color={'#0427f3'}

                />
                <directionalLight position={[-3, -5, 1]}
                                  intensity={1000}
                                  color={'#e8f80c'}

                />
                <directionalLight position={[-2, -2, 1]}
                                  intensity={1000}
                                  color={'#07eeb5'}

                />
                <directionalLight position={[-1, -1, 10]}
                                  intensity={1000}
                                  color={'rgba(243,169,6,0.06)'}

                />
                <directionalLight position={[0, -4, 1.2]}
                                  intensity={1000}
                                  color={'#3b54f1'}

                />
                <directionalLight position={[1, -3, 1.2]}
                                  intensity={1000}
                                  color={'#e8f80c'}

                />
                <directionalLight position={[2, -2, 1]}
                                  intensity={1000}
                                  color={'#0cf8c1'}

                />
                <group position={[0,-2, 0]}>
                <LoadingBar/>
                </group>

                <OrbitControls enableZoom={true}/>


                <Scene/>
            </Canvas>
            </div>
        </div>
    );
};
export default LoadingScreen;
