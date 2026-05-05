import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./HomePage";
import { ProductCard, QuoteModal } from "./ProductCard";
import SEO from "./SEO";

// ── Category thumbnail images ─────────────────────────────────────────────────
import catSlidingLock from "./assets/product-images/sliding-window-lock/RBPL-1101.png";
import catDumalRollers from "./assets/product-images/product-categories/DUMAL WINDOW SLIDING ROLLERS.png";
import catUPVC from "./assets/product-images/product-categories/UPVC WINDOW SLIDING ROLLERS.png";
import catPremiumRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (PREMIUM).png";
import catEconomyRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (ECONOMY).png";
import catGCChannel from "./assets/product-images/product-categories/G CHANNEL & C CHANNEL DOOR SLIDING SYSTEM.png";
import catWindowDoorHandle from "./assets/product-images/product-categories/Window Door HAndle.png";
import catConcealedDoorCloser from "./assets/product-images/product-categories/Concealed Door Closer.png";
import catButtHinges from "./assets/product-images/product-categories/BUTT HINGES.png";
import catSSMesh from "./assets/product-images/product-categories/STAINLESS STEEL SCREEN MESH.png";
import catCornerCleat from "./assets/product-images/product-categories/CORNER CLEAT JOINTS.png";
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
    image: catEconomyRollers,
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
  { name: "Corner Cleat Joints", image: catCornerCleat, slug: null },
  { name: "Stainless Steel Wire Mesh", image: catSSMesh, slug: null },
];

// Category images (cycle through available images for categories)
const categoryImages = {
  "SS Friction Stay": [productHero, catPremiumRollers, catEconomyRollers],
  "Restriction Arm": [productHero, catGCChannel, catPremiumRollers],
  "Window Handles & Locks": [catWindowDoorHandle, catSlidingLock, productHero],
  Hinges: [catButtHinges, productHero],
  "Window Rollers": [
    catPremiumRollers,
    catEconomyRollers,
    catDumalRollers,
    catUPVC,
  ],
  Accessories: [productHero, catSSMesh, catCornerCleat],
};

// ── Product Data (from provided JSON) ───────────────────────────────────────

