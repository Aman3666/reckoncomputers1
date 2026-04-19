const BANK_OFFERS = [
  {
    bank: "HDFC Bank",
    logo: "/bank-offers/hdfc_logo.png",
    text: "Get 7.5% Instant Discount Upto Rs.7,500 on HDFC Bank Credit Card EMI",
    logoSize: "h-14",
  },
  {
    bank: "RBL Bank",
    logo: "/bank-offers/rbl_logo.png",
    text: "Get Instant Discount Upto ₹4,000 on RBL Bank credit card EMI",
    logoSize: "h-12",
  },
  {
    bank: "DBS Bank",
    logo: "/bank-offers/dbs_logo.png",
    text: "Get 10% Instant Discount upto Rs.3,000 on DBS Bank Credit Card EMI/Non EMI",
    logoSize: "h-12",
  },
  {
    bank: "BOBCARD",
    logo: "/bank-offers/bobcard_logo.png",
    text: "Get 10% Instant Discount upto Rs.3,000 on BOB Card EMI",
    logoSize: "h-14",
  },
  {
    bank: "Yes Bank",
    logo: "/bank-offers/yesbank_logo.png",
    text: "Get 5% Instant Discount Upto Rs 2,500 on YES Bank Credit Card EMI",
    logoSize: "h-10",
  },
];

function OfferCard({ offer }) {
  return (
    <div
      className="shrink-0 w-[380px] h-[150px] bg-white border border-[#E2E8F0] rounded-md p-5 flex items-center gap-5 hover:border-[#0055FF] transition-colors shadow-sm"
      data-testid={`offer-${offer.bank.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className="shrink-0 w-[130px] h-full flex items-center justify-center pr-4"
        style={{ borderRight: "1.5px dashed #CBD5E1" }}
      >
        <img
          src={offer.logo}
          alt={offer.bank}
          loading="lazy"
          draggable={false}
          className={`${offer.logoSize} max-w-full object-contain select-none`}
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
        <p className="text-[13.5px] leading-snug font-medium text-[#0F172A]">
          {offer.text}
        </p>
        <p className="text-[11px] font-semibold text-[#94A3B8]">
          *T&amp;C apply
        </p>
      </div>
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
