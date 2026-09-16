export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  icon: string;
}

export interface CircularSkill {
  name: string;
  percentage: number;
  color: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "crm" | "web" | "travel";
  tags: string[];
  image: string;
  liveUrl?: string;
  description: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const portfolioData = {
  personal: {
    name: "Priyanshu Chauhan",
    brand: "Piyush Solution",
    tagline: "Let's Build Together ✌️",
    roles: [
      "Full Stack Dev",
      "UI/UX Partner",
      "Angular & Next.js",
      "Node & PHP Expert",
    ],
    bio: "I take pride in turning complex problems into simple, beautiful, and intuitive solutions. Proficient in modern web technologies, I deliver scalable, high-performance web applications with exceptional user experiences.",
    aboutHeading: "Priyanshu Chauhan",
    aboutSubheading: "Full Stack Web Developer",
    aboutBio1:
      "I'm Priyanshu Chauhan, an Indian Full Stack Developer with 3-4 years of experience building scalable, high-performance web applications. Currently pursuing a Master of Computer Applications (MCA) from Indira Gandhi National Open University (IGNOU), I specialize in modern technologies including Angular 19, Next.js, React.js, Node.js, PHP, and MongoDB.",
    aboutBio2:
      "I enjoy turning complex problems into simple, efficient, and user-friendly solutions. From enterprise CRM systems and travel booking platforms to business websites and custom web applications, I focus on delivering clean code, responsive designs, and exceptional user experiences.",
    experienceYears: "3-4 Years",
    clientsCount: 13,
    contact: {
      phone: "+91 9289033065",
      email: "priyanshuchauhan896@gmail.com",
      address: "Mehrauli, New Delhi - 110030, India",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/priyanshu-chauhan-696a18262/",
      twitter: "https://x.com/Piyush_xt09__",
      instagram: "https://www.instagram.com/piyush_xt09__/",
    },
  },

  circularSkills: [
    { name: "Angular 19", percentage: 95, color: "#fca61f" },
    { name: "Next.js / React", percentage: 92, color: "#7b47fe" },
    { name: "Node.js / Express", percentage: 90, color: "#56cbbd" },
    { name: "MySQL / MongoDB", percentage: 94, color: "#3f396d" },
  ] as CircularSkill[],

  skills: [
    { name: "Angular 19", percentage: 95, icon: "angular" },
    { name: "Next.js", percentage: 92, icon: "nextjs" },
    { name: "React.js", percentage: 90, icon: "react" },
    { name: "JavaScript", percentage: 96, icon: "javascript" },
    { name: "TypeScript", percentage: 93, icon: "typescript" },
    { name: "Node.js", percentage: 90, icon: "nodejs" },
    { name: "Express.js", percentage: 89, icon: "express" },
    { name: "PHP 8.4", percentage: 92, icon: "php" },
    { name: "MongoDB", percentage: 88, icon: "mongodb" },
    { name: "MySQL", percentage: 94, icon: "mysql" },
    { name: "Bootstrap", percentage: 95, icon: "bootstrap" },
    { name: "Figma", percentage: 88, icon: "figma" },
  ] as SkillItem[],

  services: [
    {
      id: "service-frontend",
      icon: "code",
      title: "Frontend Development",
      shortDesc:
        "Building responsive, dynamic applications using Angular 19, Next.js, React.js, HTML5, CSS3, JavaScript, TypeScript, Bootstrap & Tailwind CSS.",
      fullDesc:
        "Specializing in modern frontend frameworks including Angular 19, Next.js, and React.js. I design and build highly responsive, performant, and interactive single-page and server-side rendered applications.",
      features: [
        "Angular 19, TypeScript, Reactive Forms, RxJS State Management",
        "Next.js (App Router, Server Components) and React.js Ecosystem",
        "Responsive styling using Bootstrap 5, Tailwind CSS, and Vanilla CSS",
        "Performance optimization, cross-browser compatibility, and mobile responsiveness",
      ],
    },
    {
      id: "service-backend",
      icon: "server",
      title: "Backend Development",
      shortDesc:
        "Developing secure, scalable server applications with Node.js, Express.js, PHP 8.4, RESTful APIs, JWT authentication, and business logic.",
      fullDesc:
        "Architecting secure, scalable backend services and REST APIs with Node.js, Express.js, and PHP 8.4 to support high-traffic business applications and enterprise CRMs.",
      features: [
        "Node.js & Express.js RESTful API architecture",
        "PHP 8.4 backend engines, MVC patterns & Custom CMS",
        "JWT authentication, OAuth, Role-based Access Control (RBAC)",
        "Payment gateway integrations, third-party API webhooks & automation",
      ],
    },
    {
      id: "service-database",
      icon: "database",
      title: "Database Management",
      shortDesc:
        "Designing and managing relational and NoSQL database schemas using MySQL and MongoDB with query optimization and efficient indexing.",
      fullDesc:
        "Designing efficient data structures, modeling schemas, and optimizing database queries using MySQL and MongoDB to ensure fast data retrieval and data integrity.",
      features: [
        "MySQL relational database design, indexing, and complex queries",
        "MongoDB NoSQL aggregation pipelines, collections & Mongoose ORM",
        "Data security, automated backups, and migration strategies",
      ],
    },
    {
      id: "service-uiux",
      icon: "layout",
      title: "UI/UX Design",
      shortDesc:
        "Creating intuitive, responsive, and aesthetically pleasing user interfaces in Figma with a focus on modern user experience and usability.",
      fullDesc:
        "Transforming complex user journeys into clean, visually stunning wireframes and interactive prototypes in Figma, prioritizing user satisfaction and accessibility.",
      features: [
        "High-fidelity Figma wireframing & clickable prototypes",
        "Design systems, typography palettes & cohesive color schemes",
        "Seamless translation of Figma designs into clean HTML/CSS code",
      ],
    },
    {
      id: "service-tools",
      icon: "tools",
      title: "Development Tools & Workflows",
      shortDesc:
        "Collaborative software engineering utilizing VS Code, Git, GitHub, REST client tooling, CI/CD workflows, and agile development best practices.",
      fullDesc:
        "Proficient with modern developer workflows, version control, automated testing, and cloud deployment pipelines for seamless software delivery.",
      features: [
        "Git & GitHub version control, pull request workflows, and branching strategies",
        "VS Code advanced tooling, Postman API testing, and debugging",
      ],
    },
    {
      id: "service-business",
      icon: "terminal",
      title: "Business & Custom Solutions",
      shortDesc:
        "Strong foundation in C/C++, algorithmic problem solving, Tally Prime & Busy accounting software integrations for business enterprise needs.",
      fullDesc:
        "Applying rigorous analytical thinking, C/C++ foundational computer science principles, and e-accounting software knowledge (Tally Prime, Busy) to build practical enterprise solutions.",
      features: [
        "Algorithmic problem solving and core software architecture",
        "ERP and e-accounting workflows (Tally Prime, Busy)",
        "Business process automation and custom client dashboards",
      ],
    },
  ] as ServiceItem[],

  education: [
    {
      period: "Jan 2026 - Present",
      title: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      description:
        "Pursuing MCA to enhance expertise in advanced software development, application architecture, cloud technologies, and modern software engineering practices.",
    },
    {
      period: "2021 - July 2024",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      description:
        "Studied programming, database management, software engineering, networking, and web technologies while developing multiple academic and real-world full-stack projects.",
    },
    {
      period: "2022 - 2024",
      title: "Professional Certifications",
      institution: "IBM (Coursera) & Arth Institute",
      description:
        "Completed certifications in React.js, Node.js, Express.js, MongoDB, and Corporate e-Accounting, gaining practical experience in modern web development and business management tools.",
    },
    {
      period: "2019 - 2021",
      title: "Senior Secondary Education",
      institution: "Commerce Stream",
      description:
        "Completed Senior Secondary education with a strong foundation in Accountancy, Business Studies, Economics, and analytical thinking.",
    },
  ] as TimelineItem[],

  experience: [
    {
      period: "Nov 2024 - Present",
      title: "Full Stack Developer",
      institution: "WebMeen IT Solutions",
      description:
        "Developing scalable web applications, enterprise CRMs, and travel technology solutions using Angular 19, PHP, REST APIs, MySQL, and modern frontend frameworks while collaborating with cross-functional teams.",
    },
    {
      period: "2025 - Present",
      title: "Travel Technology Solutions",
      institution: "B2B Flight, Hotel & Rail Systems",
      description:
        "Built B2B travel booking platforms, Flight & Hotel CRM, Rail Ticket Booking CRM, supplier management systems, booking workflows, payment integrations, and role-based dashboards with modern Angular applications.",
    },
    {
      period: "2025 - Present",
      title: "Modern Full Stack Development",
      institution: "Angular • Next.js • Node.js",
      description:
        "Building high-performance full-stack applications using Angular 19, Next.js, React.js, Node.js, Express.js, MongoDB, and MySQL with a strong focus on responsive UI/UX, scalability, clean architecture, and API integration.",
    },
    {
      period: "2022 - 2024",
      title: "Freelance Full Stack Developer",
      institution: "Client Projects",
      description:
        "Designed and developed dynamic websites, custom admin panels, and business solutions using PHP, MySQL, JavaScript, React.js, and Node.js, delivering complete end-to-end web applications for clients.",
    },
  ] as TimelineItem[],

  projects: [
    {
      id: "modalCRM",
      title: "B2B Flight & Hotel CRM",
      subtitle: "Super Admin, Supplier Management & Booking Workflows.",
      category: "crm",
      tags: ["CRM", "Angular 19"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=540&q=80",
      description:
        "A scalable travel technology platform featuring Super Admin, Supplier Management, multi-tier agent booking workflows, payment gateway integrations, and live booking tracking built with Angular 19.",
      features: [
        "Role-based Super Admin, Supplier, and Agent Dashboards",
        "Automated flight & hotel inventory search, markup configurations & invoices",
        "Built with Angular 19, RESTful APIs, MySQL, and modern frontend styling",
      ],
    },
    {
      id: "modalRail",
      title: "Rail Ticket Booking CRM",
      subtitle: "Live API Integration, PNR Tracking & Admin Dashboard.",
      category: "crm",
      tags: ["CRM", "Rail API"],
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&h=540&q=80",
      description:
        "Comprehensive railway booking CRM integrated with real-time rail APIs, live PNR tracking, passenger management, seat availability checks, and administrative controls.",
      features: [
        "Real-time Rail API integration & PNR status tracking",
        "Agent commission tracking, transaction histories, and ticket generation",
        "Secure authentication and instant status updates",
      ],
    },
    {
      id: "modalTravel",
      title: "Travel Booking Platform",
      subtitle: "Full-Stack Travel Website with Dynamic Package Management.",
      category: "travel",
      tags: ["Next.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&h=540&q=80",
      description:
        "Interactive web application built with Next.js and MongoDB that allows users to discover, customize, and book tour packages with integrated payment solutions and admin dashboard.",
      features: [
        "Next.js server-side rendering for optimal SEO and performance",
        "MongoDB database with dynamic itinerary and package management",
        "Responsive mobile-first UI design",
      ],
    },
    {
      id: "modalPhysio",
      title: "Physiocad Healthcare Platform",
      subtitle: "Healthcare Portal with Admin Dashboard & Payment Gateway.",
      category: "web",
      tags: ["PHP", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=540&q=80",
      liveUrl: "https://physiocad.com",
      description:
        "Comprehensive healthcare and therapy platform offering patient appointment booking, practitioner dashboards, payment gateway processing, and dynamic content management.",
      features: [
        "Dynamic Admin Dashboard with patient appointment scheduling",
        "Secure online payment gateway integration",
        "Live Website: physiocad.com",
      ],
    },
    {
      id: "modalBhagwan",
      title: "Bhagwandham Spiritual Platform",
      subtitle: "Dynamic Yoga & Sanatana Dharma Website with Custom CMS.",
      category: "web",
      tags: ["PHP", "CMS"],
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&h=540&q=80",
      liveUrl: "https://bhagwandham.com",
      description:
        "Custom content management system and interactive community website designed for spiritual knowledge sharing, yoga schedules, event registrations, and multimedia blogs.",
      features: [
        "Custom PHP CMS with modular article and media management",
        "Fast loading, clean responsive typography, and mobile optimization",
        "Live Website: bhagwandham.com",
      ],
    },
    {
      id: "modalConference",
      title: "Conference Expense Planner",
      subtitle: "Interactive Budget & Real-Time Expense Breakdown Calculator.",
      category: "web",
      tags: ["React.js", "Redux"],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&h=540&q=80",
      liveUrl: "https://conference-expense-plannerxt09.netlify.app/",
      description:
        "Interactive single-page application built with React.js and Redux for real-time budget forecasting, venue selection, meals, technical add-ons, and expense breakdown calculation.",
      features: [
        "React.js with Redux state management for instantaneous calculations",
        "Itemized invoice preview, quantity adjustments & add-on services",
        "Live Application on Netlify",
      ],
    },
  ] as ProjectItem[],

  testimonials: [
    {
      name: "Rohit Sharma",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "Priyanshu Chauhan developed an amazing website for my shop. It has helped me reach more customers online. He was professional, timely, and very creative with his ideas.",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Freelance Photographer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "Priyanshu created a beautiful portfolio website for me. It showcases my work perfectly and has helped me gain new clients. He understood my vision and brought it to life with great attention to detail!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Fitness Trainer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "The website Priyanshu designed for my fitness business has boosted my online presence significantly. It's user-friendly, responsive, and looks fantastic. Highly recommend his services!",
      rating: 5,
    },
  ] as TestimonialItem[],

  blogs: [
    {
      id: "blog-1",
      title: "Why Lead Generation is Key for Business Growth?",
      date: "Oct 01, 2021",
      author: "Priyanshu",
      category: "Important",
      image: "/assets/image/blog-img-1.png",
      excerpt:
        "Explore effective lead generation strategies that drive customer acquisition, brand value, and sustainable business revenue.",
      content:
        "Lead generation is the foundational pillar of modern business expansion. By cultivating targeted interest and qualifying prospects through optimized digital touchpoints, businesses can establish consistent sales pipelines, reduce acquisition costs, and maximize return on investment.\n\nKey takeaways include implementing high-converting landing pages, utilizing analytics for audience segmentation, and maintaining proactive multi-channel follow-up systems.",
    },
    {
      id: "blog-2",
      title: "Why Your Computer is Slow and How to Speed It Up?",
      date: "Feb 11, 2021",
      author: "Priyanshu",
      category: "Technology",
      image: "/assets/image/blog-img-2.png",
      excerpt:
        "Practical diagnostic techniques, resource management, and system optimization tips to restore rapid machine performance.",
      content:
        "Understanding the root causes behind system degradation is essential for developers and power users alike. Common culprits include unnecessary startup daemons, background cache bloat, disk fragmentation, and inefficient RAM usage.\n\nRegular maintenance, disk cleanup routines, SSD upgrades, and clean operating system setups can dramatically accelerate workflow efficiency.",
    },
    {
      id: "blog-3",
      title: "7 Simple Tips to Boost Your Business Marketing",
      date: "Jul 14, 2022",
      author: "Priyanshu",
      category: "Marketing",
      image: "/assets/image/blog-img-3.png",
      excerpt:
        "Proven digital marketing workflows and SEO strategies designed to maximize online engagement and conversions.",
      content:
        "Effective marketing blends organic visibility, targeted storytelling, and swift technical execution. From optimizing website loading speed to leveraging social proof and content marketing, every detail influences brand credibility and customer conversions.",
    },
  ] as BlogPost[],
};
