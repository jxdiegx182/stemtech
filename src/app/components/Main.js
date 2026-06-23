export default function Main() {
    return (
        <div >
            <main >

                <div className="mx-auto flex flex-1 w-full max-w-8xl flex-col items-center justify-between gap-3 px-60  md:flex-row ">


                    <p className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-3">
                        STEM BOT 3D es una landing page minimalista creada para compartir lo que me gusta:
                    </p>

                </div>
                <div className="mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-between gap-30 px-25 py-3 md:flex-row md:items-center bg-white dark:bg-black sm:items-center">

                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <ul className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-9">
                            <li>💻Tecnología</li>
                            <li>⚙️Ingeniería</li>
                            <li>🤖Robótica</li>
                            <li>🎮Video Juegos</li>

                        </ul>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <ul className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400 px-9">

                            <li>💻Programación</li>
                            <li>🎨Diseño 3D</li>
                            <li>🧠IA</li>
                            <li>📚Matemáticas</li>
                        </ul>
                    </div>
                </div>

                
            </main>
        </div>
    );
}