// src/utils/pollinations.ts
// VERSION LA PLUS SIMPLE - GARANTIE SANS ERREUR

/**
 * Génère une image avec Pollinations.AI
 * Utilise l'endpoint direct (pas d'API key nécessaire)
 */
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    console.log("🎨 Génération pour:", prompt);
    
    // Nettoie le prompt
    const cleanPrompt = prompt.trim().replace(/\s+/g, ' ');
    
    // Encode pour l'URL
    const encodedPrompt = encodeURIComponent(cleanPrompt);
    
    // URL DIRECTE - Pas d'appel API, pas de fetch, pas de CORS
    // L'image est générée à la volée quand on accède à l'URL
    const imageUrl = `https://pollinations.ai/p/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Date.now()}`;
    
    console.log("✅ URL prête:", imageUrl);
    
    // On retourne directement l'URL - Pas besoin de fetch !
    return imageUrl;
    
  } catch (error: any) {
    console.error("❌ Erreur:", error);
    
    // Fallback sur une image par défaut
    const fallbackUrls = [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1024",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1024",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1024",
    ];
    const randomIndex = Math.floor(Math.random() * fallbackUrls.length);
    return fallbackUrls[randomIndex];
  }
};

// Version ultra-simple de secours
export const generateImageSimple = (prompt: string): string => {
  const encodedPrompt = encodeURIComponent(prompt.trim());
  return `https://pollinations.ai/p/${encodedPrompt}?width=1024&height=1024&nologo=true`;
};