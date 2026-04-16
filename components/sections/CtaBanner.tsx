import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}>
      <div className="container-ns text-center">
        <p className="label-md text-white/70 mb-4">Ready to Transform Your Workspace?</p>
        <h2
          className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
        >
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          Whether it&apos;s enterprise IT infrastructure or premium furniture design,
          NexSpace delivers with precision.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#845400] rounded-lg font-bold text-sm hover:scale-[1.02] transition-all duration-[600ms] ease-[cubic-bezier(0.2,0,0,1)] shadow-[0px_8px_24px_rgba(26,28,28,0.15)]"
          >
            Start a Conversation
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 border border-white/30 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-all duration-[600ms]"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
