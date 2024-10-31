import { ReactNode, useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { Corinthians } from "../../assets/Corinthians";

interface HeaderWrapperProps {
  children: ReactNode;
}

export function HeaderWrapper(props: HeaderWrapperProps) {
  const [headerBG, setHeaderBG] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderBG("bg-neutral-900");
      } else {
        setHeaderBG("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "w-screen h-[68px] fixed flex px-8 items-center justify-between transition-colors ease-linear",
        headerBG
      )}
    >
      <div className="flex gap-12">
        <span className="uppercase font-semibold font-mono text-3xl text-indigo-600">
          acidpbl
        </span>
        <div className="flex gap-4">{props.children}</div>
      </div>
      <div className="flex gap-4">
        <a
          href="https://corinthians.com.br"
          target="_blank"
          className="p-2 rounded text-slate-100 transition-colors ease-linear hover:text-slate-200"
        >
          <Corinthians />
        </a>
        <div className="p-2 rounded bg-violet-600">
          <Icon.QuestionMark
            weight="bold"
            size={20}
            className="text-slate-100"
          />
        </div>
      </div>
    </header>
  );
}
