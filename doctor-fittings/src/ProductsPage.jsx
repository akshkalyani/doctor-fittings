import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./HomePage";
import { ProductCard, QuoteModal } from "./ProductCard";

// ── Product Images ────────────────────────────────────────────────────────────
import img20mm from "./assets/product-images/aluminium-window-hardware/20MM-x-54MM-SERIES.jpg";
import img27mm from "./assets/product-images/aluminium-window-hardware/27MM-x-65MM-SERIES.jpg";
import img29mm from "./assets/product-images/aluminium-window-hardware/29MM-x-65MM-SERIES.jpg";
import img40mm from "./assets/product-images/aluminium-window-hardware/40MM-OPENABLE-SERIES.jpg";
import img45mm from "./assets/product-images/aluminium-window-hardware/45MMx52MM-SERIES.jpg";
import img50mm from "./assets/product-images/aluminium-window-hardware/50MM-EURO-SERIES.jpg";
import imgCorner from "./assets/product-images/aluminium-window-hardware/Corner-Cleat-Solid-1-rapchik.jpg";
import imgTLock from "./assets/product-images/upvc-hardware/T-Lock.jpg";
import imgTLock2 from "./assets/product-images/upvc-hardware/T-Lock-2.jpg";
import frictionStay from "./assets/product-images/friction-stay/friction-stay.png";

// ── Category thumbnail images ─────────────────────────────────────────────────
import catSlidingLock from "./assets/product-images/sliding-window-lock/RBPL-1101.png";
import catDumalRollers from "./assets/product-images/product-categories/DUMAL WINDOW SLIDING ROLLERS.png";
import catUPVC from "./assets/product-images/upvc-hardware/T-Lock.jpg";
import catPremiumRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (PREMIUM).png";
import catGCChannel from "./assets/product-images/product-categories/G CHANNEL & C CHANNEL DOOR SLIDING SYSTEM.png";
import catWindowDoorHandle from "./assets/product-images/product-categories/Window Door HAndle.png";
import catConcealedDoorCloser from "./assets/product-images/product-categories/Concealed Door Closer.png";
import catButtHinges from "./assets/product-images/product-categories/BUTT HINGES.png";
import catSSMesh from "./assets/product-images/product-categories/STAINLESS STEEL SCREEN MESH.png";
import productHero from "./assets/product-hero.png";
const PRODUCT_CATEGORIES = [
  {
    name: "Sliding Window Lock",
    image: catSlidingLock,
    slug: "sliding-window-lock",
  },
  { name: "Dumal Window Sliding Rollers", image: catDumalRollers, slug: null },
  { name: "UPVC Sliding Roller", image: catUPVC, slug: null },
  {
    name: "Window Sliding Rollers (Premium)",
    image: catPremiumRollers,
    slug: null,
  },
  {
    name: "Window Sliding Rollers (Economy)",
    image: catPremiumRollers,
    slug: null,
  },
  {
    name: "G & C Channel Door Sliding System",
    image: catGCChannel,
    slug: null,
  },
  { name: "Window & Door Handle", image: catWindowDoorHandle, slug: null },
  { name: "Concealed Door Closer", image: catConcealedDoorCloser, slug: null },
  { name: "Butt Hinges", image: catButtHinges, slug: null },
  { name: "Corner Cleat Joints", image: imgCorner, slug: null },
  { name: "Stainless Steel Wire Mesh", image: catSSMesh, slug: null },
];

// Category images (cycle through available images for categories)
const categoryImages = {
  "SS Friction Stay": [
    frictionStay,
    frictionStay,
    img29mm,
    img40mm,
    img45mm,
    img50mm,
    imgCorner,
    img20mm,
  ],
  "Restriction Arm": [
    img40mm,
    img45mm,
    img50mm,
    img29mm,
    img27mm,
    img20mm,
    imgCorner,
    img40mm,
    img45mm,
    img50mm,
  ],
  "Window Handles & Locks": [
    imgTLock,
    imgTLock2,
    img50mm,
    img29mm,
    imgTLock,
    imgTLock2,
    img50mm,
    img29mm,
    imgTLock,
    imgTLock2,
    img50mm,
    img29mm,
  ],
  Hinges: [img40mm, img45mm],
  "Window Rollers": [
    imgCorner,
    img20mm,
    img27mm,
    img29mm,
    img40mm,
    img45mm,
    img50mm,
    imgCorner,
    img20mm,
  ],
  Accessories: [img27mm, img29mm, img45mm, img50mm, imgCorner],
};

