// src/pages/SubscriptionPage.tsx
import { Link } from "react-router-dom"
import { useState } from "react"

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      {/* Header */}
      <div className="px-6 py-12 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
          Choisissez le forfait qui vous <span style={{ color: "var(--primary)" }}>correspond</span>
        </h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Que vous soyez un particulier, une entreprise ou une église, 
          nous avons la formule adaptée à vos besoins de création graphique
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setBillingCycle("monthly")}
            className="px-6 py-2 rounded-full font-semibold transition-all"
            style={{
              background: billingCycle === "monthly" ? "var(--primary)" : "var(--bg-navbar)",
              color: billingCycle === "monthly" ? "white" : "var(--text-main)",
              border: "1px solid var(--border-color)"
            }}
          >
            Mensuel
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className="px-6 py-2 rounded-full font-semibold transition-all"
            style={{
              background: billingCycle === "yearly" ? "var(--primary)" : "var(--bg-navbar)",
              color: billingCycle === "yearly" ? "white" : "var(--text-main)",
              border: "1px solid var(--border-color)"
            }}
          >
            Annuel
            <span className="ml-2 text-sm" style={{ color: billingCycle === "yearly" ? "white" : "var(--primary)" }}>
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Standard */}
            <div 
              className="relative rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "var(--bg-navbar)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-4xl mb-2 block">🎨</span>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--text-main)" }}>
                    Standard
                  </h3>
                  <p className="text-sm opacity-60 mt-1">Pour les utilisateurs simples</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "var(--primary)" }}>
                    {billingCycle === "monthly" ? "9,99 €" : "95,90 €"}
                  </span>
                  <span className="opacity-60">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-green-500 mt-1">Économisez 20%</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {standardFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span style={{ color: "var(--text-main)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="#"
                  className="block w-full py-3 text-center rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{
                    background: "transparent",
                    color: "var(--primary)",
                    border: "2px solid var(--primary)"
                  }}
                >
                  Commencer
                </Link>
              </div>

              {/* Usage examples */}
              <div className="p-8 pt-0">
                <p className="text-sm opacity-60 mb-3">Idéal pour :</p>
                <div className="flex flex-wrap gap-2">
                  {standardFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ background: "var(--bg-main)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Plan Premium */}
            <div 
              className="relative rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "var(--bg-navbar)",
                border: "2px solid var(--primary)",
                transform: "scale(1.05)"
              }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--primary)" }}>
                Recommandé
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <span className="text-4xl mb-2 block">💼</span>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--text-main)" }}>
                    Premium
                  </h3>
                  <p className="text-sm opacity-60 mt-1">Pour entreprises et organisations</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "var(--primary)" }}>
                    {billingCycle === "monthly" ? "24,99 €" : "239,90 €"}
                  </span>
                  <span className="opacity-60">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-green-500 mt-1">Économisez 20%</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span style={{ color: "var(--text-main)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="#"
                  className="block w-full py-3 text-center rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{
                    background: "var(--primary)",
                    color: "white"
                  }}
                >
                  Choisir Premium
                </Link>
              </div>

              {/* Usage examples */}
              <div className="p-8 pt-0">
                <p className="text-sm opacity-60 mb-3">Idéal pour :</p>
                <div className="flex flex-wrap gap-2">
                  {premiumFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ background: "var(--bg-main)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Plan HD Professionnel */}
            <div 
              className="relative rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "var(--bg-navbar)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-4xl mb-2 block">🚀</span>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--text-main)" }}>
                    HD Professionnel
                  </h3>
                  <p className="text-sm opacity-60 mt-1">Pour agences et graphistes</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "var(--primary)" }}>
                    {billingCycle === "monthly" ? "49,99 €" : "479,90 €"}
                  </span>
                  <span className="opacity-60">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-green-500 mt-1">Économisez 20%</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span style={{ color: "var(--text-main)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="#"
                  className="block w-full py-3 text-center rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{
                    background: "transparent",
                    color: "var(--primary)",
                    border: "2px solid var(--primary)"
                  }}
                >
                  Contacter les ventes
                </Link>
              </div>

              {/* Usage examples */}
              <div className="p-8 pt-0">
                <p className="text-sm opacity-60 mb-3">Idéal pour :</p>
                <div className="flex flex-wrap gap-2">
                  {proFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ background: "var(--bg-main)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <section className="px-6 py-20" style={{ background: "var(--bg-navbar)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--text-main)" }}>
            Comparez les <span style={{ color: "var(--primary)" }}>fonctionnalités</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                  <th className="py-4 px-6 text-left" style={{ color: "var(--text-main)" }}>Fonctionnalités</th>
                  <th className="py-4 px-6 text-center" style={{ color: "var(--text-main)" }}>Standard</th>
                  <th className="py-4 px-6 text-center" style={{ color: "var(--primary)" }}>Premium</th>
                  <th className="py-4 px-6 text-center" style={{ color: "var(--text-main)" }}>Professionnel</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td className="py-4 px-6" style={{ color: "var(--text-main)" }}>{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {  feature.standard}
                    </td>
                    <td className="py-4 px-6 text-center" style={{ color: "var(--primary)" }}>
                      { feature.premium}
                    </td>
                    <td className="py-4 px-6 text-center">
                      { feature.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--text-main)" }}>
            Questions <span style={{ color: "var(--primary)" }}>fréquentes</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl p-6"
                style={{ background: "var(--bg-navbar)" }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-main)" }}>
                  {faq.question}
                </h3>
                <p className="opacity-70" style={{ color: "var(--text-main)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
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
            Prêt à créer des designs professionnels ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre communauté et commencez à créer dès aujourd'hui
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chatbot"
              className="px-8 py-4 bg-white rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
              style={{ color: "var(--primary)" }}
            >
              Essayer gratuitement
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contacter l'équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Features lists
const standardFeatures = [
  "Accès aux modèles de base (100+ modèles)",
  "Création de visuels simples",
  "Téléchargement en qualité standard (72 DPI)",
  "Assistant chatbot basique",
  "5 exports par mois",
  "Support par email"
]

const premiumFeatures = [
  "Accès à tous les modèles (500+ modèles)",
  "Modèles professionnels exclusifs",
  "Téléchargement en haute qualité (300 DPI)",
  "Assistant chatbot avancé",
  "Exports illimités",
  "Éléments graphiques premium",
  "Options de personnalisation avancées",
  "Support prioritaire"
]

const proFeatures = [
  "Accès complet à tous les designs (1000+ modèles)",
  "Modèles exclusifs créés par des pros",
  "Haute résolution pour impression (300+ DPI)",
  "Assistant chatbot personnalisé",
  "Exports illimités tous formats",
  "Bibliothèque complète d'éléments",
  "Export CMJN pour impression",
  "Support téléphonique prioritaire",
  "Formation personnalisée"
]

// Usage examples
const standardFor = ["Particuliers", "Créations occasionnelles", "Réseaux sociaux basiques"]
const premiumFor = ["PME", "Startups", "Églises", "Associations", "Communication régulière"]
const proFor = ["Agences de com'", "Graphistes", "Grandes entreprises", "Imprimeurs"]

// Comparison table
const comparisonFeatures = [
  { name: "Nombre de modèles", standard: "100+", premium: "500+", pro: "1000+" },
  { name: "Qualité d'export", standard: "72 DPI", premium: "300 DPI", pro: "300+ DPI CMJN" },
  { name: "Assistant chatbot", standard: "Basique", premium: "Avancé", pro: "Personnalisé" },
  { name: "Exports par mois", standard: "5", premium: "Illimité", pro: "Illimité" },
  { name: "Éléments graphiques", standard: "Basiques", premium: "Premium", pro: "Tous" },
  { name: "Support", standard: "Email", premium: "Prioritaire", pro: "Téléphone 24/7" },
  { name: "Formation", standard: "Non", premium: "Non", pro: "Oui" }
]

// FAQs
const faqs = [
  {
    question: "Puis-je changer de forfait à tout moment ?",
    answer: "Oui, vous pouvez changer ou résilier votre abonnement à tout moment depuis votre tableau de bord. La modification sera effective à la prochaine période de facturation."
  },
  {
    question: "Les designs créés sont-ils libres de droits ?",
    answer: "Oui, une fois votre abonnement actif, vous conservez tous les droits sur les designs que vous créez. Vous pouvez les utiliser pour usage commercial et personnel."
  },
  {
    question: "Puis-je essayer avant de m'abonner ?",
    answer: "Nous proposons une période d'essai gratuite de 7 jours sur tous nos forfaits. Vous pouvez créer jusqu'à 3 designs pour tester la plateforme."
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et les virements bancaires pour les forfaits annuels professionnels."
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non, tout est inclus dans votre abonnement. Vous n'aurez aucun frais supplémentaire, même pour les exports haute résolution."
  }
]