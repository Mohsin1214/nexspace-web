import Link from "next/link";

const STATS = [
  { value: "10+",  label: "Years of Experience"  },
  { value: "200+", label: "Projects Completed"   },
  { value: "2",    label: "Countries Served"      },
  { value: "98%",  label: "Client Satisfaction"  },
];

const MILESTONES = [
  { year: "2014", event: "Founded in Islamabad, Pakistan"                     },
  { year: "2018", event: "Expanded to enterprise IT managed services"          },
  { year: "2020", event: "Opened Germany office in Berlin"                    },
  { year: "2023", event: "Launched premium furniture & workspace division"     },
];

interface AboutProps { full?: boolean; }

export default function About({ full = false }: AboutProps) {
  return (
    <>
      {/* ── Vision & Mission ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#f9f9f9]">
        <div className="container-ns grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square max-w-lg rounded-xl overflow-hidden bg-gradient-to-br from-[#ffddb6] to-[#e8e8e8] shadow-[0px_32px_64px_rgba(26,28,28,0.10)] flex items-center justify-center">
              <div className="text-center p-10">
                <p className="text-[#847463] text-sm">Team / about image</p>
              </div>
            </div>
            {/* Stat badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-[0px_20px_40px_rgba(26,28,28,0.10)]">
              <p className="text-3xl font-extrabold text-[#845400]" style={{ fontFamily: "Manrope, sans-serif" }}>10+</p>
              <p className="text-xs text-[#5f5e5e] mt-0.5">Years of Expertise</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="label-pill">Who We Are</p>
            <h2 className="headline-lg text-[#1a1c1c] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
              Built on Trust. <br />Driven by Innovation.
            </h2>
            <p className="text-[#5f5e5e] leading-[1.8] mb-5">
              NexSpace was founded with a clear purpose: to bridge the gap between
              digital infrastructure and physical workspace. We believe a
              productive environment requires both a reliable IT backbone and
              thoughtfully designed physical spaces.
            </p>
            {full && (
              <p className="text-[#5f5e5e] leading-[1.8] mb-8">
                Operating from Berlin, Germany and Islamabad, Pakistan, we serve
                clients ranging from global corporations to ambitious startups —
                providing end-to-end solutions that scale as they grow.
              </p>
            )}
            <div className="grid grid-cols-2 gap-5 mt-8">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#f3f3f3] p-5 rounded-xl">
                  <p className="text-2xl font-extrabold text-[#845400]" style={{ fontFamily: "Manrope, sans-serif" }}>{s.value}</p>
                  <p className="text-xs text-[#5f5e5e] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Milestones (only on full About page) ─────────────────────── */}
      {full && (
        <section className="section-padding bg-[#f3f3f3]">
          <div className="container-ns">
            <p className="label-pill">Our Journey</p>
            <h2 className="headline-sm text-[#1a1c1c] mb-12" style={{ fontFamily: "Manrope, sans-serif" }}>
              The NexSpace Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MILESTONES.map((m) => (
                <div key={m.year} className="bg-[#ffffff] p-6 rounded-xl shadow-[0px_8px_24px_rgba(26,28,28,0.05)]">
                  <p className="text-3xl font-extrabold text-[#845400] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {m.year}
                  </p>
                  <p className="text-sm text-[#5f5e5e] leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA strip ────────────────────────────────────────────────── */}
      {!full && (
        <div className="flex flex-wrap gap-4 container-ns pb-20">
          <Link href="/about" className="btn-primary">Learn More About Us</Link>
        </div>
      )}
    </>
  );
}
