import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "IT Services",
  description: "Enterprise IT solutions from NexSpace — IT support, software development, network infrastructure, and hardware supply for businesses in Germany and Pakistan.",
};

const SPECIALIZATIONS = [
  {
    icon:  "support_agent",
    title: "IT Support & Managed Services",
    desc:  "24/7 proactive monitoring, helpdesk, and maintenance for all your digital assets. We become your dedicated IT department so you can focus on your business.",
    image: true,
    imgSide: "right",
  },
  {
    icon:  "code",
    title: "Software Development",
    desc:  "Custom web applications, mobile apps, and enterprise tools built with Next.js, React, Node.js, and PostgreSQL. From concept to deployment.",
    image: true,
    imgSide: "left",
  },
  {
    icon:  "lan",
    title: "Network Infrastructure",
    desc:  "End-to-end structured cabling, server room design, wireless deployment, and VPN solutions that provide the backbone for modern operations.",
    image: true,
    imgSide: "right",
  },
  {
    icon:  "laptop_mac",
    title: "Hardware & Computer Supply",
    desc:  "Procurement of premium workstations, servers, networking equipment and peripherals from leading global manufacturers.",
    image: false,
    imgSide: "left",
  },
];

const METRICS = [
  { value: "99.9%", label: "Uptime SLA"          },
  { value: "<2h",   label: "Avg. Response Time"  },
  { value: "150+",  label: "IT Projects Delivered"},
  { value: "47/7",  label: "Support Coverage"    },
];

export default function ITServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}>
        <div className="container-ns relative z-10">
          <p className="label-md text-white/60 mb-4">Our Specialisation</p>
          <h1
            className="text-4xl lg:text-6xl font-extrabold text-white mb-6 max-w-2xl tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Smart IT Solutions That Power Your Business
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            From managed IT support to custom software development — NexSpace
            provides the full technology stack your organisation needs to compete.
          </p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/10 hidden lg:block" />
      </section>

      {/* Specializations */}
      <section className="section-padding bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">Our Specialisations</p>
          <h2 className="headline-lg text-[#1a1c1c] mb-16" style={{ fontFamily: "Manrope, sans-serif" }}>
            What We Do Best
          </h2>
          <div className="space-y-20">
            {SPECIALIZATIONS.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-[#ffddb6] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#845400]">{s.icon}</span>
                  </div>
                  <h3 className="headline-sm text-[#1a1c1c] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-[#5f5e5e] leading-[1.8]">{s.desc}</p>
                  <Link href="/contact" className="btn-primary mt-8 text-sm px-5 py-2.5">
                    Discuss This Service
                  </Link>
                </div>
                <div className={`aspect-video rounded-xl bg-gradient-to-br from-[#2f3131] to-[#1a1c1c] flex items-center justify-center shadow-[0px_20px_40px_rgba(26,28,28,0.10)] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <span className="material-symbols-outlined text-6xl text-[#ffb347]/30">{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-[#1a1c1c]">
        <div className="container-ns">
          <p className="label-md text-[#ffb347]/60 mb-2">Our Metrics</p>
          <h2 className="headline-sm text-[#f9f9f9] mb-12" style={{ fontFamily: "Manrope, sans-serif" }}>
            Numbers That Speak for Themselves
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div key={m.label} className="border border-white/10 rounded-xl p-8 text-center">
                <p className="text-4xl font-extrabold text-[#ffb347] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {m.value}
                </p>
                <p className="text-[#f9f9f9]/50 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
