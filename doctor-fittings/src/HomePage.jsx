import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSvg from "./assets/doctor-fittings-block.png";

// ── Icons ────────────────────────────────────────────────────────────────────
const IconGear = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);
const IconShield = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconWrench = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);
const IconBox = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconWindow = () => (
  <svg className="w-16 h-16" fill="none" stroke="#f5a623" strokeWidth="1.2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M9 21V9" />
  </svg>
);
const IconGlass = () => (
  <svg className="w-16 h-16" fill="none" stroke="#f5a623" strokeWidth="1.2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M15 21V9" />
  </svg>
);
const IconHome = () => (
  <svg className="w-16 h-16" fill="none" stroke="#f5a623" strokeWidth="1.2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ activeLink = "Home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e2a6e] h-[5rem] flex items-center justify-between px-8 md:px-12 sticky top-0 z-50 shadow-lg">
      <Link to="/" className="flex items-center gap-2.5 no-underline">
        <img src={logoSvg} alt="Doctor Fittings — Aluminium Window Hardware Rajkot" className="h-[3.75rem] w-auto" />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-2 list-none">
        {[["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]].map(([label, path]) => (
          <li key={label}>
            <Link
              to={path}
              className={`text-sm px-4 py-1.5 rounded-full no-underline transition-all duration-200 font-semibold
                ${label === activeLink
                  ? "bg-[#f5a623] text-[#1e2a6e]"
                  : "text-white/75 hover:text-white"}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-[5rem] right-0 w-64 bg-[#16205a] shadow-2xl md:hidden z-50 rounded-bl-xl">
          <ul className="list-none flex flex-col p-4 gap-1">
            {[["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]].map(([label, path]) => (
              <li key={label}>
                <Link to={path} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg no-underline text-sm font-medium transition-all">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0f1640]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logoSvg} alt="Doctor Fittings" className="h-[3.75rem] w-auto" />
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">Premium aluminium window hardware manufacturer and wholesale supplier in Rajkot, Gujarat, India.</p>
        </div>
        {[
          { title: "Quick Links", links: [["Home", "/"], ["Products", "/products"], ["About Us", "/about"], ["Contact", "/contact"]] },
          { title: "Products", links: [["Pipe Fittings", "/products"], ["Valves", "/products"], ["Connectors", "/products"], ["Accessories", "/products"]] },
          { title: "Contact Info", links: [["doctorfittingshardware@gmail.com", "#"], ["+91 96645 35583", "#"], ["+91 96240 75535", "#"], ["Rajkot, Gujarat, India", "#"]] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
            <ul className="list-none flex flex-col gap-2">
              {links.map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-white/40 text-sm no-underline hover:text-[#f5a623] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.07] text-center py-5 text-white/30 text-xs px-4">
        © 2026 Doctor Fittings. All rights reserved.
      </div>
    </footer>
  );
}

// ── HomePage ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const features = [
    { icon: <IconGear />, title: "Precision Engineering", desc: "CNC machined components with tolerances up to ±0.01mm for perfect window assembly integration." },
    { icon: <IconShield />, title: "Corrosion Resistant", desc: "Stainless steel and brass fittings designed to withstand moisture and environmental exposure." },
    { icon: <IconWrench />, title: "Custom Solutions", desc: "Tailored fitting designs for unique window frame configurations and installation requirements." },
    { icon: <IconBox />, title: "Bulk Ordering", desc: "Competitive pricing for high-volume orders with guaranteed on-time delivery schedules." },
  ];

  const industries = [
    { icon: <IconWindow />, title: "Window Manufacturing", desc: "Specialized fittings for UPVC, aluminum, and wooden window frame assembly and installation.", apps: ["Frame Connectors", "Hinge Systems", "Lock Mechanisms", "Drainage Solutions"] },
    { icon: <IconGlass />, title: "Glass & Glazing", desc: "Secure mounting hardware and sealing solutions for commercial and residential glazing projects.", apps: ["Glass Clamps", "Mounting Brackets", "Sealing Strips", "Edge Protectors"] },
    { icon: <IconHome />, title: "Construction", desc: "Heavy-duty fittings for large-scale commercial building and residential construction projects.", apps: ["Structural Brackets", "Wall Anchors", "Expansion Joints", "Support Systems"] },
  ];

  const products = [
    { title: "Window Frame Connectors", desc: "High-strength corner connectors and joining brackets for seamless window frame assembly.", spec: "Material: Stainless Steel 304 | Load Capacity: 500kg | Finish: Polished" },
    { title: "Hinge & Hardware Sets", desc: "Complete hinge systems with friction stays and restrictor mechanisms for tilt & turn windows.", spec: "Material: Zinc Alloy | Cycle Life: 50,000+ | Coating: Powder Coated", highlight: true },
    { title: "Drainage Fittings", desc: "Precision-engineered drainage channels and weep hole covers for window water management.", spec: "Material: UPVC | Flow Rate: 15L/min | UV Resistant: Yes" },
    { title: "Sealing & Gaskets", desc: "Weather-resistant EPDM rubber seals and gaskets for optimal thermal and acoustic insulation.", spec: "Material: EPDM | Temperature: -40°C to +120°C | Shore Hardness: 60A" },
  ];

  const certs = [
    { name: "ISO 9001:2015", desc: "Quality Management System" },
    { name: "CE Certified", desc: "European Conformity Standards" },
    { name: "EN 12608", desc: "Window Hardware Standards" },
    { name: "DIN Compliant", desc: "German Industrial Norms" },
  ];

  const testimonials = [
    { quote: "Doctor Fittings has been our trusted supplier for over 5 years. Their precision hardware has significantly reduced our assembly time and warranty claims.", author: "James Mitchell", role: "Production Manager", company: "Premium Windows Ltd." },
    { quote: "The quality of their stainless steel fittings is unmatched. We've never had a single failure in over 10,000 installations.", author: "Sarah Chen", role: "Technical Director", company: "Urban Glass Solutions" },
    { quote: "Reliable delivery schedules and exceptional technical support. They understand the demands of large-scale construction projects.", author: "Robert Davidson", role: "Procurement Head", company: "BuildRight Construction" },
  ];

  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e]">
      <Navbar activeLink="Home" />

      {/* ── HERO ── */}
      <section className="bg-[#1e2a6e] px-8 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/35 text-[#f5a623] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            ✦ Trusted by 1000+ Window Manufacturers
          </div>
          <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Precision Fittings for<br />
            <span className="text-[#f5a623]">Window Excellence</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
            Premium hardware solutions engineered specifically for window manufacturing, glazing, and installation professionals. ISO certified quality with unmatched precision and durability.
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <Link to="/products" className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] transition-all hover:-translate-y-0.5 active:translate-y-0">
              Browse Catalogue
            </Link>
            <Link to="/contact" className="border border-white/40 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all">
              Request Quote
            </Link>
          </div>
          <div className="flex gap-10 flex-wrap">
            {[["25+", "Years Experience"], ["500+", "Product Range"], ["99.8%", "Quality Rate", true]].map(([val, label, gold]) => (
              <div key={label}>
                <div className={`font-['Barlow_Condensed',sans-serif] font-black text-3xl ${gold ? "text-[#f5a623]" : "text-white"}`}>{val}</div>
                <div className="text-white/50 text-xs mt-0.5 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration */}
        <div className="hidden md:block rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#2d3a7a] to-[#1a2560]">
          <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="480" height="360" fill="#1a2560" />
            <rect x="0" y="260" width="480" height="100" fill="#1e2a6a" opacity="0.7" />
            {[20, 120, 220, 320].map((x, i) => (
              <g key={i}>
                <rect x={x} y="30" width="90" height="240" rx="3" fill="#2a3680" stroke="#3a4890" strokeWidth="1" />
                <rect x={x + 10} y="40" width="70" height="105" rx="2" fill="#263070" opacity="0.6" />
                <rect x={x + 10} y="155" width="70" height="105" rx="2" fill="#263070" opacity="0.6" />
              </g>
            ))}
            <rect x="420" y="30" width="50" height="240" rx="3" fill="#2a3680" stroke="#3a4890" strokeWidth="1" />
            <ellipse cx="160" cy="10" rx="18" ry="6" fill="#f5a623" opacity="0.7" />
            <line x1="160" y1="16" x2="160" y2="60" stroke="#f5a623" strokeWidth="1" opacity="0.3" />
            <ellipse cx="300" cy="10" rx="18" ry="6" fill="#f5a623" opacity="0.7" />
            <line x1="300" y1="16" x2="300" y2="60" stroke="#f5a623" strokeWidth="1" opacity="0.3" />
            <defs>
              <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#263070" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1a2560" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect x="0" y="270" width="480" height="90" fill="url(#floorGrad)" />
            <rect x="60" y="220" width="160" height="50" rx="4" fill="#1e2860" />
            <rect x="80" y="200" width="40" height="22" rx="3" fill="#222f75" />
            <rect x="135" y="205" width="65" height="17" rx="3" fill="#222f75" />
          </svg>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-white px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">Why Window Manufacturers Choose Us</h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">Engineered for the specific demands of window manufacturing and installation</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="border border-[#e2e6f0] rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-[#1e2a6e] opacity-75">
              {icon}
              <h3 className="font-bold text-base text-[#1e2a6e] mt-4 mb-2 opacity-100">{title}</h3>
              <p className="text-[#5a6080] text-sm leading-relaxed opacity-100">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRY ── */}
      <section className="bg-[#f4f6fb] px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">Industry Applications</h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">Specialized solutions for diverse sectors</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map(({ icon, title, desc, apps }) => (
            <div key={title} className="bg-[#1e2a6e] rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#2d3a8a] to-[#1e2a6e] flex items-center justify-center opacity-30">
                {icon}
              </div>
              <div className="p-6">
                <h3 className="font-['Barlow_Condensed',sans-serif] font-bold text-xl text-white mb-2">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-[#f5a623] text-[0.7rem] font-bold tracking-widest uppercase mb-2">Key Applications:</p>
                <ul className="list-none space-y-1">
                  {apps.map(app => (
                    <li key={app} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-white px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">Featured Products</h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">Premium hardware engineered for window professionals</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10">
          {products.map(({ title, desc, spec, highlight }) => (
            <div key={title} className={`flex rounded-xl overflow-hidden border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ${highlight ? "border-[#f5a623]" : "border-[#e2e6f0]"}`}>
              <div className="w-28 min-w-[7rem] bg-gradient-to-br from-[#e8ecf8] to-[#d4daf0] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#1e2a6e] opacity-30" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </div>
              <div className="p-5 flex flex-col">
                <h3 className="font-bold text-sm text-[#1e2a6e] mb-1.5">{title}</h3>
                <p className="text-[#5a6080] text-xs leading-relaxed mb-3">{desc}</p>
                <p className="text-[0.65rem] font-bold text-[#5a6080] uppercase tracking-widest mb-1">Specifications</p>
                <p className="text-[#5a6080] text-xs mb-4">{spec}</p>
                <Link to="/products" className="mt-auto inline-block bg-[#f5a623] text-[#1e2a6e] font-bold text-xs px-4 py-2 rounded-md no-underline hover:bg-[#ffc94d] transition-colors w-fit">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="inline-block bg-[#1e2a6e] text-white font-bold text-sm px-8 py-3.5 rounded-lg no-underline hover:bg-[#16205a] hover:-translate-y-0.5 transition-all">
            View Complete Catalogue →
          </Link>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="bg-[#1e2a6e] px-8 md:px-12 py-20 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-white mb-2">Certified Quality Standards</h2>
        <p className="text-white/60 text-sm mb-12">Internationally recognized certifications ensuring the highest quality</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {certs.map(({ name, desc }) => (
            <div key={name} className="bg-white/[0.07] border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCheck />
              </div>
              <div className="text-white font-bold text-sm mb-1">{name}</div>
              <div className="text-white/50 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">What Our Clients Say</h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">Trusted by industry leaders across the globe</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ quote, author, role, company }) => (
            <div key={author} className="border border-[#e2e6f0] rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="text-[#f5a623] text-base tracking-widest mb-4">★★★★★</div>
              <p className="text-[#5a6080] text-sm leading-relaxed italic mb-5">"{quote}"</p>
              <div className="border-t border-[#e2e6f0] pt-4">
                <div className="font-bold text-sm text-[#1e2a6e]">{author}</div>
                <div className="text-[#5a6080] text-xs mt-0.5">{role}</div>
                <div className="text-[#f5a623] text-xs font-semibold mt-1">{company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1e2a6e] px-8 md:px-12 py-20 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-white mb-4">Ready to Elevate Your Window Manufacturing?</h2>
        <p className="text-white/65 text-sm max-w-xl mx-auto leading-relaxed mb-8">
          Partner with Doctor Fittings for precision hardware that meets the highest industry standards. Request a quote or schedule a consultation with our technical team.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          <Link to="/contact" className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] hover:-translate-y-0.5 transition-all">
            Request a Quote
          </Link>
          <Link to="/products" className="border border-white/40 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all">
            Download Catalogue
          </Link>
        </div>
        <p className="text-white/50 text-xs">📞 +91 96645 35583 &nbsp;|&nbsp; 📞 +91 96240 75535 &nbsp;|&nbsp; ✉️ doctorfittingshardware@gmail.com</p>
      </section>

      <Footer />
    </div>
  );
}

export { Navbar, Footer };
