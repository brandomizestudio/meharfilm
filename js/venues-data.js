// Venues Data - Simplified
const venuesData = [
  {
    id: '1',
    name: "The Taj Palace, Hisar",
    location: "Hisar, Haryana",
    capacity: "300-500 guests",
    food: "Vegetarian",
    area: "Indoor & Outdoor",
    image: "https://images.unsplash.com/photo-1519167758481-83f29da8fd14?w=600&q=75&auto=format"
  },
  {
    id: '2',
    name: "Best Western Imperio, Hisar",
    location: "Hisar, Haryana",
    capacity: "50-1000 guests",
    food: "Veg & Non-Veg",
    area: "Indoor & Outdoor",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=75&auto=format"
  },
  {
    id: '3',
    name: "Lemon Tree Hotel, Hisar",
    location: "Hisar, Haryana",
    capacity: "250-350 guests",
    food: "Veg & Non-Veg",
    area: "Banquet Hall",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75&auto=format"
  },
  {
    id: '4',
    name: "Royal Palm Banquet, Hisar",
    location: "Hisar, Haryana",
    capacity: "225-800 guests",
    food: "Veg & Non-Veg",
    area: "Indoor & Outdoor",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=75&auto=format"
  },
  {
    id: '5',
    name: "Imperium Resorts, Hisar",
    location: "Hisar, Haryana",
    capacity: "450-800 guests",
    food: "Veg & Non-Veg",
    area: "Resort & Lawns",
    image: "https://images.unsplash.com/photo-1567540403858-d71f32e65a2f?w=600&q=75&auto=format"
  },
  {
    id: '6',
    name: "Tulip Resort, Hisar",
    location: "Hisar, Haryana",
    capacity: "180-2500 guests",
    food: "Veg & Non-Veg",
    area: "Resort & Gardens",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=75&auto=format"
  }
];

// Ensure global accessibility
if (typeof window !== 'undefined') {
  window.venuesData = venuesData;
}

