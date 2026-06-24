import { projectsSection } from "./landingData";

const tagPositions = [
  "left-6 top-8",
  "right-8 top-12",
  "left-3 top-1/2",
  "right-3 top-[46%]",
  "left-10 bottom-16",
  "right-10 bottom-14",
  "left-1/2 top-4 -translate-x-1/2",
  "left-1/2 bottom-5 -translate-x-1/2",
];

export default function TechEcosystem() {
  const { ecosystem } = projectsSection;

  return (
    <div className="tech-ecosystem relative overflow-hidden rounded-lg border border-white/10 bg-[#090b0d] p-5 sm:p-7">
      <div className="tech-glow absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 max-w-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#009fe3]">
          {ecosystem.title}
        </p>
        <p className="mt-3 text-sm leading-6 text-[#8d969f]">
          {ecosystem.description}
        </p>
      </div>

      <div className="relative mx-auto mt-8 aspect-square w-[min(100%,520px)] max-w-[520px] sm:mt-10">
        {ecosystem.tags.map((tag, index) => (
          <span
            key={tag}
            className={`absolute z-20 hidden rounded-md border border-white/[0.08] bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8d969f] backdrop-blur sm:block ${tagPositions[index]}`}
          >
            {tag}
          </span>
        ))}

        <div className="tech-core absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009fe3]/25" aria-hidden="true" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 520 520"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="46%" r="58%">
              <stop offset="0%" stopColor="#009fe3" stopOpacity="0.3" />
              <stop offset="48%" stopColor="#003c60" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="260" cy="260" r="148" fill="url(#coreGradient)" />

          <g className="tech-orbit tech-orbit-a">
            <ellipse cx="260" cy="260" rx="190" ry="74" stroke="#009fe3" strokeOpacity="0.32" />
            <ellipse cx="260" cy="260" rx="116" ry="196" stroke="#009fe3" strokeOpacity="0.18" />
          </g>
          <g className="tech-orbit tech-orbit-b">
            <ellipse cx="260" cy="260" rx="210" ry="92" stroke="#f2f4f6" strokeOpacity="0.08" transform="rotate(34 260 260)" />
            <ellipse cx="260" cy="260" rx="82" ry="214" stroke="#009fe3" strokeOpacity="0.2" transform="rotate(34 260 260)" />
          </g>

          <path className="tech-connection" d="M166 214L228 168L318 190L370 264L332 342L236 362L164 304Z" stroke="#009fe3" strokeOpacity="0.5" strokeDasharray="7 12" />
          <path className="tech-connection tech-connection-alt" d="M228 168L260 260L370 264M260 260L236 362M260 260L166 214" stroke="#f2f4f6" strokeOpacity="0.14" strokeDasharray="5 14" />

          {[
            [166, 214, "0ms"],
            [228, 168, "280ms"],
            [318, 190, "560ms"],
            [370, 264, "840ms"],
            [332, 342, "1120ms"],
            [236, 362, "1400ms"],
            [164, 304, "1680ms"],
            [260, 260, "360ms"],
          ].map(([cx, cy, delay]) => (
            <circle
              key={`${cx}-${cy}`}
              className="tech-node"
              style={{ "--node-delay": delay }}
              cx={cx}
              cy={cy}
              r={cx === 260 && cy === 260 ? 6 : 4}
              fill="#009fe3"
            />
          ))}

          <g opacity="0.35">
            <circle cx="206" cy="242" r="1.8" fill="#f2f4f6" />
            <circle cx="292" cy="222" r="1.8" fill="#f2f4f6" />
            <circle cx="306" cy="306" r="1.8" fill="#f2f4f6" />
            <circle cx="222" cy="314" r="1.8" fill="#f2f4f6" />
            <circle cx="260" cy="198" r="1.8" fill="#f2f4f6" />
            <circle cx="260" cy="322" r="1.8" fill="#f2f4f6" />
          </g>
        </svg>

        <div className="absolute bottom-1 left-0 right-0 z-20 grid grid-cols-2 gap-2 sm:hidden">
          {ecosystem.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.08] bg-black/45 px-2 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8d969f]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
