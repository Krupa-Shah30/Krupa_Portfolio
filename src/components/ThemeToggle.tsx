
"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setDark(stored === 'dark');
    else setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 px-3 py-2 rounded-2xl bg-gray-200 dark:bg-gray-800 focus-ring"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
