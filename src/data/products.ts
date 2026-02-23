export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badgeKey?: string;
}

export const allProducts: Product[] = [
  { id: 1, name: "Sculpting Bodysuit", price: 89, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.new" },
  { id: 2, name: "High-Waist Leggings", price: 65, originalPrice: 85, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", category: "Activewear", badgeKey: "product.badge.sale" },
  { id: 3, name: "Sports Bra Elite", price: 55, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80", category: "Activewear" },
  { id: 4, name: "Waist Trainer Pro", price: 79, image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.bestseller" },
  { id: 5, name: "Seamless Shorts", price: 45, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80", category: "Activewear" },
  { id: 6, name: "Compression Tank", price: 49, originalPrice: 65, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", category: "Activewear", badgeKey: "product.badge.sale" },
  { id: 7, name: "Shaping Thong", price: 35, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80", category: "Shapewear" },
  { id: 8, name: "Full Body Shaper", price: 120, image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&q=80", category: "Shapewear", badgeKey: "product.badge.new" },
];
