import React from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  backgroundColor: string;
  textColor: string;
  image?: string;       
  logo: string;
}

interface ProjectCardProps {
  project: Project;
}

const projects: Project[] = [
  {
    title: "Microsoft",
    subtitle: "Right-Sizing Microsoft 365 and Azure",
    description: [
      "Optimize M365 (E1, E3, E5) based on real user activity.",
      "Remove inactive or duplicate user licenses.",
      "Right-size Windows Server, SQL Server, and Azure usage.",
      "Simplify EA, CSP, and SPLA management.",
    ],
    tags: ["M365", "AZURE", "OPTIMIZATION"],
    backgroundColor: "hsl(48, 100%, 67%)",
    textColor: "text-black",
    image: "/logo.png",
    logo: "/logos/microsoft-logo-box.png",
  },
  {
    title: "IBM",
    subtitle: "Optimize Your IBM Licensing",
    description: [
      "Manage sub-capacity licensing with compliant ILMT setup.",
      "Optimize PVU, VPC, and Mainframe MLC usage.",
      "Align Passport Advantage and SCRT data for accuracy.",
      "Support Cloud Pak and container license governance.",
    ],
    tags: ["MAINFRAME", "CLOUD PAK", "COMPLIANCE"],
    backgroundColor: "hsl(187, 71%, 57%)",
    textColor: "text-black",
    image: "/logo.png",
    logo: "/logos/ibm-logo2.jpg",
  },
  {
    title: "Adobe",
    subtitle: "Get More from Your Adobe Investment",
    description: [
      "Identify and reclaim unused or duplicate Adobe users.",
      "Optimize Creative Cloud and Acrobat assignments.",
      "Centralize control via the Adobe Admin Console.",
      "Streamline renewals to prevent over-purchasing.",
    ],
    tags: ["CREATIVE CLOUD", "ACROBAT", "OPTIMIZATION"],
    backgroundColor: "orange",
    textColor: "text-black",
    image: "/logo.png",
    logo: "/logos/adobe-logo.png",
  },
  {
    title: "Oracle",
    subtitle: "Simplify, Save, and Scale Your Oracle",
    description: [
      "Optimize Database and Named User Plus (NUP) licensing.",
      "Identify idle or redundant instances.",
      "Support Oracle LMS audit defense.",
      "Align support renewals with actual usage.",
    ],
    tags: ["DATABASE", "LMS AUDIT", "NUP"],
    backgroundColor: "hsla(359, 82%, 53%, 1.00)",
    textColor: "text-white",
    image: "/logo.png",
    logo: "/logos/oracle-logo.png",
  },
];


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    subtitle,
    description,
    tags,
    backgroundColor,
    textColor,
    image = "/logo.png",
    logo,
  } = project;

  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      style={{ backgroundColor, position: "relative", zIndex: 10 }}
    >
      {/* Black side margins */}
      <div className="absolute inset-y-0 left-0 w-[2vw] bg-black" />
      <div className="absolute inset-y-0 right-0 w-[2vw] bg-black" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-[4vw] grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-16">
        {/* Text side */}
        <div className={`space-y-8 ${textColor}`}>
          <div className="space-y-4">
            {/* ---- Title + Logo row ---- */}
            <div className="flex items-center gap-4">
              {/* Company logo */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
                {title}
              </h3>
            </div>

            {/* Subtitle */}
            <div className="flex items-center gap-4">
              <div className="h-[3px] w-12 bg-current opacity-60" />
              <p className="text-xl md:text-2xl font-semibold opacity-90">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-xl">
            {description.map((txt, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                <p className="text-base md:text-lg leading-relaxed opacity-85 font-light group-hover:opacity-100 transition-opacity">
                  {txt}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold tracking-wider border border-white/20 hover:bg-white/25 hover:border-white/30 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative group">
          <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl group-hover:bg-white/10 transition-all duration-700" />
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/5 backdrop-blur-sm">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-12 transition-all duration-700 group-hover:scale-105 group-hover:p-10 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-white/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/30 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
    </section>
  );
};


export const ProjectCardsList: React.FC = () => (
  <>
    {projects.map((proj, idx) => (
      <ProjectCard key={idx} project={proj} />
    ))}
  </>
);

export default ProjectCard;