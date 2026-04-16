import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p
          className="text-8xl font-extrabold text-[#845400] mb-4"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          404
        </p>
        <h1
          className="text-3xl font-bold text-[#1a1c1c] mb-4"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-[#5f5e5e] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
