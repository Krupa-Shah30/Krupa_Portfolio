import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="mb-6">Download my resume as a PDF below.</p>
      <Link href="/resume.pdf" target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-primary text-white rounded-2xl shadow-soft hover:bg-primary/80 focus-ring">
        Download PDF
      </Link>
    </main>
  );
}
