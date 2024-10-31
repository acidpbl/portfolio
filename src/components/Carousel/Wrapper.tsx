import { ReactNode, useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

interface CarouselWrapperProps {
  title: string;
  children: ReactNode;
}

export function CarouselWrapper(props: CarouselWrapperProps) {
  const [hover, setHover] = useState(false);

  return (
    <section className="w-full flex flex-col gap-4">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex w-full gap-2 items-center"
      >
        <span className="font-semibold text-neutral-100">{props.title}</span>
        <button
          className={twMerge(
            "text-indigo-600 transition-all ease-linear hover:text-indigo-700",
            hover ? "block" : "hidden"
          )}
        >
          <Icon.CaretRight size={16} weight="bold" />
        </button>
      </div>
      <div className="w-full flex gap-2">
        {props.children}
        {
          <button className="text-slate-200 h-32 p-1 hover:bg-black/25 rounded transition-all ease-linear hover:text-slate-300">
            <Icon.CaretRight weight="bold" size={24} />
          </button>
        }
      </div>
    </section>
  );
}
