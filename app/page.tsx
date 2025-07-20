import { AdminLink } from "@/components/admin-link"
import { CardGrid } from "@/components/card-grid"
import { FloatingAdminButton } from "@/components/floating-admin-button"
import HomePage from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text mb-6">
            ViitxCreator
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Welcome to the central dashboard of our organization. Here, you'll find all the domains we manage — from journal publishing and research analytics to public websites and author consoles.
          </p>
        </div>

        {/* Admin Panel Link */}
        <div className="flex justify-end mb-8">
          <AdminLink />
        </div>

        <CardGrid />
        <HomePage/>
        
        {/* Floating Admin Button */}
        <FloatingAdminButton />
      </div>
    </div>
  )
}
