export default function Main() {
    return (
        <div >
            <main >

                <div className="mx-auto flex flex-1 w-full max-w-8xl flex-col items-center justify-between gap-6 px-30  md:flex-row ">
                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <h2 className="max-w-xs text-2xl font-semibold leading-7 tracking-tight text-black dark:text-zinc-50"  >
                            🌌 Sobre el proyecto
                        </h2>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <p className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-3">
                            STEM BOT 3D es una landing page minimalista creada para compartir mi viaje en el mundo de:
                        </p>
                    </div>
                </div>
                <div className="mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-between gap-30 px-25 py-3 md:flex-row md:items-center bg-white dark:bg-black sm:items-center">

                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <ul className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-9">
                            <li>Tecnología</li>
                            <li>Ingeniería</li>
                            <li>Robótica</li>

                        </ul>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <ul className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-9">

                            <li>Programación</li>
                            <li>Diseño 3D</li>
                            <li>Inteligencia Artificial</li>
                        </ul>
                    </div>
                </div>


                <div className="mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-between gap-30 px-25 py-3 md:flex-row md:items-center bg-white dark:bg-black sm:items-center">

                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <h2 className="max-w-md text-2xl leading-7 text-zinc-600 items-center dark:text-zinc-400 px-3">
                            ⚡ Tech Stack </h2>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <ul className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-9">

                            <li>- Next.js</li>
                            <li>- React</li>
                            <li>- Tailwind CSS</li>
                            <li>- Node.js</li>
                        </ul>
                    </div>
                </div>

<div className="mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-between gap-30 px-25 py-2 md:flex-row md:items-center bg-white dark:bg-black sm:items-center">

                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <h2 className="max-w-md text-2xl leading-7 text-zinc-600 items-center dark:text-zinc-400 px-3">
                            🌍 Objetivo </h2>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <h2 className="max-w-md text-lg leading-7 text-zinc-600 items-center dark:text-zinc-400 px-3">
                            Construir proyectos tecnológicos reales, aprender públicamente y conectar con personas obsesionadas con crear cosas.</h2>
                    </div>
                </div>


            </main>
        </div>
    );
}