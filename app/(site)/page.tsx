
"use client";
import { useState } from 'react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krupa-n-shah/' },
  { label: 'GitHub', href: 'https://github.com/Krupa-Shah30' },
  { label: 'Tableau', href: 'https://public.tableau.com/app/profile/krupa.nilesh.shah/vizzes' }
];

// const featuredProjects = [
//   {
//     title: 'Video RAG for QA on Videos',
//     summary: 'Multimodal RAG pipeline for question answering on local videos.',
//     tags: ['ML', 'RAG', 'Multimodal'],
//     repo: 'https://github.com/Krupa-Shah30/video-rag',
//     image: '/images/projects/video-rag/hero.png',
//     stack: ['Python', 'Whisper', 'CLIP', 'Qdrant', 'React', 'FastAPI'],
//   },
//   {
//     title: 'Agentic IVR (Twilio + MCP + Postgres + Milvus)',
//     summary: 'Agentic IVR system for data routing, SLAs, and compliance.',
//     tags: ['Analytics', 'IVR', 'Compliance'],
//     repo: '',
//     image: '/images/projects/agentic-ivr/hero.png',
//     stack: ['Twilio', 'MCP', 'Postgres', 'Milvus'],
//   },
//   {
//     title: 'Treadwell Tire-Life Prediction (Discount Tire)',
//     summary: 'Regression/GBM model for tire life prediction and business impact.',
//     tags: ['ML', 'Regression', 'GBM'],
//     repo: '',
//     image: '/images/projects/treadwell-tire/hero.png',
//     stack: ['Python', 'GBM', 'Feature Engineering'],
//   },
// ];

