// src/utils/generate.ts (ou pollinations.ts)
// SIMULATION - Pas d'API réelle, juste des images de démonstration

// Banque d'images de démonstration (libres de droits)
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1024&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1024&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1024&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1024&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=1024&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1024&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1024&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1024&q=80",
];

/**
 * Simule la génération d'une image
 * @param prompt Le texte descriptif (non utilisé mais conservé pour l'API)
 * @returns Une URL d'image aléatoire
 */
export const generateImage = async (prompt: string): Promise<string> => {
  console.log("🎨 [SIMULATION] Génération pour:", prompt);
  
  // Simule un délai de chargement (2 secondes)
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Choisit une image aléatoire
  const randomIndex = Math.floor(Math.random() * DEMO_IMAGES.length);
  const imageUrl = DEMO_IMAGES[randomIndex];
  
  console.log("✅ [SIMULATION] Image générée:", imageUrl);
  return imageUrl;
};

// Version avec seed pour avoir la même image à chaque fois
export const generateImageWithSeed = async (prompt: string, seed: number): Promise<string> => {
  console.log("🎨 [SIMULATION] Génération avec seed:", seed);
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Utilise le seed pour choisir une image de façon déterministe
  const index = seed % DEMO_IMAGES.length;
  return DEMO_IMAGES[index];
};

// Version rapide (sans délai)
export const generateImageFast = (prompt: string): string => {
  const randomIndex = Math.floor(Math.random() * DEMO_IMAGES.length);
  return DEMO_IMAGES[randomIndex];
};