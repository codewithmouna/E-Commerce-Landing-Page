/**
 * Mock Product Database
 */
const products = [
  {
    id: 1,
    name: "Neural Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Tech",
    desc: "Studio-grade sound with 40-hour battery life and active noise cancellation.",
    reviews: [
      { user: "Alice", rating: 5, comment: "Incredible sound quality!" },
      { user: "Bob", rating: 4, comment: "Very comfortable for long use." },
    ],
  },
  {
    id: 2,
    name: "Minimalist Quartz Watch",
    price: 125.0,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Accessories",
    desc: "A timeless design featuring Japanese movement and a genuine leather strap.",
  },
  {
    id: 3,
    name: "Smart Tech Backpack",
    price: 89.95,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Lifestyle",
    desc: "Water-resistant material with a built-in USB charging port and laptop sleeve.",
  },
  {
    id: 4,
    name: "Ergonomic Mechanical Keyboard",
    price: 159.0,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    category: "Gaming",
    desc: "RGB backlit keys with hot-swappable switches for the ultimate typing experience.",
  },
  {
    id: 5,
    name: "Fitness Pro Smartwatch",
    price: 199.0,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
    category: "Tech",
    desc: "Track your health with precision. Features heart rate monitoring, GPS, and a 10-day battery life.",
  },
  {
    id: 6,
    name: "ZenSound Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    category: "Tech",
    desc: "True wireless earbuds with immersive sound and crystal-clear call quality.",
  },
  {
    id: 7,
    name: "UltraWide Curved Monitor",
    price: 449.0,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    category: "Tech",
    desc: "34-inch curved display with 144Hz refresh rate for professional workflows and gaming.",
  },
  {
    id: 8,
    name: "Lumina LED Desk Lamp",
    price: 45.5,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500",
    category: "Home",
    desc: "Adjustable brightness and color temperature with a sleek, minimalist aluminum body.",
  },
  {
    id: 9,
    name: "Smart Door Lock",
    price: 249.0,
    image: "https://images.unsplash.com/photo-1558002038-10331868093e?w=500",
    category: "Tech",
    desc: "Keyless entry with fingerprint and smartphone integration.",
  },
  {
    id: 10,
    name: "Portable Mini Projector",
    price: 320.0,
    image: "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?w=500",
    category: "Tech",
    desc: "Full HD projection in a pocket-sized form factor.",
  },
  {
    id: 11,
    name: "Fast Wireless Charger",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500",
    category: "Accessories",
    desc: "15W fast charging for all Qi-enabled devices.",
  },
  {
    id: 12,
    name: "Travel Leather Journal",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
    category: "Lifestyle",
    desc: "Handcrafted leather journal with premium recycled paper.",
  },
  {
    id: 13,
    name: "Smart UV Water Bottle",
    price: 75.0,
    image: "https://images.unsplash.com/photo-1602143307185-844cc90e9516?w=500",
    category: "Lifestyle",
    desc: "Self-cleaning bottle using UV-C light technology.",
  },
  {
    id: 14,
    name: "Wooden Floating Shelves",
    price: 60.0,
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=500",
    category: "Home",
    desc: "Set of three solid oak shelves for a modern look.",
  },
  {
    id: 15,
    name: "Ultrasonic Diffuser",
    price: 55.0,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500",
    category: "Home",
    desc: "Quiet essential oil diffuser with color-changing LED lights.",
  },
  {
    id: 16,
    name: "Pro Gaming Chair",
    price: 350.0,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fce66?w=500",
    category: "Gaming",
    desc: "Ergonomic design with high-density foam and 4D armrests.",
  },
  {
    id: 17,
    name: "Smart LED Light Strips",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500",
    category: "Home",
    desc: "Sync your lights with music and control them via app.",
  },
  {
    id: 18,
    name: "Aluminum Laptop Stand",
    price: 40.0,
    image: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=500",
    category: "Accessories",
    desc: "Lightweight and foldable stand for better ergonomics.",
  },
  {
    id: 19,
    name: "USB-C Multiport Hub",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1547082222-1174617ad2ee?w=500",
    category: "Accessories",
    desc: "7-in-1 hub with HDMI, USB 3.0, and SD card slots.",
  },
  {
    id: 20,
    name: "Virtual Reality Headset",
    price: 400.0,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
    category: "Gaming",
    desc: "Immersive VR experience with high-resolution displays.",
  },
  {
    id: 21,
    name: "Electric Gooseneck Kettle",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
    category: "Home",
    desc: "Precision pour-over kettle with temperature control.",
  },
  {
    id: 22,
    name: "Smart Body Scale",
    price: 50.0,
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500",
    category: "Tech",
    desc: "Measure body fat, muscle mass, and more with app sync.",
  },
  {
    id: 23,
    name: "Reusable Glass Coffee Cup",
    price: 18.0,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    category: "Lifestyle",
    desc: "Eco-friendly tempered glass cup with thermal silicone sleeve.",
  },
  {
    id: 24,
    name: "Slim Leather Wallet",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    category: "Accessories",
    desc: "RFID blocking minimalist wallet made from top-grain leather.",
  },
  {
    id: 25,
    name: "Blue Light Blocking Glasses",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500",
    category: "Lifestyle",
    desc: "Reduce eye strain during long hours of screen time.",
  },
  {
    id: 26,
    name: "RGB Gaming Mouse Pad",
    price: 30.0,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
    category: "Gaming",
    desc: "Large surface with customizable lighting effects.",
  },
  {
    id: 27,
    name: "Portable External SSD",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500",
    category: "Tech",
    desc: "1TB high-speed storage in a compact metal casing.",
  },
  {
    id: 28,
    name: "Universal Stylus Pen",
    price: 30.0,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500",
    category: "Accessories",
    desc: "High precision active pen compatible with most tablets.",
  },
  {
    id: 29,
    name: "Elite Noise-Cancelling Earbuds",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3fdb71830a3?w=500",
    category: "Audio",
    desc: "Immersive sound with advanced noise cancellation for an unparalleled listening experience.",
  },
  {
    id: 30,
    name: "Professional DSLR Camera",
    price: 1299.0,
    image: "https://images.unsplash.com/photo-1516035069371-87f56857d26e?w=500",
    category: "Photography",
    desc: "Capture stunning photos and videos with a full-frame sensor and versatile lens options.",
  },
  {
    id: 31,
    name: "Smart Wi-Fi Coffee Maker",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1559494048-a0528934635e?w=500",
    category: "Kitchen",
    desc: "Brew your coffee from anywhere with app control and custom settings.",
  },
  {
    id: 32,
    name: "Ergonomic Mesh Office Chair",
    price: 280.0,
    image: "https://images.unsplash.com/photo-1591122436279-9941120021f1?w=500",
    category: "Office",
    desc: "Designed for comfort and support during long working hours, with adjustable lumbar support.",
  },
  {
    id: 33,
    name: "Premium Yoga Mat Set",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1591291629853-33923419992f?w=500",
    category: "Fitness",
    desc: "Non-slip, eco-friendly yoga mat with carrying strap and resistance bands.",
  },
  {
    id: 34,
    name: "Portable Waterproof Bluetooth Speaker",
    price: 89.0,
    image: "https://images.unsplash.com/photo-1546435770-d3e498d6a283?w=500",
    category: "Audio",
    desc: "Powerful sound on the go, with IPX7 waterproofing and 12-hour battery life.",
  },
  {
    id: 35,
    name: "Compact 4K Camera Drone",
    price: 599.0,
    image: "https://images.unsplash.com/photo-1507992771508-fd32d3f44bd1?w=500",
    category: "Photography",
    desc: "Easy-to-fly drone with a high-resolution camera for stunning aerial shots.",
  },
  {
    id: 36,
    name: "Digital Air Fryer Oven",
    price: 130.0,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500",
    category: "Kitchen",
    desc: "Cook healthier meals with less oil, featuring multiple presets and a large capacity.",
  },
  {
    id: 37,
    name: "Adjustable Standing Desk Converter",
    price: 189.0,
    image: "https://images.unsplash.com/photo-1593085790299-074092497672?w=500",
    category: "Office",
    desc: "Transform your regular desk into a sit-stand workstation for improved posture and energy.",
  },
  {
    id: 38,
    name: "Full Body Resistance Band Set",
    price: 30.0,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2fcdb467e?w=500",
    category: "Fitness",
    desc: "Versatile bands for strength training, yoga, and physical therapy.",
  },
  {
    id: 39,
    name: "Immersive Gaming Headset",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1542296332-2a4470f02f49?w=500",
    category: "Gaming",
    desc: "Crystal-clear audio and a comfortable fit for long gaming sessions.",
  },
  {
    id: 40,
    name: "Smart Digital Photo Frame",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1588027553372-e1927763690d?w=500",
    category: "Home",
    desc: "Display your favorite memories with Wi-Fi connectivity and cloud storage.",
  },
  {
    id: 41,
    name: "Wireless Charging Mouse Pad",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1593305841395-f55290373200?w=500",
    category: "Accessories",
    desc: "Keep your phone charged while you work or play, with a smooth surface for precise mouse control.",
  },
  {
    id: 42,
    name: "Smart Water Filter Pitcher",
    price: 40.0,
    image: "https://images.unsplash.com/photo-1580234149024-523192451f28?w=500",
    category: "Kitchen",
    desc: "Enjoy cleaner, great-tasting water with a filter life indicator and sleek design.",
  },
  {
    id: 43,
    name: "Multi-functional Desk Organizer",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1588027553372-e1927763690d?w=500",
    category: "Office",
    desc: "Keep your workspace tidy with compartments for pens, paper, and small gadgets.",
  },
  {
    id: 44,
    name: "Smart Fitness Jump Rope",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1603571167704-035252358897?w=500",
    category: "Fitness",
    desc: "Track your jumps, calories burned, and workout duration with app integration.",
  },
  {
    id: 45,
    name: "Retro Mini Gaming Console",
    price: 70.0,
    image: "https://images.unsplash.com/photo-1585620385457-f5210b37809d?w=500",
    category: "Gaming",
    desc: "Relive classic gaming with pre-loaded games and a nostalgic design.",
  },
  {
    id: 46,
    name: "Robotic Vacuum Cleaner",
    price: 299.0,
    image: "https://images.unsplash.com/photo-1584820927478-876434276dcb?w=500",
    category: "Home",
    desc: "Automated cleaning with smart mapping and app control for a spotless home.",
  },
  {
    id: 47,
    name: "Universal Travel Adapter Kit",
    price: 30.0,
    image: "https://images.unsplash.com/photo-1596558450268-ecc39f76f89f?w=500",
    category: "Accessories",
    desc: "Compatible with outlets in over 150 countries, essential for international travel.",
  },
  {
    id: 48,
    name: "Portable Mini Espresso Maker",
    price: 75.0,
    image: "https://images.unsplash.com/photo-1580933167592-29757656915d?w=500",
    category: "Kitchen",
    desc: "Enjoy fresh espresso anywhere, anytime, with this compact and easy-to-use device.",
  },
];

