export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    resume: string;
  };
}

export interface Education {
  course: string;
  school: string;
  year: string;
  score: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  links: {
    liveDemo: string;
    certificate: string;
  };
  highlights: string[];
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  stack: string[];
  links: {
    liveDemo: string;
    github: string;
  };
  highlights: string[];
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  fundamentals: string[];
}

export interface Position {
  role: string;
  org: string;
  period: string;
  highlights: string[];
}

export const profile: Profile = {
  name: "Saurav Priyanshu",
  title: "Full-Stack Developer",
  tagline: "I build products people can use, from the interface to the database.",
  location: "Delhi, India",
  email: "saurav.priyanshu.ug23@nsut.ac.in",
  phone: "+91-9717561754",
  links: { linkedin: "https://www.linkedin.com/in/saurav-priyanshu-14a528288/?isSelfProfile=false", github: "https://github.com/SauravPriyanshu", resume: "https://drive.google.com/file/d/1CRYcM0_zexv7CSHBi-mhTGqIGUEOegIw/view?usp=sharing" }
};

export const education: Education[] = [
  { course: "B.Tech, Computer Science and Artificial Intelligence", school: "Netaji Subhas University of Technology", year: "2027", score: "CGPA 7.77" },
  { course: "Class XII (CBSE)", school: "Govt. Boys Sr. Sec. School No. 1", year: "2023", score: "90.8%" },
  { course: "Class X (CBSE)", school: "Govt. Boys Sr. Sec. School No. 1", year: "2021", score: "85.2%" }
];

export const experience: Experience[] = [{
  role: "Full-Stack Development Intern", company: "Pingolearn", period: "Feb 2026 – Mar 2026",
  links: { liveDemo: "https://ugc-workflow-1050343791320.asia-south1.run.app/login", certificate: "#TODO" },
  highlights: [
    "Built CreatorOS, a creator operations and scheduling dashboard (React, Node.js, MongoDB).",
    "Engineered JWT authentication and Role-Based Access Control middleware as the sole backend developer, securing the platform for 1,040 production creators.",
    "Collaborated with the engineering team on the security architecture and used code-review feedback to harden the RBAC permission model.",
    "Designed the admin dashboard and content pipeline with primary ownership: 5 core MongoDB collections, 3 compound/unique indexes, and 2 automated nightly cron jobs for metrics snapshotting and archival."
  ]
}];

export const projects: Project[] = [
  { slug: "nexaflow", name: "NexaFlow", subtitle: "Real-time project management platform",
    stack: ["React","Node.js","MongoDB","Socket.io","Redis","Groq API","Jest","Supertest","GitHub Actions"],
    links: { liveDemo: "https://nexa-flow-nu.vercel.app/", github: "#TODO" },
    highlights: [
      "Real-time Kanban collaboration platform with JWT and Google OAuth dual authentication and a 5-tier RBAC model across organization and project scopes.",
      "Socket.io real-time updates across 3 room scopes (user, project, channel).",
      "6 AI strategies powered by the Groq API using the Strategy design pattern, including auto-extracting tasks from notes and chat.",
      "Redis caching and rate-limiting; 85%+ test coverage with Jest and Supertest; CI/CD via GitHub Actions."
    ] },
  { slug: "quickai", name: "QuickAI", subtitle: "AI content creation platform",
    stack: ["React","Node.js","PostgreSQL","Clerk","Groq SDK","Cloudinary"],
    links: { liveDemo: "https://quick-ai-six-lemon.vercel.app/", github: "#TODO" },
    highlights: [
      "AI article generation, image editing, and resume analysis (5MB upload validation), with Clerk authentication.",
      "Community feed and dashboard with real-time markdown rendering and Cloudinary image processing.",
      "Database-level 'like' deduplication using a composite unique constraint, cursor-based pagination, and a 10-generation freemium cap."
    ] }
];

export const achievements: string[] = [
  "98.91 percentile in JEE Main",
  "1500+ DSA problems solved",
  "LeetCode Guardian (rating 2257)",
  "Codeforces Specialist (rating 1477)"
];

export const hackathons: string[] = ["ISRO Bharatiya Antariksh Hackathon 2026","Adobe India Hackathon","Adobe University Hackathon 2026","L'Oréal Sustainability Challenge 2025"];
export const certifications: string[] = ["Supervised Machine Learning (Stanford & DeepLearning.AI)","C++ & DSA (GDSC & DevTown)"];

export const skills: Skills = {
  languages: ["C++","JavaScript","Python","SQL"],
  frontend: ["React.js","Redux Toolkit","Tailwind CSS","HTML","CSS"],
  backend: ["Node.js","Express.js","REST APIs","Socket.io","JWT"],
  databases: ["MongoDB","PostgreSQL","Redis"],
  tools: ["Git","GitHub","Postman","Vercel"],
  fundamentals: ["Data Structures & Algorithms","OOP","DBMS","Operating Systems","Computer Networks","System Design"]
};

export const positions: Position[] = [{ 
  role: "Volunteer Mentor", 
  org: "National Service Scheme (NSS), Volship Event", 
  period: "Jul 2024 – Aug 2024",
  highlights: ["Mentored 500+ high school students across Delhi government schools through career counseling workshops on academic pathways and competitive exams."] 
}];
