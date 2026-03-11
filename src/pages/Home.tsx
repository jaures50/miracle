// src/pages/HomePage.tsx
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec background gradient */}
      <section 
        className="relative overflow-hidden px-6 py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)"
        }}
      >
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Créez des Designs
              <span className="block text-yellow-300">Professionnels en un Clin d'Œil</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Trouvez l'inspiration instantanément grâce à notre assistant intelligent. 
              Créez des affiches, flyers, publications réseaux sociaux et supports de communication 
              pour entreprises et églises à partir de modèles existants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/chatbot"
                className="px-8 py-4 bg-white rounded-lg font-semibold text-center transition-all hover:shadow-xl hover:scale-105"
                style={{ color: "var(--primary)" }}
              >
                Commencer la création
              </Link>
              
              <Link
                to="/gallery"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
              >
                Voir les modèles
              </Link>
            </div>

            {/* Statistiques */}
            <div className="flex gap-8 mt-12 text-white">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Modèles disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Églises partenaires</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm opacity-80">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de création Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-main)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Créez tous vos <span style={{ color: "var(--primary)" }}>supports de communication</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Des affiches publicitaires aux cartes de visite, trouvez le modèle parfait pour votre projet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {creationTypes.map((type, index) => (
              <Link
                key={index}
                to="/chatbot"
                className="group p-6 rounded-xl text-center transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "var(--bg-navbar)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {type.emoji}
                </div>
                <h3 className="font-semibold" style={{ color: "var(--text-main)" }}>
                  {type.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Chatbot Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-navbar)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ background: "var(--primary)", color: "white" }}>
                Innovation 🤖
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-main)" }}>
                Un assistant intelligent pour 
                <span style={{ color: "var(--primary)" }}> trouver l'inspiration</span>
              </h2>
              <p className="text-lg mb-6 opacity-70">
                Notre chatbot analyse vos besoins et vous propose instantanément des designs adaptés.
              </p>
              
              <div className="space-y-4 mb-8">
                {chatbotExamples.map((example, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg"
                    style={{ background: "var(--bg-main)" }}
                  >
                    <p className="font-medium" style={{ color: "var(--text-main)" }}>
                      "{example}"
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/chatbot"
                className="inline-block px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl hover:scale-105"
                style={{ background: "var(--primary)" }}
              >
                Essayer l'assistant maintenant
              </Link>
            </div>

            {/* Chatbot Mockup */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div className="p-6">
                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ background: "var(--primary)" }}>
                    🤖
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "var(--text-main)" }}>Assistant Design</h4>
                    <p className="text-sm opacity-60">En ligne</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                      👤
                    </div>
                    <div className="flex-1 p-3 rounded-lg" style={{ background: "var(--bg-navbar)" }}>
                      <p style={{ color: "var(--text-main)" }}>Je veux créer une affiche pour une conférence d'église</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ background: "var(--primary)" }}>
                      🤖
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg mb-2" style={{ background: "var(--primary)", color: "white" }}>
                        <p>J'ai trouvé 12 modèles d'affiches pour conférence d'église :</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square rounded bg-gray-200"></div>
                        <div className="aspect-square rounded bg-gray-200"></div>
                        <div className="aspect-square rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-main)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Forfaits adaptés à <span style={{ color: "var(--primary)" }}>vos besoins</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Choisissez l'abonnement qui correspond à votre activité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptions.map((sub, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl transition-all hover:scale-105"
                style={{
                  background: "var(--bg-navbar)",
                  border: sub.popular ? "2px solid var(--primary)" : "1px solid var(--border-color)"
                }}
              >
                {sub.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                    style={{ background: "var(--primary)" }}>
                    Plus populaire
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-main)" }}>
                  {sub.name}
                </h3>
                <p className="text-sm opacity-60 mb-4">{sub.for}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "var(--primary)" }}>
                    {sub.price}
                  </span>
                  <span className="opacity-60">/mois</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {sub.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm" style={{ color: "var(--text-main)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/subscription"
                  className="block w-full py-3 text-center rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{
                    background: sub.popular ? "var(--primary)" : "transparent",
                    color: sub.popular ? "white" : "var(--primary)",
                    border: sub.popular ? "none" : "2px solid var(--primary)"
                  }}
                >
                  Choisir ce forfait
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apports Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-navbar)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pour les entreprises */}
            <div className="p-8 rounded-2xl" style={{ background: "var(--bg-main)" }}>
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
                Pour les entreprises
              </h3>
              <ul className="space-y-3">
                {businessBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span style={{ color: "var(--text-main)" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pour les églises */}
            <div className="p-8 rounded-2xl" style={{ background: "var(--bg-main)" }}>
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
                Pour les églises
              </h3>
              <ul className="space-y-3">
                {churchBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span style={{ color: "var(--text-main)" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic opacity-70" style={{ color: "var(--text-main)" }}>
                Idéal pour : cultes spéciaux, conférences, séminaires, croisades et événements spirituels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="px-6 py-20 text-center"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)"
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à révolutionner votre communication visuelle ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez les entreprises et églises qui créent leurs designs en quelques minutes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chatbot"
              className="px-8 py-4 bg-white rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
              style={{ color: "var(--primary)" }}
            >
              Commencer maintenant
            </Link>
            
            <Link
              to="/gallery"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Explorer les modèles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Données
const creationTypes = [
  { emoji: "📢", title: "Affiches publicitaires" },
  { emoji: "📄", title: "Flyers" },
  { emoji: "📱", title: "Publications réseaux sociaux" },
  { emoji: "💌", title: "Invitations" },
  { emoji: "🎪", title: "Visuels pour événements" },
  { emoji: "⛪", title: "Supports pour églises" },
  { emoji: "💳", title: "Cartes de visite" },
  { emoji: "📊", title: "Supports communication" },
]

const chatbotExamples = [
  "Je veux créer une affiche pour une conférence d'église",
  "Je veux un flyer pour la promotion d'une entreprise",
  "Je veux une affiche pour un événement musical",
  "Je veux une invitation d'anniversaire"
]

const subscriptions = [
  {
    name: "Standard",
    for: "Utilisateurs simples",
    price: "9,99 €",
    features: [
      "Accès aux modèles de base",
      "Création de visuels simples",
      "Téléchargement qualité standard"
    ],
    popular: false
  },
  {
    name: "Premium",
    for: "Entreprises et organisations",
    price: "24,99 €",
    features: [
      "Plus de modèles professionnels",
      "Davantage d'éléments graphiques",
      "Téléchargement haute qualité",
      "Plus d'options de personnalisation"
    ],
    popular: true
  },
  {
    name: "HD Professionnel",
    for: "Agences et graphistes",
    price: "49,99 €",
    features: [
      "Accès complet à tous les designs",
      "Visuels en haute résolution",
      "Modèles exclusifs",
      "Exports pour impression professionnelle"
    ],
    popular: false
  }
]

const businessBenefits = [
  "Trouver rapidement de l'inspiration graphique",
  "Produire plus facilement vos supports visuels",
  "Améliorer votre communication visuelle",
  "Publier régulièrement sur les réseaux sociaux",
  "Gagner du temps dans la création graphique"
]

const churchBenefits = [
  "Créer rapidement les affiches de vos événements",
  "Vous inspirer de modèles existants",
  "Moderniser votre communication",
  "Partager facilement vos visuels sur les réseaux sociaux"
]