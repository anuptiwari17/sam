export const servicesData = [
  {
    title: "Audit Defense",
    description:
      "Worried about an upcoming software audit or want to be audit ready? We help you take control before vendors do. Our audit defense services protect your business from unnecessary risks and penalties.",
    image: "/logo.png", // Replace with real path (e.g., "/images/audit-defense.jpg")
    buttonText: "Explore Audit Defense",
    buttonHref: "#audit-defense",
    features: [
      "Identify compliance gaps before auditors do",
      "Validate and prepare data for accuracy",
      "Negotiate effectively with publishers",
      "Minimize financial exposure and disruption",
    ],
    tagline: "Stay confident. Stay compliant.",
    route: "/services/audit-defense",
  },
  {
    title: "Software Managed Services",
    description:
      "Is managing software compliance taking too much time? Let us handle it for you. Our managed services give you ongoing control and visibility across your entire software estate.",
    image: "/logo.png",
    buttonText: "Explore Managed Services",
    buttonHref: "#managed-services",
    features: [
      "Continuous license and entitlement tracking",
      "Automated compliance monitoring",
      "Proactive renewals and vendor management",
      "Expert support to align software use with business goals",
    ],
    tagline: "You focus on your business — we'll manage the rest.",
    route: "/services/managed-services",
  },
  {
    title: "Software License Optimization",
    description:
      "Are you paying for software you don't fully use? Most organizations do. We help you optimize licenses, usage, and renewals to unlock hidden savings.",
    image: "/logo.png",
    buttonText: "Explore Optimization",
    buttonHref: "#license-optimization",
    features: [
      "Analyze actual usage vs. entitlements",
      "Reclaim and reassign underused licenses",
      "Reduce unnecessary costs and compliance risks",
      "Unlock measurable cost savings without productivity loss",
    ],
    tagline: "Spend less, achieve more — through smarter license management.",
    route: "/services/license-optimization",
  },
] as const;