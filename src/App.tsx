import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

function App() {

  return (
    <Canvas shadows style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Scene />
    </Canvas>
  )
}

export default App