/**
 * State Management (LocalStorage)
 */
const CartManager = {
  get() {
    return JSON.parse(localStorage.getItem("shop_cart")) || [];
  },
  save(cart) {
    localStorage.setItem("shop_cart", JSON.stringify(cart));
    this.updateBadge();
  },
  add(productId) {
    const cart = this.get();
    const product = products.find((p) => p.id === productId);
    const existing = cart.find((item) => item.id === productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.save(cart);
    this.notify(`${product.name} added to cart!`);
  },
  updateQuantity(productId, delta) {
    let cart = this.get();
    const item = cart.find((i) => i.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) cart = cart.filter((i) => i.id !== productId);
      this.save(cart);
      renderCart();
    }
  },
  remove(productId) {
    const cart = this.get().filter((item) => item.id !== productId);
    this.save(cart);
    renderCart();
  },
  updateBadge() {
    const count = this.get().reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = count;
  },
  notify(msg) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  },
};

/**
 * Filtering State
 */
let activeCategory = "all";
let appliedDiscount = 0;

const WishlistManager = {
  get() {
    return JSON.parse(localStorage.getItem("shop_wishlist")) || [];
  },
  toggle(productId) {
    let wishlist = this.get();
    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter((id) => id !== productId);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem("shop_wishlist", JSON.stringify(wishlist));
    if (window.location.pathname.includes("products.html")) renderProductList();
  },
};

