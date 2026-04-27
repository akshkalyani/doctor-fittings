import { useState } from "react";

// ── Quote Modal ───────────────────────────────────────────────────────────────
export function QuoteModal({ product, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const priceStr =
    typeof product.price === "number" ? `₹${product.price}` : product.price;
  const messageBody = `Product: ${product.name}\nItem Code: ${product.code}\nSize: ${product.size}\nPrice: ${priceStr} per ${product.unit}\nCategory: ${product.category}\nMinimum Quantity: ${qty}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xqewnvow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          quantity: qty,
          message: messageBody,
          _subject: `Quote Request: ${product.name} (${product.code})`,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // ignore
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e2a6e] px-6 py-5 flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Request Quote</h3>
            <p className="text-white/60 text-xs mt-1">
              {product.name} — {product.code}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white mt-1 bg-transparent border-none cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-[#1a1a2e] mb-1">
              Quote Requested!
            </h4>
            <p className="text-[#5a6080] text-sm">
              We'll get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-[#1e2a6e] text-white font-bold text-sm px-6 py-2.5 rounded-lg cursor-pointer border-none"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="px-6 py-5 flex flex-col gap-4"
          >
            {/* Product summary */}
            <div className="bg-[#f4f6fb] rounded-lg p-3 text-xs text-[#5a6080] border border-[#e2e6f0]">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-[#1e2a6e]">
                  {product.name}
                </span>
                <span className="font-bold text-[#f5a623]">
                  {priceStr}/{product.unit}
                </span>
              </div>
              <span>
                Code: {product.code} &nbsp;|&nbsp; Size: {product.size}
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1a1a2e] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2.5 text-sm border border-[#e2e6f0] rounded-lg focus:outline-none focus:border-[#1e2a6e] focus:ring-2 focus:ring-[#1e2a6e]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1a1a2e] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-3 py-2.5 text-sm border border-[#e2e6f0] rounded-lg focus:outline-none focus:border-[#1e2a6e] focus:ring-2 focus:ring-[#1e2a6e]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1a1a2e] mb-1">
                Minimum Quantity *
              </label>
              <input
                type="number"
                required
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                placeholder="e.g. 100"
                className="w-full px-3 py-2.5 text-sm border border-[#e2e6f0] rounded-lg focus:outline-none focus:border-[#1e2a6e] focus:ring-2 focus:ring-[#1e2a6e]/10"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#f5a623] text-[#1e2a6e] font-bold text-sm py-3 rounded-lg hover:bg-[#ffc94d] transition-colors cursor-pointer border-none disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Quote Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────────
export function ProductCard({ product, onQuote }) {
  const priceStr =
    typeof product.price === "number" ? `₹${product.price}` : product.price;
  return (
    <div className="bg-white rounded-xl border border-[#e2e6f0] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="aspect-square bg-[#f4f6fb] flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="font-bold text-sm text-[#1a1a2e] leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <span className="inline-block self-start bg-[#1e2a6e]/10 text-[#1e2a6e] text-[0.65rem] font-bold px-2 py-0.5 rounded mb-2">
          {product.code}
        </span>
        <p className="text-[#5a6080] text-xs mb-2">Size: {product.size}</p>
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <span className="text-[#f5a623] font-black text-base leading-none">
              {priceStr}
            </span>
            <span className="text-[#5a6080] text-[0.65rem] ml-1">
              /{product.unit}
            </span>
          </div>
        </div>
        <button
          onClick={() => onQuote(product)}
          className="mt-3 w-full bg-[#f5a623] text-[#1e2a6e] text-xs font-bold py-2 rounded-lg hover:bg-[#ffc94d] transition-colors cursor-pointer border-none"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}
