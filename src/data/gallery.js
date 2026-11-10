import hardwareShopImg from '../assets/hardware-shop.jpg';
import cookingVesselsImg from '../assets/cooking-vessels.jpg';
import groceryShopImg from '../assets/grocery-shop.jpg';
import grandparentsImg from '../assets/grandparents.jpg';
import ownerImg from '../assets/owner.jpg';

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "family-shop", label: "Our Shop & Family" },
  { id: "vessels", label: "Cooking Vessels" },
  { id: "hardware", label: "Hardware & Electricals" },
  { id: "pandhal-decor", label: "Pandhal & Decoration" },
  { id: "chairs-sound", label: "Chairs & Sound" }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "family-shop",
    title: "P.A.K. Electricals & Hardwares Shop Interior",
    tag: "Actual PAK Shop",
    image: hardwareShopImg,
    aspect: "wide"
  },
  {
    id: 2,
    category: "vessels",
    title: "Large Cooking Vessels & Gas Ranges",
    tag: "Actual PAK Vessels",
    image: cookingVesselsImg,
    aspect: "square"
  },
  {
    id: 3,
    category: "family-shop",
    title: "Traditional Alakudi Village Grocery Shop (Started by Perumalswami Nadar - Gen 1)",
    tag: "Alakudi Grocery Shop",
    image: groceryShopImg,
    aspect: "tall"
  },
  {
    id: 4,
    category: "family-shop",
    title: "Assaithambi Nadar & Kumari – Continuing Family Grocery in Alakudi",
    tag: "Generation 2 (Alakudi)",
    image: grandparentsImg,
    aspect: "tall"
  },
  {
    id: 5,
    category: "family-shop",
    title: "A. Karthikeyan – Generation 3 (Proprietor, P.A.K.)",
    tag: "Generation 3",
    image: ownerImg,
    aspect: "tall"
  },
  {
    id: 6,
    category: "pandhal-decor",
    title: "Traditional South Indian Marriage Pandhal",
    tag: "Marriage Pandhal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Wedding_ceremony_in_Tamil_Nadu_01.jpg/1280px-Wedding_ceremony_in_Tamil_Nadu_01.jpg",
    aspect: "wide"
  },
  {
    id: 7,
    category: "pandhal-decor",
    title: "Respectful Death Ceremony (Funeral) Pandhal",
    tag: "Funeral Pandhal",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/%E0%A6%AC%E0%A6%A8%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%AF%E0%A6%BC_%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A8_%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%AA%E0%A7%82%E0%A6%9C%E0%A6%BE_%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B2_%E0%A7%A7_-_2022_Durga_Puja_pandal_in_Bangaon.jpg/1280px-%E0%A6%AC%E0%A6%A8%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%AF%E0%A6%BC_%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A8_%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%AA%E0%A7%82%E0%A6%9C%E0%A6%BE_%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B2_%E0%A7%A7_-_2022_Durga_Puja_pandal_in_Bangaon.jpg",
    aspect: "wide"
  },
  {
    id: 8,
    category: "pandhal-decor",
    title: "Wedding Stage Floral Decoration",
    tag: "Stage Decor",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Wedding_Mandap_Decoration.jpg/1280px-Indian_Wedding_Mandap_Decoration.jpg",
    aspect: "tall"
  },
  {
    id: 9,
    category: "chairs-sound",
    title: "Event Chairs in Marriage Hall",
    tag: "Function Chairs",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Wheelchair_Accessibility_in_a_marriage_hall_at_Madurai%2C_Tamilnadu_India.jpg/1280px-Wheelchair_Accessibility_in_a_marriage_hall_at_Madurai%2C_Tamilnadu_India.jpg",
    aspect: "wide"
  },
  {
    id: 10,
    category: "vessels",
    title: "Massive Biryani Cooking in Sealed Degha",
    tag: "Biryani Degha",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_preparation.jpg",
    aspect: "square"
  },
  {
    id: 11,
    category: "hardware",
    title: "Rigid PVC Water Pipes & Fittings",
    tag: "Plumbing",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Pvc-o-pipes.jpg/1280px-Pvc-o-pipes.jpg",
    aspect: "tall"
  },
  {
    id: 12,
    category: "hardware",
    title: "Agricultural & Domestic Water Pumps",
    tag: "Water Pumps",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/KU4_borewell_submersible_pumps.jpg",
    aspect: "square"
  },
  {
    id: 13,
    category: "chairs-sound",
    title: "Traditional Vintage Radios",
    tag: "Vintage Heritage",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Vintage_Radio_Collection_%284765803246%29.jpg/1280px-Vintage_Radio_Collection_%284765803246%29.jpg",
    aspect: "square"
  },
  {
    id: 14,
    category: "chairs-sound",
    title: "Public Address Horn Speaker Unit",
    tag: "Sound System",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Public-address-system.jpg/1280px-Public-address-system.jpg",
    aspect: "tall"
  }
];
