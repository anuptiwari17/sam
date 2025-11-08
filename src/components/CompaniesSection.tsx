const CompaniesSection = () => {
  // Array of logo paths - you can replace with actual company logos
  const logos = Array(12).fill('/logo.png');

  return (
    <section className="relative z-10 bg-black py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
          Partnering with innovative companies to transform their software asset management
        </p>
      </div>

      {/* First Row - Moving Right */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Company logo"
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Company logo"
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - Moving Right */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right-slow">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row3-${index}`}
              className="flex-shrink-0 mx-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800 group"
              style={{ width: '200px', height: '120px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Company logo"
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right-slow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
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