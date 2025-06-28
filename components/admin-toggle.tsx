"use client"

import { useState, useEffect } from "react"
import { Settings, Eye } from "lucide-react"

export function AdminToggle() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(localStorage.getItem("adminMode") === "true")
  }, [])

  const toggleAdmin = () => {
    const newAdminMode = !isAdmin
    setIsAdmin(newAdminMode)
    localStorage.setItem("adminMode", newAdminMode.toString())
    window.location.reload() // Refresh to update the UI
  }

  return (
    <button
      onClick={toggleAdmin}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isAdmin
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
          : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm"
      }`}
    >
      {isAdmin ? <Settings className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      {isAdmin ? "Admin Mode" : "View Mode"}
    </button>
  )
}
