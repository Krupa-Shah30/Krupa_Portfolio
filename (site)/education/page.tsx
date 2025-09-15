export default function EducationPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200">Education</h1>
        
        <div className="space-y-8">
          {/* Master's Degree */}
          <div className="rounded-2xl shadow-soft bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Master of Science in Information Systems</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">University of Maryland, Robert H. Smith School of Business</p>
              </div>
              <div className="text-sm text-gray-500 font-mono mt-2 md:mt-0">2023 - 2024</div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Data Analytics</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Database Management</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Business Intelligence</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Statistical Analysis</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Cloud Computing</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Specialized in data engineering, multimodal AI, and predictive modeling</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Conducted research on A/B testing and campaign analytics</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Worked on projects involving cloud data warehousing and real-time analytics</span>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="rounded-2xl shadow-soft bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Bachelor of Engineering in Information Technology</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">Gujarat Technological University</p>
              </div>
              <div className="text-sm text-gray-500 font-mono mt-2 md:mt-0">2017 - 2021</div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Areas:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Software Development</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Database Systems</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Web Technologies</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Built strong foundation in programming and system design</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Developed multiple software projects and web applications</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">▸</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Gained experience in database management and optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
