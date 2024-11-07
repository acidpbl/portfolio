import * as Icon from "@phosphor-icons/react";
import me from "./assets/p.jpg";
import projects from "./projects.json";
import { contact } from "./contact";
import { Corinthians } from "./assets/Corinthians";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

function App() {
  const [projectVisible, setProjectVisible] = useState<number | null>(null);
  return (
    <>
      <div className="w-screen h-screen bg-neutral-950 grid grid-cols-4 grid-rows-7 gap-2 p-4 noise">
        <header className="w-full rounded-md bg-neutral-800 flex items-center justify-center p-4 col-span-4">
          <span className="text-neutral-200 font-mono text-xl">
            Pablo's Portfolio
          </span>
        </header>
        <div className="rounded-md bg-neutral-800 col-span-3 row-span-2 row-start-2 p-4 flex flex-col gap-2">
          <h1 className="text-xl text-indigo-600 font-bold font-mono">
            Sobre mim
          </h1>
          <p className="text-neutral-200 leading-5 font-light">
            Aoba! 👋 Me chamo Pablo, tenho 21 anos e estudo Design Gráfico e
            UI/UX. Sempre fui apaixonado por artes visuais, e acredito que o
            design é uma forma poderosa de comunicar ideias e melhorar a
            experiência das pessoas. Além da estética, minha prioridade é
            resolver problemas de forma criativa e eficiente. ✌️ Sou movido pela
            curiosidade e pelo desejo de entender o que está por trás de cada
            detalhe. Cada projeto é uma chance de aprender algo novo e de trazer
            soluções que realmente façam sentido para quem vai usá-las. Estou
            sempre buscando novas formas de unir funcionalidade e beleza, com a
            intenção de criar experiências únicas e práticas. 😉
          </p>
        </div>
        <div className="rounded-md bg-neutral-800 row-span-4 col-start-4 row-start-2 p-4">
          <img
            src={me}
            alt="Pablo's Selfie"
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div className="rounded-md bg-neutral-800 col-span-2 row-span-2 row-start-4 p-4 flex flex-col gap-2 justify-between">
          <h1 className="text-xl text-indigo-600 font-bold font-mono">
            Projetos
          </h1>
          <div className="w-full h-3/4 flex gap-2">
            {projects.map((project, index) => (
              <button
                onClick={() => setProjectVisible(index)}
                key={index}
                className="h-full aspect-1 rounded overflow-hidden bg-indigo-600 transition-all ease-linear hover:brightness-75"
              >
                <img
                  src={project.thumb}
                  alt={`${project.title} Thumbnail`}
                  className=""
                />
              </button>
            ))}
          </div>
        </div>
        <a
          href="https://behance.net/acidpbl"
          target="_blank"
          className="rounded-md bg-neutral-800 row-span-2 col-start-3 row-start-4 p-4 flex gap-4 text-indigo-600 hover:text-indigo-800 hover:bg-neutral-900 transition-all ease-linear items-center justify-center"
        >
          <Icon.BehanceLogo weight="bold" size={60} />
        </a>
        <a
          className="rounded-md bg-neutral-800 row-span-2 row-start-6 p-4 text-indigo-600 hover:text-indigo-800 hover:bg-neutral-900 transition-all ease-linear flex items-center justify-center"
          href="https://corinthians.com.br"
          target="_blank"
        >
          <Corinthians />
        </a>
        <div className="rounded-md bg-neutral-800 col-span-3 row-span-2 row-start-6 p-4 flex flex-col gap-2">
          <h1 className="text-xl text-indigo-600 font-bold font-mono">Links</h1>
          <div className="w-full flex gap-2">
            {contact.map((c) => (
              <a
                className="flex flex-col items-center gap-2 transition-all ease-linear hover:brightness-75 group"
                href={c.url}
                target="_blank"
              >
                <div className="p-4 border-2 border-indigo-600 rounded text-indigo-600 group-hover:bg-neutral-900">
                  {<c.icon weight="fill" size={36} />}
                </div>
                <span className="text-sm text-neutral-200">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {projects.map((project, index) => (
        <div
          className={twMerge(
            "absolute top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] p-4 rounded-md bg-neutral-800 flex flex-col gap-4",
            index === projectVisible ? "visible" : "hidden"
          )}
        >
          <div className="w-full flex items-center justify-between">
            <button
              onClick={() => setProjectVisible(null)}
              className="p-1 rounded transition-all ease-linear bg-transparent hover:bg-neutral-700 text-neutral-950 hover:text-neutral-900"
            >
              <Icon.ArrowLeft weight="bold" size={24} />
            </button>
            <span className="text-sm text-indigo-600 font-mono">
              {project.title}
            </span>
            <button
              onClick={() => setProjectVisible(null)}
              className="p-1 rounded transition-all ease-linear bg-transparent hover:bg-neutral-700 text-neutral-950 hover:text-neutral-900"
            >
              <Icon.X weight="bold" size={24} />
            </button>
          </div>
          <div className="w-full h-px bg-neutral-700" />
          <div className="flex gap-4">
            <img
              src={project.thumb}
              alt={`${project.title} thumb`}
              className="aspect-1 rounded w-2/12"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl text-neutral-300">
                {project.title}
              </h1>
              <span className="text-neutral-200">{project.description}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
