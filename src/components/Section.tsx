export default function Section({ children, title }: any) {
  return (
    <section className="mb-12">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
