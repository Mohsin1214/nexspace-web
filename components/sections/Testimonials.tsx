const TESTIMONIALS = [
  {
    id: "1",
    name:    "Client Name",
    role:    "CEO",
    company: "Company GmbH, Berlin",
    content: "NexSpace completely transformed our office infrastructure. The team handled everything from network cabling to custom furniture — on time and on budget.",
    rating: 5,
  },
  {
    id: "2",
    name:    "Client Name",
    role:    "Managing Director",
    company: "Firm Ltd, Islamabad",
    content: "The software solution they built for our logistics operations has saved us hundreds of hours per month. Exceptional technical team.",
    rating: 5,
  },
  {
    id: "3",
    name:    "Client Name",
    role:    "Operations Director",
    company: "Enterprise, Lahore",
    content: "From the first meeting to final handover, NexSpace was professional, transparent, and genuinely committed to getting things right.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f3f3f3]">
      <div className="container-ns">
        <div className="text-center mb-14">
          <p className="label-pill justify-center">Client Stories</p>
          <h2 className="headline-lg text-[#1a1c1c]" style={{ fontFamily: "Manrope, sans-serif" }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#ffffff] p-8 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.05)]">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[#ffb347] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-[#1a1c1c] text-sm leading-[1.8] mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#d6c3b0]/20">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1a1c1c]">{t.name}</p>
                  <p className="text-[#5f5e5e] text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
