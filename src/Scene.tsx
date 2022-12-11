import { Environment, OrbitControls } from '@react-three/drei'
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
        <OrbitControls ref={orbitControlsRef} makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={(Math.PI / 180) * 120} />
        <Environment background preset='sunset'>
        </Environment>
        <pointLight intensity={1} position={[1, 2, 2]} castShadow />

        <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, -2]}>
            <planeGeometry args={[5, 6, 1000, 1000]} />
            <meshStandardMaterial color='#fff' side={THREE.DoubleSide} />
        </mesh>

        <mesh position={[0, 0.5, 0]} scale={0.5} castShadow receiveShadow>
            <sphereGeometry />
            <meshStandardMaterial color={"#00bcdd"} />
        </mesh>
    </>)
}

export default Scene