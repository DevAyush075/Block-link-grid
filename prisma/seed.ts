import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing projects
  await prisma.project.deleteMany()

  // Create sample projects/blocks
  const projects = [
    {
      title: "Research Journal Hub",
      description: "A comprehensive platform for academic publishing and peer review management. Features include manuscript submission, review workflows, and publication tracking.",
      status: "LIVE" as const,
      progress: 85,
      timeEstimate: "2024-01-15",
      category: "Academic",
      iconName: "BookOpen",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-slate-800/90",
      href: "https://research-journal.example.com",
      position: 1
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics and insights for research publications. Track citations, downloads, and engagement metrics across all your academic content.",
      status: "BETA" as const,
      progress: 65,
      timeEstimate: "2024-02-20",
      category: "Analytics",
      iconName: "BarChart3",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-slate-800/90",
      href: "https://analytics.example.com",
      position: 2
    },
    {
      title: "Author Console",
      description: "Personal dashboard for researchers and authors to manage their publications, track submissions, and collaborate with co-authors.",
      status: "LIVE" as const,
      progress: 92,
      timeEstimate: "2023-11-10",
      category: "Author Tools",
      iconName: "User",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-slate-800/90",
      href: "https://authors.example.com",
      position: 3
    },
    {
      title: "Public Knowledge Base",
      description: "Open-access repository of research papers, datasets, and educational resources. Free for researchers and students worldwide.",
      status: "COMING_SOON" as const,
      progress: 35,
      timeEstimate: "2024-03-15",
      category: "Public Access",
      iconName: "Globe",
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-slate-800/90",
      href: "https://knowledge.example.com",
      position: 4
    },
    {
      title: "Conference Management",
      description: "End-to-end solution for organizing academic conferences, managing submissions, and coordinating virtual or hybrid events.",
      status: "BETA" as const,
      progress: 45,
      timeEstimate: "2024-04-01",
      category: "Events",
      iconName: "Calendar",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-slate-800/90",
      href: "https://conferences.example.com",
      position: 5
    },
    {
      title: "Data Repository",
      description: "Secure storage and sharing platform for research datasets, supporting various formats and enabling collaboration.",
      status: "LIVE" as const,
      progress: 78,
      timeEstimate: "2023-09-20",
      category: "Data Management",
      iconName: "Database",
      gradient: "from-emerald-500 to-green-600",
      bgColor: "bg-slate-800/90",
      href: "https://data.example.com",
      position: 6
    }
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project
    })
  }

  console.log('✅ Seed completed successfully!')
  console.log(`📊 Created ${projects.length} sample projects`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 