const ThemeManager = {
  init() {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
  },
  toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  },
};

/**
 * Page Routers
 */
document.addEventListener("DOMContentLoaded", () => {
  ThemeManager.init();
  CartManager.updateBadge();
  const path = window.location.pathname;

  if (path.includes("products.html")) {
    renderCategories();
    renderProductList();
  }
  if (path.includes("product.html")) renderProductDetails();
  if (path.includes("cart.html")) renderCart();
  if (path.includes("checkout.html")) initCheckout();
  if (path.includes("login.html")) initLogin();

  updateHeroBackground();
  initGlobalListeners();
});

function initGlobalListeners() {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  if (searchInput)
    searchInput.addEventListener("input", () => renderProductList());
  if (sortSelect)
    sortSelect.addEventListener("change", () => renderProductList());

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle)
    themeToggle.addEventListener("click", () => ThemeManager.toggle());

  const loginBtn = document.getElementById("login-btn");
}

function updateHeroBackground() {
  const hero = document.querySelector(".hero-section");
  if (!hero) return;

  const hour = new Date().getHours();
  let imageUrl = "";

  if (hour >= 5 && hour < 12) {
    imageUrl =
      "https://images.unsplash.com/photo-1470252649358-96940c73f98c?q=80&w=2070"; // Morning
  } else if (hour >= 12 && hour < 18) {
    imageUrl =
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"; // Afternoon
  } else if (hour >= 18 && hour < 21) {
    imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"; // Evening
  } else {
    imageUrl =
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"; // Night
  }

  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${imageUrl}')`;
}

