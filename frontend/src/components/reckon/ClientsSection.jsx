import { motion } from "framer-motion";
import {
  Landmark,
  Building2,
  Shield,
  Milk,
  GraduationCap,
  Briefcase,
  Factory,
  ShoppingBag,
} from "lucide-react";

const CLIENTS = [
  {
    icon: Landmark,
    name: "Aurangabad District Central Co-op Bank",
    tag: "Banking",
  },
  { icon: GraduationCap, name: "Deogiri College", tag: "Education" },
  { icon: GraduationCap, name: "Vivekanand College", tag: "Education" },
  { icon: Milk, name: "District Milk Union", tag: "Cooperative" },
  { icon: Shield, name: "Police Department (AMC)", tag: "Government" },
  { icon: Building2, name: "Enterprise Offices", tag: "Corporate" },
  { icon: Factory, name: "Manufacturing Units", tag: "Industrial" },
  { icon: ShoppingBag, name: "Retail Chains", tag: "Retail" },
];

const SECTORS = [
  { icon: Landmark, label: "Banking & Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: Shield, label: "Government" },
  { icon: Briefcase, label: "Corporate SMBs" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingBag, label: "Retail & FMCG" },
];

const SERVER_IMG =
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tJTIwZGF0YWNlbnRlcnxlbnwwfHx8fDE3NzY1MDM3NTl8MA&ixlib=rb-4.1.0&q=85";

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="rc-section bg-white text-[#0F172A]"
      data-testid="section-clients"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#0055FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
                05 / Major Clients
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight max-w-3xl">
              Trusted by institutions
              <br />
              <span className="text-[#475569]">across Marathwada.</span>
            </h2>
          </div>
          <p className="text-[#475569] max-w-sm text-sm md:text-base">
            From government and banking to education, manufacturing and retail
            — Reckon powers critical IT infrastructure for 500+ organisations
            in the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-10">
          {/* Sector strip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-4 relative"
          >
            <div className="relative overflow-hidden border border-[#E2E8F0] bg-[#0A0F1C] text-white">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url(${SERVER_IMG})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/92 via-[#0A0F1C]/80 to-transparent" />
              <div className="relative p-7 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#06B6D4]">
                  Sectors we serve
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {SECTORS.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 py-2.5 border-b border-white/10"
                    >
                      <s.icon className="w-4 h-4 text-[#06B6D4]" />
                      <span className="text-[13px] text-white/80 leading-tight">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-end gap-4">
                  <div className="font-display text-[56px] leading-none font-bold tracking-tight">
                    500<span className="text-[#06B6D4]">+</span>
                  </div>
                  <div className="pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 max-w-[14ch]">
                    active client organisations
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl md:text-2xl font-semibold">
                Selected clients
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                A partial list
              </span>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[#E2E8F0]"
              data-testid="clients-grid"
            >
              {CLIENTS.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group p-5 md:p-6 border-r border-b border-[#E2E8F0] flex items-start gap-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="w-11 h-11 flex-shrink-0 bg-[#0F172A] text-white flex items-center justify-center group-hover:bg-[#0055FF] transition-colors">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#475569]">
                      {c.tag}
                    </div>
                    <div className="mt-1 font-display font-semibold text-[15px] text-[#0F172A] leading-snug">
                      {c.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-[#F8FAFC] border-l-2 border-[#0055FF]">
              <p className="text-sm text-[#475569] leading-relaxed">
                From the{" "}
                <span className="text-[#0F172A] font-semibold">
                  District Central Co-op Bank
                </span>{" "}
                to the{" "}
                <span className="text-[#0F172A] font-semibold">
                  Police Department
                </span>
                , institutions across Marathwada rely on Reckon Computers for
                critical IT infrastructure, procurement and AMC.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
