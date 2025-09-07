// Content loader for MDX files (projects, notes)
import fs from 'fs';
import path from 'path';

export function getProjects() {
  const dir = path.join(process.cwd(), 'content/projects');
  return fs.readdirSync(dir).map(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    // parse frontmatter and content (use gray-matter in real app)
    return { slug: file.replace(/\.mdx$/, ''), content };
  });
}

export function getNotes() {
  const dir = path.join(process.cwd(), 'content/notes');
  return fs.readdirSync(dir).map(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    return { slug: file.replace(/\.mdx$/, ''), content };
  });
}
