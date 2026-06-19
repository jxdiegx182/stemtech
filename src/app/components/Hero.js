import Image from "next/image";
export default function Hero() {
  return (
    <div className=" w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-between gap-1 px-40 py-1 md:flex-row md:items-center bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/StemBot3D.png"
          alt="StemBot3D logo"
          width={200}
          height={60}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-2xl font-semibold leading-7 tracking-tight text-black dark:text-zinc-50 mb-3">
            Querido Algoritmo conéctame con otros locos obsesionados con Startups & Tech.
          </h2>
         
        </div>

      </header>
    </div>
  );
}