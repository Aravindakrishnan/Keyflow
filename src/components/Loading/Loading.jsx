import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function Loading ({position, size, color, speed}){
    const ref = useRef()   
    useFrame((state,delta)=> {
            ref.current.rotation.x += delta * 2.0; 
            ref.current.rotation.x += delta * 2.0; 
            ref.current.rotation.x += delta * 2.0; 
            // console.log(state);
    })
    return(
        <mesh position={position} ref={ref}>
            <boxGeometry args={size}></boxGeometry>
            <MeshWobbleMaterial factor={1} speed={speed} color={color}></MeshWobbleMaterial>      
        </mesh>  
    )
}