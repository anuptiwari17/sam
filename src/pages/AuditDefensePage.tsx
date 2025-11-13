import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';


type Phase = {
  number: string;
  title: string;
  content: string;
  details: string[];
  outcome: string;
};

const initialSteps = [
  {
    title: 'Pause Communication',
    description:
      'Halt all communication with the auditor until you have a solid strategy in place.',
    icon: '01',
  },
  {
    title: 'Collect Records',
    description:
      'Gather proof of purchase, contracts, license entitlements, and deployment data.',
    icon: '02',
  },
  {
    title: 'Engage Experts',
    description:
      'Work with a SAM audit defense expert to analyze your position and guide your next move.',
    icon: '03',
  },
];

const phases: Phase[] = [
  {
    number: 'Phase 1',
    title: 'Internal Compliance Assessment',
    content:
      'We begin with a detailed internal audit to understand your current compliance posture before sharing any data with the vendor.',
    details: [
      'Reviewing all deployed software and associated entitlements',
      'Verifying license ownership and usage accuracy',
      'Identifying compliance gaps, over-licensing, and potential cost risks',
      'Assessing internal discovery tools and inventory reports',
    ],
    outcome:
      "You'll receive a clear, confidential compliance snapshot—so you know your position before the vendor does.",
  },
  {
    number: 'Phase 2',
    title: 'Remediation & Optimization Planning',
    content:
      'Next, we create a risk mitigation and optimization plan to correct shortfalls and strengthen your compliance foundation.',
    details: [
      'Develop action plans for true-up or reallocation of licenses',
      'Identify redundant or unused software to eliminate waste',
      'Align your records and entitlement data with vendor expectations',
      'Prepare internal documentation to support future audit responses',
    ],
    outcome:
      "This phase ensures you're in full control of your compliance narrative and financial exposure.",
  },
  {
    number: 'Phase 3',
    title: 'Data Validation & Audit Response Preparation',
    content:
      'This newly added phase focuses on validating your compliance data and building your audit response strategy before any engagement with the vendor.',
    details: [
      'Verify that all technical data, entitlement summaries, and user reports are 100% accurate',
      'Prepare response templates and documentation sets tailored to vendor requirements',
      'Coach internal teams on communication protocols and escalation handling',
      'Create a defensible audit package ready for submission',
    ],
    outcome:
      'The objective is to present accurate, controlled, and strategic data—nothing more, nothing less.',
  },
  {
    number: 'Phase 4',
    title: 'Representation & Negotiation Advisory',
    content:
      'Once your position is solid, our team leads all communications and negotiations with the vendor or auditor.',
    details: [
      'Handle all interactions and correspondence on your behalf',
      'Review and challenge the auditor’s findings and calculations',
      'Defend against inflated claims or incorrect interpretations',
      'Negotiate final settlements based on verified compliance data',
    ],
    outcome:
      'You maintain control, transparency, and confidence while we safeguard your organization’s financial and legal interests.',
  },
];


