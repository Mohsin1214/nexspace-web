export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-white"
          style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}
        >
          N
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#845400] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
