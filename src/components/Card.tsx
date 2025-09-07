export default function Card({ title, summary, tags, published }: any) {
  return (
    <div className="rounded-2xl shadow-soft p-6 bg-white dark:bg-gray-900 hover:shadow-lg focus-ring cursor-pointer">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-2 text-gray-600 dark:text-gray-300">{summary}</p>
      <div className="flex gap-2 flex-wrap mb-2">
        {tags?.map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">{tag}</span>
        ))}
      </div>
      {published && <div className="text-xs text-gray-400">{published}</div>}
    </div>
  );
}
