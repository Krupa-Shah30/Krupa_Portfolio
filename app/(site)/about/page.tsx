export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200">About Me</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I&apos;m a passionate Data Analyst and aspiring Data Scientist with a Master&apos;s in Information Systems 
            from the University of Maryland. I love solving complex problems with data and building systems 
            that make a real impact.
          </p>
          
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            My expertise spans across <strong>SQL</strong>, <strong>Python</strong>, <strong>Cloud Data Warehousing</strong> 
            (Snowflake, BigQuery, Databricks), <strong>BI Tools</strong> (Tableau, Power BI, Looker), and 
            <strong>Multimodal AI systems</strong>. From optimizing pipelines at Cognizant and Perdue Farms 
            to deploying IVR analytics at WorldLink and building a Video RAG system from scratch, I thrive 
            on crafting data-driven solutions that reduce latency, improve accuracy, and unlock new business value.
          </p>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Beyond data and systems, I absolutely love talking about finance, technology, and startups—and 
            I believe the most exciting work sits right at the overlap of these domains.
          </p>

          <blockquote className="italic text-gray-600 dark:text-gray-400 border-l-4 border-primary pl-4 mb-6">
            "One thing I believe in: the journey of learning never ends—every new skill mastered becomes 
            a stepping stone to the next frontier."
          </blockquote>

          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m excited for the conversations, projects, and opportunities that lie ahead on this journey!
          </p>
        </div>
      </section>
    </main>
  );
}
