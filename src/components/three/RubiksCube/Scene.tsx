import { useRef, useState } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import type { Group } from 'three'
import { Cubie } from './Cubie'
import { useCubeIdleSpin } from './useCubeIdleSpin'

const POSITIONS = [-1, 0, 1]

export function Scene() {
  const groupRef = useRef<Group>(null)
  const [isInteracting, setIsInteracting] = useState(false)

  useCubeIdleSpin(groupRef, isInteracting)

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 3.5, 5]} fov={45} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} />
      <directionalLight position={[-4, -2, -3]} intensity={0.3} />

      <group ref={groupRef} rotation={[0.4, 0.6, 0]}>
        {POSITIONS.flatMap((x) =>
          POSITIONS.flatMap((y) =>
            POSITIONS.map((z) => <Cubie key={`${x}-${y}-${z}`} x={x} y={y} z={z} />),
          ),
        )}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={5}
        maxDistance={9}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />
    </>
  )
}
