import Link from 'next/link';
import { siteConfig } from '@config/site';

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">I'm available for collaboration and consulting. Reach out via email or socials below.</p>
      <a href={`mailto:${siteConfig.socials.email}`} className="block mb-4 text-primary underline">{siteConfig.socials.email}</a>
      <div className="flex gap-4">
        <Link href={siteConfig.socials.github} target="_blank" aria-label="GitHub">GitHub</Link>
        <Link href={siteConfig.socials.linkedin} target="_blank" aria-label="LinkedIn">LinkedIn</Link>
        <Link href={siteConfig.socials.tableau} target="_blank" aria-label="Tableau">Tableau</Link>
      </div>
    </main>
  );
}
