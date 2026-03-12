// src/pages/HomePage.tsx
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState,  } from "react"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredTest, setHoveredTest] = useState<number | null>(null)
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Données de test pour montrer le produit
  const designTests = [
    { 
      id: 1,
      name: "Affiche Conférence",
      image: "🎨",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      type: "Événementiel"
    },
    { 
      id: 2,
      name: "Flyer Entreprise",
      image: "📄",
      colors: ["#A8E6CF", "#FFD3B6", "#FFAAA5"],
      type: "Corporate"
    },
    { 
      id: 3,
      name: "Post Instagram",
      image: "📱",
      colors: ["#FF9F1C", "#2EC4B6", "#E71D36"],
      type: "Social Media"
    },
    { 
      id: 4,
      name: "Carte Visite",
      image: "💳",
      colors: ["#8338EC", "#3A86FF", "#FB5607"],
      type: "Identité"
    },
    { 
      id: 5,
      name: "Bannière Web",
      image: "🖥️",
      colors: ["#FF006E", "#8338EC", "#3A86FF"],
      type: "Digital"
    },
    { 
      id: 6,
      name: "Affiche Église",
      image: "⛪",
      colors: ["#F15BB5", "#FEE440", "#00BBF9"],
      type: "Spirituel"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
      
      {/* ===== SECTION 1: HERO avec couleurs vibrantes ===== */}
      <section className="relative min-h-screen flex items-center px-6">
        {/* Background géométrique animé avec couleurs vives */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl opacity-20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-[#A8E6CF] to-[#FFD3B6] rounded-full blur-3xl opacity-20"
          />
          
          {/* Grille dynamique */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grad1)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Colonne gauche - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-sm font-semibold">
                  🚀 Design Assistant IA - Nouvelle Génération
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Créez des</span>
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                    filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  style={{ backgroundSize: '200%' }}
                >
                  Designs Époustouflants
                </motion.span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Plus de 5000 templates testés et validés par notre communauté de créatifs.
                L'IA qui comprend vraiment vos besoins graphiques.
              </p>

              {/* Tests en direct */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white/60 text-sm">Tests utilisateurs en cours :</span>
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] border-2 border-white/20 flex items-center justify-center text-xs text-white">
                        U{i}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  {['UX', 'UI', 'Performance', 'Accessibilité'].map((test, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,107,107,0.3)' }}
                    >
                      {test} ✓
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA avec effet 3D */}
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 10 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ perspective: 1000 }}
                >
                  <Link
                    to="/chatbot"
                    className="block px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Commencer gratuitement</span>
                    <motion.div 
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/gallery"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Voir les tests
                  </Link>
                </motion.div>
              </div>

              {/* Stats avec design moderne */}
              <div className="flex gap-8 mt-12">
                {[
                  { value: '5000+', label: 'Tests effectués', icon: '🧪', color: '#FF6B6B' },
                  { value: '98%', label: 'Satisfaction', icon: '⭐', color: '#4ECDC4' },
                  { value: '24/7', label: 'Support test', icon: '🔄', color: '#45B7D1' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Colonne droite - Showcase des designs avec tests */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{ rotateY: rotate }}
            >
              <div className="relative aspect-square">
                {/* Cercles concentriques animés avec couleurs */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${i === 1 ? '#FF6B6B' : i === 2 ? '#4ECDC4' : '#45B7D1'}`,
                      opacity: 0.3
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 - i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Grille de designs */}
                <div className="absolute inset-0 m-auto w-80 h-80">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {designTests.slice(0,4).map((design, i) => (
                      <motion.div
                        key={i}
                        className="relative rounded-xl overflow-hidden backdrop-blur-lg"
                        style={{
                          background: `linear-gradient(135deg, ${design.colors[0]} 0%, ${design.colors[1]} 50%, ${design.colors[2]} 100%)`
                        }}
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                        onHoverStart={() => setHoveredTest(design.id)}
                        onHoverEnd={() => setHoveredTest(null)}
                      >
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative p-3 text-white">
                          <span className="text-2xl">{design.image}</span>
                          <p className=" text-white text-xs font-semibold mt-1">{design.name}</p>
                          {hoveredTest === design.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-black/50 flex items-center justify-center"
                            >
                              <span className="text-xs text-white">Test ✓</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Badge de test */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⚡ 1500+ tests réussis
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Catégories avec disposition en mosaïque ===== */}
      <section className="px-6 py-20 bg-[#1a1a2e]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          
          {/* Titre avec ligne décorative */}
          <div className="flex items-center gap-4 mb-16">
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
            />
           
          </div>

        </div>
      </section>

      {/* ===== SECTION 3: Forfaits avec tests A/B ===== */}
      <section className="px-6 py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header avec switch et tests */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Forfaits <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">testés A/B</span>
            </motion.h2>
            
            <p className="text-white/60 mb-6">
              🔬 Tests de conversion en cours - Version {activeTab === 0 ? 'A' : 'B'}
            </p>
            
            {/* Toggle mensuel/annuel */}
            <div className="inline-flex p-1 bg-[#2a2a3a] rounded-full border border-white/10">
              {['Mensuel', 'Annuel'].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === i 
                      ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab} {i === 0 ? '(Test A)' : '(Test B)'}
                </button>
              ))}
            </div>
          </div>

          {/* Cartes en disposition horizontale décalée */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {subscriptions.map((sub, index) => {
              const isMiddle = index === 1
              
              return (
                <motion.div
                  key={index}
                  className={`relative ${isMiddle ? 'lg:-mt-8 lg:-mb-8 z-10' : ''}`}
                  initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Badge de test */}
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full text-white text-sm font-semibold whitespace-nowrap z-20"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {index === 0 && '🔬 Test A'}
                    {index === 1 && '⚡ Test B - Gagnant'}
                    {index === 2 && '🎯 Test C'}
                  </motion.div>

                  {/* Carte */}
                  <div 
                    className={`relative w-80 p-8 rounded-3xl ${
                      isMiddle 
                        ? 'bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] text-white scale-110' 
                        : 'bg-[#2a2a3a] border border-white/10'
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className=" text-white text-2xl font-bold mb-2">{sub.name}</h3>
                      <p className={`text-sm ${isMiddle ? 'text-white/80' : 'text-white/60'}`}>
                        {sub.for}
                      </p>
                    </div>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        {activeTab === 0 ? sub.price : (parseFloat(sub.price) * 10).toFixed(2) + ' €'}
                      </span>
                      <span className={`${isMiddle ? 'text-white/80' : 'text-white/60'}`}>
                        /{activeTab === 0 ? 'mois' : 'an'}
                      </span>
                    </div>

                    {/* Taux de conversion */}
                    <div className="mb-4 p-2 bg-white/5 rounded-lg">
                      <div className="flex justify-between text-xs">
                        <span>Test A/B</span>
                        <span className="text-[#4ECDC4]">+{index === 1 ? '32' : index === 0 ? '24' : '28'}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full mt-1">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: index === 1 ? '75%' : index === 0 ? '60%' : '65%' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {sub.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className={isMiddle ? 'text-white' : 'text-[#4ECDC4]'}>✓</span>
                          <span className="text-sm text-white/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/subscription"
                        className={`block w-full py-3 text-center rounded-xl font-semibold transition-all ${
                          isMiddle
                            ? 'bg-white text-[#FF6B6B] hover:bg-white/90'
                            : 'border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white'
                        }`}
                      >
                        Choisir ce forfait
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Innovation avec tests utilisateurs ===== */}
      <section className="px-6 py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Partie gauche - Chatbot showcase avec tests */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Badge de test utilisateur */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl z-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Test Utilisateur #247 ✨
                </motion.div>

                {/* Interface chat avec tests */}
                <div className="bg-[#2a2a3a] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                  {/* Header */}
                  <div className="p-4 border-b border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xl">
                      🤖
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Assistant Design IA</h4>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                        <span className="text-xs text-white/60">Test en direct - 128 utilisateurs</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages avec tests */}
                  <div className="p-4 space-y-4">
                    {chatbotExamples.map((msg, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <div className="w-8 h-8 bg-[#3a3a4a] rounded-full flex items-center justify-center text-sm text-white">
                          T{i+1}
                        </div>
                        <div className="flex-1 p-3 bg-[#3a3a4a] rounded-lg">
                          <p className="text-sm text-white">{msg}</p>
                          <span className="text-xs text-[#4ECDC4] mt-1 block">Test réussi ✓</span>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white">
                        IA
                      </div>
                      <div className="flex-1">
                        <div className="p-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-lg mb-2">
                          <p className="text-sm">Tests disponibles pour :</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 3].map(i => (
                            <motion.div
                              key={i}
                              className="aspect-square bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center text-white text-xs"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              Test {i}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Barre de test */}
                  <div className="p-3 bg-[#1a1a2e] border-t border-white/10">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Progression des tests</span>
                      <span className="text-[#4ECDC4]">78%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partie droite - Texte avec stats de tests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tests utilisateurs en 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"> temps réel</span>
              </h2>
              
              <p className="text-lg text-white/70 mb-8">
                Notre IA est testée en continu par plus de 1000 utilisateurs pour garantir des résultats optimaux.
              </p>

              {/* Stats de tests */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Tests réalisés', value: '15,247', color: '#FF6B6B' },
                  { label: 'Taux de réussite', value: '98.3%', color: '#4ECDC4' },
                  { label: 'Utilisateurs actifs', value: '1,284', color: '#45B7D1' },
                  { label: 'Feedback positif', value: '4.8/5', color: '#A8E6CF' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-4 bg-[#2a2a3a] rounded-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/chatbot"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold group"
                >
                  <span>Assistance IA</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Avantages avec témoignages de testeurs ===== */}
      <section className="px-6 py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce que disent nos 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"> testeurs</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Plus de 1500 tests utilisateurs réalisés avec succès
            </p>
          </div>

          {/* Grille asymétrique */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte entreprise avec stats de tests */}
            <motion.div
              className="md:row-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 border border-[#FF6B6B]/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tests Entreprises</h3>
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/80">Taux de satisfaction</span>
                  <span className="text-[#4ECDC4]">94%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '94%' }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              <ul className="space-y-3">
                {businessBenefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-6 h-6 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center text-[#4ECDC4]">
                      ✓
                    </span>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Carte église avec tests */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-[#4ECDC4]/10 to-[#45B7D1]/10 border border-[#4ECDC4]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl mb-6">⛪</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tests Églises</h3>
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/80">Tests réalisés</span>
                  <span className="text-[#45B7D1]">847</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              <ul className="space-y-3">
                {churchBenefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-6 h-6 bg-[#45B7D1]/20 rounded-full flex items-center justify-center text-[#45B7D1]">
                      ✓
                    </span>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Carte témoignage de testeur */}
            <motion.div
              className="p-8 rounded-3xl bg-[#2a2a3a] border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-[#FF6B6B]">★</span>
                ))}
              </div>
              <p className="text-white italic mb-4">
                "J'ai participé aux tests pendant 3 mois. L'évolution est incroyable et le support est réactif !"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div>
                  <p className="font-semibold text-white">Marie T.</p>
                  <p className="text-sm text-[#4ECDC4]">Testeuse depuis 6 mois</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-white/60">Tests effectués : 127</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CTA avec appel aux tests ===== */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Background avec effet de vague coloré */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path 
              fill="url(#gradientWave)"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{ d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]}}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
              🧪 Programme de tests ouvert
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">tester</span> nos designs ?
          </motion.h2>

          <motion.p 
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rejoignez notre programme de tests et participez à l'amélioration de l'IA
          </motion.p>

          {/* Stats de participation */}
          <motion.div 
            className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: 'Testeurs actifs', value: '1,284' },
              { label: 'Tests en cours', value: '347' },
              { label: 'Taux de participation', value: '89%' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/chatbot"
                className="block px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30"
              >
                Devenir testeur
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/gallery"
                className="block px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Voir les résultats des tests
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// ===== Données avec couleurs vibrantes =====


const chatbotExamples = [
  "Test #2341 : Création affiche conférence église - ✅ Validé",
  "Test #2342 : Flyer entreprise moderne - 🔄 En cours",
  "Test #2343 : Publication Instagram événement - ✅ Validé",
  "Test #2344 : Carte de visite design - ⏳ En attente"
]

const subscriptions = [
  {
    name: "Standard",
    for: "Testeurs débutants",
    price: "9,99 €",
    features: [
      "Accès aux tests de base",
      "Création de visuels simples",
      "Téléchargement qualité standard",
      "Feedback prioritaire"
    ],
    popular: false
  },
  {
    name: "Premium",
    for: "Testeurs avancés",
    price: "24,99 €",
    features: [
      "+300 modèles à tester",
      "Éléments graphiques premium",
      "Téléchargement haute qualité",
      "Personnalisation avancée",
      "Accès aux tests A/B"
    ],
    popular: true
  },
  {
    name: "HD Professionnel",
    for: "Experts tests",
    price: "49,99 €",
    features: [
      "Accès complet à tous les tests",
      "Visuels en 4K",
      "Modèles exclusifs",
      "Export print professionnel",
      "Rapports de tests détaillés"
    ],
    popular: false
  }
]

const businessBenefits = [
  "Tests A/B en temps réel",
  "Analyse de performance",
  "Feedback utilisateur instantané",
  "Optimisation continue",
  "Rapports détaillés"
]

const churchBenefits = [
  "Tests spécifiques événements",
  "Adaptation culturelle",
  "Feedback communauté",
  "Validation utilisateurs",
  "Amélioration continue"
]

