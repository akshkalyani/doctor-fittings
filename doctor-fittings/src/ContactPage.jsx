import { useState } from "react";
import { Navbar, Footer } from "./HomePage";
import SEO from "./SEO";
import hero4 from "./assets/hero4.png";

// ── Contact Details ───────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919664535583";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi I want to purchase the window aluminium hardware, please share the quotation and variety of range you have",
);
const PHONE_NUMBER = "+919664535583";
const EMAIL = "doctorfittingshardware@gmail.com";
const FORMSPREE_URL = "https://formspree.io/f/xqewnvow";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconPhone = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconMail = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconMapPin = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconSend = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ── ContactPage ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const errors = {
    name: !form.name.trim() ? "Full name is required" : null,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? "Valid email is required"
      : null,
    message: !form.message.trim() ? "Message is required" : null,
  };
  const isValid = !errors.name && !errors.email && !errors.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-2.5 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-[#c0c8de]";
  const inputNormal =
    "border-[#e2e6f0] focus:border-[#1e2a6e] focus:ring-[#1e2a6e]/10";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-100";

  return (
    <div className="font-['Barlow',sans-serif] text-[#1a1a2e] min-h-screen flex flex-col">
      <SEO
        title="Contact Doctor Fittings | Get a Quote for Window Hardware in Rajkot"
        description="Contact Doctor Fittings for bulk quotes, technical support, or inquiries about our aluminium window hardware, door handles, and wire mesh. Located in Rajkot, Gujarat. Call +91 96645 35583."
        path="/contact"
        keywords="contact doctor fittings, window hardware quote rajkot, bulk hardware order gujarat, hardware supplier phone number rajkot"
      />
      <Navbar activeLink="Contact" />

      {/* ── HERO ── */}
      <div className="relative bg-[#1e2a6e] px-6 md:px-12 py-14 md:py-20 text-center overflow-hidden">
        <img
          src={hero4}
          alt="Contact Doctor Fittings Rajkot Gujarat Window Hardware Supplier"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        <div className="relative z-10">
          <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-['Barlow_Condensed',sans-serif] font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto">
            Inquiries, bulk quotes, or technical support — we're here to help.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-[#f4f6fb] px-4 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* ── LEFT: FORM ── */}
          <div className="bg-white border border-[#e2e6f0] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="font-['Barlow_Condensed',sans-serif] font-bold text-2xl text-[#1e2a6e] mb-1">
              Send Us a Message
            </h2>
            <p className="text-[#5a6080] text-xs mb-7">
              Fill in the form and we'll get back to you within 24 hours.
            </p>

            {/* Success State */}
            {status === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-800 text-sm">
                    Message sent!
                  </p>
                  <p className="text-green-700 text-xs mt-0.5">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error State */}
            {status === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5">
                    Full Name <span className="text-[#f5a623]">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputBase} ${touched.name && errors.name ? inputError : inputNormal}`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-[0.7rem] mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5">
                    Email Address <span className="text-[#f5a623]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputBase} ${touched.email && errors.email ? inputError : inputNormal}`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-[0.7rem] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 96645 35583"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${inputBase} ${inputNormal}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5">
                    Company Name
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={handleChange}
                    className={`${inputBase} ${inputNormal}`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5">
                  Message <span className="text-[#f5a623]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirements, quantities, or any questions..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputBase} ${touched.message && errors.message ? inputError : inputNormal} resize-none`}
                />
                {touched.message && errors.message && (
                  <p className="text-red-500 text-[0.7rem] mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-lg transition-all
                  ${
                    status === "sending"
                      ? "bg-[#f5a623]/60 text-[#1e2a6e]/60 cursor-not-allowed"
                      : "bg-[#f5a623] text-[#1e2a6e] hover:bg-[#ffc94d] hover:-translate-y-0.5 active:translate-y-0"
                  }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── RIGHT: CONTACT CARDS ── */}
          <div className="flex flex-col gap-4">
            {/* WhatsApp — most prominent */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25d366] hover:bg-[#20bd5a] text-white rounded-xl p-5 no-underline shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconWhatsApp />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">Chat on WhatsApp</p>
                <p className="text-white/75 text-xs mt-0.5 truncate">
                  Tap to open WhatsApp & send message
                </p>
              </div>
              <svg
                className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-4 bg-white hover:bg-[#f4f6fb] border border-[#e2e6f0] text-[#1a1a2e] rounded-xl p-5 no-underline shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <div className="w-11 h-11 bg-[#f5a623] rounded-lg flex items-center justify-center text-[#1e2a6e] flex-shrink-0">
                <IconPhone />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#5a6080] uppercase tracking-wider mb-0.5">
                  Call Us
                </p>
                <p className="font-semibold text-sm text-[#1a1a2e]">
                  {PHONE_NUMBER}
                </p>
                <p className="text-[#5a6080] text-xs mt-0.5">
                  Tap to call directly
                </p>
              </div>
              <svg
                className="w-4 h-4 text-[#5a6080] group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}?subject=Product Enquiry – Doctor Fittings`}
              className="flex items-center gap-4 bg-white hover:bg-[#f4f6fb] border border-[#e2e6f0] text-[#1a1a2e] rounded-xl p-5 no-underline shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <div className="w-11 h-11 bg-[#f5a623] rounded-lg flex items-center justify-center text-[#1e2a6e] flex-shrink-0">
                <IconMail />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#5a6080] uppercase tracking-wider mb-0.5">
                  Email Us
                </p>
                <p className="font-semibold text-sm text-[#1a1a2e] truncate">
                  {EMAIL}
                </p>
                <p className="text-[#5a6080] text-xs mt-0.5">
                  Opens your mail app
                </p>
              </div>
              <svg
                className="w-4 h-4 text-[#5a6080] group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white border border-[#e2e6f0] rounded-xl p-5 shadow-sm">
              <div className="w-11 h-11 bg-[#f5a623] rounded-lg flex items-center justify-center text-[#1e2a6e] flex-shrink-0 mt-0.5">
                <IconMapPin />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5a6080] uppercase tracking-wider mb-1">
                  Office Address
                </p>
                <p className="font-semibold text-sm text-[#1a1a2e] leading-snug">
                  Doctor Fittings, Alakhdhani
                </p>
                <p className="text-[#5a6080] text-xs mt-0.5">
                  Rolex Main Road, Unnati Industry
                </p>
                <p className="text-[#5a6080] text-xs">
                  Rajkot 360002, Gujarat, India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 bg-white border border-[#e2e6f0] rounded-xl p-5 shadow-sm">
              <div className="w-11 h-11 bg-[#f5a623] rounded-lg flex items-center justify-center text-[#1e2a6e] flex-shrink-0 mt-0.5">
                <IconClock />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5a6080] uppercase tracking-wider mb-1">
                  Business Hours
                </p>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-[#1a1a2e]">
                    Mon – Fri: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-[#5a6080]">
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                  <p className="text-xs text-[#5a6080]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
