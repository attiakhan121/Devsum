import Images from "../../assets";

export const projectsData = [
  {
    id: "herbal-hub",
    title: "HerbalHub",
    shortDescription: "E-commerce platform for organic herbal products",
    description:
      "An AR-enabled marketplace connecting herbal product sellers with health-conscious consumers. Features product visualization, educational content, and subscription services with integrated payment processing.",
    category: "Web Development (Full Stack)",
    pricing: {
      online: 15000,
      onsite: 18000,
    },
    type: "E-commerce",
    difficulty: "Advanced",
    estimatedTime: "4-5 months",
    thumbnail: Images.project1,
    coverImage:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    githubUrl: "https://github.com/example/herbalhub",
    demoUrl: "https://demo.herbalhub.com",
    technologies: [
      { name: "Next.js", icon: "atom" },
      { name: "Node.js", icon: "server" },
      { name: "Three.js", icon: "boxes" },
      { name: "MongoDB", icon: "database" },
      { name: "Stripe", icon: "credit-card" },
    ],
    features: [
      "AR product visualization",
      "Subscription management",
      "Multi-vendor marketplace",
      "Educational content platform",
      "Inventory management",
      "Payment processing",
      "User reviews",
      "Mobile responsive",
      "SEO optimized",
      "Admin dashboard",
    ],
    steps: [
      {
        title: "AR Development",
        description: "Implemented Three.js for 3D product visualization",
        image:
          "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "E-commerce Core",
        description: "Built product management and cart functionality",
        code: "const cart = {\n  items: [],\n  addItem(product) {\n    this.items.push(product)\n  }\n}",
      },
      {
        title: "Payment Integration",
        description: "Added Stripe for secure payments",
        image:
          "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Content Management",
        description: "Developed CMS for educational articles",
        code: "app.post('/api/articles', authMiddleware, createArticle)",
      },
      {
        title: "Performance Optimization",
        description: "Achieved 95+ Lighthouse score",
        image:
          "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
    ],
  },
  {
    id: "influencerpulse",
    title: "InfluencerPulse",
    shortDescription: "AI-powered influencer marketing analytics platform",
    description:
      "A comprehensive SaaS platform that helps brands identify and collaborate with social media influencers through data-driven insights. Features real-time analytics, campaign tracking, and ROI measurement with machine learning recommendations.",
    category: "Frontend Development",
    pricing: {
      online: 15000,
      onsite: 18000,
    },
    type: "SaaS Platform",
    difficulty: "Advanced",
    estimatedTime: "3-4 months",
    thumbnail: Images.project2,

    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    githubUrl: "https://github.com/example/influencerpulse",
    demoUrl: "https://demo.influencerpulse.com",
    technologies: [
      { name: "React", icon: "atom" },
      { name: "Node.js", icon: "server" },
      { name: "MongoDB", icon: "database" },
      { name: "TensorFlow", icon: "brain-circuit" },
      { name: "D3.js", icon: "bar-chart-2" },
    ],
    features: [
      "AI-powered influencer matching",
      "Real-time campaign analytics",
      "Audience demographic insights",
      "Engagement rate prediction",
      "Multi-platform integration (IG, YouTube, TikTok)",
      "Automated reporting",
      "Team collaboration tools",
      "API for enterprise integration",
      "White-label solutions",
      "Payment processing",
    ],
    steps: [
      {
        title: "Market Research",
        description:
          "Conducted competitor analysis and user interviews to identify key features",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "ML Model Development",
        description:
          "Built recommendation engine using TensorFlow with 87% accuracy",
        code: "model = Sequential([\n  Dense(64, activation='relu', input_shape=(num_features,)),\n  Dense(32, activation='relu'),\n  Dense(1, activation='sigmoid')\n])",
      },
      {
        title: "Frontend Development",
        description: "Created interactive dashboards with React and D3.js",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Backend API",
        description:
          "Developed RESTful API with Node.js handling 500+ requests/sec",
        code: "app.get('/api/influencers', authMiddleware, async (req, res) => {\n  const influencers = await Influencer.find()\n  res.json(influencers)\n})",
      },
      {
        title: "Deployment",
        description: "Implemented CI/CD pipeline with AWS Elastic Beanstalk",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
    ],
  },
  {
    id: "maqbol-fashions",
    title: "MaqbolFashions",
    shortDescription: "AI-powered virtual try-on fashion platform",
    description:
      "Revolutionary e-commerce solution using computer vision for virtual clothing try-ons. Provides personalized recommendations and size predictions to reduce returns by 40%.",
    category: "Backend Development",
    pricing: {
      online: 15000,
      onsite: 18000,
    },
    type: "Fashion Tech",
    difficulty: "Advanced",
    estimatedTime: "5-6 months",
    thumbnail: Images.project3,
    coverImage:
      "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    githubUrl: "https://github.com/example/maqbolfashions",
    demoUrl: "https://demo.maqbolfashions.com",
    technologies: [
      { name: "React", icon: "atom" },
      { name: "Python", icon: "code" },
      { name: "OpenCV", icon: "camera" },
      { name: "TensorFlow", icon: "brain-circuit" },
      { name: "Node.js", icon: "server" },
    ],
    features: [
      "Virtual try-on",
      "Body measurement",
      "Style recommendations",
      "Wardrobe organizer",
      "Outfit planner",
      "Social sharing",
      "Multi-brand inventory",
      "Size prediction",
      "AR dressing room",
      "Trend analysis",
    ],
    steps: [
      {
        title: "Computer Vision",
        description: "Implemented OpenCV for body mapping",
        image:
          "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Recommendation Engine",
        description: "Built TensorFlow model for style suggestions",
        code: "model = tf.keras.Sequential([\n  tf.keras.layers.Dense(128, activation='relu'),\n  tf.keras.layers.Dense(64, activation='relu')\n])",
      },
      {
        title: "Frontend Development",
        description: "Created interactive UI with React",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "API Integration",
        description: "Connected frontend with Python backend",
        code: "app.get('/api/recommendations', getRecommendations)",
      },
      {
        title: "User Testing",
        description: "Conducted trials with 100+ participants",
        image:
          "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
    ],
  },
  {
    id: "internhub",
    title: "InternHub",
    shortDescription: "Tech internship matching platform",
    description:
      "AI-driven platform connecting computer science students with tech internships. Features skill assessment, personalized matching, application tracking, and interview preparation resources.",
    category: "Python Development",
    pricing: {
      online: 15000,
      onsite: 18000,
    },
    type: "Career Tech",
    difficulty: "Intermediate",
    estimatedTime: "3 months",
    thumbnail: Images.project4,
    coverImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    githubUrl: "https://github.com/example/internhub",
    demoUrl: "https://demo.internhub.com",
    technologies: [
      { name: "React", icon: "atom" },
      { name: "Node.js", icon: "server" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Python", icon: "code" },
      { name: "Scikit-learn", icon: "bar-chart-2" },
    ],
    features: [
      "AI matching",
      "Skill assessment",
      "Application tracking",
      "Company reviews",
      "Interview prep",
      "Resume builder",
      "Mentorship",
      "Coding challenges",
      "Event calendar",
      "Mobile friendly",
    ],
    steps: [
      {
        title: "Market Research",
        description: "Analyzed student needs and employer requirements",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Algorithm Development",
        description: "Built matching engine with scikit-learn",
        code: "vectorizer = TfidfVectorizer()\ntfidf = vectorizer.fit_transform(descriptions)",
      },
      {
        title: "Platform Development",
        description: "Created responsive frontend and backend API",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Testing",
        description: "Conducted beta tests with universities",
        code: "test('matches students correctly', () => {\n  expect(match(student, job)).toBe(true)\n})",
      },
      {
        title: "Launch",
        description: "Deployed with partner companies",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
    ],
  },
  {
    id: "ahexchanger",
    title: "Ahexchanger",
    shortDescription: "Cryptocurrency trading platform",
    description:
      "Professional-grade crypto exchange with spot trading, futures, and staking. Features advanced charting tools, algorithmic trading options, and enterprise-grade security measures.",
    category: "Web Development (Full Stack)",
    pricing: {
      online: 15000,
      onsite: 18000,
    },
    type: "FinTech",
    difficulty: "Advanced",
    estimatedTime: "6+ months",
    thumbnail: Images.project5,
    coverImage:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    githubUrl: "https://github.com/example/ahexchanger",
    demoUrl: "https://demo.ahexchanger.com",
    technologies: [
      { name: "React", icon: "atom" },
      { name: "Node.js", icon: "server" },
      { name: "MongoDB", icon: "database" },
      { name: "WebSocket", icon: "server" },
      { name: "D3.js", icon: "bar-chart-2" },
    ],
    features: [
      "Real-time trading",
      "Advanced charting",
      "Multiple order types",
      "Two-factor auth",
      "Cold wallet storage",
      "Trading API",
      "Mobile app",
      "Staking",
      "Fiat gateway",
      "Multi-language",
    ],
    steps: [
      {
        title: "Security Design",
        description: "Implemented cold storage and 2FA",
        image:
          "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Matching Engine",
        description: "Built high-performance order book",
        code: "class OrderBook {\n  constructor() {\n    this.bids = []\n    this.asks = []\n  }\n}",
      },
      {
        title: "Real-time Data",
        description: "Implemented WebSocket API",
        image:
          "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
      {
        title: "Charting",
        description: "Developed trading view with D3.js",
        code: "const chart = new TradingView({\n  container: '#chart',\n  data: historicalData\n})",
      },
      {
        title: "Compliance",
        description: "Added KYC/AML procedures",
        image:
          "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      },
    ],
  },
];