type PhaseCardProps = {
  phase: Phase;
  index: number;
};

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 hidden md:block z-20">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-orange-500/50 border-4 border-black">
            <span className="text-2xl font-bold text-white drop-shadow">
              {index + 1}
            </span>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/40 to-amber-500/40 blur-xl scale-150 animate-pulse" />
        </motion.div>
      </div>

      <div
        className={`grid md:grid-cols-2 gap-12 items-start ${
          isLeft ? '' : 'md:flex-row-reverse'
        }`}
      >
        {/* Title + Tagline */}
        <div
          className={`${
            isLeft ? 'md:text-right md:pr-20' : 'md:pl-20 md:order-2'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-900/90 to-black/80 backdrop-blur-lg border border-amber-500/40 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/60 mb-5">
              <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-amber-300 tracking-widest">
                {phase.number}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {phase.title}
            </h3>

            <p className="text-gray-100 leading-relaxed text-base font-medium">
              {phase.content}
            </p>
          </motion.div>
        </div>

        {/* Details + Outcome */}
        <div
          className={`${
            isLeft ? 'md:pl-20' : 'md:pr-20 md:order-1'
          } space-y-4`}
        >
          {phase.details.map((detail, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35 + j * 0.09 }}
              className="flex items-start gap-3 p-4 bg-zinc-900/70 rounded-xl border border-amber-500/30 hover:bg-zinc-900/90 hover:border-amber-400/60 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-100 leading-relaxed font-medium">
                {detail}
              </span>
            </motion.div>
          ))}

          {/* Outcome badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-6 p-5 rounded-xl bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/50 backdrop-blur-sm shadow-xl"
          >
            <p className="flex items-start gap-2 text-amber-300 font-semibold text-sm">
              <svg
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-100 leading-relaxed">
                {phase.outcome}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


const AuditDefensePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
              radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
              radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
              radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
              #000000
            `,
          }}
        />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-orange-300 tracking-widest">
              AUDIT DEFENSE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-white drop-shadow-lg">
              Received an Audit
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400 drop-shadow-lg">
              Notification?
            </span>
            <span className="block text-white mt-3 drop-shadow-lg">
              Here's What You Do
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl text-gray-200 max-w-4xl mx-auto"
          >
            If you've just received a software audit,{' '}
            <strong className="text-amber-300">don't panic</strong> — but{' '}
            <strong className="text-amber-300">don't respond right away</strong>{' '}
            either.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
              Here's what to do first
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initialSteps.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-xl bg-zinc-900/60 border border-amber-500/20 backdrop-blur-md hover:bg-zinc-900/80 hover:border-amber-500/50 transition-all duration-500 cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-600/30 border border-orange-500/50 flex items-center justify-center mb-6"
                  >
                    <span className="text-2xl font-bold text-orange-300">
                      {card.icon}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4-PHASE FORTRESS ==================== */}
      <section className="py-24 px-6 border-t border-white/5 bg-stone-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
              Our 4-Phase Defense Fortress
            </span>
          </motion.h2>

          {/* Fortress Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central beam */}
            <div className="absolute inset-x-0 top-12 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm" />
            <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="group flex flex-col items-center"
                >
                  {/* Pillar */}
                  <div className="relative w-28 h-72 bg-gradient-to-b from-amber-900/50 via-zinc-900/95 to-black rounded-t-lg shadow-2xl border-2 border-amber-600/40 group-hover:border-amber-400/70 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 shadow-lg" />
                    <div className="absolute top-4 inset-x-0 h-1 bg-gradient-to-r from-amber-300/60 via-orange-400/60 to-amber-300/60" />

                    {/* Ridges */}
                    <div className="absolute inset-x-5 top-12 bottom-12 flex flex-col justify-between">
                      {[...Array(14)].map((_, j) => (
                        <div
                          key={j}
                          className="h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent"
                        />
                      ))}
                    </div>

                    {/* Central glow */}
                    <div className="absolute inset-y-12 left-1/2 w-1 bg-gradient-to-b from-amber-400/30 via-orange-400/20 to-amber-400/30 blur-sm" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-400/15 via-orange-500/10 to-amber-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Side accents */}
                    <div className="absolute inset-y-12 left-3 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent" />
                    <div className="absolute inset-y-12 right-3 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent" />
                  </div>

                  {/* Base */}
                  <div className="relative w-32 h-6 -mt-1 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black rounded-b-lg shadow-xl border-x-2 border-b-2 border-amber-600/40">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/12 to-transparent rounded-b-lg" />
                  </div>

                  {/* Label */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-8 text-center"
                  >
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/30 to-amber-600/30 border border-orange-500/60 backdrop-blur-sm mb-2 shadow-lg">
                      <span className="text-xs font-bold text-amber-300 tracking-widest">
                        {phase.number}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-100 leading-tight group-hover:text-amber-300 transition-colors px-2">
                      {phase.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center text-gray-400 text-sm italic"
            >
              One unbreakable fortress – four synergistic phases.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ==================== PHASE TIMELINE ==================== */}
      <section
        ref={containerRef}
        className="relative py-32 px-6 bg-black"
      >
        {/* Subtle parallax glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 via-transparent to-amber-900/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Central spine */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent blur-sm" />
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-transparent" />

          <div className="space-y-32">
            {phases.map((phase, i) => (
              <PhaseCard key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative py-24 px-6 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-500/5 mb-6">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span className="text-xs font-semibold text-amber-300 tracking-wider">
                EXPERT DEFENSE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="block text-white">Ready to protect</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
                your organization?
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Let our experts handle the complexity while you focus on your
              business
            </p>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
            >
              <span>Get Your Free Consultation</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
              {['Proven strategies', 'Rapid response', 'Cost optimization'].map(
                (txt) => (
                  <div key={txt} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{txt}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AuditDefensePage;