// All LinkedIn job search URL parameters and their values

export const TIME_OPTIONS = [
  { label: 'Last 5 minutes', value: 'r300' },
  { label: 'Last 15 minutes', value: 'r900' },
  { label: 'Last 30 minutes', value: 'r1800' },
  { label: 'Last 1 hour', value: 'r3600' },
  { label: 'Last 2 hours', value: 'r7200' },
  { label: 'Last 6 hours', value: 'r21600' },
  { label: 'Last 24 hours', value: 'r86400' },
  { label: 'Last week', value: 'r604800' },
  { label: 'Last month', value: 'r2592000' },
  { label: 'Any time', value: '' },
]

export const WORK_MODE = [
  { label: 'Any', value: '' },
  { label: 'Remote', value: '2' },
  { label: 'Hybrid', value: '3' },
  { label: 'On-site', value: '1' },
]

export const JOB_TYPE = [
  { label: 'Any', value: '' },
  { label: 'Full-time', value: 'F' },
  { label: 'Part-time', value: 'P' },
  { label: 'Contract', value: 'C' },
  { label: 'Temporary', value: 'T' },
  { label: 'Internship', value: 'I' },
  { label: 'Volunteer', value: 'V' },
  { label: 'Other', value: 'O' },
]

export const EXPERIENCE_LEVEL = [
  { label: 'Any', value: '' },
  { label: 'Internship', value: '1' },
  { label: 'Entry level', value: '2' },
  { label: 'Associate', value: '3' },
  { label: 'Mid-Senior level', value: '4' },
  { label: 'Director', value: '5' },
  { label: 'Executive', value: '6' },
]

export const SORT_BY = [
  { label: 'Most recent', value: 'DD' },
  { label: 'Most relevant', value: 'R' },
]

export const SALARY_RANGE = [
  { label: 'Any', value: '' },
  { label: '40,000+', value: '1' },
  { label: '60,000+', value: '2' },
  { label: '80,000+', value: '3' },
  { label: '100,000+', value: '4' },
  { label: '120,000+', value: '5' },
  { label: '140,000+', value: '6' },
  { label: '160,000+', value: '7' },
  { label: '180,000+', value: '8' },
  { label: '200,000+', value: '9' },
]

export const INDUSTRY = [
  { label: 'Any', value: '' },
  { label: 'Technology', value: '96' },
  { label: 'Software Development', value: '4' },
  { label: 'IT Services & IT Consulting', value: '6' },
  { label: 'Financial Services', value: '43' },
  { label: 'Banking', value: '41' },
  { label: 'Healthcare', value: '14' },
  { label: 'Education', value: '69' },
  { label: 'E-commerce', value: '107' },
  { label: 'Retail', value: '27' },
  { label: 'Manufacturing', value: '22' },
  { label: 'Consulting', value: '104' },
  { label: 'Advertising & Marketing', value: '80' },
  { label: 'Media & Telecom', value: '37' },
  { label: 'Real Estate', value: '44' },
  { label: 'Government', value: '75' },
  { label: 'Non-profit', value: '8' },
  { label: 'Automotive', value: '53' },
  { label: 'Aerospace & Defense', value: '52' },
  { label: 'Construction', value: '48' },
  { label: 'Logistics & Supply Chain', value: '24' },
]

export const COMPANY_SIZE = [
  { label: 'Any', value: '' },
  { label: 'Self-employed (1)', value: 'A' },
  { label: 'Startup (2–10)', value: 'B' },
  { label: 'Small (11–50)', value: 'C' },
  { label: 'Medium (51–200)', value: 'D' },
  { label: 'Growing (201–500)', value: 'E' },
  { label: 'Large (501–1000)', value: 'F' },
  { label: 'Enterprise (1001–5000)', value: 'G' },
  { label: 'Big Corp (5001–10000)', value: 'H' },
  { label: 'Giant (10000+)', value: 'I' },
]

