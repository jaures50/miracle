// src/pages/ChatbotPage.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "suggestion" | "tip" | "success" | "warning";
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "✨ **Salut ! Je suis ton assistant design IA**\n\nJe peux t'aider avec :\n\n• 🎨 **Couleurs** - Palettes, harmonies, contrastes\n• ✏️ **Typographie** - Polices, associations, hiérarchie\n• 🛠️ **Outils** - Logiciels gratuits et pro\n• 📱 **Réseaux sociaux** - Dimensions, formats\n• 🔥 **Tendances** - Styles actuels\n• ⭐ **Logo** - Création, principes\n• 💻 **UI/UX** - Interfaces, expérience utilisateur\n\n**Pose-moi ta question !** 👇",
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Base de connaissances étendue avec couleurs GraphiNova
  const knowledgeBase = {
    greetings: [
      "👋 Bonjour ! Comment puis-je t'aider avec tes designs aujourd'hui ?",
      "✨ Salut ! Prêt à créer quelque chose de magnifique ?",
      "🎨 Hey ! Des questions sur le design ? Je suis là !",
    ],
    colors: [
      "🎨 **Les couleurs complémentaires** créent du contraste. Ex: bleu/orange, violet/jaune",
      "🌈 Utilise une **palette de 3-5 couleurs** maximum pour un design harmonieux",
      "🔥 Les **couleurs chaudes** (rouge, orange) attirent l'attention",
      "❄️ Les **couleurs froides** (bleu, vert) apaisent et inspirent confiance",
      "♿ Pense à l'**accessibilité** : contraste minimum 4.5:1 pour les textes",
      "🎯 **Coolors.co** est génial pour générer des palettes de couleurs",
      "💡 Notre palette signature : #FF6B6B (corail), #4ECDC4 (turquoise), #45B7D1 (bleu)",
    ],
    typography: [
      "✏️ Limite-toi à **2-3 polices maximum** par design",
      "🔄 Associe une **police avec empattement** (serif) et une **sans empattement** (sans-serif)",
      "📏 La taille idéale pour le **corps de texte** est 16px sur mobile",
      "🔤 **Google Fonts** propose des centaines de polices gratuites",
      "📐 L'**espacement entre les lignes** (line-height) devrait être 1.5x la taille de police",
      "⚡ **Inter** et **Poppins** sont d'excellents choix pour le web",
    ],
    tools: [
      "🎨 **Figma** : excellent pour UI/UX design, gratuit pour commencer (notre préféré !)",
      "📸 **Canva** : parfait pour les réseaux sociaux, templates prêts à l'emploi",
      "✏️ **Adobe XD** : prototypage interactif puissant",
      "🖌️ **Procreate** : génial pour l'illustration sur iPad",
      "⚡ **Photopea** : alternative gratuite à Photoshop en ligne",
      "🆓 **GIMP** : logiciel libre de retouche photo",
      "📊 **Unsplash** : photos gratuites haute qualité",
    ],
    socialMedia: [
      "📱 **Instagram** : 1080x1080px (carré), 1080x1350px (portrait), 1080x566px (paysage)",
      "📘 **Facebook** : 1200x630px pour les liens partagés, 1080x1080px pour les posts",
      "🐦 **Twitter/X** : 1600x900px pour les cartes, 1200x675px recommandé",
      "💼 **LinkedIn** : 1200x627px pour les articles, 1584x396px pour les bannières",
      "📌 **Pinterest** : 1000x1500px (ratio 2:3) performe le mieux",
      "🎯 **Conseil** : adapte ton contenu à chaque plateforme !",
    ],
    trends: [
      "🌱 **Design durable** : tons naturels, typographies organiques",
      "✨ **Glassmorphisme** : effet de verre, flou, transparence (très tendance !)",
      "📦 **3D et profondeur** : éléments qui sortent du cadre",
      "🎯 **Minimalisme coloré** : beaucoup d'espace, une couleur vive",
      "🔄 **Typographies variables** : animations de texte fluides",
      "⚡ **Neumorphisme** : design doux avec ombres subtiles",
      "🎨 **Dégradés audacieux** : transitions de couleurs marquées",
    ],
    logo: [
      "⭐ Un bon logo doit fonctionner **en noir et blanc**",
      "🔍 Évite les **détails trop fins** qui disparaissent en petit format",
      "🖼️ Pense à la **version favicon** (16x16px) de ton logo",
      "📋 **Recherche d'antériorité** pour éviter les similitudes",
      "💡 Le logo doit **refléter les valeurs** de ta marque",
      "✏️ Teste ton logo en **négatif** et sur différents fonds",
      "🎯 Les logos **simples et mémorables** sont les plus efficaces",
    ],
    uiux: [
      "📐 La **règle des 60-30-10** : 60% couleur dominante, 30% secondaire, 10% accent",
      "👁️ Les utilisateurs **scannent en F** : informations importantes en haut à gauche",
      "⬜ L'**espace blanc** est aussi important que le contenu",
      "🧪 **Tests utilisateurs** : 5 personnes suffisent pour trouver 85% des problèmes",
      "📱 **Mobile-first** : conçois d'abord pour petit écran",
      "⚡ La **vitesse de chargement** impacte directement le taux de conversion",
      "🎯 La **hiérarchie visuelle** guide l'utilisateur naturellement",
    ],
    inspiration: [
      "🏆 **Dribbble** : communauté de designers, plein d'inspiration",
      "📌 **Pinterest** : excellent pour les moodboards",
      "🌟 **Behance** : portfolios professionnels",
      "🎨 **Awwwards** : sites web récompensés pour leur design",
      "📸 **Unsplash** : photos gratuites pour mockups",
      "💡 **Landbook** : galerie de landing pages inspirantes",
    ],
    pricing: [
      "💰 Nos forfaits : **Standard** (9,99€/mois), **Premium** (24,99€/mois), **Pro** (49,99€/mois)",
      "🎁 **Essai gratuit** 7 jours sur tous les forfaits",
      "📊 Le forfait **Premium** est notre plus populaire (testé A/B avec +32% de satisfaction)",
      "💳 Paiement mensuel ou annuel (-20%)",
      "🆓 Version gratuite disponible avec fonctionnalités limitées",
    ],
  };

  // Mots-clés pour le contexte (étendu)
  const keywords: Record<string, keyof typeof knowledgeBase> = {
    couleur: "colors",
    color: "colors",
    palette: "colors",
    teinte: "colors",
    rgb: "colors",
    hex: "colors",
    
    typo: "typography",
    police: "typography",
    font: "typography",
    caractère: "typography",
    lettre: "typography",
    
    outil: "tools",
    logiciel: "tools",
    app: "tools",
    application: "tools",
    figma: "tools",
    canva: "tools",
    photoshop: "tools",
    
    instagram: "socialMedia",
    facebook: "socialMedia",
    réseau: "socialMedia",
    social: "socialMedia",
    twitter: "socialMedia",
    linkedin: "socialMedia",
    pinterest: "socialMedia",
    
    tendance: "trends",
    mode: "trends",
    style: "trends",
    actuel: "trends",
    moderne: "trends",
    
    logo: "logo",
    marque: "logo",
    branding: "logo",
    identité: "logo",
    
    ui: "uiux",
    ux: "uiux",
    interface: "uiux",
    expérience: "uiux",
    utilisateur: "uiux",
    ergonomie: "uiux",
    
    inspiration: "inspiration",
    idée: "inspiration",
    moodboard: "inspiration",
    exemple: "inspiration",
    
    prix: "pricing",
    forfait: "pricing",
    abonnement: "pricing",
    tarif: "pricing",
    coût: "pricing",
    payer: "pricing",
  };

  // Suggestions contextuelles basées sur l'input
  useEffect(() => {
    if (input.length > 2) {
      const lowerInput = input.toLowerCase();
      const newSuggestions: string[] = [];
      
      if (lowerInput.includes("couleur") || lowerInput.includes("color")) {
        newSuggestions.push("Génère une palette de couleurs professionnelle");
        newSuggestions.push("Conseils pour choisir ses couleurs");
      }
      if (lowerInput.includes("logo")) {
        newSuggestions.push("Étapes pour créer un logo");
        newSuggestions.push("Erreurs à éviter en logo design");
      }
      if (lowerInput.includes("site") || lowerInput.includes("web")) {
        newSuggestions.push("Tendances web design 2024");
        newSuggestions.push("Outils pour créer un site");
      }
      
      setSuggestions(newSuggestions.slice(0, 2));
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const getContextualResponse = (userInput: string): { text: string; type: Message["type"] } => {
    const lowerInput = userInput.toLowerCase();
    
    // Détection de la catégorie
    let category: keyof typeof knowledgeBase | null = null;
    for (const [word, cat] of Object.entries(keywords)) {
      if (lowerInput.includes(word)) {
        category = cat;
        break;
      }
    }

    // Ajouter au contexte
    setConversationContext(prev => [...prev, category || "general"].slice(-10));

    // Réponses spécifiques avancées
    if (lowerInput.match(/^(bonjour|salut|hello|hey|coucou)/i)) {
      return {
        text: knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)],
        type: "text"
      };
    }

    if (lowerInput.includes("merci")) {
      return {
        text: "🌟 Avec plaisir ! N'hésite pas si tu as d'autres questions. Je suis là pour t'aider !",
        type: "success"
      };
    }

    if (lowerInput.includes("comment ça va") || lowerInput.includes("comment vas-tu")) {
      return {
        text: "🤖 Super bien ! Ravi de t'aider avec tes designs aujourd'hui. Et toi, ça roule ?",
        type: "text"
      };
    }

    if (lowerInput.includes("aide") || lowerInput.includes("peux-tu")) {
      return {
        text: "🎯 Bien sûr ! Je peux t'aider avec :\n\n• 🎨 **Couleurs** - Palettes, harmonies\n• ✏️ **Typographie** - Polices, associations\n• 🛠️ **Outils** - Logiciels recommandés\n• 📱 **Réseaux sociaux** - Dimensions\n• 🔥 **Tendances** - Styles actuels\n• ⭐ **Logo** - Création\n• 💻 **UI/UX** - Interfaces\n\nDe quoi as-tu besoin exactement ?",
        type: "suggestion"
      };
    }

    if (lowerInput.includes("bonne pratique") || lowerInput.includes("conseil")) {
      return {
        text: "💡 **Top 5 des bonnes pratiques :**\n\n1. Toujours designer en mobile-first\n2. Limiter à 3 polices maximum\n3. Utiliser une grille\n4. Tester sur différents écrans\n5. Demander des retours utilisateurs",
        type: "tip"
      };
    }

    // Réponse basée sur la catégorie détectée
    if (category && knowledgeBase[category]) {
      const responses = knowledgeBase[category];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Déterminer le type de message
      let type: Message["type"] = "text";
      if (category === "trends") type = "tip";
      else if (category === "pricing") type = "success";
      
      return {
        text: randomResponse + (Math.random() > 0.5 ? "\n\n💡 Des questions sur ce sujet en particulier ?" : ""),
        type
      };
    }

    // Réponses générales
    const generalResponses = [
      "🎯 Intéressant ! Pourrais-tu être plus précis sur ce que tu veux créer ?",
      "💡 Super idée ! Pour t'aider au mieux, pourrais-tu me donner plus de détails ?",
      "✨ Je vois l'idée ! Voici un conseil : " + knowledgeBase.tools[Math.floor(Math.random() * knowledgeBase.tools.length)],
      "📚 Pour ce type de projet, je recommande de commencer par une phase de recherche d'inspiration.",
      "🎨 As-tu pensé à faire un moodboard ? C'est super utile pour clarifier tes idées.",
      "⚡ Une bonne pratique est de toujours garder ton audience cible en tête.",
      "🔍 As-tu regardé ce que fait la concurrence ? C'est une bonne source d'inspiration.",
    ];
    
    return {
      text: generalResponses[Math.floor(Math.random() * generalResponses.length)],
      type: "text"
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setSuggestions([]);

    // Temps de réponse variable selon la complexité
    const responseTime = 800 + Math.random() * 1500;
    
    setTimeout(() => {
      const { text: response, type } = getContextualResponse(input);
      
      // Parfois ajouter une suggestion interactive
      const hasQuickAction = Math.random() > 0.6;
      
      let finalResponse = response;
      if (hasQuickAction) {
        finalResponse += "\n\n**🔍 Veux-tu que je te montre des exemples concrets ?**";
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: finalResponse,
        sender: "bot",
        timestamp: new Date(),
        type: type || (hasQuickAction ? "suggestion" : "text"),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, responseTime);
  };

  const handleQuickAction = (action: string) => {
    const actionMap: Record<string, string> = {
      color: "🎨 Génère-moi une palette de couleurs pour une marque de sport dynamique",
      logo: "⭐ Conseils pour créer un logo de startup tech moderne",
      instagram: "📱 Dimensions et stratégie pour posts Instagram en 2024",
      tools: "🛠️ Meilleurs outils gratuits pour débuter en design graphique",
      typography: "✏️ Comment bien associer les polices dans un design ?",
      trends: "🔥 Quelles sont les tendances design actuelles ?",
      pricing: "💰 Présente-moi les forfaits GraphiNova",
      inspiration: "🎨 Où trouver de l'inspiration pour mes designs ?"
    };
    setInput(actionMap[action] || actionMap.color);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] pt-20 px-4 pb-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header avec stats */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Assistant <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">Design IA</span>
            </h1>
            <p className="text-white/60">
              🤖 Testé par {Math.floor(Math.random() * 500) + 1000} designers
            </p>
          </div>
          
          <div className="flex gap-3">
            <motion.div 
              className="px-4 py-2 bg-[#2a2a3a] rounded-xl border border-white/10 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-[#4ECDC4] font-bold">{messages.length}</div>
              <div className="text-xs text-white/60">Messages</div>
            </motion.div>
            <motion.div 
              className="px-4 py-2 bg-[#2a2a3a] rounded-xl border border-white/10 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-[#FF6B6B] font-bold">{conversationContext.length}</div>
              <div className="text-xs text-white/60">Sujets</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Zone messages */}
        <motion.div
          className="h-[500px] overflow-y-auto rounded-2xl border border-white/10 bg-[#1a1a2e]/50 backdrop-blur-sm p-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: message.sender === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-4 rounded-2xl max-w-[80%] md:max-w-[60%] ${
                    message.sender === "user" 
                      ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-tr-none" 
                      : message.type === "suggestion"
                      ? "bg-[#4ECDC4]/20 border border-[#4ECDC4]/30 text-white rounded-tl-none"
                      : message.type === "tip"
                      ? "bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 text-white rounded-tl-none"
                      : "bg-[#2a2a3a] text-white rounded-tl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {message.text}
                  </p>
                  <p className="text-xs mt-2 opacity-50 text-right">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 flex justify-start"
            >
              <div className="p-4 rounded-2xl rounded-tl-none bg-[#2a2a3a] border border-white/10">
                <div className="flex gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-[#4ECDC4] rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-[#4ECDC4] rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-[#4ECDC4] rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </motion.div>

        {/* Suggestions contextuelles */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div 
              className="mb-4 flex gap-2 overflow-x-auto pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-2 bg-[#2a2a3a] border border-white/10 rounded-xl text-sm text-white/80 whitespace-nowrap hover:bg-[#3a3a4a] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💡 {suggestion}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions rapides améliorées */}
        <motion.div 
          className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { id: "color", icon: "🎨", label: "Couleurs", color: "#FF6B6B" },
            { id: "typography", icon: "✏️", label: "Typographie", color: "#4ECDC4" },
            { id: "logo", icon: "⭐", label: "Logo", color: "#45B7D1" },
            { id: "tools", icon: "🛠️", label: "Outils", color: "#A8E6CF" },
            { id: "instagram", icon: "📱", label: "Instagram", color: "#FF9F1C" },
            { id: "trends", icon: "🔥", label: "Tendances", color: "#E71D36" },
            { id: "inspiration", icon: "🎯", label: "Inspiration", color: "#8338EC" },
            { id: "pricing", icon: "💰", label: "Tarifs", color: "#3A86FF" },
          ].map((action) => (
            <motion.button
              key={action.id}
              onClick={() => handleQuickAction(action.id)}
              className="p-3 rounded-xl border border-white/10 bg-[#2a2a3a] hover:bg-[#3a3a4a] transition-all flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {action.icon}
              </span>
              <span className="text-sm text-white/80 group-hover:text-white">
                {action.label}
              </span>
              <motion.div 
                className="ml-auto w-1 h-1 rounded-full"
                style={{ backgroundColor: action.color }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Input avec design moderne */}
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Pose ta question sur le design... (ex: 'couleurs pour site web', 'meilleurs outils')"
              className="w-full p-4 pr-12 rounded-xl border border-white/10 bg-[#2a2a3a] text-white placeholder-white/40 focus:outline-none focus:border-[#4ECDC4] transition-all"
              disabled={isTyping}
            />
            {input.length > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                onClick={() => setInput("")}
              >
                <span className="text-white/40 hover:text-white/60">✕</span>
              </motion.button>
            )}
          </div>

          <motion.button
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {isTyping ? "Réflexion..." : "Envoyer"}
            </span>
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.2 }}
            />
          </motion.button>
        </motion.div>

        {/* Conseils du moment avec animation */}
        <motion.div 
          className="mt-6 p-4 rounded-xl border border-dashed border-white/10 bg-[#1a1a2e]/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-2xl"
            >
              💡
            </motion.div>
            <p className="text-sm text-white/60 flex-1">
              <span className="text-[#4ECDC4] font-semibold">Conseil du moment :</span>{" "}
              {[
                "Utilise la règle 60-30-10 pour tes palettes de couleurs",
                "Pense au mobile-first pour tous tes designs",
                "Teste toujours tes designs sur différents écrans",
                "Garde une hiérarchie visuelle claire",
                "L'espace blanc est ton ami !",
              ][Math.floor(Math.random() * 5)]}
            </p>
            <motion.div 
              className="w-2 h-2 bg-[#4ECDC4] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotPage;