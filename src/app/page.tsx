import { SunIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <main className="flex flex-col h-full w-full items-center justify-center p-4">
        <SunIcon className="h-20 w-20" />
        <h1 className={`${comfortaa.className} text-5xl font-black text-center`}>aurora</h1>
        <p className="tracking-[16px] text-center pl-4">planner</p>
        <img src="/images/construction.svg" alt="Construção" className="max-h-96 max-w-96 mt-10" />
        <p className="mt-10 text-center">O aplicativo ainda está em construção, mas em breve estaremos online para te ajudar!</p>
    </main>
  );
};

export default Home;
