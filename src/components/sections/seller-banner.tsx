export function SellerBanner() {
  return (
    <section className="bg-charcoal px-4 md:px-12 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-1">
            Dla sprzedawców
          </p>
          <h2 className="text-xl font-normal text-white mb-2">
            Twoje produkty, Twoja platforma
          </h2>
          <p className="text-sm text-warm-gray max-w-lg leading-relaxed">
            Sprzedawcy na FashionHero zyskują dedykowany panel zarządzania
            oraz narzędzia do promowania produktów — dotrzyj do tysięcy kupujących.
          </p>
        </div>
        <a
          href="#seller"
          className="shrink-0 border border-white text-white text-sm font-medium uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-charcoal transition-colors"
        >
          Dołącz jako sprzedawca →
        </a>
      </div>
    </section>
  );
}
