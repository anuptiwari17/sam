import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Audit Defense",
    subtitle: "Worried about an upcoming software audit or want to be audit ready?",
    description: "We help you take control before vendors do. Our audit defense services protect your business from unnecessary risks and penalties.",
    image: "/logo.png",
    buttonText: "Explore Audit Defense",
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
    subtitle: "Is managing software compliance taking too much time?",
    description: "Let us handle it for you. Our managed services give you ongoing control and visibility across your entire software estate.",
    image: "/logo.png",
    buttonText: "Explore Managed Services",
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
    subtitle: "Are you paying for software you don't fully use?",
    description: "Most organizations do. We help you optimize licenses, usage, and renewals to unlock hidden savings.",
    image: "/logo.png",
    buttonText: "Explore Optimization",
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
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRefs.current, { opacity: 0, x: -60 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Phase 1: Fade out header, move and enlarge image to right
      tl.to(headerRef.current, {
        opacity: 0,
        y: -40,
        duration: 1.2,
        ease: "power2.inOut"
      })
      .to(imageRef.current, {
        left: "73%",
        top: "50%",
        scale: 1,
        width: "38vw",
        height: "68vh",
        duration: 2,
        ease: "power3.inOut",
        onStart: () => setCurrentIndex(0)
      }, "-=0.6")
      .to(contentRefs.current[0], {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.2");

      // Hold first service
      tl.to({}, { duration: 1.5 });

      // Phase 2: Transition to second service
      tl.to(contentRefs.current[0], {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power2.in"
      })
      .to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(1);
        }
      }, "<")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut"
      })
      .to(contentRefs.current[1], {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8");

      // Hold second service
      tl.to({}, { duration: 1.5 });

      // Phase 3: Transition to third service
      tl.to(contentRefs.current[1], {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power2.in"
      })
      .to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(2);
        }
      }, "<")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut"
      })
      .to(contentRefs.current[2], {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8");

      // Final hold
      tl.to({}, { duration: 1.5 });

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile version
  if (isMobile) {
    return (
      <section className="w-full bg-[#0a0e1a] py-16 px-4" style={{zIndex: 10}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-tight text-white mb-2">
            Our Services
          </h2>
          <p className="text-sm text-gray-400">
            Explore our services
          </p>
        </div>

        
        <div className="space-y-6">
          {services.map((service, i) => (
            <div key={i} className="bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] rounded-2xl overflow-hidden border border-white/10">
              <div className="h-56 overflow-hidden bg-[#0d1520] flex items-center justify-center p-8 ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3 italic">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-blue-300 font-medium mb-5 italic">
                  {service.tagline}
                </p>
                <Link className="w-full px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all"
                  to={service.route}>
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0a0e1a] overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />
      
      {/* Subtle stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Header - Initial centered state */}
      <div
        ref={headerRef}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20"
      >
        <h2 className="text-6xl xl:text-7xl font-light tracking-tight text-white mb-3">
          Our Services
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
          <p className="text-sm text-gray-400 tracking-wide">
            Explore our services
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </div>

      {/* Image - Starts center, zoomed out */}
      <div
        ref={imageRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[50vh] z-10 mt-8"
        style={{ scale: 0.7, willChange: 'transform, left, top, width, height' }}
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#0d1520] flex items-center justify-center p-12">
          <img
            src={services[0].image}
            alt="Service"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 rounded-3xl border border-white/20" />
        </div>
      </div>

      {/* Content - Left side */}
      <div className="absolute left-[6%] top-[20%] -translate-y-1/2 w-[44%] z-20">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (contentRefs.current[i] = el)}
            className="absolute w-full"
            style={{ pointerEvents: currentIndex === i ? 'auto' : 'none' }}
          >
            <div className="space-y-5">
              <h3 className="text-4xl xl:text-5xl font-light tracking-tight text-white leading-tight">
                {service.title}
              </h3>
              <p className="text-base text-gray-400 italic">
                {service.subtitle}
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2.5 py-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-blue-400 mt-1 text-lg">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-blue-300 font-medium italic pt-2">
                {service.tagline}
              </p>
              <Link className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:gap-3"
                to={service.route}>
                {service.buttonText}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {services.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-10 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;