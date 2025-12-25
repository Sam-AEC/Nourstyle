/**
 * Image Configuration
 * 
 * Centralized image URLs - using bright, vibrant Unsplash photos.
 * Replace with actual salon photos when available.
 */

export const imageConfig = {
  // Hero Images - Ultra High Resolution (4K Quality)
  womenHero: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop", // Ultra-modern luxury salon, emerald tones
  menHero: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop", // Dark classic barber chair, moody lighting
  
  // Portrait
  stylistPortrait: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=987&auto=format&fit=crop",
  
  // Social Media
  ogImage: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200",
  
  // Women's Gallery - High Res & Curated Colors
  womenGallery: [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
  ],
  
  // Men's Gallery - High Res & Moody
  menGallery: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512690459411-b9245aed6191?q=80&w=1000&auto=format&fit=crop",
  ],
} as const;
