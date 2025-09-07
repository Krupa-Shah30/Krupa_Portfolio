export default function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">{label}</span>
  );
}
