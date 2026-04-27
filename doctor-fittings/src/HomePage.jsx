import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import logoSvg from "./assets/doctor-fittings-block.png";
import logoSvg from "./assets/doctor-fittings.png";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.jpg";
import hero4 from "./assets/hero4.png";

import catWindowDoorHandle from "./assets/product-images/product-categories/Window Door HAndle.png";
import catConcealedDoorCloser from "./assets/product-images/product-categories/Concealed Door Closer.png";
import catGCChannel from "./assets/product-images/product-categories/G CHANNEL & C CHANNEL DOOR SLIDING SYSTEM.png";
import catSSMesh from "./assets/product-images/product-categories/STAINLESS STEEL SCREEN MESH.png";
import catPremiumRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (PREMIUM).png";
import catEconomyRollers from "./assets/product-images/product-categories/WINDOW SLIDING ROLLERS (ECONOMY).png";
import catDumalRollers from "./assets/product-images/product-categories/DUMAL WINDOW SLIDING ROLLERS.png";
import catButtHinges from "./assets/product-images/product-categories/BUTT HINGES.png";
import catSlidingLock from "./assets/product-images/product-categories/SLIDING WINDOW LOCK.png";
import catCornerCleat from "./assets/product-images/product-categories/CORNER CLEAT JOINTS.png";
import catUPVC from "./assets/product-images/product-categories/UPVC WINDOW SLIDING ROLLERS.png";
// ── Icons ────────────────────────────────────────────────────────────────────
const IconGear = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);
const IconShield = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconWrench = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);
const IconBox = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
  </svg>
);
const IconCheck = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconWindow = () => (
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="#f5a623"
    strokeWidth="1.2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);
const IconGlass = () => (
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="#f5a623"
    strokeWidth="1.2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M15 21V9" />
  </svg>
);
const IconHome = () => (
  <svg
    className="w-16 h-16"
    fill="none"
    stroke="#f5a623"
    strokeWidth="1.2"
    viewBox="0 0 24 24"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ activeLink = "Home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e2a6e] h-[5rem] flex items-center justify-between px-8 md:px-12 sticky top-0 z-50 shadow-lg">
      <Link to="/" className="flex items-center gap-2.5 no-underline">
        <img
          src={logoSvg}
          alt="Doctor Fittings — Aluminium Window Hardware Rajkot"
          className="h-[3.75rem] w-auto"
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-2 list-none">
        {[
          ["Home", "/"],
          ["Products", "/products"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([label, path]) => (
          <li key={label}>
            <Link
              to={path}
              className={`text-sm px-4 py-1.5 rounded-full no-underline transition-all duration-200 font-semibold
                ${
                  label === activeLink
                    ? "bg-[#f5a623] text-[#1e2a6e]"
                    : "text-white/75 hover:text-white"
                }`}
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
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-[5rem] right-0 w-64 bg-[#16205a] shadow-2xl md:hidden z-50 rounded-bl-xl">
          <ul className="list-none flex flex-col p-4 gap-1">
            {[
              ["Home", "/"],
              ["Products", "/products"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg no-underline text-sm font-medium transition-all"
                >
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
            <img
              src={logoSvg}
              alt="Doctor Fittings"
              className="h-[3.75rem] w-auto"
            />
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
            Premium aluminium window hardware manufacturer and wholesale
            supplier in Rajkot, Gujarat, India.
          </p>
        </div>
        {[
          {
            title: "Quick Links",
            links: [
              ["Home", "/"],
              ["Products", "/products"],
              ["About Us", "/about"],
              ["Contact", "/contact"],
            ],
          },
          {
            title: "Products",
            links: [
              ["Pipe Fittings", "/products"],
              ["Valves", "/products"],
              ["Connectors", "/products"],
              ["Accessories", "/products"],
            ],
          },
          {
            title: "Contact Info",
            links: [
              ["doctorfittingshardware@gmail.com", "#"],
              ["+91 96645 35583", "#"],
              ["+91 96240 75535", "#"],
              ["Rajkot, Gujarat, India", "#"],
            ],
          },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              {title}
            </h4>
            <ul className="list-none flex flex-col gap-2">
              {links.map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-white/40 text-sm no-underline hover:text-[#f5a623] transition-colors"
                  >
                    {label}
                  </Link>
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
const heroSlides = [
  {
    image: hero1,
    heading: (
      <>
        Precision Fittings for
        <br />
        <span className="text-[#f5a623]">Window Excellence</span>
      </>
    ),
    sub: "Premium hardware solutions engineered specifically for window manufacturing, glazing, and installation professionals.",
  },
  {
    image: hero2,
    heading: (
      <>
        Built for <span className="text-[#f5a623]">Strength</span>,
        <br />
        Designed for <span className="text-[#f5a623]">Performance</span>
      </>
    ),
    sub: "Corrosion-resistant aluminium and stainless-steel hardware trusted by 1 000+ manufacturers across India.",
  },
  {
    image: hero3,
    heading: (
      <>
        Your Trusted <span className="text-[#f5a623]">Hardware Partner</span>
        <br />
        Since 2001
      </>
    ),
    sub: "From custom solutions to bulk orders — Doctor Fittings delivers quality, on time, every time.",
  },
  {
    image: hero4,
    heading: (
      <>
        Your Trusted <span className="text-[#f5a623]">Hardware Partner</span>
        <br />
        Since 2001
      </>
    ),
    sub: "From custom solutions to bulk orders — Doctor Fittings delivers quality, on time, every time.",
  },
];

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);

  const nextSlide = useCallback(
    () => setHeroIdx((i) => (i + 1) % heroSlides.length),
    [],
  );

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
  }, [nextSlide]);

  const features = [
    {
      icon: <IconGear />,
      title: "Precision Engineering",
      desc: "CNC machined components with tolerances up to ±0.01mm for perfect window assembly integration.",
    },
    {
      icon: <IconShield />,
      title: "Corrosion Resistant",
      desc: "Stainless steel and brass fittings designed to withstand moisture and environmental exposure.",
    },
    {
      icon: <IconWrench />,
      title: "Custom Solutions",
      desc: "Tailored fitting designs for unique window frame configurations and installation requirements.",
    },
    {
      icon: <IconBox />,
      title: "Bulk Ordering",
      desc: "Competitive pricing for high-volume orders with guaranteed on-time delivery schedules.",
    },
  ];

  const industries = [
    {
      icon: <IconWindow />,
      title: "Window Manufacturing",
      desc: "Specialized fittings for UPVC, aluminum, and wooden window frame assembly and installation.",
      apps: [
        "Frame Connectors",
        "Hinge Systems",
        "Lock Mechanisms",
        "Drainage Solutions",
      ],
    },
    {
      icon: <IconGlass />,
      title: "Glass & Glazing",
      desc: "Secure mounting hardware and sealing solutions for commercial and residential glazing projects.",
      apps: [
        "Glass Clamps",
        "Mounting Brackets",
        "Sealing Strips",
        "Edge Protectors",
      ],
    },
    {
      icon: <IconHome />,
      title: "Construction",
      desc: "Heavy-duty fittings for large-scale commercial building and residential construction projects.",
      apps: [
        "Structural Brackets",
        "Wall Anchors",
        "Expansion Joints",
        "Support Systems",
      ],
    },
  ];

  const products = [
    {
      title: "Sliding Window Lock",
      image: catSlidingLock,
      info: ["Code: RBPL-1101", "100 Pcs / Box", "Color: Silver"],
    },
    {
      title: "Dumal Window Sliding Rollers",
      image: catDumalRollers,
      info: [
        "Code: RBD210P / RBD210E",
        "Size: 25 / 27 / 29 mm",
        "800 Pcs / Box",
        "Nylon (Premium)",
        "80 kg / Pair",
      ],
    },
    {
      title: "UPVC Sliding Roller",
      image: catUPVC,
      info: ["Code: RB-UPVC 16MM", "3000 Pcs"],
    },
    {
      title: "Window Sliding Rollers (Premium)",
      image: catPremiumRollers,
      info: ["Code: RB-NS625P", "3000 Pcs", "Nylon MSG"],
    },
    {
      title: "Window Sliding Rollers (Economy)",
      image: catEconomyRollers,
      info: ["Code: RB-PS625E", "3000 Pcs"],
    },
    {
      title: "G & C Channel Door Sliding System",
      image: catGCChannel,
      info: ["Code: RB-DGE", "3000 Pcs"],
    },
    {
      title: "Window & Door Handle",
      image: catWindowDoorHandle,
      info: ["Code: RBH-3101", "Color: Mill Finish", "100 Pcs"],
    },
    {
      title: "Concealed Door Closer",
      image: catConcealedDoorCloser,
      info: ["Code: 060", "Color: Silver", "500 Pcs"],
    },
    {
      title: "Butt Hinges",
      image: catButtHinges,
      info: ["Code: RBBH-4102", "Color: Black / White", "400 Pcs"],
    },
    {
      title: "Corner Cleat Joints",
      image: catCornerCleat,
      info: ["Code: RB-CC22", "Finish: Mill Finish", "1000 Pcs"],
    },
    {
      title: "Stainless Steel Wire Mesh",
      image: catSSMesh,
      info: [
        "Length: 15–30 ft",
        "Material: SS202",
        "Dia: 0.15 mm",
        "Color: Silver",
      ],
    },
  ];

  const certs = [
    { name: "ISO 9001:2015", desc: "Quality Management System" },
    { name: "CE Certified", desc: "European Conformity Standards" },
    { name: "EN 12608", desc: "Window Hardware Standards" },
    { name: "DIN Compliant", desc: "German Industrial Norms" },
  ];

  const testimonials = [
    {
      quote:
        "Doctor Fittings has been our trusted supplier for over 5 years. Their precision hardware has significantly reduced our assembly time and warranty claims.",
      author: "Pravin P",
      role: "Production Manager",
      company: "Premium Windows Ltd.",
    },
    {
      quote:
        "The quality of their stainless steel fittings is unmatched. We've never had a single failure in over 10,000 installations.",
      author: "Shivaji M",
      role: "Technical Director",
      company: "Urban Glass Solutions",
    },
    {
      quote:
        "Reliable delivery schedules and exceptional technical support. They understand the demands of large-scale construction projects.",
      author: "Rajesh K",
      role: "Procurement Head",
      company: "BuildRight Construction",
    },
  ];

  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e]">
      <Navbar activeLink="Home" />

      {/* ── HERO CAROUSEL ── */}
      <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIdx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay: transparent-black from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Text content (always on top) */}
        <div className="relative z-20 h-full flex items-center">
          <div
            className={`px-8 md:px-16 lg:px-24 max-w-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/35 text-[#f5a623] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              ✦ Trusted by 1000+ Window Manufacturers
            </div>
            <h1
              key={heroIdx}
              className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 animate-[fadeUp_.6s_ease]"
            >
              {heroSlides[heroIdx].heading}
            </h1>
            <p
              key={`sub-${heroIdx}`}
              className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg animate-[fadeUp_.6s_.15s_ease_both]"
            >
              {heroSlides[heroIdx].sub}
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              <Link
                to="/products"
                className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Browse Catalogue
              </Link>
              <Link
                to="/contact"
                className="border border-white/40 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all"
              >
                Request Quote
              </Link>
            </div>
            <div className="flex gap-10 flex-wrap">
              {[
                ["25+", "Years Experience"],
                ["500+", "Product Range"],
                ["99.8%", "Quality Rate", true],
              ].map(([val, label, gold]) => (
                <div key={label}>
                  <div
                    className={`font-['Barlow_Condensed',sans-serif] font-black text-3xl ${gold ? "text-[#f5a623]" : "text-white"}`}
                  >
                    {val}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5 tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === heroIdx
                  ? "w-8 h-2.5 bg-[#f5a623]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-white px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">
          Why Window Manufacturers Choose Us
        </h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">
          Engineered for the specific demands of window manufacturing and
          installation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="border border-[#e2e6f0] rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-[#1e2a6e] opacity-75"
            >
              {icon}
              <h3 className="font-bold text-base text-[#1e2a6e] mt-4 mb-2 opacity-100">
                {title}
              </h3>
              <p className="text-[#5a6080] text-sm leading-relaxed opacity-100">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANUFACTURING PROCESS ── */}
      <section className="bg-[#f4f6fb] px-8 md:px-12 py-20 overflow-hidden">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">
          Our Manufacturing Process
        </h2>
        <p className="text-center text-[#5a6080] text-sm mb-14">
          From raw material to delivery — every step meets the highest quality
          standards
        </p>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(50%/7+3.5%)] right-[calc(50%/7+3.5%)] h-0.5 bg-[#d4daf0] z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4">
            {[
              {
                label: "Raw Material",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <rect
                      x="8"
                      y="18"
                      width="32"
                      height="8"
                      rx="4"
                      fill="#c7cde6"
                    />
                    <rect
                      x="8"
                      y="10"
                      width="32"
                      height="8"
                      rx="4"
                      fill="#a0abcf"
                    />
                    <rect
                      x="8"
                      y="26"
                      width="32"
                      height="8"
                      rx="4"
                      fill="#e2e6f0"
                    />
                    <rect
                      x="12"
                      y="36"
                      width="24"
                      height="4"
                      rx="2"
                      fill="#d4daf0"
                    />
                  </svg>
                ),
              },
              {
                label: "Testing",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <rect
                      x="16"
                      y="6"
                      width="16"
                      height="36"
                      rx="3"
                      fill="#c7cde6"
                    />
                    <rect
                      x="19"
                      y="10"
                      width="10"
                      height="6"
                      rx="1"
                      fill="#a0abcf"
                    />
                    <circle cx="24" cy="24" r="3" fill="#f5a623" />
                    <path
                      d="M24 27v8"
                      stroke="#a0abcf"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="24" cy="38" r="2" fill="#a0abcf" />
                  </svg>
                ),
              },
              {
                label: "Casting",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <path
                      d="M14 8h20l4 12H10L14 8z"
                      fill="#f5a623"
                      opacity="0.6"
                    />
                    <rect
                      x="10"
                      y="20"
                      width="28"
                      height="16"
                      rx="2"
                      fill="#c7cde6"
                    />
                    <rect
                      x="16"
                      y="24"
                      width="16"
                      height="8"
                      rx="1"
                      fill="#a0abcf"
                    />
                    <path
                      d="M20 36v6M28 36v6"
                      stroke="#a0abcf"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Machining",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <circle cx="24" cy="20" r="12" fill="#c7cde6" />
                    <circle cx="24" cy="20" r="6" fill="#a0abcf" />
                    <circle cx="24" cy="20" r="2" fill="#f5a623" />
                    <path
                      d="M24 32v10"
                      stroke="#a0abcf"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 40h12"
                      stroke="#c7cde6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Powder Coating",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <rect
                      x="12"
                      y="16"
                      width="10"
                      height="24"
                      rx="3"
                      fill="#a0abcf"
                    />
                    <path
                      d="M22 22h16"
                      stroke="#f5a623"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M22 28h14"
                      stroke="#f5a623"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />
                    <path
                      d="M22 34h10"
                      stroke="#f5a623"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                      opacity="0.3"
                    />
                    <rect
                      x="30"
                      y="10"
                      width="8"
                      height="20"
                      rx="4"
                      fill="#c7cde6"
                    />
                    <circle
                      cx="34"
                      cy="10"
                      r="3"
                      fill="#f5a623"
                      opacity="0.7"
                    />
                  </svg>
                ),
              },
              {
                label: "Quality Check",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <rect
                      x="10"
                      y="8"
                      width="28"
                      height="32"
                      rx="3"
                      fill="#c7cde6"
                    />
                    <path
                      d="M18 20l4 4 8-8"
                      stroke="#f5a623"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 30h12"
                      stroke="#a0abcf"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 35h8"
                      stroke="#a0abcf"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Packing & Dispatch",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <rect
                      x="8"
                      y="14"
                      width="24"
                      height="20"
                      rx="2"
                      fill="#c7cde6"
                    />
                    <path d="M8 20h24" stroke="#a0abcf" strokeWidth="1.5" />
                    <path d="M20 14v20" stroke="#a0abcf" strokeWidth="1.5" />
                    <rect
                      x="28"
                      y="26"
                      width="14"
                      height="8"
                      rx="2"
                      fill="#a0abcf"
                    />
                    <circle cx="31" cy="37" r="3" fill="#1e2a6e" />
                    <circle cx="39" cy="37" r="3" fill="#1e2a6e" />
                    <circle cx="31" cy="37" r="1.2" fill="#f5a623" />
                    <circle cx="39" cy="37" r="1.2" fill="#f5a623" />
                  </svg>
                ),
              },
            ].map((step, idx) => (
              <div
                key={step.label}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#e2e6f0] flex items-center justify-center shadow-md mb-3 hover:border-[#f5a623] hover:shadow-lg transition-all duration-200">
                  {step.icon}
                </div>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1e2a6e] text-white text-[0.65rem] font-bold mb-1.5">
                  {idx + 1}
                </span>
                <span className="text-[#1e2a6e] text-xs font-semibold leading-tight max-w-[5.5rem]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY ── */}
      <section className="bg-[#f4f6fb] px-8 md:px-12 py-20">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">
          Industry Applications
        </h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">
          Specialized solutions for diverse sectors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map(({ icon, title, desc, apps }) => (
            <div
              key={title}
              className="bg-[#1e2a6e] rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-[#2d3a8a] to-[#1e2a6e] flex items-center justify-center opacity-30">
                {icon}
              </div>
              <div className="p-6">
                <h3 className="font-['Barlow_Condensed',sans-serif] font-bold text-xl text-white mb-2">
                  {title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <p className="text-[#f5a623] text-[0.7rem] font-bold tracking-widest uppercase mb-2">
                  Key Applications:
                </p>
                <ul className="list-none space-y-1">
                  {apps.map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-white/70 text-sm"
                    >
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
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">
          Featured Products
        </h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">
          Premium hardware engineered for window professionals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {products.map(({ title, image, info }) => (
            <Link
              to="/products"
              key={title}
              className="group rounded-xl overflow-hidden border border-[#e2e6f0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 no-underline bg-white"
            >
              <div className="aspect-video bg-[#f4f6fb] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#e2e6f0]">
                <h3 className="font-bold text-sm text-[#1e2a6e] mb-2 leading-snug">
                  {title}
                </h3>
                <ul className="list-none flex flex-wrap gap-x-3 gap-y-1">
                  {info.map((line) => (
                    <li
                      key={line}
                      className="text-[#5a6080] text-xs flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#f5a623] flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-[#1e2a6e] text-white font-bold text-sm px-8 py-3.5 rounded-lg no-underline hover:bg-[#16205a] hover:-translate-y-0.5 transition-all"
          >
            View Complete Catalogue →
          </Link>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="bg-[#1e2a6e] px-8 md:px-12 py-20 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-white mb-2">
          Certified Quality Standards
        </h2>
        <p className="text-white/60 text-sm mb-12">
          Internationally recognized certifications ensuring the highest quality
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {certs.map(({ name, desc }) => (
            <div
              key={name}
              className="bg-white/[0.07] border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors"
            >
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
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e] text-center mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-[#5a6080] text-sm mb-12">
          Trusted by industry leaders across the globe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ quote, author, role, company }) => (
            <div
              key={author}
              className="border border-[#e2e6f0] rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-[#f5a623] text-base tracking-widest mb-4">
                ★★★★★
              </div>
              <p className="text-[#5a6080] text-sm leading-relaxed italic mb-5">
                "{quote}"
              </p>
              <div className="border-t border-[#e2e6f0] pt-4">
                <div className="font-bold text-sm text-[#1e2a6e]">{author}</div>
                <div className="text-[#5a6080] text-xs mt-0.5">{role}</div>
                <div className="text-[#f5a623] text-xs font-semibold mt-1">
                  {company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1e2a6e] px-8 md:px-12 py-20 text-center">
        <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-white mb-4">
          Ready to Elevate Your Window Manufacturing?
        </h2>
        <p className="text-white/65 text-sm max-w-xl mx-auto leading-relaxed mb-8">
          Partner with Doctor Fittings for precision hardware that meets the
          highest industry standards. Request a quote or schedule a consultation
          with our technical team.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          <Link
            to="/contact"
            className="bg-[#f5a623] text-[#1e2a6e] font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-[#ffc94d] hover:-translate-y-0.5 transition-all"
          >
            Request a Quote
          </Link>
          <Link
            to="/products"
            className="border border-white/40 text-white font-semibold text-sm px-7 py-3 rounded-lg no-underline hover:border-white hover:bg-white/10 transition-all"
          >
            Download Catalogue
          </Link>
        </div>
        <p className="text-white/50 text-xs">
          📞 +91 96645 35583 &nbsp;|&nbsp; 📞 +91 96240 75535 &nbsp;|&nbsp; ✉️
          doctorfittingshardware@gmail.com
        </p>
      </section>

      <Footer />
    </div>
  );
}

export { Navbar, Footer };
