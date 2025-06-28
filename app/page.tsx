import { CardGrid } from "@/components/card-grid"
// import { AdminLink } from "@/components/admin-link" // Uncomment if needed

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">ViitxCreator</h1>
          {/* <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to the central dashboard of our organization. Here, you'll find all the domains we manage — from journal publishing and research analytics to public websites and author consoles. Each domain is purpose-built to support creators, researchers, and users at every stage of their journey.
          </p> */}
        </div>

        {/* Optional: admin link if needed */}
        {/* <div className="flex justify-end mb-4">
          <AdminLink />
        </div> */}

        <CardGrid />
      </div>
    </div>
  )
}