export default function HomePage() {
  // const [showIntro, setShowIntro] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setShowIntro(false), 1800);
  //   return () => clearTimeout(timer);
  // }, []);

  // Work experiences data
  const workExperiences = [
    {
      company: "WorldLink US",
      title: "Data Analyst",
      date: "May 2025 – Present",
      bullets: [
        "Built SQL- and Python-based workflows to analyze and monitor 25,000+ monthly customer intents, cutting manual review and improving leadership reporting accuracy.",
        "Designed dashboards and performance trackers that reduced IVR system routing time from 3.2s → 1.8s and cut customer wait times.",
        "Deployed an AWS-based analytics pipeline with compliance logging, shortening average call resolution by 2.5 minutes and boosting SLA adherence.",
        "Engineered reporting pipelines for 1,200+ task clusters, increasing retrieval efficiency by 1.4x for quality review."
      ]
    },
    {
      company: "University of Maryland, Robert H. Smith School of Business",
      title: "Research Assistant",
      date: "Sep 2024 – Dec 2024",
      bullets: [
        "Conducted A/B testing and statistical evaluations that led to $500K+ in strategic budget reallocations across three marketing campaigns.",
        "Created Tableau dashboards with 12+ KPIs for 10+ stakeholders, enabling weekly strategy pivots.",
        "Automated data collection from 15+ websites, saving 10+ analyst hours weekly while ensuring consistent datasets.",
        "Standardized reporting templates in Tableau/Excel to improve forecasting accuracy and campaign monitoring."
      ]
    },
    {
      company: "University of Maryland, Education Abroad Program",
      title: "Data Analyst",
      date: "Jan 2024 – Dec 2024",
      bullets: [
        "Optimized advisor–student workflows with dashboards & Salesforce reports, reducing approval lag by 35% for 500+ applications annually.",
        "Developed forecasting models and SQL-based reports, reallocating resources and cutting processing time by 20%.",
        "Led 10+ workshops to standardize KPI definitions across hubs, ensuring consistency on workload and completion rates.",
        "Implemented UAT-based QA testing, catching 100% of critical bugs and boosting application completion by 10%.",
        "Designed Figma prototypes and role-based dashboards that improved advisor caseload visibility, raising satisfaction by 40%."
      ]
    },
    {
      company: "Perdue Farms (Agribusiness)",
      title: "Business Analyst Intern",
      date: "May 2024 – Aug 2024",
      bullets: [
        "Built SQL & Python workflows in DataIKU, reducing reporting effort by 90% and speeding outage responses.",
        "Streamlined Power BI dashboards that exposed supply chain bottlenecks, preventing $250K+ in excess inventory costs.",
        "Rewrote SQL for 12+ Snowflake executive reports, halving refresh times and enabling faster decision-making.",
        "Partnered with the team on automation requirements, saving ~30% analyst effort per cycle while improving SLA compliance."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      title: "Data Analyst",
      date: "Sep 2021 – Jun 2023",
      bullets: [
        "Designed Snowflake BI data models and governance standards, enabling 7 business units to adopt scalable self-service analytics, reducing reliance on central teams by 60%.",
        "Built automated data validation within ETL, achieving 99.99% accuracy and cutting manual reconciliation time by 20%.",
        "Automated 50+ recurring reports with SQL workflows and validation, achieving 100% SLA compliance and saving 200+ hours/quarter.",
        "Optimized SQL queries with indexing and partitioning, reducing execution times by up to 70% and halving dashboard refresh rates."
      ]
    }
  ];

  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Animated Hero Section */}
      <section className="mb-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
        <img src="/Krupa_Portfolio/Krupa.jpg" alt="Krupa Shah" className="w-72 h-96 object-cover rounded-lg shadow-lg mb-6 md:mb-0" />
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-4 animate-fade-in">Hi, my name is</h1>
          <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">Krupa Shah.</h2>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I love to solve problems with Data.<br />
            I’m on a journey to master the intersection of Analytics, Data Engineering, and AI, constantly pushing myself to design smarter, more scalable systems.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            My expertise spans across <b>SQL</b>, <b>Python</b>, <b>Cloud Data Warehousing</b> (Snowflake, BigQuery, Databricks), <b>BI Tools</b> (Tableau, Power BI, Looker), and <b>Multimodal AI systems</b>.<br />
            From optimizing pipelines at Cognizant and Perdue Farms to deploying IVR analytics at WorldLink and building a Video RAG system from scratch, I thrive on crafting data-driven solutions that reduce latency, improve accuracy, and unlock new business value.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I’m always excited to collaborate on innovative projects—whether that’s scaling pipelines, experimenting with AI, or creating dashboards that truly tell a story. If you’d like to build something impactful together, feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center md:justify-start mb-6">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener" className="group relative text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ease-in-out">
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-4 justify-center md:justify-start mb-4">
            <a href="/Krupa_Portfolio/projects" className="px-6 py-3 bg-gray-700 text-white rounded-2xl border border-black shadow-soft hover:bg-gray-800">View Projects</a>
            <a href="/Krupa_Portfolio/resume.pdf" target="_blank" className="px-6 py-3 bg-gray-700 text-white rounded-2xl border border-black shadow-soft hover:bg-gray-800">Download Resume</a>
          </div>
        </div>
      </section>

      {/* About Me Section (moved above Featured Projects) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Me</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Beyond data and systems, I absolutely love talking about finance, technology, and startups—and I believe the most exciting work sits right at the overlap of these domains.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          I recently completed my Master’s in Information Systems at the University of Maryland, where I dove deep into everything from A/B testing and campaign analytics to cloud data engineering and predictive modeling. Along the way, I also got hooked on multimodal AI, experimenting with ways to combine text, vision, and audio for smarter, agentic systems.
        </p>
        <blockquote className="italic text-gray-600 dark:text-gray-400 border-l-4 border-primary pl-4 mb-4">
          “One thing I believe in: the journey of learning never ends—every new skill mastered becomes a stepping stone to the next frontier.”
        </blockquote>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          I’m excited for the conversations, projects, and opportunities that lie ahead on this journey!
        </p>
      </section>

        {/* Where I've Worked Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary flex items-center"><span className="text-red-400 mr-2">02.</span> Where I’ve Worked</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Vertical Tabs */}
            <div className="flex md:flex-col gap-2 md:gap-4 md:w-56">
              {workExperiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setSelectedWork(idx)}
                  className={`px-4 py-2 text-left rounded bg-gray-100 dark:bg-gray-800 text-sm font-mono border-l-4 transition-all ${selectedWork === idx ? 'border-red-400 font-bold bg-white dark:bg-gray-900 shadow' : 'border-transparent hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            {/* Experience Details */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">
                {workExperiences[selectedWork].title} <span className="font-normal">@ {workExperiences[selectedWork].company}</span>
              </h3>
              <div className="text-sm mb-4 text-gray-500 font-mono">{workExperiences[selectedWork].date}</div>
              <ul className="space-y-4">
                {workExperiences[selectedWork].bullets.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">▸</span>
                    <span className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded text-gray-800 dark:text-gray-200 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      {/* Featured Projects Grid (now below About Me) */}

      {/* Featured Project Section: Only Video QA System (VideoRAG) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Featured Project</h2>
        <div className="rounded-2xl shadow-soft bg-white dark:bg-gray-900 p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold mb-2">Video QA System (Multimodal RAG)</h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">Developed an end-to-end video question-answering pipeline. It intelligently extracts key frames, generates audio transcripts, embeds both modalities, and performs vector retrieval. The system supports natural-language queries and provides grounded answers with citations for enhanced reliability.</p>
          <div className="flex gap-2 flex-wrap mb-2">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Python</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">OpenAI/other embedding models</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">FAISS/Chroma</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Whisper</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">CLIP</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Flask/Streamlit</span>
          </div>
        </div>
      </section>
    </main>
  );
}
