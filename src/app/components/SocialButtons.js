import Image from "next/image";
export default function SocialButtons() {
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.tiktok.com/@stem_bot_3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/tik-tok.png"
                alt="TikTok logomark"
                width={30}
                height={16}
              />
              TikTok
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://www.instagram.com/stembot3d/"
              target="_blank"
              rel="noopener noreferrer"
            >
  
              <Image
                className="dark"
                src="/instagram.png"
                alt="Instagram logomark"
                width={30}
                height={16}
              />
              Instagram
            </a>
          </div>
  );
}