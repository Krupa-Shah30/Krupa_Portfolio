import { siteConfig } from '@config/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t text-center text-sm">
      <div className="flex justify-center gap-4 mb-2">
        <Link href={siteConfig.socials.github} target="_blank" aria-label="GitHub">GitHub</Link>
        <Link href={siteConfig.socials.linkedin} target="_blank" aria-label="LinkedIn">LinkedIn</Link>
        <Link href={siteConfig.socials.tableau} target="_blank" aria-label="Tableau">Tableau</Link>
      </div>
      <div>© {new Date().getFullYear()} Kush (Krupa) Shah. Built with Next.js, Tailwind, shadcn/ui.</div>
    </footer>
  );
}
