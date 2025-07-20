"use client"

import { getProjects } from "@/lib/actions"
import { useEffect, useState } from "react"
import { DomainCard } from "./domain-card"

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
      const sortedData = data.sort((a: Domain, b: Domain) => a.position - b.position)
      setDomains(sortedData)
    } catch (error) {
      console.error("Error loading domains:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl animate-pulse border border-white/10"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Grid Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Digital Ecosystem
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Explore our comprehensive suite of platforms designed to empower creators, researchers, and users worldwide.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {domains.map((domain, index) => (
          <div
            key={domain.id}
            className="animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'both'
            }}
          >
            <DomainCard domain={domain} index={index} />
          </div>
        ))}
      </div>

      {domains.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No domains found</h3>
          <p className="text-white/60 text-lg">Contact admin to add domains</p>
        </div>
      )}
    </div>
  )
}
