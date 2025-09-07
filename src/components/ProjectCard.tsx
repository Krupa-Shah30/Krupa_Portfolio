export default function ProjectCard({ project }: any) {
  return (
    <a href={`/projects/${project.slug}`} className="block rounded-2xl shadow-soft p-6 bg-white dark:bg-gray-900 hover:shadow-lg focus-ring cursor-pointer">
      <img src={project.hero_image} alt={project.title} className="w-full h-32 object-cover rounded-2xl mb-4" />
      <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
      <p className="mb-2 text-gray-600 dark:text-gray-300">{project.summary}</p>
      <div className="flex gap-2 flex-wrap mb-2">
        {project.tags?.map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">{tag}</span>
        ))}
      </div>
      <div className="flex gap-2 text-xs text-gray-400">
        {project.stack?.map((tech: string) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </a>
  );
}
