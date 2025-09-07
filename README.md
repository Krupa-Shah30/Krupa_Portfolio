# Kush (Krupa) Shah Portfolio

Production-ready Next.js 14+ portfolio for Data Science, Analytics, ML/AI roles.

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run locally:
   ```powershell
   npm run dev
   ```
3. Build for production:
   ```powershell
   npm run build
   ```
4. Lint & format:
   ```powershell
   npm run lint; npm run format
   ```
5. Typecheck:
   ```powershell
   npm run typecheck
   ```

## Add a New Project
- Add a new `.mdx` file to `/content/projects/` with frontmatter:
  ```mdx
  ---
  title: "Project Title"
  slug: "project-slug"
  summary: "Short summary."
  tags: ["Tag1","Tag2"]
  role: "Role"
  timeline: "Year"
  repo: "https://github.com/..."
  demo: ""
  stack: ["Tech1","Tech2"]
  metrics:
    - "Outcome 1"
    - "Outcome 2"
  hero_image: "/images/projects/project-slug/hero.png"
  gallery:
    - "/images/projects/project-slug/flow.png"
  ---
  {content}
  ```

## Add a New Note
- Add a new `.mdx` file to `/content/notes/` with frontmatter:
  ```mdx
  ---
  title: "Note Title"
  slug: "note-slug"
  summary: "Short summary."
  tags: ["Tag1","Tag2"]
  published: "YYYY-MM-DD"
  ---
  {content}
  ```

## Update Nav/Socials/Resume
- Edit `/src/config/site.ts` for site metadata, nav links, and socials.
- Place your resume at `/public/resume.pdf`.

## Deploy to Vercel
- Push to GitHub and import to Vercel.
- Set build command: `npm run build` and output: `.next`
- Add environment variables if needed.

---

For full spec, see `/README.md` and `/src/config/site.ts`.
