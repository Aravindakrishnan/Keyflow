import { useState, useRef, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'

import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, MeshDistortMaterial, OrbitControls, useGLTF } from '@react-three/drei'
import './App.css'

// import modelPath from "./assets/Keyboard.glb";

// function Model(props) {
//   const { scene } = useGLTF(modelPath)
//   return <primitive {...props} object={scene} />
// }

// const Cube = ({position, size, color}) => {
//   const ref = useRef()   
//   useFrame((state,delta)=> {
//       ref.current.rotation.x += delta * 2.0; 
//       ref.current.rotation.x += delta * 2.0; 
//       ref.current.rotation.x += delta * 2.0; 
//       console.log(state);
//   })
  
//   return(
//     <mesh position={position} ref={ref}>
//       <boxGeometry args={size}></boxGeometry>
//       {/* <meshStandardMaterial color={color}></meshStandardMaterial> */}
//       <MeshWobbleMaterial factor={1} speed={8} color={color}></MeshWobbleMaterial>
//       {/* <MeshDistortMaterial distort={0.5} speed={10} color={"orange"}/> */}

//     </mesh>  
//   )
// }

function App() {
  return (
    <>
      <Navbar title={"KeyFlow"}></Navbar>
      <Canvas>
        <ambientLight intensity={1}></ambientLight>
        <directionalLight position={[0,0,2]}></directionalLight>
        {/* <Loading color={"orange"} size={[1,1,1]} position={[0,1,0]}></Loading> */}

        {/* <Cube position={[0,2,0]} size={[1,1,1]} color={"orange"}></Cube>
        <OrbitControls enableZoom={false}></OrbitControls> */}
        {/* <group position={[-5,-1, 0]}>
          <Cube position={[-1,0,0]} args={[4,4,4]} color={"orange"}></Cube>
          <Cube position={[-2,-1,0]} args={[4,4,4]} color={"white"}></Cube>
          <Cube position={[-3,-2,0]} args={[4,4,4]} color={"green"}></Cube>
        </group>  */}
        {/* <Cube color={"orange"} position={[0,1.5,0]} size={[]}></Cube> */}
        {/* <mesh>
          <sphereGeometry></sphereGeometry>
          <meshStandardMaterial color={"Orange"}></meshStandardMaterial>
        </mesh> */}
        
      </Canvas>
    </>
  )
}

export default App