function renderCategories() {
  const list = document.getElementById("category-list");
  if (!list) return;

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  list.innerHTML = categories
    .map(
      (cat) => `
    <li class="category-item ${activeCategory === cat ? "active" : ""}" 
        onclick="setCategory('${cat}')">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </li>
  `,
    )
    .join("");
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderProductList();
}

function renderProductList(items = products) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const search =
    document.getElementById("search-input")?.value.toLowerCase() || "";
  const sort = document.getElementById("sort-select")?.value || "default";
  const wishlist = WishlistManager.get();

  const filtered = items.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search),
  );

  if (sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
        <div class="card">
            <button class="wishlist-btn ${wishlist.includes(p.id) ? "active" : ""}" onclick="WishlistManager.toggle(${p.id})">❤</button>
            <span class="category-tag">${p.category}</span>
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price.toFixed(2)}</p>
            <div class="actions">
                <a href="product.html?id=${p.id}" class="btn outline">View</a>
                <button onclick="CartManager.add(${p.id})" class="btn">Add to Cart</button>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const p = products.find((item) => item.id === id);
  const container = document.getElementById("product-view");

  if (!p || !container) return;

  container.innerHTML = `
        <div class="detail-grid">
            <img src="${p.image}" class="main-img">
            <div class="content">
                <span class="category-tag">${p.category}</span>
                <h1>${p.name}</h1>
                <p class="price">$${p.price.toFixed(2)}</p>
                <p class="desc">${p.desc}</p>
                <div class="reviews">
                    <h3>Reviews</h3>
                    ${p.reviews?.map((r) => `<p><strong>${r.user} (${r.rating}⭐):</strong> ${r.comment}</p>`).join("") || "<p>No reviews yet.</p>"}
                </div>
                <button onclick="CartManager.add(${p.id})" class="btn lg">Add to Cart</button>
            </div>
        </div>
    `;
}

function renderCart() {
  const cart = CartManager.get();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<tr><td colspan='4'>Your cart is empty.</td></tr>";
    if (totalEl) totalEl.innerText = "$0.00";
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
        <tr>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="qty-ctrl">
                    <button class="qty-btn" onclick="CartManager.updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="CartManager.updateQuantity(${item.id}, 1)">+</button>
                </div>
            </td>
            <td><button onclick="CartManager.remove(${item.id})" class="text-btn">Remove</button></td>
        </tr>
    `,
    )
    .join("");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const discountAmount = subtotal * appliedDiscount;
  const total = subtotal - discountAmount;

  if (appliedDiscount > 0) {
    totalEl.innerHTML = `
      <small style="text-decoration: line-through; color: #666; margin-right: 10px;">$${subtotal.toFixed(2)}</small>
      $${total.toFixed(2)}
    `;
  } else {
    totalEl.innerText = `$${total.toFixed(2)}`;
  }
}

function applyCoupon() {
  const codeInput = document.getElementById("coupon-code");
  if (!codeInput) return;

  const code = codeInput.value.trim().toUpperCase();
  const coupons = {
    SAVE10: 0.1,
    SAVE20: 0.2,
  };

  if (coupons[code]) {
    appliedDiscount = coupons[code];
    CartManager.notify(
      `Coupon "${code}" applied! ${appliedDiscount * 100}% off.`,
    );
  } else {
    appliedDiscount = 0;
    CartManager.notify("Invalid coupon code.");
  }
  renderCart();
}

function initCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("shop_cart");
    appliedDiscount = 0;
    CartManager.notify("Order Placed Successfully!");
    window.location.href = "order-success.html";
  });
}

function initLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    CartManager.notify("Logged in successfully!");
    window.location.href = "index.html";
  });
}
