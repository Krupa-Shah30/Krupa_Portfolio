export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", description: "Data analysis, ML, automation" },
        { name: "SQL", level: "Advanced", description: "Complex queries, optimization, stored procedures" },
        { name: "R", level: "Intermediate", description: "Statistical analysis, data visualization" },
        { name: "JavaScript", level: "Intermediate", description: "Web development, automation" },
        { name: "TypeScript", level: "Intermediate", description: "Type-safe web applications" }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Tableau", level: "Advanced", description: "Dashboard design, advanced calculations" },
        { name: "Power BI", level: "Advanced", description: "Business intelligence, DAX" },
        { name: "Looker", level: "Intermediate", description: "Data modeling, LookML" },
        { name: "Excel", level: "Advanced", description: "Advanced formulas, pivot tables, VBA" },
        { name: "Pandas", level: "Advanced", description: "Data manipulation and analysis" },
        { name: "NumPy", level: "Advanced", description: "Numerical computing" }
      ]
    },
    {
      title: "Cloud & Data Warehousing",
      skills: [
        { name: "Snowflake", level: "Advanced", description: "Data warehousing, optimization" },
        { name: "BigQuery", level: "Intermediate", description: "Google Cloud analytics" },
        { name: "Databricks", level: "Intermediate", description: "Spark-based analytics" },
        { name: "AWS", level: "Intermediate", description: "S3, Lambda, RDS, Analytics services" },
        { name: "Azure", level: "Beginner", description: "Cloud services and data solutions" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: "Advanced", description: "Classification, regression, clustering" },
        { name: "TensorFlow", level: "Intermediate", description: "Deep learning models" },
        { name: "PyTorch", level: "Intermediate", description: "Neural networks, computer vision" },
        { name: "OpenAI APIs", level: "Intermediate", description: "GPT integration, embeddings" },
        { name: "Hugging Face", level: "Intermediate", description: "Transformers, NLP models" },
        { name: "CLIP", level: "Intermediate", description: "Multimodal AI, image-text models" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "Advanced", description: "Version control, collaboration" },
        { name: "Docker", level: "Intermediate", description: "Containerization, deployment" },
        { name: "Jupyter", level: "Advanced", description: "Interactive data analysis" },
        { name: "Streamlit", level: "Advanced", description: "Data app development" },
        { name: "Flask", level: "Intermediate", description: "Web API development" },
        { name: "Figma", level: "Intermediate", description: "UI/UX design, prototyping" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Intermediate":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "Beginner":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200">Skills & Technologies</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          My technical expertise spans across data analytics, machine learning, cloud computing, and software development.
        </p>
        
        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="rounded-2xl shadow-soft bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
