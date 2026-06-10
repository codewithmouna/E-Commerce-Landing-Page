# 🛒 ModernShop - Premium E-commerce Platform

ModernShop is a high-performance, responsive multi-page e-commerce application built with vanilla web technologies. It features a sophisticated UI with glassmorphism elements, dynamic state persistence, and a smooth user journey from product discovery to order success.

## 🚀 Key Features

- **🌓 Adaptive Dark Mode:** Full theme support with persistence in LocalStorage.
- **📦 Dynamic Product Catalog:** 48+ products across multiple categories with real-time search, sidebar filtering, and advanced sorting.
- **🎨 Intelligent Hero Section:** Time-aware background images that change dynamically (Morning, Afternoon, Evening, Night).
- **🛒 Advanced Cart System:** Persistent shopping cart with quantity controls and a functional percentage-based coupon system (e.g., `SAVE10`, `SAVE20`).
- **💖 Wishlist Integration:** Quick-toggle wishlist functionality to save favorite items.
- **🔔 Toast Notifications:** Interactive non-blocking UI feedback for user actions.
- **📱 Responsive Design:** Polished layouts optimized for Desktop (4-column grid), Tablet, and Mobile.
- **🔐 Mock Auth Flow:** Dedicated login and registration screens with navigation flow.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure for optimal SEO and accessibility.
- **CSS3:** Custom variables (CSS Properties), Grid, Flexbox, and sophisticated Keyframe animations.
- **JavaScript (ES6):** Vanilla logic for state management, DOM manipulation, and persistence.
- **LocalStorage API:** Used for cross-page state consistency (Cart, Wishlist, Theme).

## 📂 Project Structure

```text
Ecommerce Landing Page/
│
├── index.html          # Home page with dynamic Hero section
├── products.html       # Catalog with sidebar filters and sorting
├── product.html        # Detailed product view with reviews
├── cart.html           # Management center for shopping bag
├── checkout.html       # Shipping details and order finalization
├── order-success.html  # Post-purchase confirmation
├── login.html          # User authentication entry
│
├── css/
│   └── style.css       # Global design system & animations
│
└── js/
    └── script.js       # Core application logic & state managers
```

## 🚥 Getting Started

1.  **Clone the repository** to your local machine.
2.  Open `index.html` in any modern web browser.
3.  **Try these Coupons:** Use `SAVE10` or `SAVE20` in the cart to see the dynamic price calculation in action!

## 🔧 Design Improvements

- **Typography:** Uses the 'Inter' font family for a premium digital aesthetic.
- **Performance:** Implemented efficient rendering logic that updates the DOM without full page reloads where possible.
- **UX:** Added a 4-column grid on desktop to maximize product visibility.

---
