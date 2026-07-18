type SectionLabelProps = {
  number: string;
  title: string;
  className?: string;
  lineClass?: string;
};

export function SectionLabel({
  number,
  title,
  className = "",
  lineClass = "bg-[#0F766E]",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 text-sm font-medium tracking-widest uppercase mb-12 ${className}`}>
      <span className="font-serif italic normal-case text-lg">{number}</span>
      <div className={`h-px w-12 ${lineClass} opacity-40`} />
      <span style={{ fontFamily: "'Inter', sans-serif" }}>{title}</span>
    </div>
  );
}
