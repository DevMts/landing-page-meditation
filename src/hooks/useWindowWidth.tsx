'use client'
import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    // Garante que está no cliente
    const handleResize = () => setWidth(window.innerWidth)
    handleResize() // set inicial

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
