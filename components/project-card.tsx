"use client"

import { useState } from "react"
import { Trash2, Play, Clock, ArrowRight } from "lucide-react"
import type { Project } from "./card-grid"
import { deleteProject } from "@/lib/actions"

interface ProjectCardProps {
  project: Project
  index: number
  isAdmin: boolean
  onUpdate: () => void
}

export function ProjectCard({ project, index, isAdmin, onUpdate }: ProjectCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project?")) return

    setIsDeleting(true)
    try {
      await deleteProject(project.id)
      onUpdate()
    } catch (error) {
      console.error("Error deleting project:", error)
    } finally {
      setIsDeleting(false)
    }
  }

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

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Admin Controls */}
      {isAdmin && (
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
            <Play className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{project.title}</h3>
            <p className="text-slate-400 text-sm">{project.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} animate-pulse`} />
          <span className="text-slate-300 text-sm">{project.progress}%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-white">{project.progress}%</div>
            <div className="text-slate-400 text-sm">Complete</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              {project.timeEstimate || "TBD"}
            </div>
            <div className="text-slate-400 text-sm">Estimated</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${project.gradient} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>Started</span>
            <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-slate-300">
              {getStatusText(project.status)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Clock className="w-3 h-3" />
            <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm">View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
      />
    </div>
  )
}
