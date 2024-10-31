import * as Icon from "@phosphor-icons/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselCardProps {
  id: number;
  title?: string;
  thumb?: string;
  description?: string;
}

export function CarouselCard({
  id,
  title = "Título do projeto",
  thumb = "",
  description = "Descrição do projeto",
}: CarouselCardProps) {
  const [hoveredCardId, setHoveredCardId] = useState<null | number>(null);

  const isHovered = hoveredCardId === id;

  return (
    <div
      className={twMerge(
        "w-60 h-fit bg-neutral-900 rounded overflow-hidden flex flex-col shadow-none ease-linear transition-all",
        isHovered && "shadow-[0_0_16px] scale-125 z-50"
      )}
      onMouseEnter={() => setHoveredCardId(id)}
      onMouseLeave={() => setHoveredCardId(null)}
    >
      <div className="w-full h-32 bg-violet-600 overflow-hidden flex items-center justify-center transition-opacity ease-linear relative">
        <img
          src={thumb}
          alt={`${title} - miniatura`}
          className="w-full h-full object-cover"
        />

        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent transition-opacity ease-linear"></div>
        )}

        <span
          className={twMerge(
            "absolute top-0 left-0 p-4 font-bold font-mono text-slate-200 z-10",
            isHovered ? "block" : "hidden"
          )}
        >
          {title}
        </span>
      </div>

      {isHovered && (
        <div className="w-full h-20 flex justify-between items-start p-4 transition-opacity duration-300 gap-4">
          <span className="text-xs text-neutral-300 font-light text-ellipsis">
            {description}
          </span>
          <button className="p-1 rounded-full border text-neutral-300 border-neutral-300 hover:bg-neutral-800 hover:text-neutral-400 hover:border-neutral-300 transition-all ease-linear">
            <Icon.CaretDown size={12} />
          </button>
        </div>
      )}
    </div>
  );
}
