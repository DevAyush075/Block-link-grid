"use client"

import { Globe, Calendar, Users, ExternalLink } from "lucide-react"
import type { Domain } from "./card-grid"

interface DomainCardProps {
  domain: Domain
  index: number
}

export function DomainCard({ domain, index }: DomainCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "bg-green-400"
      case "BETA":
        return "bg-yellow-400"
      case "COMING_SOON":
        return "bg-blue-400"
      default:
        return "bg-gray-400"
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

  const handleVisit = () => {
    if (domain.status === "LIVE" && domain.url) {
      window.open(domain.url, "_blank")
    }
  }

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-400 via-slate-900 to-black rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onClick={handleVisit}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${domain.gradient} flex items-center justify-center`}>
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{domain.title}</h3>
            <p className="text-slate-400 text-sm">{domain.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(domain.status)} animate-pulse`} />
          <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-slate-300">
            {getStatusText(domain.status)}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* URL Display */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              {domain.url || "URL TBD"}
            </div>
            <div className="text-slate-400 text-sm">Domain URL</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white">
              {domain.visitors ? `${domain.visitors.toLocaleString()}` : "0"}
            </div>
            <div className="text-slate-400 text-sm">Monthly Visitors</div>
          </div>
        </div>

        {/* Launch Date */}
        <div className="flex items-center gap-2 text-slate-300">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {domain.status === "LIVE" ? "Launched" : "Expected"}: {domain.launchDate}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{domain.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Users className="w-3 h-3" />
            <span>Updated {new Date(domain.updatedAt).toLocaleDateString()}</span>
          </div>

          {domain.status === "LIVE" && (
            <div className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <span className="text-sm">Visit Site</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${domain.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
      />
    </div>
  )
}
