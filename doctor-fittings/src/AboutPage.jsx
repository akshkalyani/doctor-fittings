import { Navbar, Footer } from "./HomePage";
import hero4 from "./assets/hero4.png";

// ── Timeline Data ─────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    year: "2001",
    title: "Company Founded",
    desc: "Started with a simple mission — premium fittings for industrial and commercial clients.",
  },
  {
    year: "2008",
    title: "International Expansion",
    desc: "Expanded our reach to international markets across Asia and the Middle East.",
  },
  {
    year: "2015",
    title: "New Manufacturing Facility",
    desc: "Opened a state-of-the-art facility with CNC precision manufacturing capabilities.",
  },
  {
    year: "2020",
    title: "ISO 9001 Certified",
    desc: "Achieved ISO 9001:2015 certification, reinforcing our commitment to quality.",
  },
  {
    year: "2024",
    title: "New Product Line",
    desc: "Launched an expanded range of UPVC window hardware and stainless steel fittings.",
  },
];

// ── Values Data ───────────────────────────────────────────────────────────────
const VALUES = [
  {
    title: "Quality First",
    desc: "We never compromise on the quality of our products and services.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "Continuously improving our manufacturing processes and product designs.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction and success are our top priorities, always.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "Dependable products and consistent delivery you can always count on.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
const CERTS = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "CE Certified", desc: "European Standards" },
  { name: "ISO 14001", desc: "Environmental Mgmt" },
  { name: "DIN Compliant", desc: "German Industrial" },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "1000+", label: "Clients Served" },
  { value: "99.8%", label: "Quality Rate" },
];

