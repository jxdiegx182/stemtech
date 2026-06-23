import Image from "next/image";
export default function SocialButtons() {
  return (
    <div className="w-full bg-white dark:bg-black px-70 py-2">



      <p className="max-w-md text-lg leading-6 text-zinc-600 dark:text-zinc-400 mb-3">
        Estas son mis redes sociales, sígueme para ➕:
        {" "}
        <a
          href="https://www.tiktok.com/@stem_bot_3d"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          TikTok
        </a>{" "}
        o{" "}
        <a
          href="https://www.instagram.com/stembot3d/"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Instagram
        </a>{" "}
      </p>




      <div className="mx-auto flex flex-1 w-full max-w-8xl flex-col items-center justify-between gap-10 px-10 py-2 md:flex-row ">
        <div className="flex w-full justify-center md:w-1/2 md:justify-start">
          <a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
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
        </div>

        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
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
      </div>
    </div>
  );
}