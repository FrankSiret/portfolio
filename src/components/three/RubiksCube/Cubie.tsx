import { useState } from 'react'
import { getFaceColors } from './cubeColors'

const GAP = 1.05
const SIZE = 0.92

export function Cubie({ x, y, z }: { x: number; y: number; z: number }) {
  const [hovered, setHovered] = useState(false)
  const colors = getFaceColors(x, y, z)

  return (
    <mesh
      position={[x * GAP, y * GAP, z * GAP]}
      scale={hovered ? 1.06 : 1}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[SIZE, SIZE, SIZE]} />
      {colors.map((color, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} color={color} roughness={0.4} metalness={0.05} />
      ))}
    </mesh>
  )
}
