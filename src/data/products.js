import cookingVesselsActual from '../assets/cooking-vessels.jpg';

export const CATEGORIES = [
  { id: "all", name: "All Items" },
  { id: "electronics", name: "Electronics" },
  { id: "hardware", name: "Hardware" },
  { id: "vessels", name: "Cooking Vessels" },
  { id: "decoration", name: "Decoration" },
  { id: "chairs", name: "Chairs" }
];

export const PRODUCTS_CATALOGUE = [
  // ================= CATEGORY 1: ELECTRONICS =================
  {
    id: "e1",
    name: "LED Bulbs",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/India_-_Festival_of_Lamps_-_12_%283108387258%29.jpg/1280px-India_-_Festival_of_Lamps_-_12_%283108387258%29.jpg"
  },
  {
    id: "e2",
    name: "Tube Lights & Battens",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Reception_stage_with_Lighting.jpg/1280px-Reception_stage_with_Lighting.jpg"
  },
  {
    id: "e3",
    name: "Electrical Wires & Cables",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Electric_guide_3%C3%972.5_mm.jpg/1280px-Electric_guide_3%C3%972.5_mm.jpg"
  },
  {
    id: "e4",
    name: "Modular Switches",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Antique_light_switch_-_power_outlet_%26_fan_regulator.jpg/1280px-Antique_light_switch_-_power_outlet_%26_fan_regulator.jpg"
  },
  {
    id: "e5",
    name: "Sockets & Plug Bases",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/India%2C_Day_12_%283415310765%29.jpg/1280px-India%2C_Day_12_%283415310765%29.jpg"
  },
  {
    id: "e6",
    name: "Ceiling Fans & Regulators",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/India_-_Delhi_fans_on_the_ceiling_-_4944.jpg/1280px-India_-_Delhi_fans_on_the_ceiling_-_4944.jpg"
  },
  {
    id: "e7",
    name: "Extension Boards & Spike Strips",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Green_electric_cable.jpg/1280px-Green_electric_cable.jpg"
  },
  {
    id: "e8",
    name: "Electrical Accessories & MCBs",
    category: "electronics",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Woman_operating_an_electrical_pump_starter_for_irrigation_in_Raichur.jpg/1280px-Woman_operating_an_electrical_pump_starter_for_irrigation_in_Raichur.jpg"
  },

  // ================= CATEGORY 2: HARDWARE =================
  {
    id: "h1",
    name: "Water Pumps (Submersible & Monoblock)",
    category: "hardware",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/KU4_borewell_submersible_pumps.jpg"
  },
  {
    id: "h2",
    name: "Water Storage Tanks",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Water_Tank_Kerala_House.JPG/1280px-Water_Tank_Kerala_House.JPG"
  },
  {
    id: "h3",
    name: "PVC Pipes",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Pvc-o-pipes.jpg/1280px-Pvc-o-pipes.jpg"
  },
  {
    id: "h4",
    name: "Pipe Fittings (Elbows, Tees, Sockets)",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Bundled_PVC_pipes_for_drainage_in_Awka.jpg/1280px-Bundled_PVC_pipes_for_drainage_in_Awka.jpg"
  },
  {
    id: "h5",
    name: "Brass & CP Taps",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Water_tap_brass.JPG/1280px-Water_tap_brass.JPG"
  },
  {
    id: "h6",
    name: "Plumbing Valves & Stop Cocks",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Brass_water_tap.jpg/1280px-Brass_water_tap.jpg"
  },
  {
    id: "h7",
    name: "Plumbing Accessories & Solvent",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/In_Mary%27s_Ace_Hardware%2C_Rampart_Street%2C_New_Orleans%2C_23_September_2021_-_01.jpg/1280px-In_Mary%27s_Ace_Hardware%2C_Rampart_Street%2C_New_Orleans%2C_23_September_2021_-_01.jpg"
  },
  {
    id: "h8",
    name: "Household Hardware Essentials & Tools",
    category: "hardware",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/India%2C_Day_12_%283415310765%29.jpg/1280px-India%2C_Day_12_%283415310765%29.jpg"
  },

  // ================= CATEGORY 3: COOKING VESSELS =================
  {
    id: "v1",
    name: "Large Stainless Steel Cooking Vessels",
    category: "vessels",
    image: cookingVesselsActual
  },
  {
    id: "v2",
    name: "Commercial Biryani Deghas",
    category: "vessels",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_preparation.jpg"
  },
  {
    id: "v3",
    name: "Heavy Feast Cauldrons & Pots",
    category: "vessels",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Food_preparation_for_Indian_wedding_22.jpg/1280px-Food_preparation_for_Indian_wedding_22.jpg"
  },
  {
    id: "v4",
    name: "Commercial Gas Ranges & Burners",
    category: "vessels",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Food_preparation_for_Indian_wedding_23.jpg/1280px-Food_preparation_for_Indian_wedding_23.jpg"
  },
  {
    id: "v5",
    name: "Traditional South Indian Uruli",
    category: "vessels",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Uruli_large.JPG/1280px-Uruli_large.JPG"
  },
  {
    id: "v6",
    name: "Stainless Steel Serving Buckets & Ladles",
    category: "vessels",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Food_preparation_for_Indian_wedding_24.jpg/1280px-Food_preparation_for_Indian_wedding_24.jpg"
  },

  // ================= CATEGORY 4: DECORATION =================
  {
    id: "d1",
    name: "Marriage Pandhal",
    category: "decoration",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Wedding_ceremony_in_Tamil_Nadu_01.jpg/1280px-Wedding_ceremony_in_Tamil_Nadu_01.jpg"
  },
  {
    id: "d2",
    name: "Death Ceremony (Funeral) Pandhal",
    category: "decoration",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/%E0%A6%AC%E0%A6%A8%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%AF%E0%A6%BC_%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A8_%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%AA%E0%A7%82%E0%A6%9C%E0%A6%BE_%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B2_%E0%A7%A7_-_2022_Durga_Puja_pandal_in_Bangaon.jpg/1280px-%E0%A6%AC%E0%A6%A8%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%AF%E0%A6%BC_%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A8_%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%AA%E0%A7%82%E0%A6%9C%E0%A6%BE_%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B2_%E0%A7%A7_-_2022_Durga_Puja_pandal_in_Bangaon.jpg"
  },
  {
    id: "d3",
    name: "Wedding Stage Decorations",
    category: "decoration",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Wedding_Mandap_Decoration.jpg/1280px-Indian_Wedding_Mandap_Decoration.jpg"
  },
  {
    id: "d4",
    name: "Lighting Decorations & Serial Lights",
    category: "decoration",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/MarriageRECEPTION-India-tamilword23.2.jpg"
  },
  {
    id: "d5",
    name: "Traditional Radio Sets",
    category: "decoration",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Vintage_Radio_Collection_%284765803246%29.jpg/1280px-Vintage_Radio_Collection_%284765803246%29.jpg"
  },
  {
    id: "d6",
    name: "Public Address Sound Equipment & Horns",
    category: "decoration",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Public-address-system.jpg/1280px-Public-address-system.jpg"
  },

  // ================= CATEGORY 5: CHAIRS =================
  {
    id: "c1",
    name: "Function Chairs with White Covers",
    category: "chairs",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Wheelchair_Accessibility_in_a_marriage_hall_at_Madurai%2C_Tamilnadu_India.jpg/1280px-Wheelchair_Accessibility_in_a_marriage_hall_at_Madurai%2C_Tamilnadu_India.jpg"
  },
  {
    id: "c2",
    name: "Plastic Stackable Event Chairs",
    category: "chairs",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/South_Indian_wedding_Feast.JPG/1280px-South_Indian_wedding_Feast.JPG"
  },
  {
    id: "c3",
    name: "Banquet Hall & Mandap Seating",
    category: "chairs",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Wedding_reception_stage%2C_decorations%2C_Kochi.jpg/1280px-Wedding_reception_stage%2C_decorations%2C_Kochi.jpg"
  }
];
