// src/pages/AboutPage.tsx
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const [activeTab, setActiveTab] = useState(0)
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0.3])

  // Données pour les stats
  const stats = [
    { value: '5000+', label: 'Designs créés', icon: '🎨', color: '#FF6B6B' },
    { value: '98%', label: 'Clients satisfaits', icon: '⭐', color: '#4ECDC4' },
    { value: '24/7', label: 'Support disponible', icon: '🚀', color: '#45B7D1' },
    { value: '150+', label: 'Tests A/B réussis', icon: '🧪', color: '#A8E6CF' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
      
      {/* ===== SECTION HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl opacity-20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full blur-3xl opacity-20"
          />
          
          {/* Grille décorative */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grad-about)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="grad-about" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
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
                ✨ Notre Histoire
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">À propos de</span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200%' }}
              >
                GraphiNova
              </motion.span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Une plateforme innovante qui révolutionne la création graphique grâce à l'intelligence artificielle.
              <span className="block mt-2 text-[#4ECDC4]">+5000 designers nous font confiance</span>
            </p>

            {/* Stats rapides */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.slice(0, 3).map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== SECTION MISSION ===== */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texte mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">mission</span>
              </h2>
              
              <div className="space-y-4 text-white/80">
                <p className="text-lg">
                  Démocratiser la création graphique en rendant accessible à tous des outils professionnels 
                  assistés par intelligence artificielle.
                </p>
                <p>
                  Notre plateforme est née d'un constat simple : trop de personnes et d'organisations 
                  manquent de temps ou de compétences pour créer des visuels percutants.
                </p>
                <p>
                  Que vous soyez un entrepreneur, une association, une église ou un particulier, 
                  nous vous donnons les moyens de communiquer visuellement comme un pro.
                </p>
              </div>

              {/* Témoignage */}
              <motion.div 
                className="mt-8 p-6 bg-[#2a2a3a] rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-white/90 italic mb-4">
                  "Grâce à GraphiNova, notre communication visuelle a fait un bond en avant. 
                  Nous créons des affiches en 5 minutes chrono !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sarah K.</p>
                    <p className="text-sm text-[#4ECDC4]">Community Manager</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Illustration mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square">
                {/* Cercles concentriques */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${i === 1 ? '#FF6B6B' : i === 2 ? '#4ECDC4' : '#45B7D1'}`,
                      opacity: 0.2
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 - i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Icônes flottantes */}
                {['🎨', '🤖', '⚡', '✨'].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-[#2a2a3a] rounded-2xl flex items-center justify-center text-3xl border border-white/10"
                    style={{
                      top: i === 0 ? '20%' : i === 1 ? '60%' : i === 2 ? '30%' : '70%',
                      left: i === 0 ? '60%' : i === 1 ? '20%' : i === 2 ? '70%' : '30%',
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION CRÉATIONS ===== */}
      <Section bg="#1a1a2e">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* En-tête */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ce que vous pouvez <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">créer</span>
            </motion.h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Une multitude de formats pour tous vos besoins de communication
            </p>
          </div>

          {/* Grille des créations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {creationTypes.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10 text-center hover:border-[#4ECDC4]/50 transition-all">
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {item.emoji}
                  </motion.div>
                  <p className="text-white font-medium">{item.label}</p>
                  
                  {/* Badge de test */}
                  <span className="absolute top-2 right-2 px-2 py-1 bg-[#FF6B6B]/20 rounded-full text-xs text-[#FF6B6B]">
                    {Math.floor(Math.random() * 50) + 100} tests
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION INNOVATION ===== */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Illustration chatbot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Badge IA */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-4 py-2 rounded-full text-sm font-semibold z-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🤖 Intelligence Artificielle
                </motion.div>

                {/* Interface chat */}
                <div className="bg-[#2a2a3a] rounded-3xl p-6 border border-white/10">
                  {/* Messages */}
                  <div className="space-y-4">
                    {chatbotExamples.map((msg, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <div className="w-8 h-8 bg-[#3a3a4a] rounded-full flex items-center justify-center text-white">
                          {i === 0 ? '👤' : i === 1 ? '👤' : i === 2 ? '👤' : '🤖'}
                        </div>
                        <div className="flex-1 p-3 bg-[#3a3a4a] rounded-lg">
                          <p className="text-sm text-white">{msg}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Barre de progression IA */}
                  <div className="mt-6 p-3 bg-[#1a1a2e] rounded-lg">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Analyse en cours</span>
                      <span className="text-[#4ECDC4]">98%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Texte innovation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                L'IA au service de votre 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"> créativité</span>
              </h2>
              
              <p className="text-lg text-white/70 mb-8">
                Notre chatbot intelligent comprend vos besoins et vous propose instantanément 
                des designs adaptés à votre demande.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: '⚡', title: 'Réponse instantanée', desc: 'Moins de 2 secondes' },
                  { icon: '🎯', title: 'Suggestions personnalisées', desc: 'Basées sur votre historique' },
                  { icon: '🔄', title: 'Amélioration continue', desc: 'Apprentissage par tests utilisateurs' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 p-4 bg-[#2a2a3a] rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-xl flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION ENTREPRISES & ÉGLISES ===== */}
      <Section bg="#1a1a2e">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['Entreprises', 'Églises'].map((tab, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === i 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white' 
                    : 'bg-[#2a2a3a] text-white/60 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab} {i === 0 ? '🏢' : '⛪'}
              </motion.button>
            ))}
          </div>

          {/* Contenu des tabs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {activeTab === 0 ? (
                // Contenu Entreprises
                <>
                  <div className="p-8 bg-[#2a2a3a] rounded-3xl border border-white/10">
                    <div className="text-5xl mb-6">🏢</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Pour les entreprises</h3>
                    <ul className="space-y-3">
                      {businessBenefits.map((benefit, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="w-6 h-6 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center text-[#4ECDC4]">✓</span>
                          <span className="text-white/80">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-3xl border border-[#4ECDC4]/20">
                    <h4 className="text-xl font-bold text-white mb-4">Impact mesuré</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-white/60 mb-1">
                          <span>Gain de temps</span>
                          <span className="text-[#4ECDC4]">+85%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-white/60 mb-1">
                          <span>Satisfaction</span>
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
                    </div>
                  </div>
                </>
              ) : (
                // Contenu Églises
                <>
                  <div className="p-8 bg-[#2a2a3a] rounded-3xl border border-white/10">
                    <div className="text-5xl mb-6">⛪</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Pour les églises</h3>
                    <ul className="space-y-3">
                      {churchBenefits.map((benefit, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="w-6 h-6 bg-[#45B7D1]/20 rounded-full flex items-center justify-center text-[#45B7D1]">✓</span>
                          <span className="text-white/80">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-[#45B7D1]/10 to-[#4ECDC4]/10 rounded-3xl border border-[#45B7D1]/20">
                    <h4 className="text-xl font-bold text-white mb-4">Événements types</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Cultes', 'Conférences', 'Séminaires', 'Croisades'].map((event, i) => (
                        <motion.div
                          key={i}
                          className="p-3 bg-white/5 rounded-lg text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-white/80 text-sm">{event}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white/60 italic">
                      +250 églises nous font déjà confiance
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* ===== SECTION PROBLÈMES RÉSOLUS ===== */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Les problèmes que nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">résolvons</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Des solutions concrètes à vos défis quotidiens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-[#2a2a3a] rounded-3xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-xl flex items-center justify-center text-2xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                <p className="text-white/60">{item.solution}</p>
                
                {/* Indicateur de résolution */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/40">Taux de résolution</span>
                    <span className="text-[#4ECDC4]">{index === 0 ? '94%' : index === 1 ? '96%' : '92%'}</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: index === 0 ? '94%' : index === 1 ? '96%' : '92%' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION FONCTIONNEMENT ===== */}
      <Section bg="#1a1a2e">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">fonctionne</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              4 étapes simples pour créer vos designs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Ligne de connexion */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-30" />
                )}
                
                <div className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                  
                  {/* Temps estimé */}
                  <span className="inline-block mt-3 px-2 py-1 bg-white/5 rounded-full text-xs text-[#4ECDC4]">
                    {index === 0 ? '30s' : index === 1 ? '1min' : index === 2 ? '2min' : '5min'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION STATS FINALES ===== */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10 text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION CTA ===== */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Background avec vague */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
            <motion.path 
              fill="url(#ctaGradient)"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{ d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]}}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">créer</span> vos designs ?
          </motion.h2>
          
          <motion.p 
            className="text-white/70 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rejoignez plus de 5000 créatifs qui nous font confiance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/chatbot"
                className="block px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30"
              >
                Commencer maintenant
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/gallery"
                className="block px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Voir la galerie
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="text-sm text-white/40 hover:text-white/60 transition-colors inline-flex items-center gap-2"
            >
              <span>←</span> Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// ===== Composant Section =====
function Section({ children, bg = "transparent" }: { children: React.ReactNode; bg?: string }) {
  return (
    <section className={`py-20 ${bg === '#1a1a2e' ? 'bg-[#1a1a2e]' : ''}`}>
      {children}
    </section>
  )
}

// ===== Données =====
const creationTypes = [
  { emoji: "📢", label: "Affiches publicitaires" },
  { emoji: "📄", label: "Flyers" },
  { emoji: "📱", label: "Publications réseaux sociaux" },
  { emoji: "💌", label: "Invitations" },
  { emoji: "🎪", label: "Visuels pour événements" },
  { emoji: "⛪", label: "Supports pour églises" },
  { emoji: "💳", label: "Cartes de visite" },
  { emoji: "📊", label: "Supports communication" },
]

const chatbotExamples = [
  "Je veux créer une affiche pour une conférence d'église",
  "Je veux un flyer pour la promotion d'une entreprise",
  "Je veux une affiche pour un événement musical",
  "Je veux une invitation d'anniversaire"
]

const businessBenefits = [
  "Trouver rapidement de l'inspiration graphique",
  "Produire plus facilement leurs supports visuels",
  "Améliorer leur communication visuelle",
  "Publier régulièrement sur les réseaux sociaux",
  "Gagner du temps dans la création graphique"
]

const churchBenefits = [
  "Créer rapidement les affiches de leurs événements",
  "S'inspirer de modèles existants",
  "Moderniser leur communication",
  "Partager facilement leurs visuels sur les réseaux sociaux"
]

const problems = [
  {
    problem: "Difficulté à trouver l'inspiration",
    solution: "Un chatbot intelligent qui présente automatiquement des designs inspirants selon votre demande."
  },
  {
    problem: "Production trop lente",
    solution: "Des templates prêts à l'emploi que vous pouvez adapter en quelques minutes."
  },
  {
    problem: "Manque de contenu visuel",
    solution: "Une bibliothèque de designs accessibles et faciles à modifier en continu."
  }
]

const steps = [
  { title: "Accédez", desc: "à la plateforme et connectez-vous" },
  { title: "Choisissez", desc: "le type de visuel souhaité" },
  { title: "Découvrez", desc: "des modèles existants adaptés" },
  { title: "Créez", desc: "votre design en quelques clics" }
]

