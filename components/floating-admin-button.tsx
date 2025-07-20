"use client"

import { Settings } from "lucide-react"
import Link from "next/link"

export function FloatingAdminButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/admin"
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        title="Admin Panel"
      >
        <Settings className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Admin</span>
      </Link>
    </div>
  )
} 