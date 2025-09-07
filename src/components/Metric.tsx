export default function Metric({ value }: { value: string }) {
  return (
    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-2xl font-semibold mr-2 mb-2">
      {value}
    </span>
  );
}
