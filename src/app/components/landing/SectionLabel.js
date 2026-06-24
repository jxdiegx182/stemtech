export default function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#009fe3]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#009fe3]" aria-hidden="true" />
      {children}
    </p>
  );
}
