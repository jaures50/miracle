// src/pages/ChatbotPage.tsx
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "suggestion" | "tip";
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "✨ Salut ! Je suis ton assistant design IA. Pose-moi des questions sur :\n\n• Création de designs\n• Couleurs et typographie\n• Outils recommandés\n• Tendances actuelles\n• Conseils pro",
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Base de connaissances étendue
  const knowledgeBase = {
    greetings: [
      "Bonjour ! Comment puis-je t'aider avec tes designs aujourd'hui ?",
      "Salut ! Prêt à créer quelque chose de magnifique ?",
      "Hey ! Des questions sur le design ? Je suis là !",
    ],
    colors: [
      "Les couleurs complémentaires créent du contraste. Ex: bleu/orange, violet/jaune",
      "Utilise une palette de 3-5 couleurs maximum pour un design harmonieux",
      "Les couleurs chaudes (rouge, orange) attirent l'attention, les froides (bleu, vert) apaisent",
      "Pense à l'accessibilité : contraste suffisant pour les textes",
      "Coolors.co est génial pour générer des palettes de couleurs",
    ],
    typography: [
      "Limite-toi à 2-3 polices maximum par design",
      "Associe une police avec empattement (serif) et une sans empattement (sans-serif)",
      "La taille idéale pour le corps de texte est 16px sur mobile",
      "Google Fonts propose des centaines de polices gratuites",
      "L'espacement entre les lignes (line-height) devrait être 1.5x la taille de police",
    ],
    tools: [
      "🎨 Figma : excellent pour UI/UX design, gratuit pour commencer",
      "📸 Canva : parfait pour les réseaux sociaux, templates prêts",
      "✏️ Adobe XD : prototypage interactif",
      "🖌️ Procreate : génial pour l'illustration sur iPad",
      "⚡ Photopea : alternative gratuite à Photoshop en ligne",
    ],
    socialMedia: [
      "Instagram : 1080x1080px pour posts carrés, 1080x1350px pour portraits",
      "Facebook : 1200x630px pour les liens partagés",
      "Twitter : 1600x900px pour les cartes",
      "LinkedIn : 1200x627px pour les articles",
      "Pinterest : 1000x1500px (ratio 2:3) performe le mieux",
    ],
    trends: [
      "🌱 Design durable : tons naturels, typographies organiques",
      "✨ Glassmorphisme : effet de verre, flou, transparence",
      "📦 3D et profondeur : éléments qui sortent du cadre",
      "🎯 Minimalisme coloré : beaucoup d'espace, une couleur vive",
      "🔄 Typographies variables : animations de texte",
    ],
    logo: [
      "Un bon logo doit fonctionner en noir et blanc",
      "Évite les détails trop fins qui disparaissent en petit format",
      "Pense à la version favicon (16x16px) de ton logo",
      "Recherche d'antériorité pour éviter les similitudes",
      "Le logo doit refléter les valeurs de ta marque",
    ],
    uiux: [
      "La règle des 60-30-10 : 60% couleur dominante, 30% secondaire, 10% accent",
      "Les utilisateurs scannent en F : informations importantes en haut à gauche",
      "L'espace blanc est aussi important que le contenu",
      "Tests utilisateurs : 5 personnes suffisent pour trouver 85% des problèmes",
      "Mobile-first : conçois d'abord pour petit écran",
    ],
  };

  // Mots-clés pour le contexte
  const keywords: Record<string, keyof typeof knowledgeBase> = {
    couleur: "colors",
    color: "colors",
    palette: "colors",
    typo: "typography",
    police: "typography",
    font: "typography",
    outil: "tools",
    logiciel: "tools",
    app: "tools",
    instagram: "socialMedia",
    facebook: "socialMedia",
    réseau: "socialMedia",
    social: "socialMedia",
    tendance: "trends",
    mode: "trends",
    logo: "logo",
    marque: "logo",
    ui: "uiux",
    ux: "uiux",
    interface: "uiux",
    expérience: "uiux",
  };

  // Réponses contextuelles avancées
  const getContextualResponse = (userInput: string): string => {
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
    setConversationContext(prev => [...prev, category || "general"]);

    // Réponses spécifiques
    if (lowerInput.includes("bonjour") || lowerInput.includes("salut") || lowerInput.includes("hello")) {
      return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
    }

    if (lowerInput.includes("merci")) {
      return "Avec plaisir ! N'hésite pas si tu as d'autres questions 🌟";
    }

    if (lowerInput.includes("comment ça va")) {
      return "Super bien ! Ravi de t'aider avec tes designs aujourd'hui 😊";
    }

    if (lowerInput.includes("aide") || lowerInput.includes("peux-tu")) {
      return "Bien sûr ! Je peux t'aider avec les couleurs, typographie, outils, réseaux sociaux, tendances, logo design, UI/UX... De quoi as-tu besoin ?";
    }

    // Réponse basée sur la catégorie détectée
    if (category && knowledgeBase[category]) {
      const responses = knowledgeBase[category];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Réponses générales
    const generalResponses = [
      "Intéressant ! Pourrais-tu être plus précis sur ce que tu veux créer ?",
      "Je peux t'aider avec ça. Quel style recherches-tu ?",
      "Super idée ! Voici quelques conseils : " + knowledgeBase.tools[Math.floor(Math.random() * knowledgeBase.tools.length)],
      "Pour ce type de projet, je recommande de commencer par une phase de recherche d'inspiration.",
      "As-tu pensé à faire un moodboard ? C'est super utile pour clarifier tes idées.",
      "Une bonne pratique est de toujours garder ton audience cible en tête.",
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
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

    // Temps de réponse variable selon la complexité
    const responseTime = 1000 + Math.random() * 2000;
    
    setTimeout(() => {
      const response = getContextualResponse(input);
      
      // Parfois ajouter une suggestion
      const hasSuggestion = Math.random() > 0.7;
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response + (hasSuggestion ? "\n\n💡 Tu veux que je te donne un exemple concret ?" : ""),
        sender: "bot",
        timestamp: new Date(),
        type: hasSuggestion ? "suggestion" : "text",
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, responseTime);
  };

  const handleQuickAction = (action: string) => {
    let suggestion = "";
    switch(action) {
      case "color":
        suggestion = "Génère-moi une palette de couleurs pour une marque de sport";
        break;
      case "logo":
        suggestion = "Conseils pour créer un logo de startup tech";
        break;
      case "instagram":
        suggestion = "Dimensions et conseils pour posts Instagram";
        break;
      case "tools":
        suggestion = "Meilleurs outils gratuits pour débuter en design";
        break;
    }
    setInput(suggestion);
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
    <div className="flex flex-col h-[calc(100vh-64px)] p-6 max-w-6xl mx-auto w-full">
      {/* Titre avec stats */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
          Assistant Design IA
        </h2>
        <div className="text-sm opacity-50">
          {messages.length} messages • {conversationContext.length} sujets abordés
        </div>
      </div>

      {/* Zone messages */}
      <div
        className="flex-1 overflow-y-auto p-4 rounded-lg border mb-4"
        style={{ 
          borderColor: "var(--border-color)",
          background: "var(--bg-main)",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-md ${
                message.sender === "user" ? "rounded-br-none" : "rounded-bl-none"
              }`}
              style={{
                background: message.sender === "user" ? "var(--primary)" : "var(--border-color)",
                color: "black",
              }}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className="text-xs mt-1 opacity-70 text-right">
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="mb-4 flex justify-start">
            <div
              className="p-3 rounded-lg rounded-bl-none "
              style={{ background: "var(--infos)", color: "red" }}
            >
              <div className="flex gap-1">
                <span className="animae-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Actions rapides améliorées */}
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          onClick={() => handleQuickAction("color")}
          className="p-2 text-sm rounded-lg border hover:bg-opacity-10 transition-all hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-main)",
          }}
        >
          🎨 Palette couleurs
        </button>
        <button
          onClick={() => handleQuickAction("logo")}
          className="p-2 text-sm rounded-lg border hover:bg-opacity-10 transition-all hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-main)",
          }}
        >
          ⭐ Créer logo
        </button>
        <button
          onClick={() => handleQuickAction("instagram")}
          className="p-2 text-sm rounded-lg border hover:bg-opacity-10 transition-all hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-main)",
          }}
        >
          📱 Instagram
        </button>
        <button
          onClick={() => handleQuickAction("tools")}
          className="p-2 text-sm rounded-lg border hover:bg-opacity-10 transition-all hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-main)",
          }}
        >
          🛠️ Outils gratuits
        </button>
      </div>

      {/* Input avec suggestions contextuelles */}
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Pose ta question sur le design (ex: 'couleurs pour site web', 'meilleurs outils gratuit')..."
          className="flex-1 p-3 rounded-lg border outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--bg-main)",
            color: "var(--text-main)",
          }}
          disabled={isTyping}
        />

        <button
          onClick={handleSend}
          disabled={isTyping || !input.trim()}
          className="px-6 rounded-lg text-white font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          style={{ background: "var(--primary)" }}
        >
          {isTyping ? (
            <span className="flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </span>
          ) : (
            "Envoyer"
          )}
        </button>
      </div>

      {/* Conseils du moment */}
      <div className="mt-4 p-3 rounded-lg border border-dashed text-sm"
        style={{ borderColor: "var(--border-color)" }}>
        <p className="opacity-70">
        </p>
      </div>
    </div>
  );
};

export default ChatbotPage;