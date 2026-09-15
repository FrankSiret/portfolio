const INTERIOR = '#111318'
const WHITE = '#e6e8eb'
const YELLOW = '#ffd43b'
const RED = '#ff4d4f'
const ORANGE = '#ff9f43'
const GREEN = '#00ff9c'
const BLUE = '#3ba9ff'

/** Returns the 6 face colors for a cubie at grid position (x, y, z), each in {-1, 0, 1}. */
export function getFaceColors(x: number, y: number, z: number): [string, string, string, string, string, string] {
  return [
    x === 1 ? RED : INTERIOR,
    x === -1 ? ORANGE : INTERIOR,
    y === 1 ? WHITE : INTERIOR,
    y === -1 ? YELLOW : INTERIOR,
    z === 1 ? GREEN : INTERIOR,
    z === -1 ? BLUE : INTERIOR,
  ]
}
