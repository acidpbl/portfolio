import { twMerge } from "tailwind-merge";

interface HeaderButtonProps {
  placeholder: string;
  selected?: boolean;
}

export function HeaderButton({
  selected = false,
  ...props
}: HeaderButtonProps) {
  return (
    <button
      className={twMerge(
        "text-sm transition-colors ease-linear",
        selected
          ? "text-slate-100 hover:text-slate-200 cursor-default font-semibold"
          : "text-slate-200 hover:text-slate-100"
      )}
    >
      {props.placeholder}
    </button>
  );
}
