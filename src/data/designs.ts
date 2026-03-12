// src/data/designs.ts
export interface Design {
    [x: string]: any
    id: number
    title: string
    description: string
    image: string
    category: string
    author: string
    authorAvatar?: string
    rating?: number
    likes?: number
    views?: number
    createdAt?: string
    details: string
    tags?: string[]
}

export const designs: Design[] = [
    {
        id: 1,
        title: "Post Instagram Minimaliste",
        description: "Template moderne pour réseaux sociaux",
        image: "/asset/images/logos/logo5.jpeg",
        category: "logo",
        author: "Miracle",
        authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.8,
        likes: 234,
        views: 1200,
        createdAt: "2024-01-15",
        details: "Design épuré pour campagnes marketing sur Instagram. Parfait pour les marques modernes.",
        tags: ["instagram", "marketing", "minimaliste"]
    },
    {
        id: 2,
        title: "Affiche Événementielle",
        description: "Flyer pour événement spécial",
        image: "/asset/images/Affiches/affiche7.jpeg",
        category: "Affiche",
        author: "Thomas Bernard",
        authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4.9,
        likes: 567,
        views: 3400,
        createdAt: "2024-01-10",
        details: "Affiche dynamique créée pour un événement culturel. Design moderne et accrocheur.",
        tags: ["affiche", "événement", "culturel"]
    },
    {
        id: 3,
        title: "Bannière Site Web",
        description: "Bannière professionnelle pour site corporate",
        image: "/asset/images/Affiches/affiche1.jpeg",
        category: "Affiche",
        author: "Marie Dubois",
        authorAvatar: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 4.7,
        likes: 345,
        views: 2100,
        createdAt: "2024-01-12",
        details: "Bannière épurée pour site web d'entreprise. Design professionnel et moderne.",
        tags: ["bannière", "web", "corporate"]
    },
    {
        id: 4,
        title: "Carte de Visite Premium",
        description: "Design élégant pour professionnels",
        image: "/asset/images/Affiches/affiche2.jpeg",
        category: "Affiche",
        author: "Lucas Petit",
        authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 4.6,
        likes: 123,
        views: 890,
        createdAt: "2024-01-08",
        details: "Carte de visite au design premium avec finitions minimalistes.",
        tags: ["carte", "business", "premium"]
    },
    {
        id: 5,
        title: "Template Newsletter",
        description: "Email marketing responsive",
        image: "/asset/images/Affiches/affiche3.jpeg",
        category: "Affiche",
        author: "Emma Laurent",
        authorAvatar: "https://randomuser.me/api/portraits/women/17.jpg",
        rating: 4.8,
        likes: 456,
        views: 3200,
        createdAt: "2024-01-14",
        details: "Template d'email marketing moderne et responsive pour campagnes.",
        tags: ["email", "newsletter", "marketing"]
    },
    {
        id: 6,
        title: "Logo Design Start-up",
        description: "Identité visuelle pour entreprise tech",
        image: "/asset/images/Affiches/affiche4.jpeg",
        category: "Affiche",
        author: "Antoine Girard",
        authorAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 5.0,
        likes: 892,
        views: 5600,
        createdAt: "2024-01-05",
        details: "Logo moderne et minimaliste pour start-up technologique.",
        tags: ["logo", "branding", "startup"]
    },
    {
        id: 7,
        title: "Interface Application Mobile",
        description: "UI/UX design pour app fitness",
        image: "/asset/images/Affiches/affiche5.jpeg",
        category: "Affiche",
        author: "Claire Fontaine",
        authorAvatar: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 4.9,
        likes: 789,
        views: 6700,
        createdAt: "2024-01-07",
        details: "Interface utilisateur intuitive pour application mobile de fitness.",
        tags: ["ui", "mobile", "fitness"]
    },
    {
        id: 8,
        title: "Illustration Abstraite IA",
        description: "Art généré par intelligence artificielle",
        image: "/asset/images/logos/logo1.jpeg",
        category: "logo",
        author: "Nicolas Simon",
        authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5.0,
        likes: 1023,
        views: 8900,
        createdAt: "2024-01-01",
        details: "Illustration abstraite unique générée par IA, couleurs vibrantes.",
        tags: ["illustration", "abstrait", "ia"]
    },
    {
        id: 9,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding1.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },

    {
        id: 10,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding2.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },
    {
        id: 11,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding3.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },

    {
        id: 12,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding4.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },

    {
        id: 13,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding5.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },


    {
        id: 14,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding6.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },




    {
        id: 15,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding7.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },



    {
        id: 16,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding8.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },


    {
        id: 17,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding9.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },


    {
        id: 18,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/logos/logo3.jpeg",
        category: "logo",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },

    {
        id: 19,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding10.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },

    {
        id: 20,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/branding/branding11.jpeg",
        category: "branding",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },


 {
        id: 21,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/logos/logo2.jpeg",
        category: "logo",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    }, {
        id: 22,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/Affiches/affiche8.jpeg",
        category: "Affiche",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    }, {
        id: 23,
        title: "Pack Branding Complet",
        description: "Kit identité visuelle entreprise",
        image: "/asset/images/logos/logo4.jpeg",
        category: "logo",
        author: "Julie Moreau",
        authorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.9,
        likes: 678,
        views: 4300,
        createdAt: "2024-01-03",
        details: "Pack complet de branding incluant logo, charte et templates.",
        tags: ["branding", "identité", "pack"]
    },



]

// Fonction utilitaire pour obtenir les catégories uniques
export const getCategories = (): string[] => {
    const categories = designs.map(design => design.category)
    return ['all', ...new Set(categories)]
}

// Fonction pour filtrer les designs par catégorie
export const getDesignsByCategory = (category: string): Design[] => {
    if (category === 'all') return designs
    return designs.filter(design => design.category === category)
}

// Fonction pour obtenir les designs populaires (top likes)
export const getPopularDesigns = (limit: number = 3): Design[] => {
    return [...designs]
        .sort((a, b) => (b.likes || 0) - (a.likes || 0))
        .slice(0, limit)
}

// Fonction pour obtenir les designs récents
export const getRecentDesigns = (limit: number = 3): Design[] => {
    return [...designs]
        .sort((a, b) => {
            if (!a.createdAt || !b.createdAt) return 0
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        })
        .slice(0, limit)
}

// Statistiques
export const getStats = () => ({
    totalDesigns: designs.length,
    totalCategories: new Set(designs.map(d => d.category)).size,
    totalLikes: designs.reduce((acc, d) => acc + (d.likes || 0), 0),
    averageRating: Number((designs.reduce((acc, d) => acc + (d.rating || 0), 0) / designs.length).toFixed(1))
})