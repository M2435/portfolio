export const profile = {
  name: "Mallu Mounith Reddy",
  location: "Andhra Pradesh, India",
  role: "AI/ML Engineer & Backend Developer",
  photo: "/images/profile.png",
  bio: "Integrated M.Tech Computer Science Engineering student at VIT-AP University, building intelligent systems across NLP, computer vision, and backend engineering — from fine-tuned language models to real-time detection pipelines and production-ready APIs.",
  email: "mounith9336reddy@gmail.com",
  phone: "+91 9059490336",
  github: "https://github.com/M2435",
  linkedin: "https://www.linkedin.com/in/mounith-reddy/",
  resumeFile: "/resume/Mounith_Reddy_Resume.pdf",
};

export const education = [
  {
    degree: "Integrated M.Tech, Computer Science Engineering",
    school: "VIT-AP University, Andhra Pradesh, India",
    period: "2022 – 2027",
    detail: "CGPA: 8.84 / 10",
  },
  {
    degree: "Class 12 — TSBIE",
    school: "Telangana State Board of Intermediate Education",
    period: "2020 – 2022",
    detail: "97.8%",
  },
  {
    degree: "Class 10 — SSC",
    school: "Secondary School of Certificate",
    period: "2020",
    detail: "100%",
  },
];

export const skills = {
  Languages: ["Java", "Python"],
  "AI / ML": ["Machine Learning", "Deep Learning", "NLP", "OpenCV", "TensorFlow"],
  "Backend & Databases": [
    "Spring Boot",
    "Flask",
    "RESTful APIs",
    "MonetDB (SQL)",
    "Redis",
    "Neo4j",
    "MongoDB",
  ],
  "Developer Tools": ["Git", "GitHub", "Linux", "Jupyter Notebook", "VS Code"],
};

export const projects = [
  {
    title: "College Chatbot",
    date: "March 2025",
    featured: true,
    description:
      "An intelligent chatbot powered by a fine-tuned RoBERTa model for precise intent recognition and context-aware responses, served through a Flask backend with custom text preprocessing.",
    highlights: [
      "Fine-tuned Hugging Face RoBERTa for intent recognition and response generation",
      "Built a low-latency Flask backend with custom preprocessing for real-time chat",
      "Optimized inference to a 1.4s average response time",
    ],
    tags: ["Python", "Flask", "Hugging Face", "RoBERTa", "NLP"],
  },
  {
    title: "PharmaMaskGuard",
    date: "November 2024",
    featured: false,
    description:
      "A real-time mask detection system built on MobileNetV2-based CNNs for workplace safety compliance, with live webcam inference for contactless monitoring.",
    highlights: [
      "Built an end-to-end CV pipeline with data augmentation and confusion-matrix analysis",
      "Achieved high model precision through targeted training and evaluation",
      "Enabled live webcam inference with optimized frame-per-second performance",
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2"],
  },
  {
    title: "SpringBoot Wellness Tracker",
    date: "August 2025",
    featured: false,
    description:
      "A RESTful backend application for tracking users, moods, and daily activity, built on a modular, layered Spring Boot architecture.",
    highlights: [
      "Designed CRUD operations for users, moods, and daily activity tracking",
      "Structured a modular layered architecture for scalability and testability",
      "Implemented endpoints for real-time data handling and persistence",
    ],
    tags: ["Java", "Spring Boot", "Maven", "MySQL"],
  },
];

export const achievements = [
  {
    title: "LeetCode Top 10%",
    detail: "Solved 200+ problems on LeetCode; 2★ on CodeChef.",
  },
  {
    title: "Published Research — RAISE DS 2025",
    detail:
      "Developed ViT-CNN-ECA, a hybrid transformer-convolutional network for brain tumor MRI classification; work accepted for publication at the RAISE DS 2025 conference.",
  },
];

// Add entries here once certificate images are available, e.g.
// { name: "Certification Name", issuer: "Issuer", date: "Month Year", image: "/certifications/file.jpg" }
export const certifications = [
  {
    name: "Certified Hedera Developer",
    issuer: "IDS Inc. × The Hashgraph Association, VIT-AP University",
    date: "Feb 2026",
    image: "/certifications/hedera-developer-workshop.jpg",
  },
];
