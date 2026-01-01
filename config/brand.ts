/**
 * Brand Configuration
 *
 * Single source of truth for all brand-related content.
 * Edit this file to update salon name, colors, contact info, and CTAs across the entire site.
 */

export const brand = {
  // Basic Info
  name: "NourStyle",
  tagline: "Your Personal Touch in Hair & Style",
  description: "Home-based hair salon in Amsterdam offering personalized styling for women and professional grooming for men.",

  // Contact Information
  contact: {
    phone: "+31 6 1234 5678",
    whatsapp: "+31612345678", // Without spaces/formatting for WhatsApp link
    email: "hello@nourstyle.nl",
    address: {
      street: "Example Street 123",
      neighborhood: "Nieuw-West",
      city: "Amsterdam",
      postalCode: "1067 AB",
      country: "Netherlands",
    },
    // Update with your actual coordinates from Google Maps
    coordinates: {
      lat: 52.3676,
      lng: 4.8952,
    },
  },

  // Booking is controlled via calendar - no fixed hours
  // Customers book through the calendar system where you control availability directly

  // Social Media - Separate Instagram accounts for Women and Men sections
  social: {
    instagram: {
      women: process.env.NEXT_PUBLIC_INSTAGRAM_WOMEN || "https://instagram.com/nourstyle_women",
      men: process.env.NEXT_PUBLIC_INSTAGRAM_MEN || "https://instagram.com/nourstyle_men",
    },
    facebook: "https://facebook.com/nourstyle",
    // Add more as needed
  },

  // Booking
  booking: {
    // Update with your Fresha, Booksy, or other booking platform URL
    url: process.env.NEXT_PUBLIC_BOOKING_URL || "https://fresha.com/nourstyle",
    note: "Easy online booking - Choose your service and preferred time",
  },

  // Call-to-Action Text
  cta: {
    primary: "Book Appointment",
    secondary: "Contact Us",
    whatsapp: "Chat on WhatsApp",
    call: "Call Now",
    viewGallery: "View Our Work",
    learnMore: "Learn More",
  },

  // Theme Colors (matches Tailwind config)
  colors: {
    women: {
      primary: "#2A5C5A",      // Deep Elegant Teal
      secondary: "#DBC1AC",    // Champagne/Sand
    },
    men: {
      primary: "#2DD4BF",      // Premium Teal
      secondary: "#64748B",    // Slate Blue
    },
  },

  // About the Salon
  about: {
    tagline: "One-on-one attention in a private, professional setting",
    yearEstablished: "2022",
    experience: "3+ years",
    certifications: [
      "Licensed Professional Stylist",
      "Color Specialist Certification",
      "Barber Training Certificate",
    ],
    approach: "I believe in listening first - through thorough consultation, I ensure you get exactly the look you want. Whether it's a transformative color or a sharp fade, I'm committed to delivering salon-quality results in a relaxed, personalized environment.",
  },

  // SEO
  seo: {
    keywords: [
      "hair salon Amsterdam",
      "barber Amsterdam",
      "women's hairstylist Amsterdam",
      "men's haircut Amsterdam",
      "home salon Netherlands",
      "balayage Amsterdam",
      "beard trim Amsterdam",
      "hair coloring Amsterdam",
    ],
  },
} as const;

// Helper function to format phone number for display
export const formatPhone = (phone: string) => {
  return phone.replace(/(\+\d{2})(\d{1})(\d{4})(\d{4})/, '$1 $2 $3 $4');
};

// Helper function to get WhatsApp link
export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = `Hi! I'd like to book an appointment at ${brand.name}.`;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${brand.contact.whatsapp}?text=${encodedMessage}`;
};

// Helper function to get Google Maps link
export const getGoogleMapsLink = () => {
  const { street, city, postalCode } = brand.contact.address;
  const query = encodeURIComponent(`${street}, ${postalCode} ${city}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};
