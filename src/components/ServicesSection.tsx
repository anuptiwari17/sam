import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonHref: string;
  route: string;
  features: string[];
  tagline: string;
}

const services: Service[] = [
  {
    title: "Audit Defense",
    description: "Worried about an upcoming software audit or want to be audit ready? We help you take control before vendors do. Our audit defense services protect your business from unnecessary risks and penalties.",
    image: "/logo.png",
    buttonText: "Explore Audit Defense",
    buttonHref: "#audit-defense",
    features: [
      "Identify compliance gaps before auditors do",
      "Validate and prepare data for accuracy",
      "Negotiate effectively with publishers",
      "Minimize financial exposure and disruption"
    ],
    tagline: "Stay confident. Stay compliant.",
    route: "/services/audit-defense"
  },
  {
    title: "Software Managed Services",
    description: "Is managing software compliance taking too much time? Let us handle it for you. Our managed services give you ongoing control and visibility across your entire software estate.",
    image: "/logo.png",
    buttonText: "Explore Managed Services",
    buttonHref: "#managed-services",
    features: [
      "Continuous license and entitlement tracking",
      "Automated compliance monitoring",
      "Proactive renewals and vendor management",
      "Expert support to align software use with business goals"
    ],
    tagline: "You focus on your business — we'll manage the rest.",
    route: "/services/managed-services"
  },
  {
    title: "Software License Optimization",
    description: "Are you paying for software you don't fully use? Most organizations do. We help you optimize licenses, usage, and renewals to unlock hidden savings.",
    image: "/logo.png",
    buttonText: "Explore Optimization",
    buttonHref: "#license-optimization",
    features: [
      "Analyze actual usage vs. entitlements",
      "Reclaim and reassign underused licenses",
      "Reduce unnecessary costs and compliance risks",
      "Unlock measurable cost savings without productivity loss"
    ],
    tagline: "Spend less, achieve more — through smarter license management.",
    route: "/services/license-optimization"  
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroButtonRef = useRef<HTMLButtonElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial setup - all services hidden except positioning
      contentRefs.current.forEach((content) => {
        gsap.set(content, { opacity: 0, x: -80 });
      });
      
      // Set initial positions for background images - visible in background
      gsap.set(bgImageRefs.current[0], { 
        opacity: 0.2, 
        x: "60%", 
        scale: 0.6,
        zIndex: 1
      });
      gsap.set(bgImageRefs.current[1], { 
        opacity: 0.15, 
        x: "80%", 
        scale: 0.5,
        zIndex: 0
      });

      // Responsive values
      const mm = gsap.matchMedia();

      mm.add({
        // Mobile
        isMobile: "(max-width: 767px)",
        // Tablet
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        // Desktop
        isDesktop: "(min-width: 1024px)"
      }, (context) => {
        const { isMobile, isTablet } = context.conditions as { isMobile: boolean; isTablet: boolean; isDesktop: boolean };

        const imageRightPosition = isMobile ? "15%" : isTablet ? "20%" : "25%";
        const imageWidth = isMobile ? "70vw" : isTablet ? "50vw" : "38vw";
        const imageHeight = isMobile ? "50vh" : isTablet ? "55vh" : "65vh";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=450%",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress < 0.3) {
                setCurrentIndex(0);
              } else if (progress < 0.65) {
                setCurrentIndex(1);
              } else {
                setCurrentIndex(2);
              }
            },
          },
        });

        // Phase 1: Hero state - fade out title, subtitle, button
        tl.to(heroTitleRef.current, {
          opacity: 0,
          y: -50,
          duration: 1.5,
          ease: "power2.inOut",
        })
        .to(heroSubtitleRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.5,
          ease: "power2.inOut",
        }, "<0.15")
        .to(heroButtonRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.5,
          ease: "power2.inOut",
        }, "<0.15")
        .to(scrollIndicatorRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        }, "<0.2")
        // Fade out background images
        .to([bgImageRefs.current[0], bgImageRefs.current[1]], {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        }, "<0.3");

        // Phase 2: Main image moves to right and becomes full, first service content appears
        tl.to(mainImageRef.current, {
          x: imageRightPosition,
          y: isMobile ? "-5vh" : "-10vh",
          width: imageWidth,
          height: imageHeight,
          duration: 2,
          ease: "power3.out",
        }, "<0.5")
        .to(contentRefs.current[0], {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
        }, "<0.6")
        .to({}, { duration: 1.5 }); // Hold first service

        // Phase 3: Transition to second service - swap image
        tl.to(contentRefs.current[0], {
          opacity: 0,
          x: -80,
          duration: 1.5,
          ease: "power3.in",
        })
        .to(mainImageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.in",
        }, "<")
        .call(() => {
          const mainImg = mainImageRef.current;
          if (mainImg) {
            const img = mainImg.querySelector('img');
            if (img) img.src = services[1].image;
          }
        })
        .to(mainImageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }, "<0.5")
        .to(contentRefs.current[1], {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
        }, "<0.3")
        .to({}, { duration: 1.5 }); // Hold second service

        // Phase 4: Transition to third service - swap image
        tl.to(contentRefs.current[1], {
          opacity: 0,
          x: -80,
          duration: 1.5,
          ease: "power3.in",
        })
        .to(mainImageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.in",
        }, "<")
        .call(() => {
          const mainImg = mainImageRef.current;
          if (mainImg) {
            const img = mainImg.querySelector('img');
            if (img) img.src = services[2].image;
          }
        })
        .to(mainImageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }, "<0.5")
        .to(contentRefs.current[2], {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
        }, "<0.3")
        .to({}, { duration: 2 }); // Final hold

        return () => {}; // Cleanup function for matchMedia
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0d1520] overflow-hidden"
      style={{zIndex:10}}
    >
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/5 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Initial State */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 
                -translate-y-6 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16 xl:-translate-y-16">
  {/* Title */}
  <div ref={heroTitleRef} className="text-center mb-3 sm:mb-4">
    <p className="text-[0.6rem] sm:text-xs md:text-sm tracking-[0.3em] text-gray-400 mb-1 sm:mb-2 uppercase">
      Discover
    </p>
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white">
      OUR SERVICES
    </h2>
        </div>

        {/* Subtitle */}
        <p
          ref={heroSubtitleRef}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-2xl px-4"
        >
          Comprehensive enterprise solutions designed to transform your business operations
        </p>

        {/* Button */}
        <button
          ref={heroButtonRef}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
        >
          GET STARTED
        </button>

        {/* Main Image - Cropped at bottom center, will move to right */}
        <div
          ref={mainImageRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
          style={{ height: '40vh' }}
        >
          <div className="relative w-full h-full">
            <img
              src={services[0].image}
              alt="Service Preview"
              className="w-full h-full object-contain object-center"
            />
            
            {/* Glass Border */}
            <div className="absolute inset-0 rounded-t-2xl sm:rounded-t-3xl border-t border-x border-white/10" />
          </div>
        </div>

        {/* Background Images - Initial decorative state (hidden on mobile) */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[50vh]">
          <div
            ref={(el) => (bgImageRefs.current[0] = el)}
            className="absolute w-full h-full rounded-3xl overflow-hidden"
          >
            <img
              src={services[1].image}
              alt="Background"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 rounded-3xl border border-white/10" />
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[35vw] h-[45vh]">
          <div
            ref={(el) => (bgImageRefs.current[1] = el)}
            className="absolute w-full h-full rounded-3xl overflow-hidden"
          >
            <img
              src={services[2].image}
              alt="Background"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 rounded-3xl border border-white/10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Service Content - Left Side */}
      <div className="absolute left-0 top-0 w-full md:w-[55%] lg:w-[50%] h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {services.map((service, i) => (
          <div
            key={`content-${i}`}
            ref={(el) => (contentRefs.current[i] = el)}
            className="absolute w-full max-w-xl"
            style={{ 
              transform: 'translateY(-12vh)',
              pointerEvents: currentIndex === i ? 'auto' : 'none'
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              {service.description}
            </p>
            <Link
      to={service.route}
      className={`
        inline-flex items-center justify-center
        px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3
        bg-gradient-to-r from-blue-500/20 to-purple-500/20
        backdrop-blur-md border border-white/30 rounded-full
        text-xs sm:text-sm font-medium text-white
        hover:from-blue-500/30 hover:to-purple-500/30
        hover:border-white/40 transition-all duration-300
        hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
      `}
    >
      {service.buttonText}
    </Link>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {services.map((_, i) => (
          <div
            key={`progress-${i}`}
            className={`h-0.5 sm:h-1 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 sm:w-12 bg-white"
                : "w-4 sm:w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;






