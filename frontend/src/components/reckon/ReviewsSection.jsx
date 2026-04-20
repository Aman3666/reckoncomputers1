import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Mr. Deshmukh",
    role: "IT Head · Aurangabad District Central Co-op Bank",
    rating: 5,
    text: "Reckon has been our IT partner for over a decade. HP laptops, servers, AMC — everything delivered on time with genuine warranty and quick on-site support.",
    initials: "DM",
  },
  {
    name: "Prof. S. Kulkarni",
    role: "Principal · Deogiri College",
    rating: 5,
    text: "Set up our entire computer lab with Reckon. Fair pricing, OEM products, and their service team responds the same day whenever we raise a ticket.",
    initials: "SK",
  },
  {
    name: "Rohit Patil",
    role: "Director · Patil Enterprises",
    rating: 5,
    text: "Needed 40 Lenovo ThinkPads for a new office — they delivered in 48 hours with cash-memo, GST invoice and 3-year warranty. Very professional team.",
    initials: "RP",
  },
  {
    name: "Inspector V. Jadhav",
    role: "Police Department · AMC Client",
    rating: 5,
    text: "Reliable AMC partner. CCTV, desktops, printers — whatever goes down, they fix it within hours. Trusted by our department for years.",
    initials: "VJ",
  },
  {
    name: "Anita Shah",
    role: "Individual Customer",
    rating: 5,
    text: "Bought an HP Pavilion from Reckon. Pricing was better than online, I got genuine stock, and they even delivered home. Will buy again.",
    initials: "AS",
  },
  {
    name: "Manish Agrawal",
    role: "Owner · Agrawal Traders",
    rating: 5,
    text: "Installed 16 Hikvision CCTVs across 3 locations. Clean cabling, professional installation and remote-view setup in one day. Highly recommended.",
    initials: "MA",
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < count ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#E2E8F0]"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const avg = 4.6;
  const total = "500+";
  return (
    <section
      id="reviews"
      className="rc-section bg-[#F8FAFC] text-[#0F172A]"
      data-testid="section-reviews"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#0055FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
                06 / Reviews
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02] tracking-tight max-w-3xl">
              Trusted by thousands across
              <br />
              <span className="text-[#475569]">the Marathwada region.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 md:border-l md:border-[#E2E8F0] md:pl-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-5xl font-bold leading-none">
                  {avg}
                </span>
                <Stars count={5} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                Avg. rating · {total} reviews
              </div>
            </div>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0]"
          data-testid="reviews-grid"
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group bg-white p-6 md:p-7 flex flex-col justify-between min-h-[240px] hover:bg-[#F8FAFC] transition-colors"
              data-testid={`review-card-${i + 1}`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <Quote className="w-6 h-6 text-[#0055FF]/30" strokeWidth={2} />
                  <Stars count={r.rating} />
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-[#0F172A]">
                  {r.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0A0F1C] text-white font-display font-bold text-sm flex items-center justify-center">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-[14px] text-[#0F172A]">
                    {r.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#475569] truncate">
                    {r.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#475569]">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em]">
            Verified customers · Names shortened for privacy
          </div>
          <a
            href="https://www.google.com/maps/dir//Reckon+Computers,+Plot+No+22-B,+Opp.+Devgiri+Bank,+Zambad+Estate+Square,+Kalda+Corner,+Shahnoormiya+Darga+Road,+Chhatrapati+Sambhajinagar,+Maharashtra+431005/@20.3822555,85.8290159,9z"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0055FF] hover:underline"
          >
            Read more on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
