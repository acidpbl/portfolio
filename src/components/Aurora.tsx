import * as Icon from "@phosphor-icons/react";

export function Aurora() {
  return (
    <div className="flex gap-2">
      <div className="flex gap-4">
        <div className="px-20 py-8 h-fit bg-pink-300 text-fuchsia-500 rounded-lg">
          <Icon.SunHorizon weight="fill" size={120} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-4xl text-violet-500">Aurora v4</h2>
          <span className="text-neutral-300 font-jet">
            Aurora é um projeto de Dashboard para o uso de página inicial do
            navegador, seu intuito é dar funções uteis ao usuário de forma
            rápida e prática.
          </span>
          <a
            className="flex gap-2 items-center underline px-4 py-2 bg-purple-600 rounded-lg w-fit text-neutral-300 transition-colors ease-linear hover:bg-purple-700 hover:text-neutral-400"
            href="http://acidpb.github.io/Aurora-v4"
          >
            Acesse já! <Icon.LinkSimple weight="bold" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
