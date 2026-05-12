import Image from "next/image";
export default function Hero() {
   return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-15 px-10 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/StemBot3D.png"
            alt="StemBot3D logo"
            width={160}
            height={30}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Querido Algoritmo conéctame con otros locos obsesionados con Startup & Tech.
            </h1>
            
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Estas son mis redes sociales, sígueme para ver mis aventuras en el mundo de la tecnología y las startups. 
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
          </div>
          
            </main>
      </div>
    );
}