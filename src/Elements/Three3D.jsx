// import React, {useEffect, useRef, useState} from 'react';
// import {Canvas, useFrame, useLoader} from "@react-three/fiber";
// import '../cssFiles/threeObjects.css'
import {TextureLoader} from 'three';


// Removed for fixing. *Kaspar*


// function Box(props) {
//
//     const ref = useRef()
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     const rotationAxis = useRef('x');
//
//     //Textures loader for 3D objects
//     const roughnessTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianroughness.jpg`);
//     const basecolorTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianbasecolor.jpg`);
//     const normalTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidiannormal.jpg`);
//     const bumpTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/Obsidianheight.png`);
//     const AOTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Textures/Obsidian/ObsidianambientOcclusion.jpg`);
//
//     useFrame((state, delta) => {
//         if (ref.current) {
//             ref.current.rotation[rotationAxis.current] += delta;
//         }
//     });
//
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             rotationAxis.current = Math.random() < 0.5 ? 'x' : 'y';
//         }, 5000);
//
//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <mesh
//             {...props}
//             ref={ref}>
//             <boxGeometry args={[3, 3, 3]}/>
//             <meshStandardMaterial
//                 roughnessMap={roughnessTexture}
//                 roughness={0.083}
//                 metalness={0.403}
//                 color={0}
//                 bumpMap={bumpTexture}
//                 bumpScale={10}
//                 normalMap={normalTexture}
//                 normalScale={100}
//                 aoMap={AOTexture}
//
//             />
//
//         </mesh>
//     )
// }
//
// const Three3D = () => {
//     const [canvasSize, setCanvasSize] = useState({width: window.innerWidth, height: window.innerHeight});
//     const [boxPositions, setBoxPositions] = useState({left: 0, right: 0});
//
//
//     useEffect(() => {
//         const handleResize = () => {
//             setCanvasSize({width: window.innerWidth, height: window.innerHeight});
//         };
//
//         window.addEventListener('resize', handleResize);
//     }, []);
//
//
//     useEffect(() => {
//         const maxScreenSize = 1000;
//         const minBoxDistance = 11;
//         const scaleFactor = Math.min(canvasSize.width / maxScreenSize, 1);
//         const distance = Math.max(minBoxDistance, minBoxDistance * scaleFactor);
//
//         setBoxPositions({left: -distance, right: -distance});
//     }, [canvasSize]);
//
//     return (
//         <div className={'threeObjectContainer'}>
//             <div className={'threeObjectCanva'} id={'threeObjectCanvaid'}
//                  style={{width: canvasSize.width, height: canvasSize.height}}>
//                 <Canvas>
//                     <ambientLight color={'white'}/>
//
//                     <directionalLight position={[10, -5, 20]}
//                                       intensity={100}
//                                       color={'#fcde1c'}
//
//                     />
//                     <directionalLight position={[-10, -14, -5]}
//                                       intensity={100}
//                                       color={'#02f8bf'}
//
//                     />
//                     <directionalLight position={[-10, -14, -70]}
//                                       intensity={100}
//                                       color={'#7cff00'}
//
//                     />
//                     <directionalLight position={[-10, -14, -150]}
//                                       intensity={100}
//                                       color={'#ff5004'}
//
//                     />
//
//                     <Box position={[boxPositions.left, 0, boxPositions.right]}/>
//                     <Box position={[boxPositions.right + 22, 0, boxPositions.left]}/>
//
//
//                 </Canvas>
//             </div>
//         </div>
//     );
// }
// export default Three3D;
//
