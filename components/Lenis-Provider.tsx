"use client"

import { useLenis } from "../hooks/use-lenis"

export const LenisProvider = () => {
  useLenis()
  return null // nothing to render, just enables Lenis
}
