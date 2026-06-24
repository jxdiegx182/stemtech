import Icon from "./Icon";
import { ctaContent, whatsappUrl } from "./landingData";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section
      id="contacto"
      className="bg-black py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <Reveal className="rounded-lg border border-white/10 bg-[#090b0d] p-7 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#009fe3]">
              {ctaContent.label}
            </p>
            <h2 id="contact-title" className="text-3xl font-extrabold tracking-normal text-[#f2f4f6] sm:text-5xl">
              {ctaContent.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#8d969f]">
              {ctaContent.text}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-[#006ea0] bg-[#003c60]/70 px-5 py-3 text-sm font-bold text-[#d7f3ff] transition duration-200 hover:-translate-y-px hover:border-[#009fe3] hover:bg-[#003c60] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black"
            >
              <Icon name="message" className="h-4 w-4" />
              {ctaContent.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
