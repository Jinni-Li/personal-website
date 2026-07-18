const checkerCells = Array.from({ length: 12 }, (_, index) => index);

const coordinateNotes = [
  {
    label: "Target",
    value: "Software engineering · Data infrastructure · Product-minded engineering",
    accent: "jade",
  },
  {
    label: "Strongest proof",
    value: "l0-stream-sampler · Streaming algorithms · C++/Python",
    accent: "ink",
    serif: true,
  },
  {
    label: "Building lens",
    value: "Useful tools · AI-enabled workflows · Reliable data systems",
    accent: "ink",
  },
  {
    label: "Location",
    value: "UK · Bristol / London",
    accent: "jade",
  },
  {
    label: "Seeking",
    value: "Software roles around systems, data, AI, or product engineering.",
    accent: "terracotta",
  },
];

function CheckerStrip() {
  return (
    <div className="grid h-48 w-3 grid-rows-12 overflow-hidden border border-[#2C2621]">
      {checkerCells.map((cell) => (
        <span
          key={cell}
          className={`${cell % 2 === 0 ? "bg-[#2C2621]" : "bg-transparent"}`}
        />
      ))}
    </div>
  );
}

function NoteMark() {
  return (
    <div className="relative h-8 w-8" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[#2C2621]"
        style={{
          clipPath:
            "polygon(50% 0, 58% 31%, 85% 15%, 69% 42%, 100% 50%, 69% 58%, 85% 85%, 58% 69%, 50% 100%, 42% 69%, 15% 85%, 31% 58%, 0 50%, 31% 42%, 15% 15%, 42% 31%)",
        }}
      />
    </div>
  );
}

type CoordinatesNoteProps = {
  className?: string;
};

export function CoordinatesNote({ className = "" }: CoordinatesNoteProps) {
  return (
    <aside
      aria-label="Current portfolio coordinates"
      className={`relative w-full max-w-[23rem] bg-[#F9F6F0]/80 px-5 py-5 shadow-[7px_7px_0_rgba(44,38,33,0.08)] md:px-6 md:py-6 ${className}`}
    >
      <span className="absolute left-0 top-0 h-9 w-px bg-[#2C2621]" />
      <span className="absolute left-0 top-0 h-px w-24 bg-[#2C2621]" />
      <span className="absolute right-0 top-0 h-9 w-px bg-[#2C2621]" />
      <span className="absolute right-0 top-0 h-px w-24 bg-[#2C2621]" />
      <span className="absolute bottom-0 left-0 h-px w-24 bg-[#2C2621]" />
      <span className="absolute bottom-0 right-0 h-px w-24 bg-[#2C2621]" />

      <div className="mb-6 flex items-start justify-between gap-6 border-b border-[#2C2621]/20 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#2C2621]/55">
          Coordinates note
        </span>
        <NoteMark />
      </div>

      <div className="flex gap-5">
        <CheckerStrip />

        <div className="flex-1 space-y-5">
          {coordinateNotes.map((item, index) => (
            <div
              key={item.label}
              className={`relative ${index > 0 ? "border-t border-[#2C2621]/12 pt-5" : ""}`}
            >
              <span
                className={`mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${
                  item.accent === "jade"
                    ? "text-[#0F766E]"
                    : item.accent === "terracotta"
                      ? "text-[#C2410C]"
                      : "text-[#2C2621]/45"
                }`}
              >
                {item.accent === "jade" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />
                )}
                {item.label}
              </span>
              <span
                className={`block text-sm leading-6 text-[#2C2621] ${
                  item.serif ? "font-serif italic" : "font-medium"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
