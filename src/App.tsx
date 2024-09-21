import * as Icon from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { About } from "./components/About";
import magix from "./assets/projects/magix/icon.png";

function App() {
  return (
    <div className="w-screen h-screen bg-accent-500 flex flex-col font-poppins noise">
      <header className="px-8 py-4 flex justify-between">
        <h1 className="text-neutral-300 text-2xl">Pablo.</h1>
        <div className="w-full flex justify-end gap-2">
          <a
            href="https://github.com/acidpbl"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.GithubLogo weight="fill" size={20} />
          </a>
          <a
            href="https://behance.com/acidpbl"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.BehanceLogo weight="fill" size={20} />
          </a>
          <a
            href="https://instagram.com/acidpbl"
            className="p-2 rounded border-2 text-purple-500 border-purple-600 transition-colors ease-linear hover:border-purple-700 hover:bg-accent-800 hover:bg-opacity-25 hover:text-purple-600"
          >
            <Icon.InstagramLogo weight="fill" size={20} />
          </a>
        </div>
      </header>

      <section className="w-screen h-full flex gap-4 px-4 py-2 pl-8">
        <div className="w-full h-full px-4 flex items-center rounded-lg border-2 border-purple-600 bg-accent-500 bg-opacity-70">
          <div className="w-full flex gap-4">
            <About />
          </div>
        </div>
        <div className="px-4 flex items-center">
          <div className="w-16 h-fit rounded-lg bg-accent-900 p-2 gap-2 flex flex-col shadow-[0px_0px_4px_1px_theme(colors.purple.900)]">
            <div
              className={twMerge(
                "h-12 bg-accent-700 rounded flex items-center justify-center",
                "border-2 border-purple-600 active"
              )}
            >
              <Icon.Moon
                weight="fill"
                size={32}
                className="-rotate-90 text-purple-600"
              />
            </div>
            <div
              className={twMerge(
                "h-12 bg-accent-800 rounded flex items-center justify-center"
              )}
            >
              <img src={magix} className="size-8" />
            </div>
            <div
              className={twMerge(
                "h-12 bg-accent-800 rounded flex items-center justify-center"
              )}
            >
              <Icon.SunHorizon
                weight="fill"
                size={32}
                className="text-fuchsia-500"
              />
            </div>
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