// ── Product Data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    category: "SS Friction Stay",
    products: [
      {
        name: 'SS Friction Stay 8"',
        code: "DF-FS-08",
        size: "8 inch / 2MM",
        price: 115,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 10"',
        code: "DF-FS-10",
        size: "10 inch / 2MM",
        price: 120,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 12"',
        code: "DF-FS-12",
        size: "12 inch / 2MM",
        price: 135,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 14"',
        code: "DF-FS-14",
        size: "14 inch / 2MM",
        price: 168,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 16"',
        code: "DF-FS-16",
        size: "16 inch / 2.5MM",
        price: 206,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 18"',
        code: "DF-FS-18",
        size: "18 inch / 3MM",
        price: 283,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 20"',
        code: "DF-FS-20",
        size: "20 inch / 3MM",
        price: 377,
        unit: "PAIR",
      },
      {
        name: 'SS Friction Stay 24"',
        code: "DF-FS-24",
        size: "24 inch / 3MM",
        price: 434,
        unit: "PAIR",
      },
    ],
  },
  {
    category: "Restriction Arm",
    products: [
      {
        name: "Bullet Restriction Arm",
        code: "ARH01",
        size: "Standard",
        price: 80,
        unit: "PCS",
      },
      {
        name: "Restriction Arm",
        code: "ARH04",
        size: "Standard",
        price: 70,
        unit: "PCS",
      },
      {
        name: "2 Point Restriction Arm",
        code: "ARH06",
        size: "2 Point",
        price: 300,
        unit: "PCS",
      },
      {
        name: "Multi Point Small",
        code: "ARH07",
        size: "Small",
        price: 220,
        unit: "PCS",
      },
      {
        name: "Multi Point Big",
        code: "ARH08",
        size: "Big",
        price: 280,
        unit: "PCS",
      },
      {
        name: "UPVC Restriction Arm",
        code: "ARH09",
        size: "UPVC Standard",
        price: 120,
        unit: "PCS",
      },
      {
        name: "UPVC Restriction Arm II",
        code: "ARH10",
        size: "UPVC Standard",
        price: 120,
        unit: "PCS",
      },
      {
        name: "Pop Up Restriction",
        code: "ARH11",
        size: "Pop Up",
        price: 200,
        unit: "PCS",
      },
      {
        name: "Flush Tower Bolt",
        code: "ARH13",
        size: "Standard",
        price: 200,
        unit: "PCS",
      },
      {
        name: "Push Handle",
        code: "ARH14",
        size: "Standard",
        price: 120,
        unit: "PCS",
      },
    ],
  },
  {
    category: "Window Handles & Locks",
    products: [
      {
        name: "King Domal Handle",
        code: "ARH16",
        size: "Standard",
        price: 120,
        unit: "PCS",
      },
      {
        name: "Key Lock Handle",
        code: "ARH17",
        size: "Standard",
        price: 250,
        unit: "PCS",
      },
      {
        name: "Mini Domal Handle",
        code: "ARH19",
        size: "Mini",
        price: 85,
        unit: "PCS",
      },
      {
        name: "250MM Shoot Bolt",
        code: "ARH21",
        size: "250MM",
        price: 240,
        unit: "PCS",
      },
      {
        name: "Thumb Handle",
        code: "ARH22",
        size: "Standard",
        price: 90,
        unit: "PCS",
      },
      {
        name: "Lock Body Combo",
        code: "ARH25",
        size: "Full Set",
        price: 1800,
        unit: "PCS",
      },
      {
        name: "Bullet Key Handle",
        code: "ARH26",
        size: "Standard",
        price: 275,
        unit: "PCS",
      },
      {
        name: "Domal Lock",
        code: "ARH36",
        size: "Standard",
        price: 140,
        unit: "PCS",
      },
      {
        name: "Multi Point Lock",
        code: "ARH37",
        size: "Multi Point",
        price: 180,
        unit: "PCS",
      },
      {
        name: "Diamond Domal Heavy",
        code: "ARH40",
        size: "Heavy",
        price: 165,
        unit: "PCS",
      },
      {
        name: "Diamond Domal Light",
        code: "ARH41",
        size: "Light",
        price: 145,
        unit: "PCS",
      },
      {
        name: "Domal Lock Light",
        code: "ARH42",
        size: "Light",
        price: 110,
        unit: "PCS",
      },
    ],
  },
  {
    category: "Hinges",
    products: [
      {
        name: "2D Hinge UPVC",
        code: "DF-HG-2D",
        size: "2D",
        price: 100,
        unit: "PCS",
      },
      {
        name: "3D Hinge UPVC",
        code: "DF-HG-3D",
        size: "3D",
        price: 350,
        unit: "PCS",
      },
    ],
  },
  {
    category: "Window Rollers",
    products: [
      {
        name: "Window Roller Imported",
        code: "ARR-01",
        size: "Small",
        price: 8,
        unit: "PCS",
      },
      {
        name: "Window Roller Imported",
        code: "ARR-02",
        size: "Small",
        price: 7,
        unit: "PCS",
      },
      {
        name: "Window Roller Imported",
        code: "ARR-03",
        size: "Medium",
        price: 30,
        unit: "PCS",
      },
      {
        name: "Window Roller Imported",
        code: "ARR-04",
        size: "Medium",
        price: 45,
        unit: "PCS",
      },
      {
        name: "Window Roller Imported",
        code: "ARR-05",
        size: "Medium",
        price: 40,
        unit: "PCS",
      },
      {
        name: "Window Roller Imported",
        code: "ARR-06",
        size: "Medium",
        price: 35,
        unit: "PCS",
      },
      {
        name: "Window Roller Heavy Duty",
        code: "ARR-07",
        size: "Large",
        price: 120,
        unit: "PCS",
      },
      {
        name: "Window Roller Heavy Duty",
        code: "ARR-08",
        size: "Large",
        price: 160,
        unit: "PCS",
      },
      {
        name: "Window Roller Heavy Duty",
        code: "ARR-09",
        size: "XL",
        price: 250,
        unit: "PCS",
      },
    ],
  },
  {
    category: "Accessories",
    products: [
      {
        name: "Lock Guide Unbreakable",
        code: "ARA01",
        size: "Standard",
        price: "₹5-8",
        unit: "PCS",
      },
      {
        name: "Anti Lift Handle Unbreakable",
        code: "ARA02",
        size: "Standard",
        price: "₹5.5-6",
        unit: "PCS",
      },
      {
        name: "Water Slot Cover Unbreakable",
        code: "ARA004",
        size: "Standard",
        price: "₹3.5-5.5",
        unit: "PCS",
      },
      {
        name: "Anticapillary Pad Unbreakable",
        code: "ARA005",
        size: "Standard",
        price: "₹12-14",
        unit: "PCS",
      },
      {
        name: "Interlock Cap M/F Unbreakable",
        code: "ARA006",
        size: "M/F",
        price: "₹7.5-12",
        unit: "PCS",
      },
    ],
  },
];