// --- Combined Categories ---
const CATEGORIES = [
  {
    category: "Window Lock",
    products: [
      // Sliding Window Lock
      ...[
        {
          product_code: "RBPL-1101",
          color: "Silver",
          packing: "100 PCS",
          type: "Concealed Sliding Lock",
          name: "Sliding Window Lock - RBPL-1101",
        },
        {
          product_code: "RBPL-1102",
          color: "Silver",
          packing: "100 PCS",
          type: "Concealed Sliding Lock",
          name: "Sliding Window Lock - RBPL-1102",
        },
      ],
      // Window Lock
      ...[
        {
          product_code: "RBPL-1103",
          color: "White",
          packing: "100 PCS",
          name: "Window Lock - RBPL-1103",
        },
        {
          product_code: "RBPL-1104",
          color: "Silver",
          packing: "100 PCS",
          name: "Window Lock - RBPL-1104",
        },
        {
          product_code: "RBPL-1106",
          color: "Honey",
          packing: "100 PCS",
          name: "Window Lock - RBPL-1106",
        },
        {
          product_code: "RBPL-1107",
          color: "Black, Brown, Gold, Ivory, White",
          packing: "100 PCS",
          name: "Window Lock - RBPL-1107",
        },
        {
          product_code: "RBPL-1108",
          color: "Black, Brown, Gold, Ivory, White",
          packing: "100 PCS",
          name: "Window Lock - RBPL-1108",
        },
      ],
    ],
  },
  {
    category: "Sliding Rollers",
    products: [
      // Dumal Window Sliding Rollers
      ...[
        {
          product_code: "RB-0201P / RB-0201E",
          size: "21mm / 22mm / 29mm",
          class: "Eco / Premium",
          weight_capacity: "60kg/pair",
          packing: "100 PCS",
          name: "Dumal Window Sliding Roller - RB-0201P / RB-0201E",
        },
        {
          product_code: "RB-0202P / RB-0202E",
          size: "25mm / 22mm / 29mm",
          class: "Eco / Premium",
          weight_capacity: "80kg/pair",
          packing: "80 PCS",
          name: "Dumal Window Sliding Roller - RB-0202P / RB-0202E",
        },
        {
          product_code: "RB-0203P / RB-0203E",
          size: "29mm",
          weight_capacity: "80kg/pair",
          packing: "100 PCS",
          name: "Dumal Window Sliding Roller - RB-0203P / RB-0203E",
        },
        {
          product_code: "PH291U17",
          weight_capacity: "200kg/pair",
          name: "Dumal Window Sliding Roller - PH291U17",
        },
        {
          product_code: "PH290U17",
          weight_capacity: "300kg/pair",
          name: "Dumal Window Sliding Roller - PH290U17",
        },
        {
          product_code: "PH289U17",
          weight_capacity: "400kg/pair",
          name: "Dumal Window Sliding Roller - PH289U17",
        },
      ],
      // UPVC Window Sliding Rollers
      ...[
        {
          product_code: "RB-UPVC-12R / RB-UPVC-12B",
          packing: "3000 PCS",
          name: "UPVC Window Sliding Roller - RB-UPVC-12R / RB-UPVC-12B",
        },
        {
          product_code: "RB-UPVC-14MM",
          packing: "3000 PCS",
          name: "UPVC Window Sliding Roller - RB-UPVC-14MM",
        },
        {
          product_code: "RB-UPVC-16MM",
          packing: "3000 PCS",
          name: "UPVC Window Sliding Roller - RB-UPVC-16MM",
        },
        {
          product_code: "RB-UPVC-20MM ADJUSTABLE",
          packing: "400 PCS",
          name: "UPVC Window Sliding Roller - RB-UPVC-20MM ADJUSTABLE",
        },
      ],
      // Window Sliding Rollers (Premium)
      ...[
        {
          product_code: "RB-N642P",
          packing: "3000 PCS",
          name: "Window Sliding Roller (Premium) - RB-N642P",
        },
        {
          product_code: "RB-N642AP",
          packing: "3000 PCS",
          name: "Window Sliding Roller (Premium) - RB-N642AP",
        },
        {
          product_code: "RB-N642SP",
          packing: "3000 PCS",
          name: "Window Sliding Roller (Premium) - RB-N642SP",
        },
      ],
      // Window Sliding Rollers (Economy)
      ...[
        {
          product_code: "RB-D22",
          packing: "4000 PCS",
          name: "Window Sliding Roller (Economy) - RB-D22",
        },
        {
          product_code: "RB-F362BE",
          packing: "3000 PCS",
          name: "Window Sliding Roller (Economy) - RB-F362BE",
        },
        {
          product_code: "RB-F352BE",
          packing: "3000 PCS",
          name: "Window Sliding Roller (Economy) - RB-F352BE",
        },
      ],
    ],
  },
  {
    category: "Door Hardware",
    products: [
      // G & C Channel Door Sliding System
      ...[
        {
          product_code: "RB-DOF",
          packing: "3000 PCS",
          name: "G & C Channel Door Sliding System - RB-DOF",
        },
        {
          product_code: "RB-COF",
          packing: "3000 PCS",
          name: "G & C Channel Door Sliding System - RB-COF",
        },
        {
          product_code: "ALUMINIUM_CHANNEL",
          color: "Black, Brown, Ivory, Silver",
          length: "8 FT",
          name: "G & C Channel Door Sliding System - ALUMINIUM_CHANNEL",
        },
      ],
      // Window & Door Handle
      ...[
        {
          product_code: "RBH-3101",
          color: "Mill Finish",
          packing: "100 PCS",
          name: "Window & Door Handle - RBH-3101",
        },
        {
          product_code: "RBH-3102",
          color: "Mill Finish",
          packing: "100 PCS",
          name: "Window & Door Handle - RBH-3102",
        },
        {
          product_code: "RBH-3104",
          color: "Black, White",
          packing: "100 PCS",
          name: "Window & Door Handle - RBH-3104",
        },
        {
          product_code: "RBH-3107",
          color: "Black, White",
          packing: "100 PCS",
          name: "Window & Door Handle - RBH-3107",
        },
      ],
      // Concealed Door Closer
      ...[
        {
          product_code: "040",
          color: "Silver",
          packing: "500 PCS",
          name: "Concealed Door Closer - 040",
        },
        {
          product_code: "060",
          color: "Silver",
          packing: "500 PCS",
          name: "Concealed Door Closer - 060",
        },
        {
          product_code: "070",
          color: "Silver",
          packing: "500 PCS",
          name: "Concealed Door Closer - 070",
        },
      ],
      // Butt Hinges
      ...[
        {
          product_code: "RBH-4101",
          color: "Black, White",
          packing: "400 PCS",
          name: "Butt Hinge - RBH-4101",
        },
        {
          product_code: "RBH-4102",
          color: "Black, White",
          packing: "400 PCS",
          name: "Butt Hinge - RBH-4102",
        },
        {
          product_code: "RBH-4104",
          color: "Black, White",
          packing: "400 PCS",
          name: "Butt Hinge - RBH-4104",
        },
      ],
      // Corner Cleat Joints
      ...[
        {
          product_code: "RBCC-22",
          color: "Mill Finish",
          packing: "1000 PCS",
          name: "Corner Cleat Joint - RBCC-22",
        },
        {
          product_code: "RBCC-24",
          color: "Mill Finish",
          packing: "1000 PCS",
          name: "Corner Cleat Joint - RBCC-24",
        },
        {
          product_code: "RBCC-375",
          color: "Mill Finish",
          packing: "1000 PCS",
          name: "Corner Cleat Joint - RBCC-375",
        },
      ],
      // System Window Accessories
      ...[
        {
          product_code: "RBA-01",
          type: "Straight T Type Nib",
          packing: "500 PCS",
          name: "System Window Accessory - RBA-01",
        },
        {
          product_code: "RBA-02",
          packing: "500 PCS",
          name: "System Window Accessory - RBA-02",
        },
        {
          product_code: "RBA-07",
          color: "Black, White",
          packing: "3000 PCS",
          name: "System Window Accessory - RBA-07",
        },
      ],
    ],
  },
  {
    category: "Mesh",
    products: [
      // Window Wire Mesh
      ...[{ type: "Aluminum Wire Mesh", name: "Window Wire Mesh" }],
      // Stainless Steel Screen Mesh
      ...[
        {
          material: "SS",
          mesh_types: ["304", "316"],
          features: "Anti-rust, durable",
          name: "Stainless Steel Screen Mesh",
        },
      ],
    ],
  },
];

