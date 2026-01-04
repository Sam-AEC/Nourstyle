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
  // Cuts & Styling
  {
    id: "women-wash-cut-dry-long",
    name: "Women – Long hair wash, cut & dry",
    description: "Wash, cut, and dry for long hair.",
    duration: "60 min",
    price: "€45",
    category: "Cuts & Styling",
    popular: true,
  },
  {
    id: "women-styling-addon",
    name: "Styling (blow dry/curling iron)",
    description: "Add-on styling with blow dry or curling iron.",
    duration: "15 min",
    price: "+ €15",
    category: "Cuts & Styling",
  },
  {
    id: "women-blowdry-styling",
    name: "Women – Blow dry styling",
    description: "Hair wash, dry, and blow dry styling for a beautiful, groomed look.",
    duration: "60 min",
    price: "€35",
    category: "Cuts & Styling",
  },
  {
    id: "women-curls-wash",
    name: "Women – Curls with curling iron (incl. wash)",
    description: "Wash and curls with scrolling iron for a beautiful, long-lasting look.",
    duration: "60 min",
    price: "€40",
    category: "Cuts & Styling",
  },

  // Color Treatments
  {
    id: "women-root-touch",
    name: "Root Touch Up",
    description: "Touch up roots for a fresh, even color.",
    duration: "60 min",
    price: "€50",
    category: "Color",
  },
  {
    id: "women-color-short",
    name: "Color – Short hair",
    description: "Full coloring for short hair for an even, fresh color.",
    duration: "60 min",
    price: "€50",
    category: "Color",
  },
  {
    id: "women-color-medium",
    name: "Color – Medium hair",
    description: "Full coloring for medium hair for an even, fresh color.",
    duration: "60 min",
    price: "€70",
    category: "Color",
  },
  {
    id: "women-color-long",
    name: "Color – Long hair",
    description: "Full coloring for long hair for an even, fresh color.",
    duration: "60 min",
    price: "€80",
    category: "Color",
  },
  {
    id: "women-toner",
    name: "Toner (rinse)",
    description: "Refreshing toner to neutralize the color and give extra shine.",
    duration: "60 min",
    price: "€50",
    category: "Color",
  },

  // Packages (Highlights + Olaplex + Toner + Cut & Dry)
  {
    id: "women-highlights-package-short",
    name: "Highlights Package (Short Hair)",
    description: "Highlights for short hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
    duration: "2 hrs",
    price: "€150",
    category: "Packages",
    popular: true,
  },
  {
    id: "women-highlights-package-medium",
    name: "Highlights Package (Medium Hair)",
    description: "Highlights for medium hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
    duration: "2 hrs",
    price: "€170",
    category: "Packages",
    popular: true,
  },
  {
    id: "women-highlights-package-long",
    name: "Highlights Package (Long Hair)",
    description: "Highlights for long hair with Olaplex and toner for a fresh, even color. Includes cut and dry.",
    duration: "2 hrs",
    price: "€200",
    category: "Packages",
    popular: true,
  },
  {
    id: "women-creative-color",
    name: "Balayage / Babylights / Ombre / Reflex / Face-framing",
    description: "We choose the best treatment for you in the salon. Price depends on length, thickness, and technique.",
    duration: "Consultation",
    price: "€180 - €230",
    category: "Color",
    popular: true,
  },

  // Extensions
  {
    id: "women-extensions",
    name: "Micro Keratin Extensions",
    description: "For extra length and volume with a natural look. Treatment and color tailored to your hair.",
    duration: "Consultation",
    price: "On Request",
    category: "Extensions",
  },
  {
    id: "women-extensions-refit",
    name: "Micro-keratin extensions – Refit",
    description: "Extensions removed and replaced with new micro-keratin per strand.",
    duration: "Variable",
    price: "€1 / strand",
    category: "Extensions",
  },
];

// Men's Services
export const menServices: Service[] = [
  // Haircuts
  {
    id: "men-haircut",
    name: "Men Haircut",
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
    name: "Kids Haircut (Under 12)",
    description: "Patient, kid friendly haircut service.",
    duration: "30 min",
    price: "€20",
    category: "Haircuts",
  },

  // Beard & Grooming
  {
    id: "men-beard-trim",
    name: "Beard Trim and Shaping",
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
