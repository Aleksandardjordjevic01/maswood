"use client";

export default function AboutSection3() {
  return (
    <section
      id="o-nama"
      className="py-8 px-4 bg-[#f8f8f8]"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1216px" }}>
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-[#cc9a6e] animate-spin">✱</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">
                O nama
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <figure className="relative">
            <svg className="w-full" width="100%" height="100%" viewBox="0 0 100 40">
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="/images/o-nama.png"
              />
            </svg>
          </figure>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 pt-6 text-sm">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-[#cc9a6e] font-bold">15+</span>
                <span className="text-gray-600">godina iskustva</span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-[#cc9a6e] font-bold">500+</span>
                <span className="text-gray-600">realizovanih projekata</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-1 gap-8">
          <div className="md:col-span-1">
            <h1 className="text-xl sm:text-3xl md:text-4xl leading-[110%] font-semibold text-gray-900 mb-8">
              Nameštaj koji priča vašu priču.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 text-gray-600">
              <div className="text-sm md:text-base text-justify">
                <p className="leading-relaxed">
                  MasWood je porodična firma specijalizovana za izradu nameštaja po meri, sa fokusom na kvalitet, funkcionalnost i bezvremenski dizajn. Svaki projekat prilagođavamo prostoru i potrebama klijenta, stvarajući rešenja koja savršeno spajaju estetiku i praktičnost.
                </p>
              </div>
              <div className="text-sm md:text-base text-justify">
                <p className="leading-relaxed">
                  Od prve ideje do završne montaže, vodimo računa o svakom detalju. Koristimo pažljivo odabrane materijale, savremene tehnologije i preciznu obradu kako bismo kreirali nameštaj koji traje, oplemenjuje prostor i pruža svakodnevnu udobnost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
