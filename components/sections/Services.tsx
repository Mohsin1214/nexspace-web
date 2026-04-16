import Link from "next/link";

const IT_SERVICES = [
  {
    icon: "terminal",
    title: "IT Support & Managed Services",
    desc:  "24/7 technical oversight for your business operations.",
  },
  {
    icon: "code",
    title: "Software Development",
    desc:  "Custom-built enterprise tools and web/mobile applications.",
  },
  {
    icon: "hub",
    title: "Network Infrastructure",
    desc:  "Robust cabling, servers, and wireless solutions.",
  },
  {
    icon: "laptop_mac",
    title: "Hardware & Computer Supply",
    desc:  "Procurement of premium devices and peripherals.",
  },
];

const FURNITURE_SERVICES = [
  {
    icon: "chair",
    title: "Office Furniture",
    desc:  "Ergonomic desks and modular workstation systems.",
  },
  {
    icon: "home",
    title: "Home Interiors",
    desc:  "Sophisticated residential furniture for modern living.",
  },
  {
    icon: "school",
    title: "Educational Institutions",
    desc:  "Durable, collaborative learning environment pieces.",
  },
  {
    icon: "hotel",
    title: "Restaurant & Hotel",
    desc:  "Luxury hospitality fit-outs and statement furniture.",
  },
];

const CORE_COMPETENCIES = [
  { icon: "support_agent", title: "IT Support",       desc: "Enterprise-grade maintenance and proactive monitoring for your digital assets."     },
  { icon: "hub",           title: "Telecom",           desc: "Advanced unified communications and VoIP systems for seamless collaboration."       },
  { icon: "laptop_mac",   title: "Computer Supply",   desc: "Global procurement network for high-performance computing hardware."                },
  { icon: "lan",           title: "Network Design",    desc: "End-to-end structured cabling and wireless infrastructure built for scale.",        },
  { icon: "code_blocks",  title: "Custom Software",   desc: "Web and mobile applications tailored to your exact operational requirements.",       },
  { icon: "chair_alt",    title: "Workspace Fit-Out", desc: "Integrated furniture and IT solutions delivered in a single, seamless engagement.", colSpan: true },
];

interface ServicesProps { full?: boolean; }

export default function Services({ full = false }: ServicesProps) {
  return (
    <>
      {/* ── Two-Column Split: IT + Furniture ─────────────────────────── */}
      <section className="section-padding">
        <div className="container-ns">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IT Services card */}
            <div className="bg-[#ffffff] p-10 lg:p-12 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.06)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#ffddb6] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#845400]">terminal</span>
                </div>
                <h3 className="headline-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Digital Infrastructure
                </h3>
              </div>
              <ul className="space-y-6">
                {IT_SERVICES.map((s) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#845400] mt-0.5 shrink-0">check_circle</span>
                    <div>
                      <p className="font-bold text-sm text-[#1a1c1c]">{s.title}</p>
                      <p className="text-sm text-[#5f5e5e] mt-0.5">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/it-services" className="btn-primary mt-8 text-xs px-5 py-2.5">
                View IT Services
              </Link>
            </div>

            {/* Furniture card — dark */}
            <div className="bg-[#1a1c1c] p-10 lg:p-12 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.12)] text-[#f9f9f9]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#ffb347]">chair</span>
                </div>
                <h3 className="headline-sm text-[#f9f9f9]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Physical Spaces
                </h3>
              </div>
              <ul className="space-y-6">
                {FURNITURE_SERVICES.map((s) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#ffb347] mt-0.5 shrink-0">check_circle</span>
                    <div>
                      <p className="font-bold text-sm text-[#f9f9f9]">{s.title}</p>
                      <p className="text-sm text-[#f9f9f9]/50 mt-0.5">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/furniture" className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs border border-white/20 text-[#f9f9f9] hover:bg-white/10 transition-all duration-[600ms]">
                View Furniture Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Competencies Bento Grid ─────────────────────────────── */}
      <section className="section-padding bg-[#f9f9f9]">
        <div className="container-ns">
          <div className="mb-14">
            <h2 className="headline-sm text-[#1a1c1c] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Core Competencies
            </h2>
            <div className="h-1 w-16 bg-[#845400]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CORE_COMPETENCIES.map((item) => (
              <div
                key={item.title}
                className={`group bg-[#ffffff] p-8 rounded-xl border border-[#d6c3b0]/10 soft-drift hover:-translate-y-1.5 hover:shadow-[0px_20px_40px_rgba(26,28,28,0.10)] cursor-default ${
                  item.colSpan ? "md:col-span-2" : ""
                }`}
              >
                <span className="material-symbols-outlined text-4xl text-[#845400] mb-6 block">
                  {item.icon}
                </span>
                <h4 className="text-base font-bold mb-2.5" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {item.title}
                </h4>
                <p className="text-[#5f5e5e] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {!full && (
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/it-services" classNamE="btn-primary">
                All IT Services
              </Link>
              <Link href="/furniture" className="btn-ghost">
                Furniture Catalogue
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
