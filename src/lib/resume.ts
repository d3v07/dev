// The facts every page draws from, taken from Dev Trivedi's resume.

export const contact = {
  email: 'trivedidev16@gmail.com',
  linkedin: 'https://linkedin.com/in/trivedi-dev',
  github: 'https://github.com/d3v07',
  location: 'New Jersey, USA',
  resume: '/Dev Trivedi.pdf',
}

export const projects = [
  {
    title: 'Ride Share Platform',
    description: 'Full-stack ride-sharing MVP with geohash nearest-neighbor matching, OSRM routing, and real-time updates via Socket.IO.',
    longDescription: 'Built a ride-sharing platform on the MERN stack (MongoDB, Express, React, Node.js) with JWT authentication, role-based access control and real-time location tracking. Geohash-based nearest-neighbor matching pairs drivers with riders, OSRM calculates the route, and Socket.IO carries live updates both ways between driver and rider.',
    reading: { value: '90.4%', label: 'uptime, containerized' },
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'JWT', 'Socket.IO', 'Vercel'],
    date: 'June 2025 to August 2025',
    year: '2025',
    highlights: [
      { figure: '90.4%', text: 'uptime with containerized deployment' },
      { figure: '< 1 s', text: 'ride matching latency' },
      { text: 'Real-time location updates' },
      { text: 'Secure authentication with JWT' },
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
  {
    title: 'Cyber Threat Predictor',
    description: 'ML-powered IIoT security system over 2.1M network packets, with a federated learning pipeline that improved cross-site AUC by 0.21.',
    longDescription: 'A machine learning system that detects cyber threats in Industrial IoT networks. It processed 2.1 million network packets through tuned preprocessing and feature engineering, then trained an ensemble of SVM and Random Forest models at 0.1s inference per sample. A federated learning pipeline improves cross-site detection while each site keeps its data.',
    reading: { value: '94.1%', label: 'threat detection accuracy' },
    tags: ['Python', 'Django', 'SVM', 'Random Forest', 'Machine Learning', 'Federated Learning'],
    date: 'May 2025 to July 2025',
    year: '2025',
    highlights: [
      { figure: '94.1%', text: 'threat detection accuracy' },
      { figure: '34%', text: 'fewer false positives' },
      { figure: '2.1M', text: 'network packets processed' },
      { figure: '0.1 s', text: 'inference latency' },
      { text: 'Federated learning for privacy' },
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
  {
    title: 'ChatterBox',
    description: 'Terminal-based multi-user chat in C++ using System V IPC, RAII wrappers and thread synchronization, with 0.4s average latency.',
    longDescription: 'A terminal chat application in C++ built to exercise systems programming. System V IPC carries messages between processes, RAII wrappers manage every resource, and mutex-protected server-client concurrency handles many connections at once. A custom lightweight binary protocol with timestamps keeps delivery in order.',
    reading: { value: '50+', label: 'concurrent users' },
    tags: ['C++', 'System V IPC', 'Threading', 'RAII', 'Concurrency', 'Binary Protocol'],
    date: 'February 2025 to May 2025',
    year: '2025',
    highlights: [
      { figure: '50+', text: 'concurrent users supported' },
      { figure: '0.4 s', text: 'average response latency' },
      { figure: '93%', text: 'fewer dropped messages' },
      { text: 'Custom binary protocol' },
      { text: 'Thread-safe architecture' },
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
]

export const experience = [
  {
    company: 'RR Enterprise',
    position: 'Software Development Engineer',
    location: 'Remote',
    period: 'July 2024 to December 2024',
    summary: 'A C++ pipeline from AWS S3 into MongoDB, 10,000 records a day.',
    achievements: [
      'Engineered a C++ AWS S3 ingestion pipeline processing 10,000 records daily into MongoDB, reducing manual effort',
      'Built a React + Express dashboard on AWS Amplify giving managers insight into project timelines and budgets',
      'Designed secure Node.js REST APIs on AWS EC2 with Swagger + JWT, boosting cross-team data access by 75%',
      'Implemented structured logging and automated health checks with CloudWatch, enabling service monitoring',
    ],
  },
  {
    company: 'Nuance Media',
    position: 'Software Development Engineer',
    location: 'Remote',
    period: 'September 2023 to May 2024',
    summary: 'React on Vercel, MongoDB tuning, and CI/CD that cut release time by 40%.',
    achievements: [
      'Delivered optimized React applications on Vercel with code-splitting, improving client campaign performance',
      'Optimized complex MongoDB schemas with compound indexes, reducing latency from 400ms to 180ms',
      'Shipped 20+ critical features in Agile sprints using Jira, GitHub and Jest, with testing on every deliverable',
      'Automated build and deployment workflows with GitHub Actions for CI/CD, cutting release cycle time by 40%',
    ],
  },
]

export const education = [
  {
    school: 'New Jersey Institute of Technology',
    degree: 'Master of Science in Computer Science',
    location: 'Newark, New Jersey',
    period: 'January 2025 to December 2026',
    gpa: '4.0',
    coursework: ['Operating Systems', 'Database Management System', 'Web Development', 'Machine Learning', 'Big Data'],
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Malla Reddy Engineering College, India',
    period: 'November 2020 to July 2024',
    gpa: undefined,
    coursework: ['Data Structures', 'Algorithms', 'Software Engineering', 'Computer Networks', 'Database Systems'],
  },
]

export const leadership = [
  {
    title: 'Team Lead',
    organization: 'Qualcomm AI Hackathon, NYU',
    location: 'New York City',
    date: 'September 2025',
    description: 'Led a 4-member team to build an edge-based computer vision prototype with Qualcomm AI Stack',
  },
  {
    title: 'Event Coordinator',
    organization: 'NJIT GDG',
    location: 'Newark',
    date: 'April 2025',
    description: 'Organized coding workshops and peer-learning sessions for 40+ students, fostering collaboration in emerging technologies',
  },
]

export const skillCategories = [
  { title: 'Programming languages', skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'] },
  { title: 'Frontend', skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JSON'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'Django', 'System V IPC'] },
  { title: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'DynamoDB', 'SQL Database'] },
  { title: 'Cloud platforms', skills: ['AWS (EC2, S3, Lambda)', 'Azure', 'CloudWatch', 'Vercel', 'Amplify'] },
  { title: 'DevOps and testing', skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Jest', 'Jira'] },
]
