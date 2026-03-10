// src/pages/Gallery.tsx
import React, { useState } from "react"
import { designs } from "../data/designs"
import { Link } from "react-router-dom"

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Catégories uniques pour le filtre
  const categories = ["all", ...new Set(designs.map(d => d.category))]

  // Designs filtrés
  const filteredDesigns = filter === "all" 
    ? designs 
    : designs.filter(d => d.category === filter)

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      {/* En-tête de la galerie */}
      <div 
        className="relative overflow-hidden px-6 py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)"
        }}
      >
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galerie de <span className="text-yellow-300">Designs</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Découvrez les créations de notre communauté et laissez-vous inspirer 
            par la puissance de l'IA
          </p>
        </div>
      </div>

      {/* Filtres et compteur */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full" 
              style={{ background: "var(--primary)", color: "white" }}>
              {filteredDesigns.length} designs
            </span>
            <span style={{ color: "var(--text-main)" }}>disponibles</span>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  filter === cat 
                    ? 'text-white shadow-lg' 
                    : 'hover:bg-opacity-10'
                }`}
                style={{
                  background: filter === cat ? "var(--primary)" : "var(--bg-navbar)",
                  color: filter === cat ? "white" : "var(--text-main)",
                  border: "1px solid var(--border-color)"
                }}
              >
                {cat === "all" ? "Tous" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de designs */}
        {filteredDesigns.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-main)" }}>
              Aucun design trouvé
            </h3>
            <p style={{ color: "var(--text-main)", opacity: 0.7 }}>
              Essayez de sélectionner une autre catégorie
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "var(--bg-navbar)",
                  border: "1px solid var(--border-color)"
                }}
                onMouseEnter={() => setHoveredId(design.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image avec overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === design.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay avec catégorie et badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "var(--primary)" }}
                    >
                      {design.category}
                    </span>
                  </div>

                  {/* Bouton d'action rapide */}
                  <Link
                    to={`/design/${design.id}`}
                    className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
                      hoveredId === design.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span className="px-6 py-3 bg-white rounded-lg font-semibold transform transition-transform hover:scale-105">
                      Voir le design
                    </span>
                  </Link>
                </div>

                {/* Informations du design */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-main)" }}>
                      {design.title}
                    </h3>
                    
                    {/* Note */}
                    {design.rating && (
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold" style={{ color: "var(--text-main)" }}>
                          {design.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm mb-4" style={{ color: "var(--text-main)", opacity: 0.7 }}>
                    {design.description}
                  </p>

                  {/* Auteur et statistiques */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {design.authorAvatar ? (
                        <img 
                          src={design.authorAvatar} 
                          alt={design.author}
                          className="w-6 h-6 rounded-full"
                        />
                      ) : (
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white"
                          style={{ background: "var(--primary)" }}
                        >
                          {design.author.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm" style={{ color: "var(--text-main)", opacity: 0.7 }}>
                        {design.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-main)", opacity: 0.5 }}>
                      <span className="flex items-center gap-1">
                        <span>❤️</span> {design.likes || 0}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>👁️</span> {design.views || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lien principal (pour SEO) */}
                <Link to={`/design/${design.id}`} className="absolute inset-0">
                  <span className="sr-only">Voir {design.title}</span>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination ou "Voir plus" */}
        {filteredDesigns.length > 0 && (
          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "var(--primary)",
                color: "white"
              }}
            >
              Charger plus de designs
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery