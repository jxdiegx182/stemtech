import Image from "next/image";
import Hero from "./components/Hero";
import SocialButtons from "./components/SocialButtons";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-15 px-10 bg-white dark:bg-black sm:items-start">
             
        <Hero />
        <SocialButtons />
      </main>
    </div>
  );
}
