// Content loader for MDX files (projects, notes)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getProjects() {
  const dir = path.join(process.cwd(), 'content/projects');
  if (!fs.existsSync(dir)) {
    return [];
  }
  
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title || file.replace(/\.mdx$/, ''),
        summary: data.summary || data.description || '',
        tags: data.tags || [],
        published: data.published || data.date || null,
        content,
        ...data
      };
    });
}

export function getNotes() {
  const dir = path.join(process.cwd(), 'content/notes');
  if (!fs.existsSync(dir)) {
    return [];
  }
  
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title || file.replace(/\.mdx$/, ''),
        summary: data.summary || data.description || '',
        tags: data.tags || [],
        published: data.published || data.date || null,
        content,
        ...data
      };
    });
}

export function getNote(slug: string) {
  const filePath = path.join(process.cwd(), 'content/notes', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || slug,
    summary: data.summary || data.description || '',
    tags: data.tags || [],
    published: data.published || data.date || null,
    content,
    ...data
  };
}
