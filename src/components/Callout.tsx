type CalloutKind = 'tip' | 'warn';
export default function Callout({ kind = 'tip', children }: { kind?: CalloutKind; children: React.ReactNode }) {
  const colors: Record<CalloutKind, string> = {
    tip: 'bg-green-100 text-green-800',
    warn: 'bg-yellow-100 text-yellow-800',
  };
  return (
    <div className={`rounded-2xl p-4 mb-4 ${colors[kind as CalloutKind]}`}>{children}</div>
  );
}