// Flatten all products with their category and image
const ALL_PRODUCTS = CATEGORIES.flatMap((cat) =>
  cat.products.map((p, i) => ({
    ...p,
    category: cat.category,
    image: (categoryImages[cat.category] || [])[i] || img20mm,
  })),
);

// ── ProductsPage ──────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [globalSearch, setGlobalSearch] = useState("");
  const [quoteProduct, setQuoteProduct] = useState(null);

  const categories = ["All", ...CATEGORIES.map((c) => c.category)];

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = globalSearch.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.size.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
      <Navbar activeLink="Products" />

      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-12 md:py-16 text-center overflow-hidden">
        <img
          src={productHero}
          alt="Products Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        <div className="relative z-10">
          <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white mb-3">
            Product Catalogue
          </h1>
          <p className="text-white/65 text-sm md:text-base max-w-xl mx-auto mb-8">
            Explore our comprehensive range of premium window fittings and
            accessories
          </p>
          <div className="inline-flex items-center gap-6 md:gap-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 md:px-10 py-4 flex-wrap justify-center">
            {[
              [`${CATEGORIES.length}`, "Categories"],
              [`${ALL_PRODUCTS.length}+`, "Products"],
              ["ISO", "Certified"],
              ["Bulk", "Pricing"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-['Barlow_Condensed',sans-serif] font-black text-xl text-[#f5a623]">
                  {val}
                </div>
                <div className="text-white/55 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORY STRIP ── */}
      <div className="bg-white border-b border-[#e2e6f0] px-4 md:px-8 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#1e2a6e] font-bold text-sm mb-4 tracking-wide">
            Browse by Category
          </h3>
          <div
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const inner = (
                <>
                  <div className="aspect-[4/3] bg-[#f4f6fb] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <span className="text-[#1e2a6e] text-[0.65rem] font-semibold leading-tight line-clamp-2 block">
                      {cat.name}
                    </span>
                  </div>
                </>
              );

              if (cat.slug) {
                return (
                  <Link
                    key={cat.name}
                    to={`/products/category?cat=${cat.slug}`}
                    className="group flex-shrink-0 w-32 rounded-xl overflow-hidden border border-[#e2e6f0] bg-white hover:border-[#f5a623] hover:shadow-lg transition-all duration-200 no-underline"
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setGlobalSearch(cat.name.split(" ")[0]);
                    setActiveCategory("All");
                  }}
                  className="group flex-shrink-0 w-32 rounded-xl overflow-hidden border border-[#e2e6f0] bg-white hover:border-[#f5a623] hover:shadow-lg transition-all duration-200 cursor-pointer text-left"
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="flex-1 bg-[#f4f6fb] px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search + Category Filter */}
          <div className="flex flex-col gap-4 mb-8">
            {/* Search bar */}
            <div className="relative max-w-md">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6080]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#e2e6f0] rounded-xl bg-white focus:outline-none focus:border-[#1e2a6e] focus:ring-2 focus:ring-[#1e2a6e]/10 transition-all shadow-sm"
              />
              {globalSearch && (
                <button
                  onClick={() => setGlobalSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a6080] hover:text-[#1e2a6e] bg-transparent border-none cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer
                    ${
                      activeCategory === cat
                        ? "bg-[#1e2a6e] text-white border-[#1e2a6e]"
                        : "bg-white text-[#1e2a6e] border-[#e2e6f0] hover:border-[#1e2a6e]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-[#5a6080] text-xs mb-4">
            Showing{" "}
            <span className="font-semibold text-[#1e2a6e]">
              {filtered.length}
            </span>{" "}
            products
          </p>

          {/* Product Grid: 2 cols mobile, 4 cols desktop */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-[#e2e6f0]">
              <svg
                className="w-14 h-14 mx-auto mb-4 text-[#1e2a6e] opacity-20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <h3 className="text-[#1e2a6e] font-bold text-lg mb-1">
                No Products Found
              </h3>
              <p className="text-[#5a6080] text-sm">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setGlobalSearch("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-xs font-semibold text-[#f5a623] underline bg-transparent border-none cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {filtered.map((product, i) => (
                <ProductCard
                  key={`${product.code}-${i}`}
                  product={product}
                  onQuote={setQuoteProduct}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#1e2a6e] px-6 md:px-12 py-14 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-white mb-3">
          Can't Find What You Need?
        </h2>
        <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
          We offer custom manufacturing and special bulk orders. Contact our
          team for a tailored quote.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] hover:-translate-y-0.5 transition-all"
          >
            Contact Our Team
          </Link>
          <Link
            to="/about"
            className="border border-white/35 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all"
          >
            About Us
          </Link>
        </div>
      </section>

      <Footer />

      {/* Quote Modal */}
      {quoteProduct && (
        <QuoteModal
          product={quoteProduct}
          onClose={() => setQuoteProduct(null)}
        />
      )}
    </div>
  );
}
