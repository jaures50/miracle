// src/components/Footer.tsx
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState,  } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-[#0f0f1a] border-t border-white/10 overflow-hidden">
      
      {/* Background décoratif */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-[300px] h-[300px] bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 - Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                  GraphiNova
                </span>
              </h2>
            </Link>
            
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Créez des designs professionnels en un clin d'œil grâce à notre assistant IA. 
              Plus de 5000 créatifs nous font confiance.
            </p>

            {/* Stats miniatures */}
            <div className="flex gap-4">
              {[
                { value: '5K+', label: 'Créatifs' },
                { value: '10K+', label: 'Designs' },
                { value: '98%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-white font-bold text-sm">{stat.value}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/gallery", label: "Galerie" },
                { to: "/generate", label: "Générateur IA" },
                { to: "/chatbot", label: "Assistant" },
                { to: "/about", label: "À propos" },
                { to: "/contact", label: "Contact" }
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <Link 
                    to={link.to}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#4ECDC4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Catégories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Catégories</h3>
            <ul className="space-y-3">
              {[
                "Affiches publicitaires",
                "Flyers",
                "Réseaux sociaux",
                "Invitations",
                "Événements",
                "Supports églises"
              ].map((cat, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <Link 
                    to={`/gallery?category=${cat.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FF6B6B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {cat}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 - Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Recevez nos derniers designs et conseils
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-[#2a2a3a] border border-white/10 rounded-lg text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ECDC4] transition-all"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-lg text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </div>
              {subscribed && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-[#4ECDC4]"
                >
                  ✅ Merci pour votre inscription !
                </motion.p>
              )}
            </form>

            {/* Contact rapide */}
            <div className="space-y-2">
              <a 
                href="mailto:contact@graphinova.com"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <span className="text-[#4ECDC4]">📧</span>
                contact@graphinova.com
              </a>
              <a 
                href="tel:+33123456789"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <span className="text-[#FF6B6B]">📞</span>
                +33 1 23 45 67 89
              </a>
            </div>
          </motion.div>
        </div>

        {/* Séparateur avec animation */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <motion.p 
            className="text-white/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} GraphiNova. Tous droits réservés.
          </motion.p>

          {/* Réseaux sociaux */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "📘", href: "#", label: "Facebook", color: "#1877F2" },
              { icon: "📷", href: "#", label: "Instagram", color: "#E4405F" },
              { icon: "🐦", href: "#", label: "Twitter", color: "#1DA1F2" },
              { icon: "💼", href: "#", label: "LinkedIn", color: "#0A66C2" },
              { icon: "🎨", href: "#", label: "Dribbble", color: "#EA4C89" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-[#2a2a3a] flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-[#4ECDC4]/30 transition-all group"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: social.color,
                  color: 'white'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Liens légaux */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {["Mentions légales", "Confidentialité", "CGU"].map((link, i) => (
              <Link
                key={i}
                to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/40 hover:text-white text-xs transition-colors"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Badge de version */}
        <motion.div 
          className="absolute bottom-4 right-4 px-3 py-1 bg-[#2a2a3a] rounded-full border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xs text-white/40">
            v2.4.0 • <span className="text-[#4ECDC4]">Bêta</span>
          </span>
        </motion.div>
      </div>
    </footer>
  )
}