// Flatten all products with their category and image
const ALL_PRODUCTS = CATEGORIES.flatMap((cat) =>
  cat.products.map((p, i) => ({
    ...p,
    category: cat.category,
    image: (categoryImages[cat.category] || [])[i] || productHero,
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
      <SEO
        title="High-Quality Aluminium Window Fittings & Accessories | Doctor Fittings"
        description="Discover a wide range of durable aluminium window hardware. From hinges to locking systems, find the best fittings for modern architecture in Rajkot and beyond. SS friction stays, window rollers, handles & more."
        path="/products"
        keywords="aluminium window fittings, SS friction stay, window rollers rajkot, window handles, restriction arm, UPVC hardware, window locks, aluminium window accessories, best window hardware rajkot"
      />
      <Navbar activeLink="Products" />

      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-12 md:py-16 text-center overflow-hidden">
        <img
          src={productHero}
          alt="Premium Aluminium Window Hardware Products Doctor Fittings Rajkot"
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
                      alt={`${cat.name} - Premium Window Hardware Doctor Fittings Rajkot`}
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
//backup
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Footer } from "./HomePage";
// import { ProductCard, QuoteModal } from "./ProductCard";
// import SEO from "./SEO";

// // ── Category thumbnail images ─────────────────────────────────────────────────
// import catSlidingLock from "./assets/product-images/sliding-window-lock/RBPL-1101.png";
// import catDumalRollers from "./assets/product-images/product-categories/DUMAL WINDOW SLIDING ROLLERS.png";
// import catUPVC from "./assets/product-images/product-categories/UPVC WINDOW SLIDING ROLLERS.png";
// import catPremiumRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (PREMIUM).png";
// import catEconomyRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (ECONOMY).png";
// import catGCChannel from "./assets/product-images/product-categories/G CHANNEL & C CHANNEL DOOR SLIDING SYSTEM.png";
// import catWindowDoorHandle from "./assets/product-images/product-categories/Window Door HAndle.png";
// import catConcealedDoorCloser from "./assets/product-images/product-categories/Concealed Door Closer.png";
// import catButtHinges from "./assets/product-images/product-categories/BUTT HINGES.png";
// import catSSMesh from "./assets/product-images/product-categories/STAINLESS STEEL SCREEN MESH.png";
// import catCornerCleat from "./assets/product-images/product-categories/CORNER CLEAT JOINTS.png";
// import productHero from "./assets/product-hero.png";
// const PRODUCT_CATEGORIES = [
//   {
//     name: "Sliding Window Lock",
//     image: catSlidingLock,
//     slug: "sliding-window-lock",
//   },
//   { name: "Dumal Window Sliding Rollers", image: catDumalRollers, slug: null },
//   { name: "UPVC Sliding Roller", image: catUPVC, slug: null },
//   {
//     name: "Window Sliding Rollers (Premium)",
//     image: catPremiumRollers,
//     slug: null,
//   },
//   {
//     name: "Window Sliding Rollers (Economy)",
//     image: catEconomyRollers,
//     slug: null,
//   },
//   {
//     name: "G & C Channel Door Sliding System",
//     image: catGCChannel,
//     slug: null,
//   },
//   { name: "Window & Door Handle", image: catWindowDoorHandle, slug: null },
//   { name: "Concealed Door Closer", image: catConcealedDoorCloser, slug: null },
//   { name: "Butt Hinges", image: catButtHinges, slug: null },
//   { name: "Corner Cleat Joints", image: catCornerCleat, slug: null },
//   { name: "Stainless Steel Wire Mesh", image: catSSMesh, slug: null },
// ];

// // Category images (cycle through available images for categories)
// const categoryImages = {
//   "SS Friction Stay": [productHero, catPremiumRollers, catEconomyRollers],
//   "Restriction Arm": [productHero, catGCChannel, catPremiumRollers],
//   "Window Handles & Locks": [catWindowDoorHandle, catSlidingLock, productHero],
//   Hinges: [catButtHinges, productHero],
//   "Window Rollers": [
//     catPremiumRollers,
//     catEconomyRollers,
//     catDumalRollers,
//     catUPVC,
//   ],
//   Accessories: [productHero, catSSMesh, catCornerCleat],
// };

// // ── Product Data (from provided JSON) ───────────────────────────────────────
// const CATEGORIES = [
//   {
//     category: "Sliding Window Lock",
//     products: [
//       {
//         product_code: "RBPL-1101",
//         color: "Silver",
//         packing: "100 PCS",
//         type: "Concealed Sliding Lock",
//       },
//       {
//         product_code: "RBPL-1102",
//         color: "Silver",
//         packing: "100 PCS",
//         type: "Concealed Sliding Lock",
//       },
//     ],
//   },
//   {
//     category: "Window Lock",
//     products: [
//       { product_code: "RBPL-1103", color: "White", packing: "100 PCS" },
//       { product_code: "RBPL-1104", color: "Silver", packing: "100 PCS" },
//       { product_code: "RBPL-1106", color: "Honey", packing: "100 PCS" },
//       {
//         product_code: "RBPL-1107",
//         color: "Black, Brown, Gold, Ivory, White",
//         packing: "100 PCS",
//       },
//       {
//         product_code: "RBPL-1108",
//         color: "Black, Brown, Gold, Ivory, White",
//         packing: "100 PCS",
//       },
//     ],
//   },
//   {
//     category: "Dumal Window Sliding Rollers",
//     products: [
//       {
//         product_code: "RB-0201P / RB-0201E",
//         size: "21mm / 22mm / 29mm",
//         class: "Eco / Premium",
//         weight_capacity: "60kg/pair",
//         packing: "100 PCS",
//       },
//       {
//         product_code: "RB-0202P / RB-0202E",
//         size: "25mm / 22mm / 29mm",
//         class: "Eco / Premium",
//         weight_capacity: "80kg/pair",
//         packing: "80 PCS",
//       },
//       {
//         product_code: "RB-0203P / RB-0203E",
//         size: "29mm",
//         weight_capacity: "80kg/pair",
//         packing: "100 PCS",
//       },
//       { product_code: "PH291U17", weight_capacity: "200kg/pair" },
//       { product_code: "PH290U17", weight_capacity: "300kg/pair" },
//       { product_code: "PH289U17", weight_capacity: "400kg/pair" },
//     ],
//   },
//   {
//     category: "UPVC Window Sliding Rollers",
//     products: [
//       { product_code: "RB-UPVC-12R / RB-UPVC-12B", packing: "3000 PCS" },
//       { product_code: "RB-UPVC-14MM", packing: "3000 PCS" },
//       { product_code: "RB-UPVC-16MM", packing: "3000 PCS" },
//       { product_code: "RB-UPVC-20MM ADJUSTABLE", packing: "400 PCS" },
//     ],
//   },
//   {
//     category: "Window Sliding Rollers (Premium)",
//     products: [
//       { product_code: "RB-N642P", packing: "3000 PCS" },
//       { product_code: "RB-N642AP", packing: "3000 PCS" },
//       { product_code: "RB-N642SP", packing: "3000 PCS" },
//     ],
//   },
//   {
//     category: "Window Sliding Rollers (Economy)",
//     products: [
//       { product_code: "RB-D22", packing: "4000 PCS" },
//       { product_code: "RB-F362BE", packing: "3000 PCS" },
//       { product_code: "RB-F352BE", packing: "3000 PCS" },
//     ],
//   },
//   {
//     category: "G & C Channel Door Sliding System",
//     products: [
//       { product_code: "RB-DOF", packing: "3000 PCS" },
//       { product_code: "RB-COF", packing: "3000 PCS" },
//       {
//         product_code: "ALUMINIUM_CHANNEL",
//         color: "Black, Brown, Ivory, Silver",
//         length: "8 FT",
//       },
//     ],
//   },
//   {
//     category: "Window & Door Handle",
//     products: [
//       { product_code: "RBH-3101", color: "Mill Finish", packing: "100 PCS" },
//       { product_code: "RBH-3102", color: "Mill Finish", packing: "100 PCS" },
//       { product_code: "RBH-3104", color: "Black, White", packing: "100 PCS" },
//       { product_code: "RBH-3107", color: "Black, White", packing: "100 PCS" },
//     ],
//   },
//   {
//     category: "Concealed Door Closer",
//     products: [
//       { product_code: "040", color: "Silver", packing: "500 PCS" },
//       { product_code: "060", color: "Silver", packing: "500 PCS" },
//       { product_code: "070", color: "Silver", packing: "500 PCS" },
//     ],
//   },
//   {
//     category: "Butt Hinges",
//     products: [
//       { product_code: "RBH-4101", color: "Black, White", packing: "400 PCS" },
//       { product_code: "RBH-4102", color: "Black, White", packing: "400 PCS" },
//       { product_code: "RBH-4104", color: "Black, White", packing: "400 PCS" },
//     ],
//   },
//   {
//     category: "Corner Cleat Joints",
//     products: [
//       { product_code: "RBCC-22", color: "Mill Finish", packing: "1000 PCS" },
//       { product_code: "RBCC-24", color: "Mill Finish", packing: "1000 PCS" },
//       { product_code: "RBCC-375", color: "Mill Finish", packing: "1000 PCS" },
//     ],
//   },
//   {
//     category: "System Window Accessories",
//     products: [
//       {
//         product_code: "RBA-01",
//         type: "Straight T Type Nib",
//         packing: "500 PCS",
//       },
//       { product_code: "RBA-02", packing: "500 PCS" },
//       { product_code: "RBA-07", color: "Black, White", packing: "3000 PCS" },
//     ],
//   },
//   {
//     category: "Window Wire Mesh",
//     products: [{ type: "Aluminum Wire Mesh" }],
//   },
//   {
//     category: "Stainless Steel Screen Mesh",
//     products: [
//       {
//         material: "SS",
//         mesh_types: ["304", "316"],
//         features: "Anti-rust, durable",
//       },
//     ],
//   },
// ];

// // Flatten all products with their category and image (fallback to category image if no specific image)
// const ALL_PRODUCTS = CATEGORIES.flatMap((cat) =>
//   cat.products.map((p, i) => {
//     // Try to use product.image, else fallback to category image from PRODUCT_CATEGORIES
//     let image = p.image;
//     if (!image) {
//       const catObj = PRODUCT_CATEGORIES.find((c) => c.name === cat.category);
//       image = catObj?.image || productHero;
//     }
//     return {
//       ...p,
//       category: cat.category,
//       image,
//     };
//   }),
// );

// // ── ProductsPage ──────────────────────────────────────────────────────────────
// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [globalSearch, setGlobalSearch] = useState("");
//   const [quoteProduct, setQuoteProduct] = useState(null);

//   const categories = ["All", ...CATEGORIES.map((c) => c.category)];

//   const filtered = ALL_PRODUCTS.filter((p) => {
//     const matchCat = activeCategory === "All" || p.category === activeCategory;
//     const q = globalSearch.toLowerCase();
//     const matchSearch =
//       !q ||
//       p.name.toLowerCase().includes(q) ||
//       p.code.toLowerCase().includes(q) ||
//       p.category.toLowerCase().includes(q) ||
//       p.size.toLowerCase().includes(q);
//     return matchCat && matchSearch;
//   });

//   return (
//     <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
//       <SEO
//         title="High-Quality Aluminium Window Fittings & Accessories | Doctor Fittings"
//         description="Discover a wide range of durable aluminium window hardware. From hinges to locking systems, find the best fittings for modern architecture in Rajkot and beyond. SS friction stays, window rollers, handles & more."
//         path="/products"
//         keywords="aluminium window fittings, SS friction stay, window rollers rajkot, window handles, restriction arm, UPVC hardware, window locks, aluminium window accessories, best window hardware rajkot"
//       />
//       <Navbar activeLink="Products" />

//       {/* ── PAGE HERO ── */}
//       <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-12 md:py-16 text-center overflow-hidden">
//         <img
//           src={productHero}
//           alt="Premium Aluminium Window Hardware Products Doctor Fittings Rajkot"
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//           style={{ zIndex: 0 }}
//         />
//         <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
//         <div className="relative z-10">
//           <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white mb-3">
//             Product Catalogue
//           </h1>
//           <p className="text-white/65 text-sm md:text-base max-w-xl mx-auto mb-8">
//             Explore our comprehensive range of premium window fittings and
//             accessories
//           </p>
//           <div className="inline-flex items-center gap-6 md:gap-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 md:px-10 py-4 flex-wrap justify-center">
//             {[
//               [`${CATEGORIES.length}`, "Categories"],
//               [`${ALL_PRODUCTS.length}+`, "Products"],
//               ["ISO", "Certified"],
//               ["Bulk", "Pricing"],
//             ].map(([val, label]) => (
//               <div key={label} className="text-center">
//                 <div className="font-['Barlow_Condensed',sans-serif] font-black text-xl text-[#f5a623]">
//                   {val}
//                 </div>
//                 <div className="text-white/55 text-xs mt-0.5">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── CATEGORY STRIP (Unified with Pills) ── */}
//       <div className="bg-white border-b border-[#e2e6f0] px-4 md:px-8 lg:px-12 py-6">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-[#1e2a6e] font-bold text-sm mb-4 tracking-wide">
//             Browse by Category
//           </h3>
//           <div
//             className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {/* All category pill */}
//             <button
//               key="All"
//               onClick={() => setActiveCategory("All")}
//               className={`group flex-shrink-0 w-32 rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer text-left
//                 ${activeCategory === "All"
//                   ? "bg-[#1e2a6e] text-white border-[#1e2a6e] shadow-lg"
//                   : "bg-white text-[#1e2a6e] border-[#e2e6f0] hover:border-[#f5a623] hover:shadow-lg"}
//               `}
//             >
//               <div className="aspect-[4/3] bg-[#f4f6fb] overflow-hidden flex items-center justify-center">
//                 <span className="text-2xl font-black text-[#f5a623]">All</span>
//               </div>
//               <div className="px-2 py-2">
//                 <span className="text-[#1e2a6e] text-[0.65rem] font-semibold leading-tight line-clamp-2 block">
//                   All Categories
//                 </span>
//               </div>
//             </button>
//             {/* Category pills with images */}
//             {PRODUCT_CATEGORIES.map((cat) => (
//               <button
//                 key={cat.name}
//                 onClick={() => setActiveCategory(cat.name)}
//                 className={`group flex-shrink-0 w-32 rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer text-left
//                   ${activeCategory === cat.name
//                     ? "bg-[#1e2a6e] text-white border-[#1e2a6e] shadow-lg"
//                     : "bg-white text-[#1e2a6e] border-[#e2e6f0] hover:border-[#f5a623] hover:shadow-lg"}
//                 `}
//               >
//                 <div className="aspect-[4/3] bg-[#f4f6fb] overflow-hidden">
//                   <img
//                     src={cat.image}
//                     alt={`${cat.name} - Premium Window Hardware Doctor Fittings Rajkot`}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="px-2 py-2">
//                   <span className="text-[#1e2a6e] text-[0.65rem] font-semibold leading-tight line-clamp-2 block">
//                     {cat.name}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN ── */}
//       <main className="flex-1 bg-[#f4f6fb] px-4 md:px-8 lg:px-12 py-8 md:py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Search bar only (category filter is now the strip above) */}
//           <div className="flex flex-col gap-4 mb-8">
//             {/* Search bar */}
//             <div className="relative max-w-md">
//               <svg
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6080]"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="M21 21l-4.35-4.35" />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={globalSearch}
//                 onChange={(e) => setGlobalSearch(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#e2e6f0] rounded-xl bg-white focus:outline-none focus:border-[#1e2a6e] focus:ring-2 focus:ring-[#1e2a6e]/10 transition-all shadow-sm"
//               />
//               {globalSearch && (
//                 <button
//                   onClick={() => setGlobalSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a6080] hover:text-[#1e2a6e] bg-transparent border-none cursor-pointer"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M18 6L6 18M6 6l12 12" />
//                   </svg>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Results count */}
//           <p className="text-[#5a6080] text-xs mb-4">
//             Showing{" "}
//             <span className="font-semibold text-[#1e2a6e]">
//               {filtered.length}
//             </span>{" "}
//             products
//           </p>

//           {/* Product Grid: 2 cols mobile, 4 cols desktop */}
//           {filtered.length === 0 ? (
//             <div className="text-center py-20 bg-white rounded-2xl border border-[#e2e6f0]">
//               <svg
//                 className="w-14 h-14 mx-auto mb-4 text-[#1e2a6e] opacity-20"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 viewBox="0 0 24 24"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="M21 21l-4.35-4.35" />
//               </svg>
//               <h3 className="text-[#1e2a6e] font-bold text-lg mb-1">
//                 No Products Found
//               </h3>
//               <p className="text-[#5a6080] text-sm">
//                 Try a different search term or category.
//               </p>
//               <button
//                 onClick={() => {
//                   setGlobalSearch("");
//                   setActiveCategory("All");
//                 }}
//                 className="mt-4 text-xs font-semibold text-[#f5a623] underline bg-transparent border-none cursor-pointer"
//               >
//                 Clear filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
//               {filtered.map((product, i) => (
//                 <ProductCard
//                   key={`${product.code}-${i}`}
//                   product={product}
//                   onQuote={setQuoteProduct}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </main>

//       {/* ── BOTTOM CTA ── */}
//       <section className="bg-[#1e2a6e] px-6 md:px-12 py-14 text-center">
//         <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-white mb-3">
//           Can't Find What You Need?
//         </h2>
//         <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
//           We offer custom manufacturing and special bulk orders. Contact our
//           team for a tailored quote.
//         </p>
//         <div className="flex gap-4 justify-center flex-wrap">
//           <Link
//             to="/contact"
//             className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] hover:-translate-y-0.5 transition-all"
//           >
//             Contact Our Team
//           </Link>
//           <Link
//             to="/about"
//             className="border border-white/35 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all"
//           >
//             About Us
//           </Link>
//         </div>
//       </section>

//       <Footer />

//       {/* Quote Modal */}
//       {quoteProduct && (
//         <QuoteModal
//           product={quoteProduct}
//           onClose={() => setQuoteProduct(null)}
//         />
//       )}
//     </div>
//   );
// }
