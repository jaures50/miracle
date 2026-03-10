// src/components/Layout.tsx
import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex relative">
        {/* Sidebar pour desktop toujours visible, pour mobile conditionnel */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Contenu principal */}
        <main 
          className="flex-1 p-6"
          style={{ color: "var(--text-main)" }}
        >
          {children || (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Bienvenue sur AI Design</h2>
              <p>Commencez à créer avec nos outils de design intelligents.</p>
              
              {/* Grille d'exemple */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div 
                    key={item}
                    className="p-4 rounded-lg border"
                    style={{ 
                      background: "var(--bg-navbar)",
                      borderColor: "var(--border-color)"
                    }}
                  >
                    <h3 className="font-semibold">Projet {item}</h3>
                    <p className="text-sm opacity-70">Description du projet...</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Overlay pour fermer le sidebar sur mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}