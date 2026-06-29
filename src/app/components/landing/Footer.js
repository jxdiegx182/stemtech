import { brandName, footerContent, socialLinks } from "./landingData";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <Reveal className="mx-auto max-w-[1100px] px-5 py-10 text-center sm:px-6" variant="fade">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f2f4f6]">
          {footerContent.line}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#8d969f] transition-colors hover:text-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-7 text-sm text-[#ffffff] ">
          © {year} {brandName}. Todos los derechos reservados.
        </p>
      </Reveal>
    </footer>
  );
}
