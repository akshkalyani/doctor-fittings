import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./HomePage";
import { ProductCard, QuoteModal } from "./ProductCard";
import SEO from "./SEO";
import productHero from "./assets/product-hero.png";
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from "./productCatalogData";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [globalSearch, setGlobalSearch] = useState("");
  const [quoteProduct, setQuoteProduct] = useState(null);

  const categories = ["All", ...new Set(ALL_PRODUCTS.map((p) => p.category))];

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = globalSearch.toLowerCase();
    const matchSearch =
      !q ||
      (p.name || "").toLowerCase().includes(q) ||
      (p.product_code || p.code || "").toLowerCase().includes(q) ||
      (p.category || "").toLowerCase().includes(q) ||
      (p.size || "").toLowerCase().includes(q);
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
              [`${PRODUCT_CATEGORIES.length}`, "Categories"],
              [`${ALL_PRODUCTS.length}`, "Products"],
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

              return (
                <Link
                  key={cat.name}
                  to={`/products/category?cat=${cat.slug}`}
                  className="group flex-shrink-0 w-32 rounded-xl overflow-hidden border border-[#e2e6f0] bg-white hover:border-[#f5a623] hover:shadow-lg transition-all duration-200 cursor-pointer text-left no-underline"
                >
                  {inner}
                </Link>
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
                  key={`${product.product_code || product.code || product.name}-${i}`}
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
