// src/pages/Gallery.tsx
import React, { useState,  } from "react"
import { designs } from "../data/designs"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "rating">("latest")
  const [visibleCount, setVisibleCount] = useState(6)
  const [] = useState<string>("all")

  // Catégories uniques pour le filtre
  const categories = ["all", ...new Set(designs.map(d => d.category))]

  // Designs filtrés et triés
  const getFilteredDesigns = () => {
    let filtered = filter === "all" ? designs : designs.filter(d => d.category === filter)
    
    // Tri
    switch(sortBy) {
      case "popular":
        filtered = [...filtered].sort((a, b) => (b.likes || 0) - (a.likes || 0))
        break
      case "rating":
        filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        filtered = [...filtered].sort((a, b) => (b.id || 0) - (a.id || 0))
    }
    
    return filtered
  }

  const filteredDesigns = getFilteredDesigns()
  const visibleDesigns = filteredDesigns.slice(0, visibleCount)
  const hasMore = visibleCount < filteredDesigns.length

  // Stats pour la galerie
  const galleryStats = [
    { label: "Designs", value: designs.length, icon: "🎨", color: "#FF6B6B" },
    { label: "Catégories", value: categories.length - 1, icon: "📁", color: "#4ECDC4" },
    { label: "Créateurs", value: [...new Set(designs.map(d => d.author))].length, icon: "👥", color: "#45B7D1" },
    { label: "Vues totales", value: designs.reduce((acc, d) => acc + (d.views || 0), 0), icon: "👁️", color: "#A8E6CF" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          
          {/* Grille dynamique */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern id="gallery-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gallery-grad)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="gallery-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gallery-grid)" />
          </svg>
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-sm font-semibold">
                🖼️ Galerie Design IA
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Galerie de</span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200%' }}
              >
                Designs Inspirants
              </motion.span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Découvrez les créations de notre communauté et laissez-vous inspirer 
              par la puissance de l'IA
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {galleryStats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTRES SECTION ===== */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Barre de contrôle principale */}
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Compteur et indicateurs */}
            <div className="flex items-center gap-4">
              <motion.div 
                className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-xl text-white font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                {filteredDesigns.length} designs
              </motion.div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                <span className="text-sm text-white/60">Mis à jour en temps réel</span>
              </div>
            </div>

            {/* Contrôles de vue et tri */}
            <div className="flex flex-wrap gap-3">
              {/* Mode de vue */}
              <div className="flex bg-[#2a2a3a] rounded-xl border border-white/10 p-1">
                {[
                  { mode: "grid", icon: "⊞", label: "Grille" },
                  { mode: "list", icon: "☰", label: "Liste" }
                ].map((mode) => (
                  <motion.button
                    key={mode.mode}
                    onClick={() => setViewMode(mode.mode as "grid" | "list")}
                    className={`px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all ${
                      viewMode === mode.mode 
                        ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white' 
                        : 'text-white/60 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{mode.icon}</span>
                    <span className="hidden md:inline">{mode.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Tri */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "latest" | "popular" | "rating")}
                className="px-4 py-2 bg-[#2a2a3a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4ECDC4] transition-all"
              >
                <option value="latest" className="bg-[#2a2a3a]">📅 Plus récents</option>
                <option value="popular" className="bg-[#2a2a3a]">❤️ Plus populaires</option>
                <option value="rating" className="bg-[#2a2a3a]">⭐ Mieux notés</option>
              </select>
            </div>
          </motion.div>

          {/* Filtres par catégorie avec animation */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all relative overflow-hidden group`}
                style={{
                  background: filter === cat ? "transparent" : "#2a2a3a",
                  border: "1px solid",
                  borderColor: filter === cat ? "#4ECDC4" : "rgba(255,255,255,0.1)"
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {filter === cat && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-white">
                  {cat === "all" ? "Tous" : cat}
                  {cat !== "all" && (
                    <span className="ml-2 text-xs opacity-60">
                      ({designs.filter(d => d.category === cat).length})
                    </span>
                  )}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Résultats de recherche */}
          <AnimatePresence mode="wait">
            {filteredDesigns.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="text-8xl mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🎨
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Aucun design trouvé
                </h3>
                <p className="text-white/60">
                  Essayez de sélectionner une autre catégorie
                </p>
                <motion.button
                  onClick={() => setFilter("all")}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir tous les designs
                </motion.button>
              </motion.div>
            ) : (
              <>
                {/* Grille de designs */}
                <motion.div 
                  className={`grid ${
                    viewMode === "grid" 
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                      : "grid-cols-1"
                  } gap-8`}
                  layout
                >
                  <AnimatePresence>
                    {visibleDesigns.map((design, index) => (
                      <motion.div
                        key={design.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -10 }}
                        className="group relative"
                        onHoverStart={() => setHoveredId(design.id)}
                        onHoverEnd={() => setHoveredId(null)}
                      >
                        <div 
                          className="relative rounded-2xl overflow-hidden bg-[#2a2a3a] border border-white/10"
                          style={{
                            boxShadow: hoveredId === design.id ? '0 20px 40px -10px rgba(78, 205, 196, 0.3)' : 'none'
                          }}
                        >
                          {/* Image avec overlay */}
                          <div className="relative aspect-video overflow-hidden">
                            <motion.img
                              src={design.image}
                              alt={design.title}
                              className="w-full h-full object-cover"
                              animate={{ 
                                scale: hoveredId === design.id ? 1.1 : 1
                              }}
                              transition={{ duration: 0.7 }}
                            />
                            
                            {/* Overlay avec catégorie et badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <motion.span 
                                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                                style={{ background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)" }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {design.category}
                              </motion.span>
                              
                              {design.isNew && (
                                <motion.span 
                                  className="px-3 py-1 bg-[#FF6B6B] rounded-full text-xs font-semibold text-white"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  Nouveau ✨
                                </motion.span>
                              )}
                            </div>

                            {/* Bouton d'action rapide */}
                            <AnimatePresence>
                              {hoveredId === design.id && (
                                <motion.div 
                                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <Link to={`/design/${design.id}`}>
                                    <motion.span 
                                      className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold inline-block"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Voir le design
                                    </motion.span>
                                  </Link>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Informations du design */}
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-xl font-bold text-white">
                                {design.title}
                              </h3>
                              
                              {/* Note avec animation */}
                              {design.rating && (
                                <motion.div 
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span className="text-yellow-400">★</span>
                                  <span className="text-sm font-semibold text-white">
                                    {design.rating}
                                  </span>
                                </motion.div>
                              )}
                            </div>

                            <p className="text-sm text-white/60 mb-4 line-clamp-2">
                              {design.description}
                            </p>

                            {/* Auteur et statistiques */}
                            <div className="flex items-center justify-between">
                              <Link to={`/profile/ij`}>
                                <motion.div 
                                  className="flex items-center gap-2"
                                  whileHover={{ x: 5 }}
                                >
                                  {design.authorAvatar ? (
                                    <img 
                                      src={design.authorAvatar} 
                                      alt={design.author}
                                      className="w-6 h-6 rounded-full"
                                    />
                                  ) : (
                                    <div 
                                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white"
                                      style={{ background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)" }}
                                    >
                                      {design.author.charAt(0)}
                                    </div>
                                  )}
                                  <span className="text-sm text-white/60 hover:text-white transition-colors">
                                    {design.author}
                                  </span>
                                </motion.div>
                              </Link>

                              <div className="flex items-center gap-3 text-sm text-white/40">
                                <motion.span 
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.1, color: '#FF6B6B' }}
                                >
                                  <span>❤️</span> {design.likes || 0}
                                </motion.span>
                                <motion.span 
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.1, color: '#4ECDC4' }}
                                >
                                  <span>👁️</span> {design.views || 0}
                                </motion.span>
                              </div>
                            </div>
                          </div>

                          {/* Lien principal (pour SEO) */}
                          <Link to={`/design/${design.id}`} className="absolute inset-0">
                            <span className="sr-only">Voir {design.title}</span>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Bouton "Voir plus" */}
                {hasMore && (
                  <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.button
                      onClick={() => setVisibleCount(prev => prev + 6)}
                      className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30 relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Charger plus de designs</span>
                      <motion.div 
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ opacity: 0.2 }}
                      />
                    </motion.button>
                    
                    <p className="mt-4 text-sm text-white/40">
                      {visibleCount} / {filteredDesigns.length} designs affichés
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== SECTION INSPIRATION ===== */}
      <section className="px-6 py-20 bg-[#1a1a2e] mt-12">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin de plus d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">inspiration</span> ?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Notre assistant IA peut générer des designs personnalisés pour vous
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/generate">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎨 Créer avec l'IA
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-[#2a2a3a] border border-white/10 text-white rounded-xl font-semibold hover:bg-[#3a3a4a] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Parler à un expert
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery