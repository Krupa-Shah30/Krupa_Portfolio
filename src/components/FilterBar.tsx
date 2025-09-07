
"use client";
import { useState } from 'react';

const filters = ["Analytics", "ML", "PySpark/Big Data", "Finance", "Experimentation"];

export default function FilterBar() {
  const [active, setActive] = useState<string[]>([]);
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-3 py-1 rounded-2xl bg-gray-100 dark:bg-gray-800 text-sm ${active.includes(filter) ? 'bg-primary text-white' : ''}`}
          onClick={() => setActive((prev) => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter])}
        >
          {filter}
        </button>
      ))}
      {active.length > 0 && (
        <button className="ml-2 px-3 py-1 rounded-2xl bg-red-100 text-red-700 text-sm" onClick={() => setActive([])}>
          Clear
        </button>
      )}
    </div>
  );
}
