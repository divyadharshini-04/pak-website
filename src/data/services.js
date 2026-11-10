import hardwareShopImg from '../assets/hardware-shop.jpg';
import cookingVesselsImg from '../assets/cooking-vessels.jpg';
import groceryShopImg from '../assets/grocery-shop.jpg';

export const MAIN_SERVICES = [
  {
    id: "hardware-electricals",
    number: "01",
    title: "Hardware & Electricals",
    shortTitle: "Electricals & Hardwares",
    badge: "Main Business",
    image: hardwareShopImg,
    isActualPhoto: true,
    description: "Wires, cables, switches, LED lights, water pumps, PVC pipes, water tanks, taps and complete household hardware supplies.",
    items: [
      "Certified Electrical Wires & Cables",
      "Submersible & Monoblock Water Pumps",
      "Overhead Water Storage Tanks",
      "PVC Pipes & Plumbing Fittings",
      "LED Bulbs & Batten Lights",
      "Modular Switches, Sockets & Accessories"
    ],
    link: "/products?cat=electronics"
  },
  {
    id: "cooking-vessels",
    number: "02",
    title: "Cooking Vessel Rentals",
    shortTitle: "Vessel Rentals",
    badge: "Catering Equipment",
    image: cookingVesselsImg,
    isActualPhoto: true,
    description: "Commercial stainless steel cooking vessels, giant biryani deghas, cauldrons, kadai and gas burners for marriages and functions.",
    items: [
      "Large Biryani Deghas with Tight Lids",
      "Commercial Stainless Steel Handis",
      "Deep Frying Kadai for Sweets",
      "High-Capacity Idli Steamers",
      "Heavy Ladles, Spatulas & Serving Buckets"
    ],
    link: "/products?cat=vessels"
  },
  {
    id: "decoration-events",
    number: "03",
    title: "Decoration & Event Rentals",
    shortTitle: "Decoration & Events",
    badge: "Function Rentals",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Wedding_Mandap_Decoration.jpg/1280px-Indian_Wedding_Mandap_Decoration.jpg",
    isActualPhoto: false,
    description: "Marriage pandhals, death ceremony pandhals, stage decorations, function chairs, traditional radio sets, sound systems and festive lighting.",
    items: [
      "Traditional South Indian Marriage Pandhal",
      "Respectful Death Ceremony (Funeral) Pandhal",
      "Reception Stage Decorations & Floral Arches",
      "Comfortable Banquet Chairs with Covers",
      "Traditional Radios & Public Address Sound",
      "Serial Lights & Focus Stage Illumination"
    ],
    link: "/products?cat=decoration"
  },
  {
    id: "grocery-store",
    number: "04",
    title: "Family Grocery Store (Alakudi)",
    shortTitle: "Grocery Store (Alakudi)",
    badge: "Family Roots • Alakudi",
    image: groceryShopImg,
    isActualPhoto: true,
    description: "Our original family grocery shop in Alakudi, Tamil Nadu, started by Perumalswami Nadar and carried forward with trust by Assaithambi Nadar and Kumari.",
    items: [
      "Traditional Village Grocery Heritage in Alakudi",
      "Fresh Daily Essentials & Provisions",
      "Decades of Community Trust in Alakudi, Tamil Nadu"
    ],
    link: "/about"
  }
];
