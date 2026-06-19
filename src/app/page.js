import Hero from "./components/Hero";
import Graph from "./components/Graph";
import SocialButtons from "./components/SocialButtons";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-1 px-1 bg-white dark:bg-black sm:items-start">
             
        <Hero />
        <SocialButtons />
         <Graph/>
          
      </main>
    </div>
  );
}
