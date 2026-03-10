// src/utils/huggingface.ts
// Version simplifiée avec Pollinations.AI (100% gratuit, sans clé)

/**
 * Génère une image à partir d'un prompt textuel
 * Utilise Pollinations.AI - Gratuit, sans inscription, sans CORS
 */
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    console.log("🎨 Génération d'image pour:", prompt);
    
    // Nettoie le prompt et l'encode pour l'URL
    const cleanPrompt = prompt.trim().replace(/\s+/g, ' ');
    const encodedPrompt = encodeURIComponent(cleanPrompt);
    
    // URL directe vers l'image Pollinations
    // Format: https://pollinations.ai/p/{prompt}?width=1024&height=1024&nologo=true
    const imageUrl = `https://pollinations.ai/p/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Date.now()}`;
    
    // Vérification rapide que l'URL est accessible
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      if (!response.ok) {
        console.log("⚠️ Vérification échouée, mais on tente quand même");
      }
    } catch (e) {
      console.log("⚠️ Impossible de vérifier, tentative directe");
    }
    
    console.log("✅ Image générée!");
    return imageUrl;
    
  } catch (error: any) {
    console.error("❌ Erreur:", error);
    
    // Fallback sur une image aléatoire en cas d'erreur
    const fallbackImages = [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1024",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1024",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1024",
    ];
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[randomIndex];
  }
};

// Optionnel: Version avec seed pour avoir des images reproductibles
export const generateImageWithSeed = async (prompt: string, seed: number): Promise<string> => {
  const encodedPrompt = encodeURIComponent(prompt.trim());
  return `https://pollinations.ai/p/${encodedPrompt}?width=1024&height=1024&seed=${seed}&nologo=true`;
};

// Optionnel: Vérifier le statut du service
export const checkServiceStatus = async (): Promise<boolean> => {
  try {
    const response = await fetch('https://pollinations.ai/health', { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};