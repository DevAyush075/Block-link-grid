"use client"

import { useState, useEffect } from "react"
import { AdminDomainCard } from "./admin-domain-card"
import { AddDomainForm } from "./add-domain-form"
import { EditDomainModal } from "./edit-domain-modal"
import { getProjects } from "@/lib/actions"
import type { Domain } from "./card-grid"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function AdminDashboard() {
  const [domains, setDomains] = useState<Domain[]>([])
  const [loading, setLoading] = useState(true)
  const [editingDomain, setEditingDomain] = useState<Domain | null>(null)

  useEffect(() => {
    loadDomains()
  }, [])

  const loadDomains = async () => {
    try {
      const data = await getProjects()
      const sortedData = data.sort((a, b) => a.position - b.position)
      setDomains(sortedData)
    } catch (error) {
      console.error("Error loading domains:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = () => {
    loadDomains()
  }

  const handleEdit = (domain: Domain) => {
    setEditingDomain(domain)
  }

  const handleCloseEdit = () => {
    setEditingDomain(null)
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="space-y-8">
      {/* Back to Home */}
      <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Add New Domain */}
      <AddDomainForm onUpdate={handleUpdate} />

      {/* Domain Management */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Manage Domains</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {domains.map((domain, index) => (
            <AdminDomainCard
              key={domain.id}
              domain={domain}
              index={index}
              onUpdate={handleUpdate}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {domains.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No domains found. Add your first domain above.</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingDomain && <EditDomainModal domain={editingDomain} onClose={handleCloseEdit} onUpdate={handleUpdate} />}
    </div>
  )
}
