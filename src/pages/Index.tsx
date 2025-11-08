import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import CompaniesSection from "@/components/CompaniesSection";

const Index = () => {
  const projects = [
    {
      title: "Microsoft",
      subtitle: "Right-Sizing Microsoft 365 and Azure",
      description: [
        "Optimize M365 (E1, E3, E5) based on real user activity.",
        "Remove inactive or duplicate user licenses.",
        "Right-size Windows Server, SQL Server, and Azure usage.",
        "Simplify EA, CSP, and SPLA management."
      ],
      tags: ["M365", "AZURE", "OPTIMIZATION"],
      backgroundColor: "hsl(16, 100%, 50%)", // Orange
      textColor: "text-white",
      image: "/logo.png"
    },
    {
      title: "Adobe",
      subtitle: "Get More from Your Adobe Investment",
      description: [
        "Identify and reclaim unused or duplicate Adobe users.",
        "Optimize Creative Cloud and Acrobat assignments.",
        "Centralize control via the Adobe Admin Console.",
        "Streamline renewals to prevent over-purchasing."
      ],
      tags: ["CREATIVE CLOUD", "ACROBAT", "OPTIMIZATION"],
      backgroundColor: "hsl(48, 100%, 67%)", // Yellow
      textColor: "text-black",
      image: "/logo.png"
    },
    {
      title: "IBM",
      subtitle: "Optimize Your IBM Licensing",
      description: [
        "Manage sub-capacity licensing with compliant ILMT setup.",
        "Optimize PVU, VPC, and Mainframe MLC usage.",
        "Align Passport Advantage and SCRT data for accuracy.",
        "Support Cloud Pak and container license governance."
      ],
      tags: ["MAINFRAME", "CLOUD PAK", "COMPLIANCE"],
      backgroundColor: "hsl(187, 71%, 57%)", // Cyan
      textColor: "text-black",
      image: "/logo.png"
    },
    {
      title: "Oracle",
      subtitle: "Simplify, Save, and Scale Your Oracle",
      description: [
        "Optimize Database and Named User Plus (NUP) licensing.",
        "Identify idle or redundant instances.",
        "Support Oracle LMS audit defense.",
        "Align support renewals with actual usage."
      ],
      tags: ["DATABASE", "LMS AUDIT", "NUP"],
      backgroundColor: "hsl(330, 81%, 60%)", // Magenta
      textColor: "text-white",
      image: "/logo.png"
    }
  ];

  return (
    <div className="relative overflow-y-hidden">
      <Header />
      
      {/* Fixed Hero Background - stays behind */}
      <HeroSection />
      
      {/* Scrolling Content - scroll on top of hero */}
      <div className="relative" style={{ marginTop: '100vh' }}>
        {/* Services Section with GSAP scroll animations */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* Project Cards */}
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <CompaniesSection />
      
      {/* Contact Section - appears at bottom */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;