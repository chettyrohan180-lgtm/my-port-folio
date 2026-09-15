export const developerInfo = {
  name: "Rohan Chetty",
  title: "AI & ML Engineer | Full-Stack Developer",
  subtitle: "2nd Year B.Tech CSE (AI & ML) Student building intelligent machine learning models, algorithms, and responsive web applications.",
  location: "India (Open to Internships & Projects)",
  bio: "Passionate 2nd Year Computer Science student specializing in AI & Machine Learning. Focused on computer vision, deep learning frameworks, data structures & algorithms, and modern full-stack web development.",
  socials: {
    github: "https://github.com/chettyrohan180-lgtm",
    linkedin: "https://linkedin.com/in/rohan-ch",
    twitter: "https://twitter.com/rohanchetty_dev",
    email: "chettyrohan180@gmail.com"
  },
  stats: [
    { label: "Degree & Year", value: "2nd Year B.Tech" },
    { label: "Specialization", value: "CSE (AI & ML)" },
    { label: "Projects Built", value: "10+" },
    { label: "Github Commits", value: "500+" }
  ]
};

export const skillCategories = [
  {
    id: "all",
    name: "All Skills"
  },
  {
    id: "languages",
    name: "Languages & Core",
    skills: [
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "C / C++", level: "Advanced", icon: "Cpu" },
      { name: "Java", level: "Intermediate", icon: "Code2" },
      { name: "JavaScript / TypeScript", level: "Advanced", icon: "FileCode" },
      { name: "SQL", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Data Science",
    skills: [
      { name: "PyTorch / TensorFlow", level: "Intermediate", icon: "Brain" },
      { name: "Scikit-Learn & ML", level: "Advanced", icon: "Binary" },
      { name: "NumPy & Pandas", level: "Advanced", icon: "FileSpreadsheet" },
      { name: "Computer Vision (OpenCV)", level: "Intermediate", icon: "Sparkles" },
      { name: "LLMs & Prompting", level: "Intermediate", icon: "Bot" }
    ]
  },
  {
    id: "web-backend",
    name: "Web & APIs",
    skills: [
      { name: "React.js / Next.js", level: "Advanced", icon: "Code2" },
      { name: "HTML5 / CSS3 / Tailwind", level: "Expert", icon: "Palette" },
      { name: "Node.js / Express", level: "Intermediate", icon: "Server" },
      { name: "FastAPI / Flask", level: "Advanced", icon: "Terminal" },
      { name: "REST APIs & WebSockets", level: "Advanced", icon: "Network" }
    ]
  },
  {
    id: "tools-db",
    name: "Databases & Tools",
    skills: [
      { name: "PostgreSQL / MySQL", level: "Intermediate", icon: "Database" },
      { name: "MongoDB", level: "Intermediate", icon: "HardDrive" },
      { name: "Vector DBs (Pinecone/Chroma)", level: "Intermediate", icon: "Binary" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Docker Containerization", level: "Intermediate", icon: "Box" },
      { name: "Linux / Shell Scripting", level: "Intermediate", icon: "Terminal" }
    ]
  }
];

export const projects = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer Assistant",
    category: "AI/ML",
    tag: "AI/ML",
    description: "An intelligent AI-powered code review application that parses diffs, evaluates security risks, detects bugs, and provides contextual refactoring suggestions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Python", "FastAPI", "OpenAI / LLM API", "React", "Node.js"],
    demoUrl: "https://github.com/chettyrohan180-lgtm/ai-code-reviewer-chettyrohan180",
    githubUrl: "https://github.com/chettyrohan180-lgtm/ai-code-reviewer-chettyrohan180",
    featured: true,
    metrics: "Accelerates code review cycles with instant automated security & AST quality scans.",
    details: {
      overview: "AI Code Reviewer automates pull request and code snippet analysis by combining AST parsing with LLM semantic understanding to flag vulnerabilities, anti-patterns, and unit test gaps.",
      keyFeatures: [
        "AST parsing for accurate context extraction before AI evaluation",
        "Automated security scanning & vulnerability detection",
        "Contextual refactoring & code fix recommendations",
        "Sleek interactive web dashboard & API endpoint integrations"
      ],
      architecture: "Built with FastAPI / Python backend, LLM API integration, and React single-page frontend interface."
    }
  },
  {
    id: "p2p-lan-mesh",
    title: "Peer-to-Peer Offline LAN Matchmaker Mesh Network",
    category: "Backend",
    tag: "Backend",
    description: "Decentralized offline LAN multiplayer matchmaker and mesh networking architecture for zero-internet device discovery and game lobby synchronization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    techStack: ["P2P Protocols", "UDP / TCP Sockets", "C++ / Node.js", "Mesh Networking", "mDNS"],
    demoUrl: "https://github.com/chettyrohan180-lgtm/Peer-to-Peer-Offline-LAN-Matchmaker-Mesh-Network-",
    githubUrl: "https://github.com/chettyrohan180-lgtm/Peer-to-Peer-Offline-LAN-Matchmaker-Mesh-Network-",
    featured: true,
    metrics: "Sub-10ms peer discovery & lobby synchronization on zero-internet LAN networks.",
    details: {
      overview: "Engineered for offline environments, this mesh networking engine enables automatic peer node discovery, state replication, and low-latency matchmaking over local Wi-Fi / Ethernet.",
      keyFeatures: [
        "mDNS / UDP broadcast for instant zero-config peer discovery",
        "Decentralized mesh topology with auto-rebalancing host migration",
        "UDP socket protocol for low-latency state synchronization",
        "Resilient peer heartbeat and reconnect handling"
      ],
      architecture: "Peer-to-peer socket protocol built with C++ / Node.js leveraging UDP broadcast and custom binary state framing."
    }
  },
  {
    id: "web-page-saver",
    title: "Web Page Saver Browser Extension",
    category: "Frontend",
    tag: "Frontend",
    description: "A powerful browser extension for capturing, archiving, and organizing web content offline with complete HTML snapshotting and readability extraction.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    techStack: ["JavaScript", "Manifest V3", "Browser Extension API", "HTML5 Canvas", "CSS3"],
    demoUrl: "https://github.com/chettyrohan180-lgtm/WEB-PAGE-SAVER-extension-",
    githubUrl: "https://github.com/chettyrohan180-lgtm/WEB-PAGE-SAVER-extension-",
    featured: true,
    metrics: "Instant 1-click DOM capture & offline archive generation.",
    details: {
      overview: "Web Page Saver is a Manifest V3 browser extension designed for privacy-first web archiving, clean article extraction, and offline resource management.",
      keyFeatures: [
        "1-click DOM snapshotting preserving inline styles and assets",
        "Clean readability mode extraction removing ads and clutter",
        "Custom tag organization and local IndexedDB storage",
        "Export archives in JSON, MHTML, or PDF formats"
      ],
      architecture: "Manifest V3 extension using background service workers, content script DOM injection, and local storage APIs."
    }
  }
];

export const workExperience = [];


