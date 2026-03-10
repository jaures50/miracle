// src/components/Navbar.tsx
import { useState } from "react"

interface NavbarProps {
  onToggleSidebar?: () => void
  sidebarOpen?: boolean
}

export default function Navbar({ onToggleSidebar, }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="flex items-center justify-between px-6 h-16 border-b relative z-50"
      style={{ background: "var(--bg-navbar)", borderColor: "var(--border-color)" }}
    >
      {/* Logo et bouton sidebar pour mobile */}
      <div className="flex items-center gap-4">
        {/* Bouton sidebar pour desktop */}
        <button
          onClick={onToggleSidebar}
          className="hidden md:block p-2 rounded hover:bg-opacity-10 hover:bg-black"
          style={{ color: "var(--text-main)" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <h1
          className="text-xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          AI Design
        </h1>
      </div>

      {/* menu desktop */}
      <nav className="hidden md:flex gap-8 font-medium" style={{ color: "var(--text-main)" }}>
        <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
        <a href="/chatbot" className="hover:opacity-70 transition-opacity">Chatbot</a>
      </nav>

      {/* mobile button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ color: "var(--text-main)" }}
      >
        ☰
      </button>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div
          className="absolute top-16 left-0 w-full flex flex-col gap-4 p-6 md:hidden border-b z-50"
          style={{ background: "var(--bg-navbar)", borderColor: "var(--border-color)" }}
        >
         <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
        <a href="/chatbot" className="hover:opacity-70 transition-opacity">Chatbot</a>
        </div>
      )}
    </header>
  )
}