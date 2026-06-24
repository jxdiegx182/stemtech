import Icon from "./Icon";
import { heroContent, whatsappUrl } from "./landingData";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-tech-background relative min-h-[720px] overflow-hidden border-b border-white/[0.06] pt-[68px]"
      aria-labelledby="hero-title"
    >
      <div className="hero-dot-wave pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="ambient-glow hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[652px] max-w-[1100px] flex-col items-center justify-center px-5 pb-24 pt-28 text-center sm:px-6">
        <div className="flex max-w-[820px] flex-col items-center">
          <Reveal as="p" delay="0ms" speed="fast" className="mb-7 text-[11px] font-bold uppercase tracking-[0.28em] text-[#009fe3]">
            {heroContent.label}
          </Reveal>
          <Reveal
            as="h1"
            delay="100ms"
            speed="slow"
            id="hero-title"
            className="max-w-[820px] text-balance text-[40px] font-extrabold leading-[1.05] tracking-normal text-[#f2f4f6] sm:text-[58px] lg:text-[68px]"
          >
            {heroContent.title}
          </Reveal>
          <Reveal as="p" delay="180ms" speed="medium" className="mt-6 max-w-[660px] text-pretty text-base leading-7 text-[#8d969f] sm:text-lg">
            {heroContent.description}
          </Reveal>

          <Reveal delay="260ms" speed="medium" className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#006ea0] bg-[#003c60]/70 px-5 py-3 text-sm font-bold text-[#d7f3ff] transition duration-200 hover:-translate-y-px hover:border-[#009fe3] hover:bg-[#003c60] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black"
            >
              <Icon name="terminal" className="h-4 w-4" />
              {heroContent.primaryCta}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#090b0d]/60 px-5 py-3 text-sm font-bold text-[#c8d0d7] transition duration-200 hover:-translate-y-px hover:border-[#006ea0] hover:text-[#8fdcff] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black"
            >
              <Icon name="message" className="h-4 w-4" />
              {heroContent.secondaryCta}
            </a>
          </Reveal>

          <Reveal as="p" delay="340ms" speed="fast" variant="fade" className="mt-8 text-xs font-medium tracking-[0.18em] text-[#5f6870]">
            {heroContent.meta}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
