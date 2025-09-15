"use client";
import { useState } from 'react';

export default function ExperiencePage() {
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
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200">Work Experience</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          My professional journey in data analytics, business intelligence, and system optimization.
        </p>
        
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
    </main>
  );
}
