/**
 * Services Configuration
 *
 * All service listings, descriptions, and pricing.
 * Edit this file to update services across the site.
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  popular?: boolean;
}

// Women's Services
export const womenServices: Service[] = [
  // Free Consultation - Lead generator for new clients
  {
    id: "women-free-consultation",
    name: "Free Consultation",
    description: "Complimentary hair consultation to discuss your goals, assess your hair type, and recommend the best services for you. No obligation.",
    duration: "15 to 20 min",
    price: "FREE",
    category: "Consultation",
    popular: true,
  },

  // Cuts & Styling
  {
    id: "women-cut-style",
    name: "Women's Cut & Style",
    description: "Personalized haircut including consultation, wash, precision cut, and blow dry styling. Tailored to your face shape and lifestyle.",
    duration: "60 min",
    price: "€50",
    category: "Cuts & Styling",
    popular: true,
  },
  {
    id: "women-cut-only",
    name: "Haircut Only",
    description: "Quick precision cut without wash or style. Perfect for regular trims.",
    duration: "30 min",
    price: "€35",
    category: "Cuts & Styling",
  },
  {
    id: "women-blowdry",
    name: "Wash & Blow Dry",
    description: "Luxurious hair wash with professional blow dry styling.",
    duration: "30 min",
    price: "€25",
    category: "Cuts & Styling",
  },
  {
    id: "women-special-styling",
    name: "Special Occasion Styling",
    description: "Elegant updo or special event styling. Perfect for weddings, parties, and celebrations.",
    duration: "90 min",
    price: "from €75",
    category: "Cuts & Styling",
  },

  // Color Treatments
  {
    id: "women-full-color",
    name: "Full Color",
    description: "Complete color transformation with premium products, toner, and styling. Includes consultation.",
    duration: "2.5 hrs",
    price: "from €95",
    category: "Color",
    popular: true,
  },
  {
    id: "women-balayage",
    name: "Balayage / Ombre",
    description: "Hand painted highlights for a natural, sun kissed look. Includes toner and styling.",
    duration: "3 hrs",
    price: "from €120",
    category: "Color",
    popular: true,
  },
  {
    id: "women-highlights",
    name: "Partial Highlights",
    description: "Foil highlights for dimension and brightness. Includes toner and blow dry.",
    duration: "2 hrs",
    price: "from €85",
    category: "Color",
  },
  {
    id: "women-root-touch",
    name: "Root Touch Up",
    description: "Color refresh for grown out roots. Quick and maintenance friendly.",
    duration: "90 min",
    price: "€65",
    category: "Color",
  },
  {
    id: "women-toner",
    name: "Toner Treatment",
    description: "Refresh and adjust your color tone. Perfect between full color appointments.",
    duration: "45 min",
    price: "€35",
    category: "Color",
  },

  // Treatments
  {
    id: "women-deep-conditioning",
    name: "Deep Conditioning Treatment",
    description: "Intensive hydration and repair treatment for damaged or dry hair.",
    duration: "30 min",
    price: "€30",
    category: "Treatments",
  },
];

// Men's Services
export const menServices: Service[] = [
  // Haircuts
  {
    id: "men-haircut",
    name: "Men's Haircut",
    description: "Complete haircut with consultation, precision cut, and styling. Any length or style.",
    duration: "45 min",
    price: "€25",
    category: "Haircuts",
    popular: true,
  },
  {
    id: "men-fade",
    name: "Skin Fade / Taper",
    description: "Modern fade haircut with precise blending. Includes styling.",
    duration: "45 min",
    price: "€35",
    category: "Haircuts",
    popular: true,
  },
  {
    id: "men-buzz-cut",
    name: "Buzz Cut",
    description: "Clean, uniform cut with clippers. Quick and classic.",
    duration: "20 min",
    price: "€20",
    category: "Haircuts",
  },
  {
    id: "men-kids-cut",
    name: "Kids' Haircut (Under 12)",
    description: "Patient, kid friendly haircut service.",
    duration: "30 min",
    price: "€20",
    category: "Haircuts",
  },

  // Beard & Grooming
  {
    id: "men-beard-trim",
    name: "Beard Trim & Shaping",
    description: "Detailed beard sculpting with trimmer and scissors. Includes hot towel finish.",
    duration: "20 min",
    price: "€15",
    category: "Grooming",
  },
  {
    id: "men-hot-shave",
    name: "Traditional Hot Towel Shave",
    description: "Classic straight razor shave with hot towel treatment. Smooth and relaxing.",
    duration: "30 min",
    price: "€25",
    category: "Grooming",
  },
  {
    id: "men-combo",
    name: "Haircut + Beard Combo",
    description: "Complete grooming package. Haircut and beard trim.",
    duration: "60 min",
    price: "€40",
    category: "Packages",
    popular: true,
  },
  {
    id: "men-full-service",
    name: "Full Grooming Service",
    description: "The ultimate package: haircut, beard trim, and hot towel shave.",
    duration: "90 min",
    price: "€55",
    category: "Packages",
  },
];

// Group services by category
export const groupServicesByCategory = (services: Service[]) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
};

// Get popular services
export const getPopularServices = (services: Service[]) => {
  return services.filter(service => service.popular);
};

// Pricing notes and policies
export const pricingNotes = {
  women: [
    "Prices may vary for extra long or very thick hair",
    "Color correction pricing available upon consultation",
    "All color services include a complimentary consultation",
    "Package deals available for regular clients",
  ],
  men: [
    "Walk ins are welcome, but appointments are recommended",
    "Regular clients receive loyalty discounts",
    "Student discount available (show valid ID)",
  ],
  general: [
    "All prices are indicative and may vary based on hair length, thickness, and service complexity",
    "24 hour cancellation policy applies",
    "Payments accepted: Cash, Card, and Digital (iDeal/Tikkie)",
  ],
};

// Cancellation policy
export const cancellationPolicy = {
  notice: "24 hours",
  fee: "50% of service price",
  text: "Please provide at least 24 hours notice to cancel or reschedule your appointment. Late cancellations or no shows may incur a fee of 50% of the service price.",
};
