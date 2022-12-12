import { Environment, OrbitControls, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

const Scene = () => {
    const orbitControlsRef = React.useRef<any>(null)

    useFrame((state) => {
        if (orbitControlsRef.current) {
            orbitControlsRef.current.setAzimuthalAngle(-Math.PI * state.mouse.x)
            orbitControlsRef.current.setPolarAngle(Math.PI / 4 + Math.PI / 2 * state.mouse.y)

            orbitControlsRef.current.update()
        }
    })

    return (<>
        <OrbitControls minDistance={5} maxDistance={20} ref={orbitControlsRef} makeDefault minPolarAngle={(Math.PI / 180) * 20} maxPolarAngle={(Math.PI / 180) * 90} />
        <Environment background >
            <mesh scale={100}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshBasicMaterial side={THREE.BackSide} color="#041f23" />
            </mesh>
        </Environment>
        <Stars />
        <pointLight intensity={1} position={[1, 2, 2]} castShadow />

        <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow position={[0, -2, -2]}>
            <planeGeometry args={[500, 500, 1000, 1000]} />
            <meshStandardMaterial color='#00bcdd' side={THREE.DoubleSide} />
        </mesh>

        <mesh position={[0, -1.5, 0]} scale={0.5} castShadow receiveShadow>
            <sphereGeometry />
            <meshStandardMaterial color={"#00bcdd"} metalness={0.5} roughness={0.5} />
        </mesh>
    </>)
}

export default Scene