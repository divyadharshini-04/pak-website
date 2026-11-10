import ownerPhoto from '../assets/owner.jpg';
import grandparentsPhoto from '../assets/grandparents.jpg';
import groceryShopPhoto from '../assets/grocery-shop.jpg';
import hardwareShopPhoto from '../assets/hardware-shop.jpg';
import cookingVesselsPhoto from '../assets/cooking-vessels.jpg';

export const BUSINESS_INFO = {
  // Brand
  name: "P.A.K.",
  shortName: "PAK",
  title: "ELECTRICALS & HARDWARES",
  subtitle: "RENTAL VESSELS • DECORATION • CHAIRS • SOUND & LIGHT",
  tagline: "Three Generations. One Family Legacy.",
  shortIntro: "From our family's original grocery shop in Alakudi to P.A.K. Electricals & Hardwares and complete event rentals on Main Road, Kothandapuram, Sirkazhi.",

  // Three Generations & Accurate Distinct Locations
  legacy: {
    title: "Three Generations. One Family Legacy.",
    story: "From a village grocery shop in Alakudi to a growing hardware and celebration rental business in Kothandapuram, our journey continues through three generations of dedication, hard work and trust.",
    meaning: "P.A.K. stands for the proud initials of our three generations: Perumalswami • Assaithambi • Karthikeyan.",
    
    // Gen 1: Alakudi
    gen1: {
      name: "Perumalswami Nadar",
      title: "Generation 1 – The Beginning",
      location: "Alakudi, Tamil Nadu",
      desc: "The journey began with Perumalswami Nadar, who started the family's original grocery business in Alakudi, Tamil Nadu.",
      image: groceryShopPhoto,
      isPortrait: false,
      badge: "Founder • Alakudi"
    },
    
    // Gen 2: Alakudi
    gen2: {
      name: "Assaithambi Nadar & Kumari",
      title: "Generation 2 – Carrying the Tradition",
      location: "Alakudi, Tamil Nadu",
      desc: "Continuing his father's journey, Assaithambi Nadar and his wife Kumari carried forward and continue to run the family grocery shop in Alakudi.",
      photo: grandparentsPhoto,
      isPortrait: true,
      badge: "Alakudi Grocery Shop"
    },
    
    // Gen 3: Kothandapuram, Sirkazhi
    gen3: {
      name: "A. Karthikeyan",
      title: "Generation 3 – P.A.K. Expansion",
      designation: "Proprietor, P.A.K.",
      location: "Main Road, Kothandapuram, Sirkazhi Taluk",
      desc: "Taking the family business forward, A. Karthikeyan expanded into P.A.K. at Main Road, Kothandapuram, establishing three business divisions: Electricals & Hardwares, Cooking Vessel Rentals, and Marriage & Funeral Decoration Rentals, Chairs, Radio, Sound & Light.",
      photo: ownerPhoto,
      isPortrait: true,
      badge: "P.A.K. Kothandapuram • Proprietor"
    }
  },

  // Proprietor
  owner: {
    name: "A. Karthikeyan",
    designation: "Proprietor, P.A.K.",
    photo: ownerPhoto,
  },

  family: {
    grandparentsPhoto,
    groceryShopPhoto,
    hardwareShopPhoto,
    cookingVesselsPhoto,
  },

  // Distinct Locations
  locations: {
    pakShop: {
      name: "P.A.K. Electricals & Hardwares and Rental Business",
      address: "Main Road, Kothandapuram, Sirkazhi Taluk, Tamil Nadu, India",
      role: "Main P.A.K. Business Location"
    },
    groceryShop: {
      name: "Original Family Grocery Shop",
      address: "Alakudi, Tamil Nadu, India",
      role: "Family Heritage Location (Run by Assaithambi Nadar & Kumari)"
    }
  },

  // Contact Numbers
  phones: {
    primary: {
      raw: "919865189594",
      display: "98651 89594",
      callUrl: "tel:+919865189594",
      whatsappUrl: "https://wa.me/919865189594"
    },
    secondary: {
      raw: "919787654235",
      display: "97876 54235",
      callUrl: "tel:+919787654235",
      whatsappUrl: "https://wa.me/919787654235"
    }
  },

  // Location for P.A.K.
  location: {
    street: "Main Road",
    village: "Kothandapuram",
    taluk: "Sirkazhi Taluk",
    state: "Tamil Nadu",
    fullAddress: "Main Road, Kothandapuram, Sirkazhi Taluk, Tamil Nadu, India",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Main+Road,+Kothandapuram,+Sirkazhi+Taluk,+Tamil+Nadu,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionUrl: "https://www.google.com/maps/dir/?api=1&destination=Main+Road,+Kothandapuram,+Sirkazhi+Taluk,+Tamil+Nadu,+India"
  },

  // Social
  social: {
    instagram: "https://www.instagram.com/pak_sirkazhi",
    instagramHandle: "@pak_sirkazhi"
  },

  hours: "Monday – Sunday: 7:00 AM – 9:30 PM (All 7 Days)"
};

// WhatsApp link generator
export const getWhatsAppLink = (type = 'general', itemName = '') => {
  const num = BUSINESS_INFO.phones.primary.raw;
  let msg = "";

  if (type === 'item') {
    msg = `Hello P.A.K., I saw this item on your website: *${itemName}*. Is it available? Please share details.`;
  } else if (type === 'hardware') {
    msg = `Hello P.A.K., I need *Electrical & Hardware* materials in Kothandapuram. Please let me know.`;
  } else if (type === 'vessels') {
    msg = `Hello P.A.K., I would like to book *Cooking Vessels* for a function. Please share vessel sizes and rental details.`;
  } else if (type === 'decoration') {
    msg = `Hello P.A.K., I would like to book *Pandhal Decoration / Chairs / Sound & Light* for an upcoming ceremony. Please contact me.`;
  } else if (type === 'grocery') {
    msg = `Hello, I would like to enquire about the *Family Grocery Shop in Alakudi*.`;
  } else {
    msg = `Hello P.A.K., I would like to enquire about your hardware products and rental services in Kothandapuram.`;
  }

  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
};
