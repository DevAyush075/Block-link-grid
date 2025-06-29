"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const [target, setTarget] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  // Smooth position state
  const pos = useRef({ x: 0, y: 0 })
  const requestRef = useRef(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)

    const animate = () => {
      // Interpolation (lerp)
      pos.current.x += (target.x - pos.current.x) * 0.1
      pos.current.y += (target.y - pos.current.y) * 0.1

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(requestRef.current)
    }
  }, [target])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        transform: `translate(${target.x}px, ${target.y}px)`,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-blue-500 opacity-80 mix-blend-difference transition-transform duration-150" />
    </div>
  )
}
