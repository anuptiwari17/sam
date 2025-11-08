import { useNavigate } from "react-router-dom";

const HeroSection = () => {


  const navigate = useNavigate();

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-start justify-center overflow-hidden pt-28 md:pt-40"
      style={{ zIndex: 1 }}
    >
      <div className="min-h-screen w-full bg-black relative">

        {/* Ember Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(255, 69, 0, 0.6) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(255, 140, 0, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(255, 215, 0, 0.3) 0%, transparent 80%)
            `,
          }}
        />

        {/* TEXT CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 w-full text-center">
          <div className="space-y-4 md:space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-md mb-4 animate-fade-up shadow-lg shadow-blue-500/5">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-md shadow-cyan-400/50" />
              <span className="text-sm font-medium text-white/80 tracking-wide">
                ENTERPRISE SOFTWARE ASSET MANAGEMENT
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
              <span className="absolute inset-0 -z-10 blur-[30px] opacity-60 bg-gradient-to-b from-white/40 to-transparent scale-105" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/90 animate-fade-up">
                Intelligent
              </span>
              <br />
              <span className="text-primary animate-fade-up animation-delay-200 relative">
                Asset Control
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
              Streamline your software investments with AI-powered insights and automated license optimization
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-up animation-delay-600">
              
              {/* CTA Button */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-sm rounded-lg font-semibold text-white tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
              
              onClick={() => navigate('/contact')}

              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </button>

              {/* Secondary Button */}
              <button className="group px-8 py-4 border border-white/25 backdrop-blur-sm rounded-lg font-medium text-white/90 tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105">
                <span className="flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-white/50 tracking-widest uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/60 via-white/30 to-transparent blur-[1px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
