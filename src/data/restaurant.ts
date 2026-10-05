/**
 * FLAVORS Restaurant Data & Configuration
 * 
 * Edit this file to update the restaurant's information, menu items,
 * contact details, opening hours, and branding across the entire site.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'burgers' | 'mains' | 'pizza' | 'desserts' | 'drinks';
  price: string;
  isDemoPrice: boolean;
  description: string;
  image: string;
  dietary?: string[];
  highlight?: string;
  ingredients?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export const RESTAURANT_DATA = {
  name: "FLAVORS",
  tagline: "Taste the Difference",
  headline: "Good Food. Beautiful Moments.",
  description: "An inviting culinary destination where honest ingredients, artisanal technique, and heartfelt hospitality meet around every table.",
  
  // Disclaimer for concept demo
  isConceptDemo: true,
  demoDisclaimer: "Website concept demo created for presentation purposes. Specific menu selections, pricing, and operating details are to be confirmed with the establishment.",
  
  // Contact & Location Details (Clearly marked demo indicators as required)
  contact: {
    address: "Restaurant address to be confirmed",
    neighborhood: "Downtown Culinary District",
    city: "Metro City",
    fullAddressDemo: "142 Epicurean Avenue, Suite 100, Gourmet Quarter",
    phone: "Contact number to be confirmed",
    phoneDemo: "+1 (555) 234-5678",
    email: "inquiries@flavors-concept.demo",
    openingHours: {
      weekdays: "Opening hours to be confirmed (e.g. Tue – Thu: 12:00 PM – 10:00 PM)",
      weekends: "Opening hours to be confirmed (e.g. Fri – Sun: 12:00 PM – 11:30 PM)",
      closedDay: "Closed Mondays for culinary prep",
    },
    googleMapsSearchQuery: "FLAVORS Restaurant Concept",
    whatsappNumber: "", // Empty until verified by business owner
    whatsappPlaceholder: "WhatsApp inquiries to be confirmed",
  },

  // Social Links (Verified or marked as demo)
  socials: [
    { name: "Instagram", url: "#", handle: "@flavors.concept" },
    { name: "Facebook", url: "#", handle: "FLAVORS Bistro" },
    { name: "TripAdvisor", url: "#", handle: "FLAVORS Dining" }
  ],

  // Core Values (General dining philosophy without unverified claims)
  values: [
    {
      title: "Artisanal Dedication",
      description: "Every sauce is simmered from scratch, every bread freshly baked, and each cut handled with uncompromised attention.",
      badge: "Craftsmanship"
    },
    {
      title: "A Menu for Every Craving",
      description: "From flame-grilled prime cuts and handcrafted sourdough pizzas to vibrant seasonal salads and delicate desserts.",
      badge: "Culinary Variety"
    },
    {
      title: "Food Worth Sharing",
      description: "Portions and platters designed to bring people together, spark genuine conversations, and celebrate everyday milestones.",
      badge: "Hospitality"
    },
    {
      title: "Warm, Unhurried Ambiance",
      description: "Soft lighting, comfortable textures, and a welcoming team that treats you like an invited guest in our home.",
      badge: "Atmosphere"
    }
  ],

  // Menu Categories
  categories: [
    { id: 'all', label: 'All Offerings' },
    { id: 'starters', label: 'Starters' },
    { id: 'burgers', label: 'Burgers & Handhelds' },
    { id: 'mains', label: 'Signature Mains' },
    { id: 'pizza', label: 'Pizza & Hearth' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Cocktails & Cellar' },
  ],

  // Sample Menu items (clearly tagged as illustrative sample dishes)
  menuItems: [
    {
      id: "m1",
      name: "Flame-Seared Prime Ribeye",
      category: "mains",
      price: "$38.00",
      isDemoPrice: true,
      description: "Dry-aged 12oz beef steak seared over open coals, topped with whipped rosemary herb butter, roasted garlic head, and sea salt flakes.",
      image: "/images/spotlight_signature_dish.jpg",
      dietary: ["Chef's Signature", "Gluten-Free"],
      highlight: "House Specialty",
      ingredients: ["Dry-aged prime beef", "Cultured rosemary butter", "Confit garlic", "Maldon sea salt"]
    },
    {
      id: "m2",
      name: "The FLAVORS Truffle Burger",
      category: "burgers",
      price: "$21.50",
      isDemoPrice: true,
      description: "Custom ground short rib & brisket patty, melted 18-month aged cheddar, black truffle aioli, and caramelized balsamic onions on toasted brioche.",
      image: "/images/hero_gourmet_spread.jpg",
      dietary: ["House Favorite"],
      highlight: "Signature Handheld",
      ingredients: ["Brisket & short rib blend", "Truffle aioli", "Aged cheddar", "Glazed brioche bun"]
    },
    {
      id: "m3",
      name: "Artisanal Buffalo Margherita Pizza",
      category: "pizza",
      price: "$19.00",
      isDemoPrice: true,
      description: "72-hour slow-fermented sourdough crust blistered at 900°F, San Marzano tomato sauce, fresh buffalo mozzarella, aromatic basil, and raw olive oil.",
      image: "/images/gallery_artisan_pizza.jpg",
      dietary: ["Vegetarian", "Wood-Fired"],
      highlight: "Hearth Baked",
      ingredients: ["San Marzano DOP", "Buffalo Mozzarella", "Fresh basil", "Cold-pressed olive oil"]
    },
    {
      id: "m4",
      name: "Molten Valrhona Chocolate Fondant",
      category: "desserts",
      price: "$13.50",
      isDemoPrice: true,
      description: "Decadent dark chocolate sponge with a warm flowing ganache center, served with house-spun vanilla bean gelato and fresh tart raspberries.",
      image: "/images/gallery_gourmet_dessert.jpg",
      dietary: ["Vegetarian", "Sweet Ending"],
      highlight: "Pastry Craft",
      ingredients: ["Valrhona 70% dark chocolate", "Madagascar vanilla bean", "Cultured butter", "Wild raspberries"]
    },
    {
      id: "m5",
      name: "Crispy Calamari Fritti",
      category: "starters",
      price: "$16.00",
      isDemoPrice: true,
      description: "Tender flash-fried calamari tossed with charred lemon wheels, shaved pickled chilis, and served with a zesty preserved lemon caper aioli.",
      image: "/images/hero_gourmet_spread.jpg",
      dietary: ["Seafood", "Shareable"],
      ingredients: ["Fresh calamari", "Meyer lemon", "Calabrian chili", "House aioli"]
    },
    {
      id: "m6",
      name: "Heritage Burrata & Roasted Heirloom Figs",
      category: "starters",
      price: "$17.50",
      isDemoPrice: true,
      description: "Creamy whole burrata sphere, caramelized black mission figs, wild baby arugula, aged Modena balsamic reduction, and warm grilled rustic sourdough.",
      image: "/images/about_restaurant_ambiance.jpg",
      dietary: ["Vegetarian", "Seasonal"],
      ingredients: ["Pugliese burrata", "Heirloom figs", "Wild rocket", "25-year aged balsamic"]
    },
    {
      id: "m7",
      name: "Slow-Roasted Pork Belly Bao & Slaw",
      category: "burgers",
      price: "$18.00",
      isDemoPrice: true,
      description: "Crispy crackling pork belly glazed in spiced honey bourbon reduction, ginger-scallion slaw, and crushed toasted peanuts in warm steamed buns.",
      image: "/images/spotlight_signature_dish.jpg",
      dietary: ["Chef Recommended"],
      ingredients: ["Braised pork belly", "Bourbon glaze", "Pickled cucumber", "Sesame brioche"]
    },
    {
      id: "m8",
      name: "Smoked Prosciutto & Wild Mushroom Pizza",
      category: "pizza",
      price: "$23.00",
      isDemoPrice: true,
      description: "Wood-fired crust, white truffle cream base, roasted cremini & chanterelle mushrooms, fior di latte, and topped with 24-month prosciutto di Parma.",
      image: "/images/gallery_artisan_pizza.jpg",
      dietary: ["Wood-Fired"],
      ingredients: ["Wild chanterelles", "Truffle fonduta", "Prosciutto di Parma", "Fior di latte"]
    },
    {
      id: "m9",
      name: "Pan-Roasted Mediterranean Sea Bass",
      category: "mains",
      price: "$34.00",
      isDemoPrice: true,
      description: "Crisp-skinned branzino fillet over saffron-infused potato confit, charred broccolini, blistered cherry tomatoes, and herb-caper emulsion.",
      image: "/images/about_restaurant_ambiance.jpg",
      dietary: ["Gluten-Free", "Seafood"],
      ingredients: ["Wild branzino", "Saffron potatoes", "Charred broccolini", "Citrus beurre blanc"]
    },
    {
      id: "m10",
      name: "Smoked Old Fashioned & Craft Cocktails",
      category: "drinks",
      price: "$15.00",
      isDemoPrice: true,
      description: "Handcrafted small-batch bourbon, aromatic Angostura bitters, raw demerara syrup, torched orange peel, and hickory wood smoke.",
      image: "/images/hero_gourmet_spread.jpg",
      dietary: ["Craft Beverage", "21+"],
      ingredients: ["Small batch bourbon", "Aromatic bitters", "Orange peel oils", "Hickory smoke"]
    }
  ] as MenuItem[],

  // Gallery Items
  gallery: [
    {
      id: "g1",
      title: "The Dining Room",
      category: "Ambiance",
      image: "/images/about_restaurant_ambiance.jpg",
      aspect: "landscape",
      caption: "Warm golden lighting, linen napkins, and intimate seating designed for comfortable dining."
    },
    {
      id: "g2",
      title: "Signature Prime Cut",
      category: "Grill",
      image: "/images/spotlight_signature_dish.jpg",
      aspect: "square",
      caption: "Seared over glowing hardwood embers and basted in cultured herb butter."
    },
    {
      id: "g3",
      title: "Stone Hearth Pizza",
      category: "Oven",
      image: "/images/gallery_artisan_pizza.jpg",
      aspect: "square",
      caption: "Naturally leavened dough blistered at extreme heat for a light, chewy crust."
    },
    {
      id: "g4",
      title: "Pastry & Confections",
      category: "Dessert",
      image: "/images/gallery_gourmet_dessert.jpg",
      aspect: "portrait",
      caption: "Warm flowing dark chocolate and house-made vanilla bean gelato."
    },
    {
      id: "g5",
      title: "The Evening Spread",
      category: "Cuisine",
      image: "/images/hero_gourmet_spread.jpg",
      aspect: "landscape",
      caption: "A generous table set with our signature cuts, fresh sides, and full-bodied wine."
    },
    {
      id: "g6",
      title: "Cocktail Craft",
      category: "Bar",
      image: "/images/hero_gourmet_spread.jpg",
      aspect: "square",
      caption: "Hand-chipped ice, botanical syrups, and expertly measured spirits."
    }
  ] as GalleryItem[]
};
