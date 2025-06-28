"use client"

import { ProjectCard } from "./project-card"
import { Book, Globe, BarChart3, FileText, Database, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Journal Website",
    description: "Peer-reviewed publishing system for research papers with advanced manuscript management.",
    icon: Book,
    status: "Live" as const,
    href: "/journal",
    gradient: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50/50 dark:bg-emerald-900/10",
  },
  {
    id: 2,
    title: "Public Website",
    description: "Research blog and portfolio for sharing findings with the academic community.",
    icon: Globe,
    status: "Coming Soon" as const,
    href: "/public",
    gradient: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Track user engagement, paper downloads, and research impact metrics.",
    icon: BarChart3,
    status: "Beta" as const,
    href: "/analytics",
    gradient: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50/50 dark:bg-purple-900/10",
  },
  {
    id: 4,
    title: "Author Console",
    description: "Submit, revise, and track manuscript status throughout the review process.",
    icon: FileText,
    status: "Live" as const,
    href: "/console",
    gradient: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50/50 dark:bg-orange-900/10",
  },
  {
    id: 5,
    title: "Research Database",
    description: "Centralized repository for research data, citations, and collaborative projects.",
    icon: Database,
    status: "Beta" as const,
    href: "/database",
    gradient: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50/50 dark:bg-cyan-900/10",
  },
  {
    id: 6,
    title: "Collaboration Hub",
    description: "Connect with researchers, form teams, and manage collaborative research projects.",
    icon: Users,
    status: "Coming Soon" as const,
    href: "/collaboration",
    gradient: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50/50 dark:bg-rose-900/10",
  },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
