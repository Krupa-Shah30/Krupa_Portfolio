import { getNotes } from '@lib/content';
import Card from '@components/Card';

export default function NotesPage() {
  const notes = getNotes();
  // TODO: implement tag filter logic
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {notes.map((note: any) => (
          <Card key={note.slug} {...note} />
        ))}
      </div>
    </main>
  );
}
