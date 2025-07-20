"use client"

import { Calendar, ExternalLink } from "lucide-react"
import type { Domain } from "./card-grid"

interface DomainCardProps {
  domain: Domain
  index: number
}

export function DomainCard({ domain, index }: DomainCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "bg-emerald-400 shadow-emerald-400/50"
      case "BETA":
        return "bg-amber-400 shadow-amber-400/50"
      case "COMING_SOON":
        return "bg-cyan-400 shadow-cyan-400/50"
      default:
        return "bg-gray-400 shadow-gray-400/50"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "LIVE":
        return "Live"
      case "BETA":
        return "Beta"
      case "COMING_SOON":
        return "Coming Soon"
      default:
        return status
    }
  }

  const getCardGradient = (index: number) => {
    const gradients = [
      "from-indigo-500 via-purple-500 to-pink-500",
      "from-emerald-500 via-teal-500 to-cyan-500", 
      "from-orange-500 via-red-500 to-pink-500",
      "from-blue-500 via-indigo-500 to-purple-500",
      "from-green-500 via-emerald-500 to-teal-500",
      "from-purple-500 via-pink-500 to-red-500"
    ]
    return gradients[index % gradients.length]
  }

  const getDomainLogo = (category: string) => {
    const logos = {
      "Academic": "📚",
      "Analytics": "📊", 
      "Author Tools": "✍️",
      "Public Access": "🌐",
      "Events": "📅",
      "Data Management": "💾"
    }
    return logos[category as keyof typeof logos] || "🔗"
  }

  const handleVisit = () => {
    if (domain.status === "LIVE" && domain.url) {
      window.open(domain.url, "_blank")
    }
  }

  return (
    <div
      className={`group relative bg-gradient-to-br ${getCardGradient(index)} rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden shadow-xl shadow-black/10`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
      onClick={handleVisit}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Launch Date Badge - Top Right Corner */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20 shadow-lg">
          <Calendar className="w-3 h-3" />
          <span>{domain.launchDate}</span>
        </div>
      </div>

      {/* Status Badge - Top Left Corner */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20 shadow-lg">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(domain.status)} animate-pulse shadow-lg`} />
          <span>{getStatusText(domain.status)}</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative pt-12">
        {/* Header with Logo and Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg text-3xl">
            {getDomainLogo(domain.category)}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-2xl mb-1">{domain.title}</h3>
            <p className="text-white/70 text-sm font-medium">{domain.category}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/90 text-base leading-relaxed mb-6 font-medium line-clamp-3">
          {domain.description}
        </p>

        {/* Stats and Action */}
        <div className="flex items-center justify-between">
          {/* Visitor Stats */}
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {domain.visitors ? `${domain.visitors.toLocaleString()}` : "0"}
            </div>
            <div className="text-white/60 text-sm font-medium">Monthly Visitors</div>
          </div>

          {/* Visit Button - Only for LIVE status */}
          {domain.status === "LIVE" && (
            <div className="group/visit">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg group-hover/visit:bg-white/30 group-hover/visit:scale-110 transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      
      {/* Additional Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
    </div>
  )
}
