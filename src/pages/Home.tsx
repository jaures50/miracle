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
              <span className="block text-yellow-300">Exceptionnels avec l'IA</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              AI Design Platform vous aide à créer des graphismes professionnels,
              des posts pour réseaux sociaux et des visuels marketing facilement
              grâce à l'intelligence artificielle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/generate"
                className="px-8 py-4 bg-white rounded-lg font-semibold text-center transition-all hover:shadow-xl hover:scale-105"
                style={{ color: "var(--primary)" }}
              >
                Commencer gratuitement
              </Link>
              
              <button
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Voir la démo
              </button>
            </div>

            {/* Statistiques */}
            <div className="flex gap-8 mt-12 text-white">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Utilisateurs actifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm opacity-80">Designs créés</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm opacity-80">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-main)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Des fonctionnalités <span style={{ color: "var(--primary)" }}>puissantes</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour créer des designs professionnels en quelques minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--bg-navbar)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-main)" }}>
                  {feature.title}
                </h3>
                <p className="opacity-70" style={{ color: "var(--text-main)" }}>
                  {feature.description}
                </p>
                
                {/* Lien d'apprentissage */}
                <Link 
                  to={feature.link}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{ color: "var(--primary)" }}
                >
                  En savoir plus 
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="px-6 py-20" style={{ background: "var(--bg-navbar)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-main)" }}>
                Créez en quelques <span style={{ color: "var(--primary)" }}>secondes</span>
              </h2>
              <p className="text-lg mb-8 opacity-70">
                Notre IA génère des designs uniques basés sur vos descriptions. 
                Plus besoin d'être un expert en design pour créer des visuels professionnels.
              </p>
              
              <div className="space-y-4">
                {showcaseItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: "var(--primary)" }}
                    >
                      ✓
                    </div>
                    <p style={{ color: "var(--text-main)" }}>{item}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/generate"
                className="inline-block mt-8 px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl hover:scale-105"
                style={{ background: "var(--primary)" }}
              >
                Essayez maintenant
              </Link>
            </div>

            {/* Mockup/Image Placeholder */}
            <div 
              className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-xl font-semibold">Aperçu de l'éditeur</p>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-lg"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
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
            Prêt à créer quelque chose d'extraordinaire ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de créateurs qui utilisent déjà AI Design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/generate"
              className="px-8 py-4 bg-white rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
              style={{ color: "var(--primary)" }}
            >
              Créer mon premier design
            </Link>
            
            <Link
              to="/gallery"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Voir la galerie
            </Link>
          </div>

          {/* Testimonials rapides */}
          <div className="grid grid-cols-3 gap-4 mt-12 text-white">
            <div className="text-center">
              <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
              <p className="text-sm opacity-90">"Incroyable!"</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
              <p className="text-sm opacity-90">"Très intuitif"</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
              <p className="text-sm opacity-90">"Je recommande"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Données séparées pour plus de clarté
const features = [
  {
    emoji: "🎨",
    title: "Générateur d'images IA",
    description: "Créez des images époustouflantes à partir de descriptions textes simples.",
    link: "/generate"
  },
  {
    emoji: "✏️",
    title: "Éditeur de design",
    description: "Modifiez vos créations avec notre éditeur canvas avancé et intuitif.",
    link: "/generate"
  },
 
  {
    emoji: "🤖",
    title: "Assistant IA",
    description: "Notre chatbot vous guide et suggère des améliorations.",
    link: "/chatbot"
  },
  {
    emoji: "📸",
    title: "Banque d'images",
    description: "Accédez à des millions d'images libres de droits.",
    link: "/gallery"
  },
  {
    emoji: "⚡",
    title: "Export rapide",
    description: "Exportez en haute résolution en un clic.",
    link: "/generate"
  }
]

const showcaseItems = [
  "Génération automatique de designs",
  "Suggestions intelligentes en temps réel",
  "Personnalisation avancée",
  "Export dans tous les formats"
]