// src/pages/GenerateDesign.tsx
import React, { useState, useEffect, useRef } from "react"
import { generateImage } from "../utils/generate" // ou "../utils/pollinations"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const GenerateDesign: React.FC = () => {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [ setLoadingMessage] = useState("")
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [selectedStyle, setSelectedStyle] = useState("modern")
  const [selectedRatio, setSelectedRatio] = useState("1:1")
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [showTips, setShowTips] = useState(true)
  
  const promptInputRef = useRef<HTMLInputElement>(null)

  // Exemples de prompts pour aider l'utilisateur
  const promptExamples = [
    "Affiche moderne pour conférence d'église avec des tons bleus et dorés",
    "Flyer minimaliste pour entreprise tech avec dégradés",
    "Publication Instagram pour événement musical avec effets de lumière",
    "Bannière web pour association caritative avec illustrations",
    "Carte de visite élégante pour designer graphique",
    "Affiche événementielle style art déco avec typographie bold"
  ]

  // Styles disponibles
  const styles = [
    { id: "modern", name: "Moderne", icon: "✨", color: "#FF6B6B" },
    { id: "minimalist", name: "Minimaliste", icon: "⚪", color: "#4ECDC4" },
    { id: "vintage", name: "Vintage", icon: "📻", color: "#45B7D1" },
    { id: "abstract", name: "Abstrait", icon: "🎨", color: "#A8E6CF" },
    { id: "corporate", name: "Corporate", icon: "💼", color: "#FF9F1C" },
    { id: "artistic", name: "Artistique", icon: "🖼️", color: "#E71D36" },
  ]

  // Ratios d'image
  const ratios = [
    { id: "1:1", name: "Carré (1:1)", icon: "⬛", desc: "Instagram, posts" },
    { id: "16:9", name: "Paysage (16:9)", icon: "🖥️", desc: "Bannières web" },
    { id: "9:16", name: "Portrait (9:16)", icon: "📱", desc: "Stories, Reels" },
    { id: "4:3", name: "Classique (4:3)", icon: "📺", desc: "Présentations" },
    { id: "3:2", name: "Photo (3:2)", icon: "📸", desc: "Impression" },
  ]

  // Messages de chargement dynamiques
  const loadingMessages = [
    "L'IA analyse votre demande...",
    "Génération des concepts...",
    "Application des styles...",
    "Optimisation des couleurs...",
    "Finalisation du design...",
    "Presque prêt..."
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (loading) {
      setLoadingProgress(0)
      interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [loading])

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Veuillez décrire votre image")
      return
    }

    setLoading(true)
    setError("")
    setImageUrl(null)
    setLoadingMessage("Préparation de la génération...")

    try {
      // Construire le prompt avec le style et le ratio
      const enhancedPrompt = `${prompt} - Style: ${selectedStyle}, Ratio: ${selectedRatio}`
      const url = await generateImage(enhancedPrompt)
      
      setImageUrl(url)
      setGeneratedImages(prev => [url, ...prev].slice(0, 8)) // Garder les 8 dernières
      setPrompt("")
      
      // Focus sur l'input après génération
      promptInputRef.current?.focus()
    } catch (err: any) {
      setError(err.message || "Erreur lors de la génération")
    } finally {
      setLoading(false)
      setLoadingMessage("")
      setLoadingProgress(0)
    }
  }

  const handleExampleClick = (example: string) => {
    setPrompt(example)
    promptInputRef.current?.focus()
  }

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement('a')
      link.href = imageUrl
      link.download = `design-${Date.now()}.png`
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden pt-20">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 py-16 overflow-hidden">
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
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-sm font-semibold">
                🎨 Générateur IA
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Créez votre</span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200%' }}
              >
                Design Unique
              </motion.span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Décrivez votre idée et laissez l'IA la transformer en un design professionnel en quelques secondes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION GÉNÉRATION ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Formulaire principal */}
          <motion.div 
            className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Options de style */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Style du design</h3>
              <div className="flex flex-wrap gap-3">
                {styles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                      selectedStyle === style.id
                        ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white'
                        : 'bg-[#2a2a3a] text-white/60 hover:text-white border border-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{style.icon}</span>
                    <span>{style.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Options de ratio */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Format d'image</h3>
              <div className="flex flex-wrap gap-3">
                {ratios.map((ratio) => (
                  <motion.button
                    key={ratio.id}
                    onClick={() => setSelectedRatio(ratio.id)}
                    className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                      selectedRatio === ratio.id
                        ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white'
                        : 'bg-[#2a2a3a] text-white/60 hover:text-white border border-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{ratio.icon}</span>
                    <span>{ratio.name}</span>
                    <span className="text-xs opacity-60">{ratio.desc}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Zone de prompt */}
            <div className="relative">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    ref={promptInputRef}
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                    placeholder="Décrivez votre design idéal..."
                    className="w-full p-4 pr-12 bg-[#2a2a3a] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#4ECDC4] transition-all"
                    disabled={loading}
                  />
                  {prompt && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                      onClick={() => setPrompt("")}
                    >
                      <span className="text-white/40 hover:text-white/60">✕</span>
                    </motion.button>
                  )}
                </div>
                
                <motion.button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30 relative overflow-hidden group min-w-[140px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Génère...
                      </span>
                    ) : "Générer"}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>
              </div>

              {/* Exemples de prompts */}
              <div className="mt-4">
                <p className="text-sm text-white/40 mb-2">Exemples :</p>
                <div className="flex flex-wrap gap-2">
                  {promptExamples.slice(0, 3).map((example, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleExampleClick(example)}
                      className="px-3 py-1 bg-[#2a2a3a] border border-white/10 rounded-lg text-xs text-white/60 hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {example.substring(0, 30)}...
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Barre de progression */}
            <AnimatePresence>
              {loading && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>{loadingMessages[Math.floor(loadingProgress / 17)]}</span>
                    <span className="text-[#4ECDC4]">{loadingProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#2a2a3a] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                      initial={{ width: 0 }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message d'erreur */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  className="mt-4 p-4 bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 rounded-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[#FF6B6B] flex items-center gap-2">
                    <span>❌</span>
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Résultat de la génération */}
          <AnimatePresence mode="wait">
            {imageUrl && (
              <motion.div 
                className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Votre design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">généré</span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <motion.button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-[#2a2a3a] border border-white/10 rounded-xl text-white hover:bg-[#3a3a4a] transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>⬇️</span>
                      Télécharger
                    </motion.button>
                    
                    <motion.button
                      onClick={() => window.open(imageUrl, '_blank')}
                      className="px-4 py-2 bg-[#2a2a3a] border border-white/10 rounded-xl text-white hover:bg-[#3a3a4a] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔍 Agrandir
                    </motion.button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image générée */}
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden border border-white/10 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={imageUrl} 
                      alt={prompt}
                      className="w-full h-auto"
                    />
                    
                    {/* Badge IA */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-xs font-semibold">
                        Généré par IA
                      </span>
                    </div>

                    {/* Info prompt au hover */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <p className="text-white text-sm italic">"{prompt}"</p>
                    </motion.div>
                  </motion.div>

                  {/* Informations et actions */}
                  <div className="space-y-6">
                    <div className="p-6 bg-[#2a2a3a] rounded-xl border border-white/10">
                      <h3 className="text-white font-semibold mb-4">Détails de génération</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Style</span>
                          <span className="text-white">{styles.find(s => s.id === selectedStyle)?.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Format</span>
                          <span className="text-white">{ratios.find(r => r.id === selectedRatio)?.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Temps de génération</span>
                          <span className="text-[#4ECDC4]">{Math.floor(Math.random() * 3 + 2)}s</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Résolution</span>
                          <span className="text-white">1024x1024</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#2a2a3a] rounded-xl border border-white/10">
                      <h3 className="text-white font-semibold mb-4">Actions</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to={`/edit?image=${encodeURIComponent(imageUrl)}`}>
                          <motion.button
                            className="w-full px-4 py-3 bg-[#3a3a4a] rounded-xl text-white hover:bg-[#4a4a5a] transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            ✏️ Modifier
                          </motion.button>
                        </Link>
                        
                        <Link to="/gallery">
                          <motion.button
                            className="w-full px-4 py-3 bg-[#3a3a4a] rounded-xl text-white hover:bg-[#4a4a5a] transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🖼️ Galerie
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    {/* Tags suggérés */}
                    <div className="p-6 bg-[#2a2a3a] rounded-xl border border-white/10">
                      <h3 className="text-white font-semibold mb-4">Tags suggérés</h3>
                      <div className="flex flex-wrap gap-2">
                        {prompt.split(' ').slice(0, 5).map((word, i) => (
                          <span key={i} className="px-2 py-1 bg-[#3a3a4a] rounded-lg text-xs text-white/60">
                            #{word.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Historique des générations */}
          {generatedImages.length > 0 && (
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Générations <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">récentes</span>
              </h2>
              
              <div className="grid grid-cols-4 gap-4">
                {generatedImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setImageUrl(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Génération ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm">Voir</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Conseils */}
          {showTips && (
            <motion.div 
              className="mt-12 p-6 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-2xl border border-[#4ECDC4]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Conseils pour de meilleurs résultats</h3>
                  <ul className="text-sm text-white/70 space-y-1 list-disc list-inside">
                    <li>Soyez précis dans votre description (couleurs, style, ambiance)</li>
                    <li>Ajoutez des mots-clés comme "moderne", "minimaliste", "professionnel"</li>
                    <li>Spécifiez l'utilisation (affiche, flyer, publication sociale)</li>
                    <li>N'hésitez pas à itérer et ajuster votre prompt</li>
                  </ul>
                </div>
                <button 
                  onClick={() => setShowTips(false)}
                  className="text-white/40 hover:text-white/60"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== SECTION CTA ===== */}
      <section className="px-6 py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Besoin d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">inspiration</span> ?
          </motion.h2>
          
          <motion.p 
            className="text-white/70 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Parcourez notre galerie de designs générés par la communauté
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/gallery">
              <motion.button
                className="px-8 py-4 bg-[#2a2a3a] border border-white/10 text-white rounded-xl font-semibold hover:bg-[#3a3a4a] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir la galerie
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GenerateDesign