// src/pages/ContactPage.tsx
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    plan: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Réinitialiser le formulaire après 3 secondes
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
    }, 3000)
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden px-6 py-16 md:py-20 text-center"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)"
        }}
      >
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contactez notre <span className="text-yellow-300">équipe</span>
          </h1>
          <p className="text-xl text-white/90">
            Vous avez une question ? Besoin d'un accompagnement personnalisé ?
            Notre équipe est là pour vous aider.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text-main)" }}>
                Envoyez-nous un <span style={{ color: "var(--primary)" }}>message</span>
              </h2>
              
              {submitSuccess ? (
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-main)" }}>
                    Message envoyé avec succès !
                  </h3>
                  <p className="opacity-70" style={{ color: "var(--text-main)" }}>
                    Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                      placeholder="vous@entreprise.com"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label 
                      htmlFor="organization" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Organisation / Église / Entreprise
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                      placeholder="Nom de votre organisation"
                    />
                  </div>

                  {/* Sujet */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="subscription">Question sur les abonnements</option>
                      <option value="enterprise">Devis entreprise / église</option>
                      <option value="support">Support technique</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  {/* Plan d'abonnement (optionnel) */}
                  <div>
                    <label 
                      htmlFor="plan" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Forfait qui vous intéresse
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                    >
                      <option value="">Non spécifié</option>
                      <option value="standard">Standard - Particuliers</option>
                      <option value="premium">Premium - Entreprises/Églises</option>
                      <option value="pro">HD Professionnel - Agences</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block mb-2 font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 resize-none"
                      style={{
                        background: "var(--bg-navbar)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)"
                      }}
                      placeholder="Décrivez votre besoin, votre projet ou votre question..."
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "var(--primary)"
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : "Envoyer le message"}
                  </button>

                  <p className="text-sm opacity-60 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text-main)" }}>
                Autres moyens de nous <span style={{ color: "var(--primary)" }}>contacter</span>
              </h2>

              {/* Cartes d'information */}
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div 
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-main)" }}>
                      Email
                    </h3>
                    <p className="text-sm opacity-70 mb-2" style={{ color: "var(--text-main)" }}>
                      Pour toute question générale
                    </p>
                    <a 
                      href="mailto:contact@designplatform.com"
                      className="hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      contact@designplatform.com
                    </a>
                  </div>
                </div>

                {/* Support */}
                <div 
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    🎨
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-main)" }}>
                      Support technique
                    </h3>
                    <p className="text-sm opacity-70 mb-2" style={{ color: "var(--text-main)" }}>
                      Besoin d'aide avec la plateforme ?
                    </p>
                    <a 
                      href="mailto:support@designplatform.com"
                      className="hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      support@designplatform.com
                    </a>
                  </div>
                </div>

                {/* Commercial */}
                <div 
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    💼
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-main)" }}>
                      Devis entreprises & églises
                    </h3>
                    <p className="text-sm opacity-70 mb-2" style={{ color: "var(--text-main)" }}>
                      Pour les besoins spécifiques des organisations
                    </p>
                    <a 
                      href="mailto:commercial@designplatform.com"
                      className="hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      commercial@designplatform.com
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div 
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-main)" }}>
                      Téléphone
                    </h3>
                    <p className="text-sm opacity-70 mb-2" style={{ color: "var(--text-main)" }}>
                      Du lundi au vendredi, 9h-18h
                    </p>
                    <a 
                      href="tel:+33123456789"
                      className="hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

             

              {/* Réseaux sociaux */}
              <div 
                className="p-6 rounded-xl"
                style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
              >
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-main)" }}>
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    f
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    in
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    ig
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte / Localisation */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div 
            className="rounded-2xl overflow-hidden h-96 relative"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            {/* Simulateur de carte */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-lg font-semibold mb-2" style={{ color: "var(--text-main)" }}>
                  Notre bureau
                </p>
                <p className="opacity-70" style={{ color: "var(--text-main)" }}>
                  123 Avenue de l'Innovation<br />
                  75001 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="px-6 py-16" style={{ background: "var(--bg-navbar)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: "var(--text-main)" }}>
            Réponses à vos <span style={{ color: "var(--primary)" }}>questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {quickFaqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl"
                style={{ background: "var(--bg-main)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>
                  {faq.question}
                </h3>
                <p className="text-sm opacity-70" style={{ color: "var(--text-main)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: "var(--primary)" }}
            >
              Voir toutes les questions fréquentes
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
            Prêt à commencer ?
          </h2>
          <p className="text-lg opacity-70 mb-8">
            Créez votre premier design dès maintenant avec notre assistant intelligent
          </p>
          <Link
            to="/chatbot"
            className="inline-block px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl hover:scale-105"
            style={{ background: "var(--primary)" }}
          >
            Commencer gratuitement
          </Link>
        </div>
      </section>
    </div>
  )
}

// FAQ rapides
const quickFaqs = [
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer: "Vous pouvez essayer la plateforme gratuitement pendant 7 jours, avec accès à toutes les fonctionnalités du forfait Premium."
  },
  {
    question: "Puis-je résilier à tout moment ?",
    answer: "Oui, vous pouvez résilier votre abonnement à tout moment depuis votre tableau de bord."
  },
  {
    question: "Les designs sont-ils libres de droits ?",
    answer: "Oui, tous les designs créés sur la plateforme sont libres de droits pour usage commercial."
  },
  {
    question: "Proposez-vous des tarifs pour les églises ?",
    answer: "Oui, nous proposons des tarifs spéciaux pour les églises et organisations religieuses. Contactez-nous pour plus d'informations."
  }
]