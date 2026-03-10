// src/utils/openai.ts
import OpenAI from "openai"

// Vérification que la clé existe
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

if (!apiKey) {
  console.error("❌ Clé OpenAI manquante ! Vérifie ton fichier .env")
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true // Important pour une utilisation dans le navigateur
})

interface OpenAIImageResponse {
  data: { url: string }[]
}

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    if (!apiKey) {
      throw new Error("Clé OpenAI non configurée")
    }

    const response = await openai.images.generate({
      model: "dall-e-3", // Le modèle correct est "dall-e-3" ou "dall-e-2"
      prompt,
      size: "1024x1024",
      n: 1,
    })

    const typedResponse = response as unknown as OpenAIImageResponse
    
    if (!typedResponse.data?.[0]?.url) {
      throw new Error("Pas d'URL dans la réponse")
    }

    return typedResponse.data[0].url
  } catch (error) {
    console.error("Erreur OpenAI:", error)
    throw error
  }
}