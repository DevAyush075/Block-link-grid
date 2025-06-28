"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        position: "asc",
      },
    })
    return projects.map((project) => ({
      ...project,
      url: project.href,
      launchDate: project.timeEstimate || new Date().toISOString().split("T")[0],
      visitors: project.progress * 100, // Convert progress to visitor count for demo
    }))
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function createProject(data: {
  title: string
  description: string
  status: "LIVE" | "BETA" | "COMING_SOON"
  url: string
  launchDate: string
  category: string
  gradient: string
  visitors: number
}) {
  try {
    // Get the highest position to add at the end
    const lastProject = await prisma.project.findFirst({
      orderBy: { position: "desc" },
    })
    const nextPosition = (lastProject?.position || 0) + 1

    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        progress: Math.floor(data.visitors / 100), // Convert visitors to progress for storage
        timeEstimate: data.launchDate,
        category: data.category,
        iconName: "Globe",
        gradient: data.gradient,
        bgColor: "bg-slate-800/90",
        href: data.url,
        position: nextPosition,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin")
    return { success: true, project }
  } catch (error) {
    console.error("Error creating project:", error)
    throw new Error("Failed to create project")
  }
}

export async function updateProject(
  id: string,
  data: Partial<{
    title: string
    description: string
    status: "LIVE" | "BETA" | "COMING_SOON"
    url: string
    launchDate: string
    category: string
    gradient: string
    visitors: number
  }>,
) {
  try {
    const updateData: any = { ...data }

    // Convert fields for database storage
    if (data.url !== undefined) {
      updateData.href = data.url
      delete updateData.url
    }
    if (data.launchDate !== undefined) {
      updateData.timeEstimate = data.launchDate
      delete updateData.launchDate
    }
    if (data.visitors !== undefined) {
      updateData.progress = Math.floor(data.visitors / 100)
      delete updateData.visitors
    }

    const project = await prisma.project.update({
      where: { id },
      data: updateData,
    })

    revalidatePath("/")
    revalidatePath("/admin")
    return { success: true, project }
  } catch (error) {
    console.error("Error updating project:", error)
    throw new Error("Failed to update project")
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    })

    revalidatePath("/")
    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error deleting project:", error)
    throw new Error("Failed to delete project")
  }
}

export async function updateDomainPosition(id: string, newPosition: number) {
  try {
    await prisma.project.update({
      where: { id },
      data: { position: newPosition },
    })

    revalidatePath("/")
    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error updating position:", error)
    throw new Error("Failed to update position")
  }
}
