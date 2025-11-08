// ============================================
// ManagedServices.tsx - Premium Managed Services Page
// ============================================

import { useEffect } from 'react';
import Header from '@/components/Header';

const ManagedServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      title: 'Continuous Tracking',
      desc: 'Real-time monitoring of licenses and entitlements across your entire software estate',
    },
    {
      title: 'Automated Compliance',
      desc: 'Stay compliant 24/7 with intelligent monitoring and instant alerts',
    },
    {
      title: 'Proactive Management',
      desc: 'Never miss a renewal with automated vendor management and optimization',
    },
    {
      title: 'Expert Support',
      desc: 'Dedicated specialists to align your software strategy with business goals',
    },
  ];

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
        <div className="absolute top-32 sm:top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-32 sm:bottom-40 right-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-orange-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Hero Section */}
        <section className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mb-6 sm:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-amber-300/90 tracking-wider uppercase">
                Ongoing Compliance & Management
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400">
                Software Managed Services
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-light max-w-4xl">
              Is managing software compliance taking too much time?
            </p>

            {/* Description */}
            <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-10">
              Let us handle it for you. Our managed services give you ongoing control and visibility across your entire software estate.
            </p>

            {/* CTA Button */}
            <div className="mb-12 sm:mb-16">
              <a
                href="/#contact"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white transition-all duration-300 hover:from-orange-500 hover:to-amber-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 text-sm sm:text-base"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-orange-600/0 group-hover:from-amber-500/5 group-hover:to-orange-600/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Number indicator */}
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

        {/* Bottom CTA Section */}
        <section className="relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-md py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                You Focus on Your Business
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              We'll manage the rest. Get complete peace of mind with our comprehensive managed services.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 text-sm sm:text-base"
            >
              Start Your Journey
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

export default ManagedServicesPage;