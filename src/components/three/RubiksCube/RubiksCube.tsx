import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'

export function RubiksCube() {
  return (
    <div className="aspect-square w-full touch-none max-w-[400px] justify-self-center">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default RubiksCube
