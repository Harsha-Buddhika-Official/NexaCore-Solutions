export const filterOptions = ["All", "Web", "Mobile", "Software", "SaaS"];

export const projects = [
  {
    id: "omnistream-enterprise",
    variant: "detailed",
    size: "large",
    category: "Web",
    image: "/src/assets/projects/omnistream-enterprise.jpg",
    activeCase: true,
    title: "OmniStream Enterprise",
    description: "Real-time data visualization platform for global supply chains.",
    problem:
      "Disconnected logistics data leading to multi-hour delays in decision cycles.",
    solution:
      "Unified Kubernetes-based event mesh processing 2M records per second.",
    tags: ["React", "Kubernetes", "Redis", "D3.js"],
  },
  {
    id: "kryptos-mobile-wallet",
    variant: "simple",
    size: "regular",
    category: "Mobile",
    image: "/src/assets/projects/kryptos-mobile-wallet.jpg",
    title: "Kryptos Mobile Wallet",
    description:
      "Biometric-secured asset management for institutional investors.",
    bullets: [
      "Zero-knowledge proof encryption.",
      "Under 200ms latency.",
    ],
    tags: ["Flutter", "Rust"],
  },
  {
    id: "neurocore-ai",
    variant: "simple",
    size: "regular",
    category: "Software",
    image: "/src/assets/projects/neurocore-ai.jpg",
    title: "NeuroCore AI",
    description: "Automated QA pipeline leveraging LLMs for code sanity.",
    tags: ["Python", "PyTorch"],
  },
  {
    id: "vortex-cloud-os",
    variant: "detailed",
    size: "large",
    category: "SaaS",
    image: "/src/assets/projects/vortex-cloud-os.jpg",
    title: "Vortex Cloud OS",
    description: "Serverless infrastructure orchestration for high-scale apps.",
    problem:
      "Massive infrastructure over-provisioning wasting 40% of compute budget.",
    solution:
      "Dynamic right-sizing algorithm using predictive ML models.",
    tags: ["Golang", "AWS", "Terraform"],
  },
];