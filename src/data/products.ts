export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badgeKey?: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
  material?: string;
}

export const allProducts: Product[] = [
  { id: 1, name: "Sculpting Bodysuit", price: 89, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.new", description: "Bodysuit escultor de alta compresión que moldea tu silueta al instante. Tejido transpirable con tecnología seamless.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Negro", "Nude", "Café"], material: "85% Nylon, 15% Spandex" },
  { id: 2, name: "High-Waist Leggings", price: 65, originalPrice: 85, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", category: "Activewear", badgeKey: "product.badge.sale", description: "Leggings de cintura alta con compresión media. Ideales para entrenamiento y uso diario.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["Negro", "Gris", "Azul"], material: "78% Nylon, 22% Spandex" },
  { id: 3, name: "Sports Bra Elite", price: 55, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80", category: "Activewear", description: "Sujetador deportivo de alto soporte con bandas elásticas ajustables y copas moldeadas.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Negro", "Blanco", "Rosa"], material: "80% Poliéster, 20% Elastano" },
  { id: 4, name: "Waist Trainer Pro", price: 79, image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.bestseller", description: "Faja reductora profesional con varillas de acero flexibles y cierre de triple gancho.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Negro", "Nude"], material: "90% Neopreno, 10% Nylon" },
  { id: 5, name: "Seamless Shorts", price: 45, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80", category: "Activewear", description: "Shorts sin costuras con cintura elástica. Perfectos para yoga, pilates o running.", sizes: ["XS", "S", "M", "L"], colors: ["Negro", "Gris", "Verde"], material: "75% Nylon, 25% Spandex" },
  { id: 6, name: "Compression Tank", price: 49, originalPrice: 65, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", category: "Activewear", badgeKey: "product.badge.sale", description: "Tank top de compresión con tecnología de secado rápido y ventilación estratégica.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Negro", "Blanco", "Azul"], material: "82% Poliéster, 18% Elastano" },
  { id: 7, name: "Shaping Thong", price: 35, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80", category: "Shapewear", description: "Tanga moldeadora invisible bajo la ropa. Compresión suave en el abdomen.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Negro", "Nude", "Rosa"], material: "88% Nylon, 12% Spandex" },
  { id: 8, name: "Full Body Shaper", price: 120, image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.new", description: "Body completo de máxima compresión. Moldea cintura, abdomen, caderas y muslos.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Negro", "Nude"], material: "85% Nylon, 15% Spandex" },
];
