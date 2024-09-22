import * as Icon from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { About } from "./components/About";
import MagixIcon from "./assets/projects/magix/icon.png";
import { Corinthians } from "./assets/Corinthians";
import { useEffect, useState } from "react";
import { Magix } from "./components/Magix";
import { Aurora } from "./components/Aurora";

function App() {
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    {
      name: "about",
      component: About,
      icon: (
        <Icon.Moon
          weight="fill"
          size={32}
          className="-rotate-90 text-purple-600"
        />
      ),
    },
    {
      name: "magix",
      component: Magix,
      icon: <img src={MagixIcon} className="size-8" />,
    },
    {
      name: "aurora",
      component: Aurora,
      icon: (
        <Icon.SunHorizon weight="fill" size={32} className="text-fuchsia-500" />
      ),
    },
  ];

  const handleScroll = (event: WheelEvent) => {
    setProjectIndex((prevIndex) => {
      if (event.deltaY > 0) {
        return (prevIndex + 1) % projects.length;
      } else {
        return (prevIndex - 1 + projects.length) % projects.length;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [projects.length]);

  return (
    <div className="w-screen h-screen bg-accent-500 flex flex-col font-poppins noise">
      <header className="px-8 py-4 flex justify-between items-center">
        <h1 className="text-neutral-300 text-2xl">Pablo.</h1>
        <div className="w-full flex justify-end gap-2">
          <a
            href="https://acidpbl.github.io/portfolio"
            target="_blank"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.Moon weight="fill" size={20} className="-rotate-90" />
          </a>
          <a
            href="https://corinthians.com.br/"
            target="_blank"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Corinthians />
          </a>
          <a
            href="https://github.com/acidpbl"
            target="_blank"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.GithubLogo weight="fill" size={20} />
          </a>
          <a
            href="https://behance.com/acidpbl"
            target="_blank"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.BehanceLogo weight="fill" size={20} />
          </a>
          <a
            href="https://instagram.com/acidpbl"
            target="_blank"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.InstagramLogo weight="fill" size={20} />
          </a>
        </div>
      </header>

      <section className="w-screen h-full flex gap-4 px-4 py-2 pl-8">
        <div className="w-full h-full p-4 flex rounded-lg border-2 border-purple-600 bg-accent-500 bg-opacity-70">
          {projects.map((project, index) =>
            projectIndex === index ? <project.component key={index} /> : null
          )}
        </div>
        <div className="px-4 flex items-center">
          <div className="w-16 h-fit rounded-lg bg-accent-900 p-2 gap-2 flex flex-col shadow-[0px_0px_4px_1px_theme(colors.purple.900)]">
            {projects.map((project, index) => (
              <div
                className={twMerge(
                  "h-12 bg-accent-700 rounded flex items-center justify-center cursor-pointer hover:bg-accent-800 transition-colors ease-linear",
                  projectIndex === index && "border-2 border-purple-600 active relative"
                )}
                onClick={() => setProjectIndex(index)}
              >
                {project.icon}
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="h-20 w-full bg-accent-900 flex items-center justify-center text-neutral-300 font-light text-sm">
        <a href="https://github.com/acidpbl">© Pablo - 2024</a>
      </footer>
    </div>
  );
}

export default App;
