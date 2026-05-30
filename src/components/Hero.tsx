export default function Hero() {
  return (
    <section className="flex-1 flex items-center max-w-7xl mx-auto w-full px-8 pt-10 pb-20 relative">
      {/* Left content */}
      <div className="flex flex-col w-full lg:w-1/2 z-10">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.2em] text-[#cc9a6e] mb-6 font-bold">
          Nameštaj po meri
        </p>

        {/* Heading */}
        <h1 className="font-bold text-5xl xl:text-7xl leading-[1.1] mb-5 max-w-lg">
          <span className="text-white">Vaš prostor.</span>
          <br />
          <span className="text-[#cc9a6e]">Naša ideja.</span>
        </h1>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-[#cc9a6e] mb-6" />

        {/* Subheading */}
        <p className="text-white/90 text-base leading-relaxed mb-10 max-w-sm">
          Kreiramo funkcionalan i estetski savršen nameštaj koji se uklapa u vaš stil i potrebe.
        </p>

        {/* Button */}
        <div className="flex items-center gap-4 mb-10">
          <a
            href="tel:0612459075"
            className="flex items-center gap-3 bg-[#cc9a6e]/20 border border-[#cc9a6e] text-[#cc9a6e] text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-[#cc9a6e] hover:text-white transition-all duration-200"
          >
            Kontaktirajte nas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href="https://www.instagram.com/maswood_beograd/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
