"use client"

import { Settings } from "lucide-react"
import Link from "next/link"

export function AdminLink() {
  return (
    <Link
      href="/admin"
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      <Settings className="w-4 h-4" />
      Admin Panel
    </Link>
  )
}
