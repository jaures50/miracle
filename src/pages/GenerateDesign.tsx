// src/pages/GenerateDesign.tsx
import React, { useState } from "react"
import { generateImage } from "../utils/generate" // ou "../utils/pollinations"

const GenerateDesign: React.FC = () => {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [loadingMessage, setLoadingMessage] = useState("")

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Veuillez décrire votre image")
      return
    }

    setLoading(true)
    setError("")
    setImageUrl(null)
    setLoadingMessage("Génération en cours...")

    try {
      const url = await generateImage(prompt)
      setImageUrl(url)
      setPrompt("")
    } catch (err: any) {
      setError(err.message || "Erreur inconnue")
    } finally {
      setLoading(false)
      setLoadingMessage("")
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
        Générateur d'Images IA
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="Décrivez votre image..."
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            disabled={loading}
          />
          
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 min-w-[120px]"
          >
            {loading ? "Génère..." : "Générer"}
          </button>
        </div>

        {loading && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-700 flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              {loadingMessage}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">❌ {error}</p>
          </div>
        )}
      </div>

      {imageUrl && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Résultat :</h2>
          <img 
            src={imageUrl} 
            alt={prompt}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-700 italic">"{prompt}"</p>
          <button
            onClick={() => window.open(imageUrl, '_blank')}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Télécharger l'image
          </button>
        </div>
      )}
    </div>
  )
}

export default GenerateDesign