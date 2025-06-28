"use client"

import { useState } from "react"
import { Trash2, Edit, ArrowUp, ArrowDown, Globe } from "lucide-react"
import type { Domain } from "./card-grid"
import { deleteProject, updateDomainPosition } from "@/lib/actions"

interface AdminDomainCardProps {
  domain: Domain
  index: number
  onUpdate: () => void
  onEdit: (domain: Domain) => void
}

export function AdminDomainCard({ domain, index, onUpdate, onEdit }: AdminDomainCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${domain.title}"?`)) return

    setIsDeleting(true)
    try {
      await deleteProject(domain.id)
      onUpdate()
    } catch (error) {
      console.error("Error deleting domain:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleMoveUp = async () => {
    try {
      await updateDomainPosition(domain.id, domain.position - 1)
      onUpdate()
    } catch (error) {
      console.error("Error moving domain up:", error)
    }
  }

  const handleMoveDown = async () => {
    try {
      await updateDomainPosition(domain.id, domain.position + 1)
      onUpdate()
    } catch (error) {
      console.error("Error moving domain down:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "bg-green-100 text-green-800"
      case "BETA":
        return "bg-yellow-100 text-yellow-800"
      case "COMING_SOON":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${domain.gradient} flex items-center justify-center`}>
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{domain.title}</h4>
            <p className="text-sm text-gray-600">{domain.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleMoveUp}
            disabled={index === 0}
            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowUp className="w-4 h-4 text-gray-600" />
          </button>
          <button onClick={handleMoveDown} className="p-1 hover:bg-gray-200 rounded">
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-700 line-clamp-2">{domain.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{domain.url || "URL TBD"}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(domain.status)}`}>
            {domain.status.replace("_", " ")}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(domain)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center justify-center px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