// ── CheckIcon ─────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── AboutPage ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
      <Navbar activeLink="About" />

      {/* ── HERO / ABOUT US ── */}
      <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-14 md:py-20 text-center overflow-hidden">
        <img
          src={hero4}
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        <div className="relative z-10">
          <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            About Docot Fitting
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Docot Fitting is a Rajkot, Gujarat-based supplier specializing in
            aluminium hardware, UPVC fittings, and wire mesh products. We are
            dedicated to providing reliable, high-quality hardware solutions
            that meet the evolving needs of fabricators, builders, and dealers.
            <br />
            <br />
            With a strong focus on durability and precision, our products are
            trusted for their performance and long service life.
          </p>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#f5a623] px-6 py-6">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e]">
                {value}
              </div>
              <div className="text-[#1e2a6e]/65 text-xs mt-0.5 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1 bg-[#f4f6fb]">
        {/* ── ABOUT CONTENT ── */}
        <section className="bg-white px-6 md:px-12 py-14 md:py-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7 text-[#1a1a2e] text-sm leading-relaxed">
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Our Story
                </h2>
                <p>
                  Founded with the vision to deliver dependable hardware
                  solutions, Docot Fitting has steadily grown into a trusted
                  name in the market. By consistently maintaining quality
                  standards and understanding customer requirements, we have
                  built long-term relationships with clients across the region.
                </p>
                <p>
                  Our journey is driven by commitment, consistency, and
                  continuous improvement.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  What We Offer
                </h2>
                <ul className="list-disc pl-5 text-[#5a6080]">
                  <li>Sliding window locks</li>
                  <li>Sliding rollers (UPVC & aluminium)</li>
                  <li>Window sliding systems (premium & economy)</li>
                  <li>G channel / D channel</li>
                  <li>Window handles</li>
                  <li>Door closers</li>
                  <li>Butt hinges</li>
                  <li>Corner cleat joints</li>
                  <li>Stainless steel wire mesh</li>
                </ul>
                <p className="mt-2">
                  Each product is carefully selected to ensure strength,
                  functionality, and reliability.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Quality Commitment
                </h2>
                <p>
                  Quality is at the core of everything we do. Our products are
                  sourced from trusted vendors who use advanced machinery and
                  modern manufacturing processes.
                  <br />
                  Before reaching you, every product undergoes proper inspection
                  to ensure it meets industry standards and performs as
                  expected.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Infrastructure & Storage
                </h2>
                <p>
                  We maintain a well-organized storage system that helps us
                  manage inventory efficiently and fulfill orders on time. Our
                  streamlined operations ensure quick availability and reliable
                  supply for our customers.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Why Choose Us
                </h2>
                <ul className="list-none space-y-1 text-[#5a6080]">
                  <li>✔ Trusted supplier in Rajkot</li>
                  <li>✔ High-quality and durable products</li>
                  <li>✔ Competitive pricing</li>
                  <li>✔ Ready stock availability</li>
                  <li>✔ Customer-focused approach</li>
                </ul>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Our Vision
                </h2>
                <p>
                  To become a reliable and recognized name in the hardware
                  industry by consistently delivering quality products and
                  building lasting customer relationships.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Our Mission
                </h2>
                <p>
                  To provide dependable, affordable, and high-performance
                  hardware solutions that meet modern construction and
                  fabrication needs.
                </p>
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-2xl md:text-3xl text-[#1e2a6e] mb-2 leading-tight">
                  Let’s Work Together
                </h2>
                <p>
                  We believe in building strong business relationships based on
                  trust and quality. Whether you are a dealer, contractor, or
                  fabricator, Docot Fitting is ready to support your
                  requirements.
                  <br />
                  We look forward to working with you.
                </p>
              </div>
            </div>
            {/* Optionally, keep the factory illustration for visual appeal */}
            <div className="bg-[#f4f6fb] rounded-2xl border border-[#e2e6f0] flex items-center justify-center aspect-[4/3]">
              <svg
                viewBox="0 0 220 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-auto"
              >
                <rect
                  x="30"
                  y="18"
                  width="14"
                  height="46"
                  rx="2"
                  fill="#d4daf0"
                />
                <rect
                  x="52"
                  y="28"
                  width="12"
                  height="36"
                  rx="2"
                  fill="#d4daf0"
                />
                <circle cx="37" cy="14" r="6" fill="#c8cde0" opacity="0.5" />
                <circle cx="58" cy="22" r="5" fill="#c8cde0" opacity="0.4" />
                <rect
                  x="14"
                  y="64"
                  width="192"
                  height="80"
                  rx="4"
                  fill="#2a3680"
                />
                <polygon points="14,64 110,32 206,64" fill="#1e2a6e" />
                <rect
                  x="28"
                  y="80"
                  width="28"
                  height="22"
                  rx="2"
                  fill="#f5a623"
                  opacity="0.7"
                />
                <rect
                  x="66"
                  y="80"
                  width="28"
                  height="22"
                  rx="2"
                  fill="#f5a623"
                  opacity="0.7"
                />
                <rect
                  x="104"
                  y="80"
                  width="28"
                  height="22"
                  rx="2"
                  fill="#f5a623"
                  opacity="0.5"
                />
                <rect
                  x="142"
                  y="80"
                  width="28"
                  height="22"
                  rx="2"
                  fill="#f5a623"
                  opacity="0.5"
                />
                <rect
                  x="180"
                  y="80"
                  width="22"
                  height="22"
                  rx="2"
                  fill="#f5a623"
                  opacity="0.4"
                />
                <rect
                  x="93"
                  y="112"
                  width="34"
                  height="32"
                  rx="2"
                  fill="#f4f6fb"
                />
                <rect
                  x="0"
                  y="144"
                  width="220"
                  height="6"
                  rx="3"
                  fill="#d4daf0"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="bg-[#f4f6fb] px-6 md:px-12 py-14 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
                What Drives Us
              </p>
              <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e]">
                Our Core Values
              </h2>
            </div>
            {/* 2 columns on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {VALUES.map(({ title, desc, icon }) => (
                <div
                  key={title}
                  className="bg-white border border-[#e2e6f0] rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-[#f5a623] rounded-full flex items-center justify-center text-[#1e2a6e] mx-auto mb-4">
                    {icon}
                  </div>
                  <h3 className="font-bold text-sm text-[#1e2a6e] mb-2">
                    {title}
                  </h3>
                  <p className="text-[#5a6080] text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="bg-white px-6 md:px-12 py-14 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
                Since 2001
              </p>
              <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-[#1e2a6e]">
                Our Journey
              </h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[46px] top-0 bottom-0 w-px bg-[#e2e6f0] hidden sm:block" />
              <div className="flex flex-col gap-5">
                {TIMELINE.map(({ year, title, desc }, i) => (
                  <div key={year} className="flex gap-4 items-start">
                    {/* Year badge */}
                    <div className="flex-shrink-0 w-[86px] sm:w-[92px] flex flex-col items-center gap-2">
                      <div className="w-full bg-[#1e2a6e] text-white font-['Barlow_Condensed',sans-serif] font-black text-sm rounded-lg flex items-center justify-center py-2.5 relative z-10">
                        {year}
                      </div>
                      {/* dot on the line */}
                      {i < TIMELINE.length - 1 && (
                        <div className="hidden sm:block w-2 h-2 rounded-full bg-[#f5a623] relative z-10" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-[#f4f6fb] border border-[#e2e6f0] rounded-xl px-4 py-3.5 min-h-[64px]">
                      <h3 className="font-bold text-sm text-[#1e2a6e] mb-1">
                        {title}
                      </h3>
                      <p className="text-[#5a6080] text-xs leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="bg-[#1e2a6e] px-6 md:px-12 py-14 md:py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
              Standards
            </p>
            <h2 className="font-['Barlow_Condensed',sans-serif] font-black text-3xl md:text-4xl text-white mb-10">
              Our Certifications
            </h2>
            {/* 2 cols mobile, 4 desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CERTS.map(({ name, desc }) => (
                <div
                  key={name}
                  className="bg-white/[0.07] border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 bg-[#f5a623] rounded-full flex items-center justify-center text-[#1e2a6e] mx-auto mb-4">
                    <CheckIcon />
                  </div>
                  <div className="text-white font-bold text-sm mb-1">
                    {name}
                  </div>
                  <div className="text-white/45 text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