// Popular LinkedIn skill IDs for multi-select
export const SKILLS = [
  // Programming Languages
  { label: 'Python', value: '7', category: 'Programming' },
  { label: 'JavaScript', value: '25', category: 'Programming' },
  { label: 'TypeScript', value: '152', category: 'Programming' },
  { label: 'Java', value: '9', category: 'Programming' },
  { label: 'C++', value: '2', category: 'Programming' },
  { label: 'C#', value: '3', category: 'Programming' },
  { label: 'Go', value: '521', category: 'Programming' },
  { label: 'Rust', value: '523', category: 'Programming' },
  { label: 'Ruby', value: '12', category: 'Programming' },
  { label: 'PHP', value: '11', category: 'Programming' },
  { label: 'Swift', value: '519', category: 'Programming' },
  { label: 'Kotlin', value: '522', category: 'Programming' },
  { label: 'R', value: '524', category: 'Programming' },
  { label: 'Scala', value: '525', category: 'Programming' },
  { label: 'Dart', value: '526', category: 'Programming' },

  // Frontend
  { label: 'React.js', value: '136', category: 'Frontend' },
  { label: 'Vue.js', value: '137', category: 'Frontend' },
  { label: 'Angular', value: '138', category: 'Frontend' },
  { label: 'Next.js', value: '532', category: 'Frontend' },
  { label: 'Svelte', value: '533', category: 'Frontend' },
  { label: 'HTML/CSS', value: '23', category: 'Frontend' },
  { label: 'Tailwind CSS', value: '534', category: 'Frontend' },
  { label: 'Redux', value: '535', category: 'Frontend' },

  // Backend
  { label: 'Node.js', value: '127', category: 'Backend' },
  { label: 'Django', value: '128', category: 'Backend' },
  { label: 'FastAPI', value: '540', category: 'Backend' },
  { label: 'Flask', value: '129', category: 'Backend' },
  { label: 'Spring Boot', value: '130', category: 'Backend' },
  { label: 'Laravel', value: '131', category: 'Backend' },
  { label: 'Ruby on Rails', value: '132', category: 'Backend' },
  { label: 'GraphQL', value: '541', category: 'Backend' },
  { label: 'REST APIs', value: '542', category: 'Backend' },

  // Database
  { label: 'SQL', value: '34', category: 'Database' },
  { label: 'PostgreSQL', value: '35', category: 'Database' },
  { label: 'MySQL', value: '36', category: 'Database' },
  { label: 'MongoDB', value: '37', category: 'Database' },
  { label: 'Redis', value: '38', category: 'Database' },
  { label: 'Elasticsearch', value: '543', category: 'Database' },
  { label: 'Cassandra', value: '544', category: 'Database' },

  // Cloud & DevOps
  { label: 'AWS', value: '511', category: 'Cloud & DevOps' },
  { label: 'Google Cloud (GCP)', value: '512', category: 'Cloud & DevOps' },
  { label: 'Azure', value: '513', category: 'Cloud & DevOps' },
  { label: 'Docker', value: '514', category: 'Cloud & DevOps' },
  { label: 'Kubernetes', value: '515', category: 'Cloud & DevOps' },
  { label: 'CI/CD', value: '516', category: 'Cloud & DevOps' },
  { label: 'Terraform', value: '517', category: 'Cloud & DevOps' },
  { label: 'Linux', value: '518', category: 'Cloud & DevOps' },
  { label: 'Jenkins', value: '545', category: 'Cloud & DevOps' },
  { label: 'GitHub Actions', value: '546', category: 'Cloud & DevOps' },

  // AI / ML / Data
  { label: 'Machine Learning', value: '450', category: 'AI & Data' },
  { label: 'Deep Learning', value: '451', category: 'AI & Data' },
  { label: 'NLP', value: '452', category: 'AI & Data' },
  { label: 'Computer Vision', value: '453', category: 'AI & Data' },
  { label: 'TensorFlow', value: '454', category: 'AI & Data' },
  { label: 'PyTorch', value: '455', category: 'AI & Data' },
  { label: 'Data Analysis', value: '406', category: 'AI & Data' },
  { label: 'Data Science', value: '407', category: 'AI & Data' },
  { label: 'Pandas', value: '547', category: 'AI & Data' },
  { label: 'Power BI', value: '548', category: 'AI & Data' },
  { label: 'Tableau', value: '408', category: 'AI & Data' },
  { label: 'Spark', value: '549', category: 'AI & Data' },

  // Mobile
  { label: 'React Native', value: '161', category: 'Mobile' },
  { label: 'Flutter', value: '162', category: 'Mobile' },
  { label: 'iOS Development', value: '163', category: 'Mobile' },
  { label: 'Android Development', value: '164', category: 'Mobile' },

  // Management / Soft Skills
  { label: 'Project Management', value: '75', category: 'Management' },
  { label: 'Agile', value: '76', category: 'Management' },
  { label: 'Scrum', value: '77', category: 'Management' },
  { label: 'Product Management', value: '78', category: 'Management' },
  { label: 'Team Leadership', value: '79', category: 'Management' },
  { label: 'Communication', value: '80', category: 'Management' },

  // Design
  { label: 'UI/UX Design', value: '201', category: 'Design' },
  { label: 'Figma', value: '202', category: 'Design' },
  { label: 'Adobe XD', value: '203', category: 'Design' },

  // Security
  { label: 'Cybersecurity', value: '301', category: 'Security' },
  { label: 'Penetration Testing', value: '302', category: 'Security' },
  { label: 'Network Security', value: '303', category: 'Security' },
]

export const SKILL_CATEGORIES = [...new Set(SKILLS.map(s => s.category))]
