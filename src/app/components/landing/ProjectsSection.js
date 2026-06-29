import Icon from "./Icon";
import SectionLabel from "./SectionLabel";
import TechEcosystem from "./TechEcosystem";
import { projectsSection } from "./landingData";
import Reveal from "./Reveal";

function ProjectPlaceholder({ icon }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-md border border-white/[0.08] bg-[#090b0d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,159,227,0.14),transparent_9rem),linear-gradient(135deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,28px_28px]" />
      <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-[#006ea0]/45 bg-[#003c60]/25 text-[#009fe3]">
        <Icon name={icon} className="h-6 w-6" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-24 sm:py-36"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <div className="max-w-2xl">
          <Reveal delay="0ms">
            <SectionLabel>{projectsSection.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay="80ms" id="projects-title" className="text-4xl font-extrabold tracking-normal text-[#f2f4f6] sm:text-5xl">
            {projectsSection.title}
          </Reveal>
          <Reveal as="p" delay="160ms" className="mt-5 text-base leading-7 text-[#8d969f]">
            {projectsSection.description}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_minmax(380px,520px)] lg:items-start">
          <div className="grid gap-5 md:grid-cols-2">
            {projectsSection.items.map((project, index) => (
              <Reveal
                as="article"
                key={project.title}
                delay={`${index * 100}ms`}
                className="group rounded-lg border border-white/10 bg-[#101214] p-5 transition duration-300 hover:-translate-y-px hover:border-[#009fe3]/45 hover:bg-[#12171a] sm:p-6"
              >
                <ProjectPlaceholder icon={project.icon} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-[#009fe3]">{project.number}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f6870]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-7 text-[#f2f4f6]">{project.title}</h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/[0.08] text-[#8d969f] transition duration-300 group-hover:translate-x-1 group-hover:border-[#009fe3]/45 group-hover:text-[#009fe3]">
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#8d969f]">{project.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" delay="180ms">
            <TechEcosystem />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
