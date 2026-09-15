import { type RefObject, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

/** Slowly auto-rotates the group while the user isn't actively dragging the camera. */
export function useCubeIdleSpin(groupRef: RefObject<Group>, isInteracting: boolean) {
  const idleTimer = useRef(0)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    if (isInteracting) {
      idleTimer.current = 0
      return
    }

    idleTimer.current += delta
    if (idleTimer.current > 0.6) {
      groupRef.current.rotation.y += delta * 0.25
    }
  })
}
