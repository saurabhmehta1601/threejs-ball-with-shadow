import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './Scene'
import Loading from "./Loading"

function App() {

  return (
    <Canvas shadows style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.1} />
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default App
