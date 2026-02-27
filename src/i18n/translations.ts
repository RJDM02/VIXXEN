export type Language = "es" | "en";

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    "nav.shop": "Tienda",
    "nav.collections": "Colecciones",

    // Hero
    "hero.title": "Activa Tu Poder",
    "hero.subtitle": "SHAPEWEAR & ROPA DEPORTIVA",
    "hero.cta": "Comprar Ahora",

    // Featured Products
    "featured.title": "Nuevos Productos",
    "featured.subtitle": "Descubre nuestras últimas novedades",
    "product.addToCart": "Añadir al Carrito",
    "product.badge.new": "NUEVO",
    "product.badge.sale": "OFERTA",
    "product.badge.bestseller": "MÁS VENDIDO",

    // Categories
    "categories.title": "Nuestras Colecciones",
    "categories.subtitle": "Encuentra tu ajuste perfecto",
    "categories.explore": "Explorar",
    "categories.shapewear": "Shapewear",
    "categories.shapewear.desc": "Escultura y moldeado",
    "categories.activewear": "Ropa Deportiva",
    "categories.activewear.desc": "Rendimiento y comodidad",
    "categories.accessories": "Accesorios",
    "categories.accessories.desc": "Completa tu outfit",

    // Features
    "features.shipping.title": "Envío Gratis",
    "features.shipping.desc": "En pedidos superiores a $50",
    "features.returns.title": "Devoluciones Fáciles",
    "features.returns.desc": "30 días para cambiar",
    "features.quality.title": "Calidad Premium",
    "features.quality.desc": "Materiales de primera",

    // Footer
    "footer.description": "Activa Tu Poder. Shapewear y ropa deportiva premium diseñada para potenciar cada uno de tus movimientos.",
    "footer.shop": "Tienda",
    "footer.newArrivals": "Novedades",
    "footer.shapewear": "Shapewear",
    "footer.activewear": "Ropa Deportiva",
    "footer.accessories": "Accesorios",
    "footer.help": "Ayuda",
    "footer.sizeGuide": "Guía de Tallas",
    "footer.shipping": "Envíos",
    "footer.returns": "Devoluciones",
    "footer.contact": "Contáctanos",
    "footer.followUs": "Síguenos",
    "footer.rights": "© 2025 by Vixxen Company. Todos los Derechos Reservados.",

    // Search
    "search.placeholder": "Buscar productos...",
    "search.noResults": "No se encontraron resultados.",

    // Cart
    "cart.title": "Tu Carrito",
    "cart.empty": "Tu carrito está vacío",
    "cart.subtotal": "Subtotal",
    "cart.checkout": "Ir a Pagar",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",

    // Shop page
    "shop.title": "Tienda",
    "shop.subtitle": "Descubre nuestra colección premium",
    "shop.categories": "Categorías",
    "shop.all": "Todos",
    "shop.size": "Talla",
    "shop.priceRange": "Rango de Precio",
    "shop.filters": "Filtros",
    "shop.showing": "Mostrando",
    "shop.products": "productos",
    "shop.noProducts": "No se encontraron productos en esta categoría.",

    // Product Detail
    "product.notFound": "Producto no encontrado",
    "product.backToShop": "Volver a la tienda",
    "product.reviews": "reseñas",
    "product.defaultDescription": "Producto premium diseñado para potenciar cada uno de tus movimientos.",
    "product.material": "Material",
    "product.size": "Talla",
    "product.color": "Color",
    "product.related": "Productos Relacionados",
    "product.share": "Compartir",
    "product.shared": "¡Enlace copiado!",
    "nav.home": "Inicio",

    // Login
    "login.title": "Iniciar Sesión",
    "login.subtitle": "Bienvenida de vuelta a VIXXEN",
    "login.email": "Correo Electrónico",
    "login.password": "Contraseña",
    "login.forgot": "¿Olvidaste tu contraseña?",
    "login.submit": "Iniciar Sesión",
    "login.or": "O continúa con",
    "login.noAccount": "¿No tienes cuenta?",
    "login.register": "Regístrate aquí",

    // Register
    "register.title": "Crear Cuenta",
    "register.subtitle": "Únete a la experiencia VIXXEN",
    "register.name": "Nombre Completo",
    "register.email": "Correo Electrónico",
    "register.password": "Contraseña",
    "register.confirmPassword": "Confirmar Contraseña",
    "register.terms": "Acepto los",
    "register.termsLink": "Términos y Condiciones",
    "register.and": "y la",
    "register.privacyLink": "Política de Privacidad",
    "register.newsletter": "Quiero recibir ofertas exclusivas y novedades por email",
    "register.submit": "Crear Cuenta",
    "register.or": "O regístrate con",
    "register.hasAccount": "¿Ya tienes cuenta?",
    "register.login": "Inicia sesión",
  },
  en: {
    // Header
    "nav.shop": "Shop",
    "nav.collections": "Collections",

    // Hero
    "hero.title": "Activate Your Power",
    "hero.subtitle": "SHAPEWEAR & ACTIVEWEAR",
    "hero.cta": "Shop Now",

    // Featured Products
    "featured.title": "New Products",
    "featured.subtitle": "Discover our latest arrivals",
    "product.addToCart": "Add to Cart",
    "product.badge.new": "NEW",
    "product.badge.sale": "SALE",
    "product.badge.bestseller": "BESTSELLER",

    // Categories
    "categories.title": "Our Collections",
    "categories.subtitle": "Discover your perfect fit",
    "categories.explore": "Explore",
    "categories.shapewear": "Shapewear",
    "categories.shapewear.desc": "Sculpting and shaping",
    "categories.activewear": "Activewear",
    "categories.activewear.desc": "Performance and comfort",
    "categories.accessories": "Accessories",
    "categories.accessories.desc": "Complete your outfit",

    // Features
    "features.shipping.title": "Free Shipping",
    "features.shipping.desc": "On orders over $50",
    "features.returns.title": "Easy Returns",
    "features.returns.desc": "30 days to exchange",
    "features.quality.title": "Premium Quality",
    "features.quality.desc": "First-class materials",

    // Footer
    "footer.description": "Activate Your Power. Premium shapewear and activewear designed to empower your every move.",
    "footer.shop": "Shop",
    "footer.newArrivals": "New Arrivals",
    "footer.shapewear": "Shapewear",
    "footer.activewear": "Activewear",
    "footer.accessories": "Accessories",
    "footer.help": "Help",
    "footer.sizeGuide": "Size Guide",
    "footer.shipping": "Shipping",
    "footer.returns": "Returns",
    "footer.contact": "Contact Us",
    "footer.followUs": "Follow Us",
    "footer.rights": "© 2025 by Vixxen Company. All Rights Reserved.",

    // Search
    "search.placeholder": "Search products...",
    "search.noResults": "No results found.",

    // Cart
    "cart.title": "Your Cart",
    "cart.empty": "Your cart is empty",
    "cart.subtotal": "Subtotal",
    "cart.checkout": "Checkout",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Shop page
    "shop.title": "Shop",
    "shop.subtitle": "Discover our premium collection",
    "shop.categories": "Categories",
    "shop.all": "All",
    "shop.size": "Size",
    "shop.priceRange": "Price Range",
    "shop.filters": "Filters",
    "shop.showing": "Showing",
    "shop.products": "products",
    "shop.noProducts": "No products found in this category.",

    // Product Detail
    "product.notFound": "Product not found",
    "product.backToShop": "Back to shop",
    "product.reviews": "reviews",
    "product.defaultDescription": "Premium product designed to empower your every move.",
    "product.material": "Material",
    "product.size": "Size",
    "product.color": "Color",
    "product.related": "Related Products",
    "product.share": "Share",
    "product.shared": "Link copied!",
    "nav.home": "Home",

    // Login
    "login.title": "Sign In",
    "login.subtitle": "Welcome back to VIXXEN",
    "login.email": "Email",
    "login.password": "Password",
    "login.forgot": "Forgot your password?",
    "login.submit": "Sign In",
    "login.or": "Or continue with",
    "login.noAccount": "Don't have an account?",
    "login.register": "Register here",

    // Register
    "register.title": "Create Account",
    "register.subtitle": "Join the VIXXEN experience",
    "register.name": "Full Name",
    "register.email": "Email",
    "register.password": "Password",
    "register.confirmPassword": "Confirm Password",
    "register.terms": "I accept the",
    "register.termsLink": "Terms and Conditions",
    "register.and": "and the",
    "register.privacyLink": "Privacy Policy",
    "register.newsletter": "I want to receive exclusive offers and news by email",
    "register.submit": "Create Account",
    "register.or": "Or register with",
    "register.hasAccount": "Already have an account?",
    "register.login": "Sign in",
  },
};
