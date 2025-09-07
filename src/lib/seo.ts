export const defaultSEO = {
  title: "Kush (Krupa) Shah Portfolio",
  description: "Portfolio of Kush (Krupa) Shah — Data Scientist, Analytics, ML/AI. Projects, experience, notes, and resume.",
  openGraph: {
    title: "Kush (Krupa) Shah Portfolio",
    description: "Portfolio of Kush (Krupa) Shah — Data Scientist, Analytics, ML/AI.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Kush (Krupa) Shah Portfolio OG Image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@KrupaShah30"
  }
};

type ProjectSEOInput = {
  title: string;
  summary: string;
  hero_image: string;
};

export function getProjectSEO(project: ProjectSEOInput) {
  return {
    title: `${project.title} | Kush (Krupa) Shah Portfolio`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        {
          url: project.hero_image,
          width: 1200,
          height: 630,
          alt: `${project.title} OG Image`
        }
      ]
    }
  };
}
