import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krupa Shah - Data Analyst & AI Engineer',
  description: 'Portfolio of Krupa Shah - Data Analyst, Business Intelligence Expert, and AI Engineer specializing in analytics, machine learning, and data-driven solutions.',
  keywords: ['Data Analyst', 'Business Intelligence', 'Machine Learning', 'AI', 'Analytics', 'Python', 'SQL', 'Tableau'],
  authors: [{ name: 'Krupa Shah' }],
  openGraph: {
    title: 'Krupa Shah - Data Analyst & AI Engineer',
    description: 'Portfolio showcasing data analytics, AI projects, and business intelligence solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
