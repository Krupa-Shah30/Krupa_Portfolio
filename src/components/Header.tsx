
import Link from 'next/link';
import ThemeToggle from '@components/ThemeToggle';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krupa-n-shah/' },
  { label: 'GitHub', href: 'https://github.com/Krupa-Shah30' },
  { label: 'Tableau', href: 'https://public.tableau.com/app/profile/krupa.nilesh.shah/vizzes' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-soft">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 gap-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-2xl tracking-tight">Krupa Shah</span>
          <span className="text-sm text-gray-500">(240) 413-0569</span>
          <a href="mailto:kshah30@umd.edu" className="text-sm text-primary underline">kshah30@umd.edu</a>
        </div>
        <ul className="flex gap-4 flex-wrap items-center">
          {socials.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener" className="hover:underline focus-ring text-sm text-gray-700 dark:text-gray-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
