import Icon from "./Icon";
import SectionLabel from "./SectionLabel";
import { pillarsSection } from "./landingData";
import Reveal from "./Reveal";

export default function SolutionsSection() {
  return (
    <section
      id="servicios"
      className="bg-black py-24 sm:py-36"
      aria-labelledby="pillars-title"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <div className="max-w-2xl">
          <Reveal delay="0ms">
            <SectionLabel>{pillarsSection.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay="80ms" id="pillars-title" className="text-4xl font-extrabold tracking-normal text-[#f2f4f6] sm:text-5xl">
            {pillarsSection.title}
          </Reveal>
          <Reveal as="p" delay="160ms" className="mt-5 text-base leading-7 text-[#8d969f]">
            {pillarsSection.description}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {pillarsSection.items.map((pillar, index) => (
            <Reveal
              as="article"
              key={pillar.title}
              delay={index === 0 ? "120ms" : "240ms"}
              className="group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#090b0d] p-7 transition duration-300 hover:-translate-y-[3px] hover:border-[#009fe3]/45 hover:bg-[#0d1013] sm:p-9"
            >
              <p className="absolute right-7 top-6 font-mono text-7xl font-bold text-white/[0.035]">
                {pillar.number}
              </p>
              <div className="relative">
                <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-md border border-[#006ea0]/45 bg-[#003c60]/25 text-[#009fe3] transition duration-300 group-hover:border-[#009fe3]/75 group-hover:text-[#65cfff]">
                  <Icon name={pillar.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#f2f4f6]">{pillar.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#8d969f]">{pillar.description}</p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-[#101214] px-3 py-1.5 text-xs font-medium text-[#8d969f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
