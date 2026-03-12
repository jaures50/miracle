// src/pages/DesignDetails.tsx
import { useParams, Link, useNavigate } from "react-router-dom"
import { designs } from "../data/designs"
import { motion,  } from "framer-motion"
import { useState, useEffect } from "react"

export default function DesignDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [relatedDesigns, setRelatedDesigns] = useState<typeof designs>([])

  const design = designs.find(d => d.id === Number(id))

  useEffect(() => {
    if (design) {
      setLikesCount(design.likes || 0)
      // Trouver des designs similaires (même catégorie)
      const related = designs
        .filter(d => d.category === design.category && d.id !== design.id)
        .slice(0, 3)
      setRelatedDesigns(related)
    }
  }, [design])

  if (!design) {
    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center max-w-md">
          <motion.div 
            className="text-8xl mb-6"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🎨
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-4">Design non trouvé</h1>
          <p className="text-white/60 mb-8">
            Le design que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Link to="/gallery">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Retour à la galerie
            </motion.button>
          </Link>
        </div>
      </motion.div>
    )
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Lien copié dans le presse-papier !")
  }

  // Images simulées (à remplacer par de vraies données)
  const images = [
    design.image,
    design.image?.replace('.jpg', '-2.jpg'),
    design.image?.replace('.jpg', '-3.jpg'),
    design.image?.replace('.jpg', '-4.jpg'),
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
      
      {/* ===== BOUTON RETOUR ===== */}
      <motion.div 
        className="fixed top-24 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#2a2a3a] border border-white/10 rounded-xl text-white hover:bg-[#3a3a4a] transition-all flex items-center gap-2 group"
        >
          <motion.span
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
          Retour
        </button>
      </motion.div>

      {/* ===== SECTION PRINCIPALE ===== */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Grille principale */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Colonne gauche - Galerie d'images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image principale */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden border border-white/10 mb-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  key={selectedImage}
                  src={images[selectedImage] || design.image}
                  alt={design.title}
                  className="w-full aspect-video object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay avec actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    onClick={handleLike}
                    className="w-10 h-10 bg-[#2a2a3a] rounded-full flex items-center justify-center text-xl border border-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={isLiked ? 'text-[#FF6B6B]' : 'text-white/60'}>
                      {isLiked ? '❤️' : '🤍'}
                    </span>
                  </motion.button>
                  
                  <motion.button
                    onClick={handleShare}
                    className="w-10 h-10 bg-[#2a2a3a] rounded-full flex items-center justify-center text-white/60 border border-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    📋
                  </motion.button>
                </div>

                {/* Badge catégorie */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-xs font-semibold">
                    {design.category}
                  </span>
                </div>
              </motion.div>

              {/* Miniatures */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-[#4ECDC4]' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={img} 
                        alt={`${design.title} - vue ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Colonne droite - Informations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* En-tête */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {design.title}
                </h1>
                
                <div className="flex items-center gap-6 text-white/60">
                  {/* Auteur */}
                  <Link to={`/profile/${design.authorId}`}>
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      {design.authorAvatar ? (
                        <img 
                          src={design.authorAvatar} 
                          alt={design.author}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white"
                          style={{ background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)" }}
                        >
                          {design.author?.charAt(0)}
                        </div>
                      )}
                      <span className="hover:text-white transition-colors">
                        {design.author}
                      </span>
                    </motion.div>
                  </Link>

                  {/* Date */}
                  {design.createdAt && (
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{new Date(design.createdAt).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '❤️', value: likesCount, label: 'Likes', color: '#FF6B6B' },
                  { icon: '👁️', value: design.views || 0, label: 'Vues', color: '#4ECDC4' },
                  { icon: '⭐', value: design.rating || '4.8', label: 'Note', color: '#45B7D1' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-[#2a2a3a] rounded-xl border border-white/10 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3">Description</h2>
                <p className="text-white/70 leading-relaxed">
                  {design.details || design.description}
                </p>
              </div>

              {/* Tags / Caractéristiques */}
              {design.tags && design.tags.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {design.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-[#2a2a3a] border border-white/10 rounded-full text-sm text-white/60"
                        whileHover={{ scale: 1.05, backgroundColor: '#4ECDC420' }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Link
                    to={`/create?template=${design.id}`}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold text-center shadow-xl shadow-[#FF6B6B]/30"
                  >
                    Utiliser ce template
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-[#2a2a3a] border border-white/10 text-white rounded-xl font-semibold"
                  onClick={() => {/* Télécharger */}}
                >
                  Télécharger
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DESIGNS SIMILAIRES ===== */}
      {relatedDesigns.length > 0 && (
        <section className="px-6 py-20 bg-[#1a1a2e]">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Designs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">similaires</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Découvrez d'autres créations dans la même catégorie
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedDesigns.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/design/${related.id}`}>
                    <div className="bg-[#2a2a3a] rounded-2xl overflow-hidden border border-white/10 group">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2">{related.title}</h3>
                        <div className="flex items-center justify-between text-sm text-white/40">
                          <span>❤️ {related.likes || 0}</span>
                          <span>👁️ {related.views || 0}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION COMMENTAIRES (simulée) ===== */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Avis de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">communauté</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                author: "Marie L.",
                avatar: "👩",
                comment: "Superbe design ! Très inspirant pour mes projets.",
                rating: 5,
                date: "Il y a 2 jours"
              },
              {
                author: "Thomas D.",
                avatar: "👨",
                comment: "Les couleurs sont magnifiques, j'adore le style.",
                rating: 5,
                date: "Il y a 5 jours"
              },
              {
                author: "Sophie M.",
                avatar: "👩‍🎨",
                comment: "Parfait pour une campagne sur les réseaux sociaux.",
                rating: 4,
                date: "Il y a 1 semaine"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#2a2a3a] rounded-2xl border border-white/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{review.author}</h4>
                      <span className="text-xs text-white/40">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-white/20'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-white/70 text-sm">{review.comment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formulaire d'avis */}
          <motion.div 
            className="max-w-2xl mx-auto mt-12 p-6 bg-[#2a2a3a] rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Laisser un avis</h3>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <motion.button
                  key={star}
                  className="text-2xl text-white/20 hover:text-yellow-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  ★
                </motion.button>
              ))}
            </div>
            <textarea 
              placeholder="Partagez votre avis sur ce design..."
              className="w-full p-3 bg-[#1a1a2e] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#4ECDC4] transition-all mb-4"
              rows={3}
            />
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Publier
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}