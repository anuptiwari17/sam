// ============================================
// LicenseOptimization.tsx - Premium License Optimization Page
// ============================================

import { useEffect } from 'react';
import Header from '@/components/Header';

const LicenseOptimizationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const optimizations = [
    {
      title: 'Analyze Usage',
      desc: 'Deep dive into actual usage patterns versus entitlements to uncover waste',
    },
    {
      title: 'Reclaim Licenses',
      desc: 'Identify and reassign underutilized licenses across your organization',
    },
    {
      title: 'Reduce Costs',
      desc: 'Cut unnecessary expenses and compliance risks without impacting productivity',
    },
    {
      title: 'Unlock Savings',
      desc: 'Discover measurable cost savings through intelligent license management',
    },
  ];

  const metrics = [
    { value: '30-40%', label: 'Average Cost Reduction' },
    { value: '100%', label: 'Compliance Coverage' },
    { value: '48hrs', label: 'Initial Assessment' },
    { value: '$187K+', label: 'Avg. Savings Found' },
  ];

  const beforeAfter = {
    before: [
      'Paying for unused licenses',
      'Manual tracking with errors',
      'Hidden compliance risks',
      'Reactive renewal process'
    ],
    after: [
      '30-40% cost reduction',
      'Automated optimization',
      '100% compliance confidence',
      'Proactive license planning'
    ]
  };

  return (
    <>
      <Header />
      
      <main className="relative min-h-screen w-full bg-stone-900 text-white overflow-hidden">
        {/* Copper & Bronze Background - Full Page */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, 
                rgba(194, 65, 12, 0.18) 0%, 
                rgba(194, 65, 12, 0.1) 25%, 
                rgba(194, 65, 12, 0.04) 35%, 
                transparent 50%
              )
            `,
            backgroundSize: '100% 100%',
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-32 sm:top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-32 sm:bottom-40 right-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-amber-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Hero Section */}
        <section className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mb-6 sm:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-amber-300/90 tracking-wider uppercase">
                Cost Reduction & Optimization
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400">
                Software License Optimization
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-light max-w-4xl">
              Are you paying for software you don't fully use?
            </p>

            {/* Description */}
            <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-10">
              Most organizations do. We help you optimize licenses, usage, and renewals to unlock hidden savings.
            </p>

            {/* CTA Button */}
            <div className="mb-12 sm:mb-16">
              <a
                href="/#contact"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white transition-all duration-300 hover:from-amber-500 hover:to-yellow-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 text-sm sm:text-base"
              >
                <span className="relative z-10">Find Your Savings</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/5 group-hover:to-yellow-600/5 transition-all duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-400 mb-1 sm:mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Process Grid */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                  Optimization Process
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                A data-driven approach to reclaiming value from your software estate
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {optimizations.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/5 group-hover:to-yellow-600/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-bold text-amber-400">0{i + 1}</span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After Comparison */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-red-600/5 border border-red-500/20 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6">Before</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {beforeAfter.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                      <span className="text-red-400 text-lg sm:text-xl mt-0.5">X</span>
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border border-amber-500/30 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4 sm:mb-6">After</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {beforeAfter.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-200">
                      <span className="text-amber-400 text-lg sm:text-xl mt-0.5">Check</span>
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-md py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400">
                Spend Less. Achieve More.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Through smarter license management and data-driven optimization
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-xl hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 text-sm sm:text-base"
            >
              Start Optimizing Today
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default LicenseOptimizationPage;