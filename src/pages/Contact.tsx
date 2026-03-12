// src/pages/ContactPage.tsx
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    plan: ""
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)
  const [] = useState({ x: 0, y: 0 })

  // Effet de particules pour le hero
  useEffect(() => {
    const handleMouseMove = ( ) => {
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) errors.name = "Le nom est requis"
    else if (formData.name.length < 2) errors.name = "Nom trop court"
    
    if (!formData.email.trim()) errors.email = "L'email est requis"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email invalide"
    
    if (!formData.subject) errors.subject = "Sélectionnez un sujet"
    
    if (!formData.message.trim()) errors.message = "Le message est requis"
    else if (formData.message.length < 10) errors.message = "Message trop court (min 10 caractères)"
    
    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Réinitialiser le formulaire après 5 secondes
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        plan: ""
      })
    }, 5000)
  }

  // Stats pour la page
  const stats = [
    { value: '24/7', label: 'Support disponible', icon: '⚡', color: '#FF6B6B' },
    { value: '2h', label: 'Délai de réponse', icon: '⏱️', color: '#4ECDC4' },
    { value: '98%', label: 'Satisfaction', icon: '⭐', color: '#45B7D1' },
    { value: '500+', label: 'Clients satisfaits', icon: '🤝', color: '#A8E6CF' }
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
          
          {/* Particules */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
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
                📞 Parlons de votre projet
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Contactez notre</span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200%' }}
              >
                équipe GraphiNova
              </motion.span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Une question ? Besoin d'un accompagnement personnalisé ?
              Notre équipe est là pour vous aider.
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat, i) => (
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

      {/* ===== SECTION CONTACT ===== */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Formulaire - 3 colonnes */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Envoyez-nous un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">message</span>
                </h2>
                
                {submitSuccess ? (
                  <motion.div 
                    className="p-8 rounded-xl text-center bg-[#2a2a3a] border border-[#4ECDC4]/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2 }}
                    >
                      ✅
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-white/60">
                      Notre équipe vous répondra dans les plus brefs délais (généralement sous 2h).
                    </p>
                    <div className="mt-4 w-full h-1 bg-white/10 rounded-full">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Grille pour nom et email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Nom */}
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block mb-2 font-medium text-white/80"
                        >
                          Nom complet <span className="text-[#FF6B6B]">*</span>
                        </label>
                        <motion.div
                          animate={activeField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField('name')}
                            onBlur={() => setActiveField(null)}
                            required
                            className={`w-full px-4 py-3 bg-[#2a2a3a] border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all ${
                              formErrors.name 
                                ? 'border-[#FF6B6B]' 
                                : 'border-white/10 focus:border-[#4ECDC4]'
                            }`}
                            placeholder="Jean Dupont"
                          />
                        </motion.div>
                        {formErrors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-xs text-[#FF6B6B]"
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block mb-2 font-medium text-white/80"
                        >
                          Email professionnel <span className="text-[#FF6B6B]">*</span>
                        </label>
                        <motion.div
                          animate={activeField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            required
                            className={`w-full px-4 py-3 bg-[#2a2a3a] border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all ${
                              formErrors.email 
                                ? 'border-[#FF6B6B]' 
                                : 'border-white/10 focus:border-[#4ECDC4]'
                            }`}
                            placeholder="vous@entreprise.com"
                          />
                        </motion.div>
                        {formErrors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-xs text-[#FF6B6B]"
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Organisation */}
                    <div>
                      <label 
                        htmlFor="organization" 
                        className="block mb-2 font-medium text-white/80"
                      >
                        Organisation / Église / Entreprise
                      </label>
                      <motion.div
                        animate={activeField === 'organization' ? { scale: 1.02 } : { scale: 1 }}
                      >
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          onFocus={() => setActiveField('organization')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-3 bg-[#2a2a3a] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#4ECDC4] transition-all"
                          placeholder="Nom de votre organisation"
                        />
                      </motion.div>
                    </div>

                    {/* Sujet */}
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block mb-2 font-medium text-white/80"
                      >
                        Sujet <span className="text-[#FF6B6B]">*</span>
                      </label>
                      <motion.div
                        animate={activeField === 'subject' ? { scale: 1.02 } : { scale: 1 }}
                      >
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setActiveField('subject')}
                          onBlur={() => setActiveField(null)}
                          required
                          className={`w-full px-4 py-3 bg-[#2a2a3a] border rounded-xl text-white focus:outline-none transition-all ${
                            formErrors.subject 
                              ? 'border-[#FF6B6B]' 
                              : 'border-white/10 focus:border-[#4ECDC4]'
                          }`}
                        >
                          <option value="" className="bg-[#2a2a3a]">Sélectionnez un sujet</option>
                          <option value="information" className="bg-[#2a2a3a]">📝 Demande d'information</option>
                          <option value="subscription" className="bg-[#2a2a3a]">💰 Question sur les abonnements</option>
                          <option value="enterprise" className="bg-[#2a2a3a]">🏢 Devis entreprise / église</option>
                          <option value="support" className="bg-[#2a2a3a]">🔧 Support technique</option>
                          <option value="partnership" className="bg-[#2a2a3a]">🤝 Partenariat</option>
                          <option value="other" className="bg-[#2a2a3a]">✨ Autre</option>
                        </select>
                      </motion.div>
                      {formErrors.subject && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-xs text-[#FF6B6B]"
                        >
                          {formErrors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Plan d'abonnement */}
                    <div>
                      <label 
                        htmlFor="plan" 
                        className="block mb-2 font-medium text-white/80"
                      >
                        Forfait qui vous intéresse
                      </label>
                      <motion.div
                        animate={activeField === 'plan' ? { scale: 1.02 } : { scale: 1 }}
                      >
                        <select
                          id="plan"
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          onFocus={() => setActiveField('plan')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-3 bg-[#2a2a3a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4ECDC4] transition-all"
                        >
                          <option value="" className="bg-[#2a2a3a]">Non spécifié</option>
                          <option value="standard" className="bg-[#2a2a3a]">📊 Standard - Particuliers</option>
                          <option value="premium" className="bg-[#2a2a3a]">⭐ Premium - Entreprises/Églises</option>
                          <option value="pro" className="bg-[#2a2a3a]">🚀 HD Professionnel - Agences</option>
                        </select>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block mb-2 font-medium text-white/80"
                      >
                        Message <span className="text-[#FF6B6B]">*</span>
                      </label>
                      <motion.div
                        animate={activeField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          required
                          rows={6}
                          className={`w-full px-4 py-3 bg-[#2a2a3a] border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all resize-none ${
                            formErrors.message 
                              ? 'border-[#FF6B6B]' 
                              : 'border-white/10 focus:border-[#4ECDC4]'
                          }`}
                          placeholder="Décrivez votre besoin, votre projet ou votre question..."
                        />
                      </motion.div>
                      {formErrors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-xs text-[#FF6B6B]"
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                      <p className="mt-1 text-xs text-white/40 text-right">
                        {formData.message.length}/500 caractères
                      </p>
                    </div>

                    {/* Bouton d'envoi */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : "Envoyer le message"}
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ opacity: 0.2 }}
                      />
                    </motion.button>

                    <p className="text-xs text-white/40 text-center">
                      * Champs obligatoires • Réponse garantie sous 24h
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Informations de contact - 2 colonnes */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Autres moyens de nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">contacter</span>
              </h2>

              {/* Cartes d'information animées */}
              {[
                {
                  icon: "📧",
                  title: "Email général",
                  subtitle: "Pour toute question",
                  email: "contact@graphinova.com",
                  color: "#FF6B6B",
                  delay: 0.1
                },
                {
                  icon: "🎨",
                  title: "Support technique",
                  subtitle: "Besoin d'aide avec la plateforme ?",
                  email: "support@graphinova.com",
                  color: "#4ECDC4",
                  delay: 0.2
                },
                {
                  icon: "💼",
                  title: "Devis entreprises & églises",
                  subtitle: "Pour les besoins spécifiques",
                  email: "commercial@graphinova.com",
                  color: "#45B7D1",
                  delay: 0.3
                },
                {
                  icon: "📞",
                  title: "Téléphone",
                  subtitle: "Lun-Ven, 9h-18h",
                  phone: "+33 1 23 45 67 89",
                  color: "#A8E6CF",
                  delay: 0.4
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10 hover:border-[#4ECDC4]/30 transition-all group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                      style={{ background: `${item.color}20`, color: item.color }}
                      whileHover={{ rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/60 mb-2">{item.subtitle}</p>
                      {item.email ? (
                        <a 
                          href={`mailto:${item.email}`}
                          className="text-[#4ECDC4] hover:underline text-sm"
                        >
                          {item.email}
                        </a>
                      ) : (
                        <a 
                          href={`tel:${item.phone}`}
                          className="text-[#4ECDC4] hover:underline text-sm"
                        >
                          {item.phone}
                        </a>
                      )}
                    </div>
                    <motion.div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Réseaux sociaux */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-semibold text-white mb-4">Suivez-nous sur les réseaux</h3>
                <div className="flex gap-4">
                  {[
                    { icon: "f", color: "#1877F2", link: "#" },
                    { icon: "in", color: "#0A66C2", link: "#" },
                    { icon: "ig", color: "#E4405F", link: "#" },
                    { icon: "X", color: "#000000", link: "#" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold transition-all"
                      style={{ background: social.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Disponibilité */}
              <motion.div 
                className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Disponibilité</h3>
                  <span className="px-3 py-1 bg-[#4ECDC4]/20 rounded-full text-xs text-[#4ECDC4]">
                    En ligne
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Lundi - Vendredi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Samedi</span>
                    <span className="text-white">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Dimanche</span>
                    <span className="text-white">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                    <span className="text-xs text-white/60">Support disponible en direct</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION MAP ===== */}
      <section className="px-6 pb-20">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden h-96 border border-white/10">
            {/* Carte interactive simulée */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
              {/* Grille de la carte */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#map-grad)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#4ECDC4" />
                    <stop offset="100%" stopColor="#45B7D1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>

              {/* Points d'intérêt */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-3xl shadow-xl shadow-[#FF6B6B]/50">
                    📍
                  </div>
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Informations */}
              <div className="absolute bottom-8 left-8 p-6 bg-[#1a1a2e]/80 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Notre bureau</h3>
                <p className="text-white/60">
                  123 Avenue de l'Innovation<br />
                  75001 Paris, France
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                  <span className="text-xs text-white/40">À 5min du métro</span>
                </div>
              </div>

              {/* Badge de navigation */}
              <motion.a 
                href="#"
                className="absolute top-8 right-8 px-4 py-2 bg-[#2a2a3a] rounded-xl border border-white/10 text-white text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>🗺️</span>
                Obtenir l'itinéraire
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== SECTION FAQ ===== */}
      <section className="px-6 py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Réponses à vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">questions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Les questions les plus fréquentes sur nos services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {quickFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: '#4ECDC4' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    ?
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-sm text-white/60">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-[#4ECDC4] hover:gap-3 transition-all group"
            >
              <span>Voir toutes les questions fréquentes</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION CTA ===== */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Background avec vague */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
            <motion.path 
              fill="url(#contactGradient)"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{ d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]}}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            Prêt à commencer ?
          </motion.h2>
          
          <motion.p 
            className="text-white/70 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Créez votre premier design dès maintenant avec notre assistant intelligent
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/chatbot"
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold shadow-xl shadow-[#FF6B6B]/30 inline-flex items-center gap-2 group"
              >
                <span>Commencer gratuitement</span>
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
      </section>
    </div>
  )
}

// FAQ rapides enrichies
const quickFaqs = [
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer: "Vous pouvez essayer la plateforme gratuitement pendant 7 jours, avec accès à toutes les fonctionnalités du forfait Premium. Aucune carte bancaire requise."
  },
  {
    question: "Puis-je résilier à tout moment ?",
    answer: "Oui, vous pouvez résilier votre abonnement à tout moment depuis votre tableau de bord. Sans frais, sans engagement."
  },
  {
    question: "Les designs sont-ils libres de droits ?",
    answer: "Oui, tous les designs créés sur la plateforme sont libres de droits pour usage commercial et personnel."
  },
  {
    question: "Proposez-vous des tarifs pour les églises ?",
    answer: "Oui, nous proposons des tarifs spéciaux pour les églises et organisations religieuses avec -30% de réduction. Contactez-nous !"
  }
]