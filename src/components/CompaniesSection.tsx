const CompaniesSection = () => {
  // Company logos (from /public/companies)
  const companyLogos = [
    '/companies/adobe.png',
    '/companies/anaconda.png',
    '/companies/broadcom.png',
    '/companies/cisco.png',
    '/companies/citrix.png',
    '/companies/crowdstrike.png',
    '/companies/ibm.png',
    '/companies/microsoft.png',
    '/companies/nutanix.png',
    '/companies/oracle.png',
    '/companies/redhat.png',
    '/companies/salesforce.png',
    '/companies/sap.png',
    '/companies/symantec2.png',
    '/companies/veritas.png',
  ];

  // Tool logos (from /public/tools)
  const toolLogos = [
    '/tools/certero.png',
    '/tools/flexera.png',
    '/tools/ilmt.png',
    '/tools/zylo.png',
    '/tools/spicework2.png',
    '/tools/servicenow.png',
  ];

  return (
    <section className="relative z-10 bg-black py-24 overflow-hidden">
      {/* Heading section */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Providing Services for Leading Company Suites
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
          Empowering enterprises by managing and optimizing software assets across top industry platforms and tools.
        </p>
      </div>

      {/* First Row - Company Logos (scroll right) */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img src={logo} alt="Company logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Tools Logos (scroll left) */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...toolLogos, ...toolLogos].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img src={logo} alt="Tool logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - Company Logos (scroll right slowly) */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right-slow">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div
              key={`row3-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img src={logo} alt="Company logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right-slow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right-slow {
          animation: scroll-right-slow 45s linear infinite;
          width: fit-content;
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CompaniesSection;
