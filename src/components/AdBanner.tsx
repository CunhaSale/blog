export const AdBanner = () => {
  return (
    <div className="w-full my-6 lg:my-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#075985] via-[#0369a1] to-[#0e7490] p-4 sm:p-5 md:p-8 shadow-lg">

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ad-grid)" />
          </svg>
        </div>

        {/* Label */}
        <span className="absolute top-3 right-4 text-[10px] font-medium text-white/40 uppercase tracking-widest">
          Anúncio
        </span>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-4">

          {/* Left */}
          <div className="min-w-0 flex-1">
            <h2 className="text-white text-sm sm:text-base md:text-xl font-bold tracking-wide uppercase leading-tight m-0">
              Potencialize sua Presença Tech
            </h2>

            <p className="text-cyan-100 text-[12px] sm:text-sm md:text-base mt-1 md:mt-2 mb-0 font-light leading-snug md:leading-relaxed">
              Conecte-se com especialistas e tomadores de decisão.
            </p>
          </div>

          {/* Right */}
          <div className="shrink-0">
            <a
              href="/anuncie"
              className="inline-flex items-center justify-center whitespace-nowrap bg-[#facc15] hover:bg-[#eab308] text-[#0f172a] font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider px-3 sm:px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md no-underline"
            >
              Anuncie
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}