// src/pages/AboutPage.tsx
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      {/* En-tête */}
      <div className="px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-main)" }}>
          À propos de <span style={{ color: "var(--primary)" }}>notre plateforme</span>
        </h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Une solution innovante pour la création graphique assistée par intelligence artificielle
        </p>
      </div>

      {/* Section Présentation */}
      <div className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Carte principale */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Notre mission
            </h2>
            <p className="mb-4 opacity-80" style={{ color: "var(--text-main)" }}>
              Notre plateforme est un site de création graphique et d'inspiration visuelle qui permet aux utilisateurs de concevoir différents supports de communication à partir de modèles existants.
            </p>
            <p className="opacity-80" style={{ color: "var(--text-main)" }}>
              Que vous soyez un particulier, une entreprise ou une église, nous vous aidons à créer des visuels professionnels en quelques minutes.
            </p>
          </div>

          {/* Types de créations */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Ce que vous pouvez créer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {creationTypes.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="text-sm" style={{ color: "var(--text-main)" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Notre innovation
            </h2>
            <p className="mb-4 opacity-80" style={{ color: "var(--text-main)" }}>
              L'innovation principale de notre plateforme repose sur l'intégration d'un système de chatbots intelligents qui aident les utilisateurs à trouver rapidement l'inspiration pour leurs designs.
            </p>
            
            <div className="bg-opacity-50 p-4 rounded-lg" style={{ background: "var(--bg-main)" }}>
              <p className="font-medium mb-2" style={{ color: "var(--text-main)" }}>Exemples de demandes :</p>
              <div className="space-y-2">
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>• "Je veux créer une affiche pour une conférence d'église"</p>
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>• "Je veux un flyer pour la promotion d'une entreprise"</p>
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>• "Je veux une affiche pour un événement musical"</p>
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>• "Je veux une invitation d'anniversaire"</p>
              </div>
            </div>
          </div>

          {/* Pour les entreprises */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Pour les entreprises
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2" style={{ color: "var(--text-main)" }}>Notre plateforme permet aux entreprises de :</p>
                <ul className="space-y-2">
                  {businessBenefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="opacity-80" style={{ color: "var(--text-main)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-opacity-50 p-4 rounded-lg" style={{ background: "var(--bg-main)" }}>
                <p className="font-medium mb-2" style={{ color: "var(--text-main)" }}>Impact :</p>
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>
                  Une communication visuelle plus rapide et plus efficace pour les entreprises.
                </p>
              </div>
            </div>
          </div>

          {/* Pour les églises */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Pour les églises
            </h2>
            <p className="mb-4 opacity-80" style={{ color: "var(--text-main)" }}>
              Les églises organisent régulièrement plusieurs activités : cultes spéciaux, conférences, séminaires, croisades, événements spirituels.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2" style={{ color: "var(--text-main)" }}>Grâce à notre plateforme :</p>
                <ul className="space-y-2">
                  {churchBenefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="opacity-80" style={{ color: "var(--text-main)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-opacity-50 p-4 rounded-lg" style={{ background: "var(--bg-main)" }}>
                <p className="font-medium mb-2" style={{ color: "var(--text-main)" }}>Impact :</p>
                <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>
                  Une meilleure visibilité et une communication moderne pour les églises.
                </p>
              </div>
            </div>
          </div>

          {/* Problèmes résolus */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Les problèmes que nous résolvons
            </h2>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: "var(--primary)" }}>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--text-main)" }}>{item.problem}</h3>
                  <p className="text-sm opacity-80" style={{ color: "var(--text-main)" }}>{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fonctionnement */}
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{ background: "var(--bg-navbar)", border: "1px solid var(--border-color)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Comment ça fonctionne
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white" style={{ background: "var(--primary)" }}>
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--text-main)" }}>{step.title}</p>
                  <p className="text-xs opacity-70" style={{ color: "var(--text-main)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/edd"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold"
              style={{ background: "var(--primary)" }}
            >
              Commencer la création
            </Link>
            <div className="mt-4">
              <Link
                to="/"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-main)" }}
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Données
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
    problem: "Difficulté à trouver rapidement l'inspiration graphique",
    solution: "Un chatbot intelligent qui présente automatiquement des designs inspirants selon la demande de l'utilisateur."
  },
  {
    problem: "Production lente de contenus visuels",
    solution: "Permettre aux utilisateurs de s'inspirer de modèles existants et de les adapter rapidement."
  },
  {
    problem: "Besoin constant de contenu visuel",
    solution: "Une bibliothèque de designs accessibles et faciles à modifier."
  }
]

const steps = [
  { title: "Accédez", desc: "à la plateforme" },
  { title: "Choisissez", desc: "le type de visuel" },
  { title: "Découvrez", desc: "des modèles existants" },
  { title: "Créez", desc: "votre propre design" }
]