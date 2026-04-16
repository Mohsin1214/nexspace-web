import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f9f9f9]">
      <div className="container-ns grid grid-cols-1 lg:grid-cols-12 gap-12 pt-32 pb-20 w-full">
        {/* ── Left: Copy ── */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="label-md text-[#845400]">Innovation Redefined</span>
            <div className="h-px w-12 bg-[#845400]/30" />
          </div>

          <h1
            className="display-lg text-[#1a1c1c] mb-8 text-balance"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            We Build Modern{" "}
            <span className="italic text-[#845400]">Workspaces</span>
            {" "}—{" "}<br />
            Physically &amp; Digitally
          </h1>

          <p className="text-lg text-[#5f5e5e] leading-relaxed max-w-xl mb-10">
            NexSpace delivers integrated IT solutions and premium furniture
            systems that evolve with your business. Serving Germany&nbsp;🇩🇪 and
            Pakistan&nbsp;🇵🇰 with architectural precision.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/it-services" className="btn-primary">
              Explore IT Services
            </Link>
            <Link href="/furniture" className="btn-ghost">
              View Furniture Solutions
            </Link>
          </div>

          <p className="text-xs text-[#5f5e5e]/60 flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Proudly serving clients in Germany 🇩🇪 and Pakistan 🇵🇰
          </p>
        </div>

        {/* ── Right: Image ── */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_32px_64px_rgba(26,28,28,0.12)] relative z-10 bg-[#e8e8e8]">
            {/* Replace src with your actual hero image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ffddb6] to-[#e8e8e8]">
              <div className="text-center px-8">
                <p className="text-[#847463] text-sm font-medium">
                  Hero workspace image
                </p>
                <p className="text-[#847463] text-xs mt-1">
                  Replace with your photo
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/20 to-transparent" />
          </div>
          {/* Decorative glows */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#ffb95a]/15 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#58d5fe]/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
