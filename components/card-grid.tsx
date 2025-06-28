"use client"

import { useState, useEffect } from "react"
import { DomainCard } from "./domain-card"
import { getProjects } from "@/lib/actions"

export interface Domain {
  id: string
  title: string
  description: string
  status: "LIVE" | "BETA" | "COMING_SOON"
  url: string
  launchDate: string
  category: string
  iconName: string
  gradient: string
  position: number
  visitors?: number
  createdAt: Date
  updatedAt: Date
}

export function CardGrid() {
  const [domains, setDomains] = useState<Domain[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDomains()
  }, [])

  const loadDomains = async () => {
    try {
      const data = await getProjects()
      // Sort by position
      const sortedData = data.sort((a, b) => a.position - b.position)
      setDomains(sortedData)
    } catch (error) {
      console.error("Error loading domains:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {domains.map((domain, index) => (
          <DomainCard key={domain.id} domain={domain} index={index} />
        ))}
      </div>

      {domains.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No domains found</p>
          <p className="text-gray-400 mt-2">Contact admin to add domains</p>
        </div>
      )}
    </div>
  )
}
