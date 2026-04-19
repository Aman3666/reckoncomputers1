const BANK_OFFERS = [
  { bank: "HDFC Bank", src: "/bank-offers/hdfc.png", alt: "HDFC Bank offer" },
  { bank: "RBL Bank", src: "/bank-offers/rbl.png", alt: "RBL Bank offer" },
  { bank: "DBS Bank", src: "/bank-offers/dbs.png", alt: "DBS Bank offer" },
  { bank: "BOBCARD", src: "/bank-offers/bobcard.png", alt: "BOBCARD offer" },
  { bank: "Yes Bank", src: "/bank-offers/yesbank.png", alt: "Yes Bank offer" },
];

function OfferCard({ offer }) {
  return (
    <div
      className="shrink-0 w-[360px] md:w-[420px] bg-white border border-[#E2E8F0] overflow-hidden hover:border-[#0055FF] transition-colors shadow-sm"
      data-testid={`offer-${offer.bank.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <img
        src={offer.src}
        alt={offer.alt}
        loading="lazy"
        className="w-full h-auto block select-none"
        draggable={false}
      />
    </div>
  );
}

export default function BankOffersMarquee() {
  const loop = [...BANK_OFFERS, ...BANK_OFFERS, ...BANK_OFFERS];
  return (
    <div className="relative bg-white" data-testid="bank-offers-marquee">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6 pb-3 flex items-end justify-between gap-3 flex-wrap">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#0055FF]">
            Bank Offers
          </div>
          <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-[#0F172A]">
            Pay with EMI · Save instantly
          </h3>
        </div>
        <a
          href="https://wa.me/919823177666?text=Hi%20Reckon%2C%20I%27d%20like%20to%20know%20more%20about%20the%20bank%20EMI%20offers."
          target="_blank"
          rel="noopener noreferrer"
          data-testid="offers-enquire-btn"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0055FF] hover:underline"
        >
          Enquire about offers →
        </a>
      </div>
      <div className="overflow-hidden pb-6 [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
        <div className="flex gap-4 rc-marquee-track items-stretch">
          {loop.map((o, i) => (
            <OfferCard key={`${o.bank}-${i}`} offer={o} />
          ))}
        </div>
      </div>
    </div>
  );
}
