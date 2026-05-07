import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar, Footer } from "./HomePage";
import { ProductCard, QuoteModal } from "./ProductCard";
import SEO from "./SEO";
import { CATEGORY_DATA } from "./productCatalogData";

// -- Hero Image
import productHero from "./assets/product-hero.png";

// ── CategoryPage ──────────────────────────────────────────────────────────────
export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const [quoteProduct, setQuoteProduct] = useState(null);

  const catSlug = searchParams.get("cat") || "";
  const category = CATEGORY_DATA[catSlug];
  const categoryDescription = `Browse ${category?.title || "product"} items with matching product images and names from our latest catalogue.`;

  if (!category) {
    return (
      <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
        <SEO
          title="Category Not Found | Doctor Fittings"
          description="The category you are looking for does not exist. Browse our full range of aluminium window hardware products."
          path={`/products/category?cat=${catSlug}`}
        />
        <Navbar activeLink="Products" />
        <div className="flex-1 flex items-center justify-center bg-[#f4f6fb]">
          <div className="text-center">
            <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl text-[#1e2a6e] mb-3">
              Category Not Found
            </h2>
            <p className="text-[#5a6080] text-sm mb-6">
              The category you're looking for doesn't exist.
            </p>
            <Link
              to="/products"
              className="inline-block bg-[#1e2a6e] text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-[#16205a] transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Build Product schema for this category
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    description: categoryDescription,
    numberOfItems: category.products.length,
    itemListElement: category.products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: `${product.name} in ${category.title} by Doctor Fittings.`,
        brand: { "@type": "Brand", name: "Doctor Fittings" },
        category: category.title,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          price: typeof product.price === "number" ? String(product.price) : "0",
          priceValidUntil: "2027-12-31",
          url: `https://doctorfittings.com/products/category?cat=${catSlug}`,
          seller: { "@type": "Organization", name: "Doctor Fittings" },
        },
      },
    })),
  };

  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
      <SEO
        title={`${category.title} - Premium ${category.title} Hardware | Doctor Fittings`}
        description={`Shop premium ${category.title.toLowerCase()} from Doctor Fittings Rajkot. ${categoryDescription}`}
        path={`/products/category?cat=${catSlug}`}
        keywords={`${category.title.toLowerCase()}, ${category.title.toLowerCase()} rajkot, best ${category.title.toLowerCase()} in rajkot, ${category.title.toLowerCase()} wholesale, ${category.title.toLowerCase()} manufacturer gujarat`}
        schema={productSchema}
      />
      <Navbar activeLink="Products" />

      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-12 md:py-16 overflow-hidden">
        <img
          src={productHero}
          alt={`${category.title} Premium Hardware Collection Doctor Fittings Rajkot`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-white/50 text-xs no-underline hover:text-white/80 transition-colors mb-4"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              All Products
            </Link>
            <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white mb-3">
              {category.title}
            </h1>
            <p className="text-white/65 text-sm md:text-base max-w-xl">
              {categoryDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-6 bg-white/10 border border-white/15 rounded-xl px-5 py-3">
              <div className="text-center">
                <div className="font-['Barlow_Condensed',sans-serif] font-black text-xl text-[#f5a623]">
                  {category.products.length}
                </div>
                <div className="text-white/55 text-xs mt-0.5">Products</div>
              </div>
              <div className="text-center">
                <div className="font-['Barlow_Condensed',sans-serif] font-black text-xl text-[#f5a623]">
                  Live
                </div>
                <div className="text-white/55 text-xs mt-0.5">Catalog</div>
              </div>
              <div className="text-center">
                <div className="font-['Barlow_Condensed',sans-serif] font-black text-xl text-[#f5a623]">
                  Updated
                </div>
                <div className="text-white/55 text-xs mt-0.5">Assets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <main className="flex-1 bg-[#f4f6fb] px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#5a6080] text-xs mb-4">
            Showing{" "}
            <span className="font-semibold text-[#1e2a6e]">
              {category.products.length}
            </span>{" "}
            products in{" "}
            <span className="font-semibold text-[#1e2a6e]">
              {category.title}
            </span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {category.products.map((product, i) => (
              <ProductCard
                key={`${product.code}-${i}`}
                product={product}
                onQuote={setQuoteProduct}
              />
            ))}
          </div>
        </div>
      </main>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#1e2a6e] px-6 md:px-12 py-14 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-white mb-3">
          Need a Custom Order?
        </h2>
        <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
          We offer bulk pricing and custom manufacturing. Contact our team for a
          tailored quote.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] hover:-translate-y-0.5 transition-all"
          >
            Contact Our Team
          </Link>
          <Link
            to="/products"
            className="border border-white/35 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all"
          >
            All Products
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
