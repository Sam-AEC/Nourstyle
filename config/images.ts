/**
 * Image Configuration
 * 
 * Centralized image URLs - using bright, vibrant Unsplash photos.
 * Replace with actual salon photos when available.
 */

export const imageConfig = {
  // Hero Images - Bright, professional salon vibes
  womenHero: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=1080&fit=crop&q=90&sat=10&brightness=10",
  menHero: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&h=1080&fit=crop&q=90&sat=10&brightness=10",
  
  // Portrait - Bright, friendly stylist photo
  stylistPortrait: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=800&fit=crop&q=90&sat=5&brightness=5",
  
  // Social Media
  ogImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=630&fit=crop&q=90&sat=10&brightness=10",
  
  // Women's Gallery - Bright, vibrant hair photos
  womenGallery: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop&q=90&sat=15&brightness=10", // Balayage - bright blonde
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Haircut - vibrant
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop&q=90&sat=15&brightness=10", // Highlights - bright salon
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Updo - elegant
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Layered cut - bright
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=800&fit=crop&q=90&sat=15&brightness=10", // Ombre - colorful
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Bob - modern bright
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop&q=90&sat=15&brightness=10", // Full highlights - vibrant
    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Beach waves - bright
  ],
  
  // Men's Gallery - Bright, sharp barbershop photos
  menGallery: [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Skin fade - bright
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Classic cut - vibrant
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Beard trim - bright
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Taper fade - modern
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Textured crop - bright
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Beard sculpting - vibrant
    "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Pompadour - bright
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Buzz cut - clean bright
    "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=800&fit=crop&q=90&sat=10&brightness=10", // Full grooming - professional
  ],
} as const;
