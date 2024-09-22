import me from "../assets/p.jpg";

export function About() {
  return (
    <div className="w-full flex gap-4">
      <img src={me} alt="Pablo's Portrait" className="w-80 h-fit rounded-lg" />
      <div className="w-full flex flex-col gap-16 items-center">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-neutral-300 text-4xl font-medium">
            <span className="text-purple-600">UI/UX </span>
            and
            <span className="text-purple-600"> Graphic </span>
            Designer
          </h2>
          <p className="text-neutral-400 font-jet">
            Sou designer gráfico e procuro criar experiências visuais que chamam
            a atenção e fazem a diferença. Meu foco é sempre encontrar soluções
            criativas que realmente funcionem para as pessoas. 🧙🏻‍♂️✌🏻
          </p>
        </div>
        <button className="w-fit px-8 py-4 noise bg-purple-600 text-neutral-300 font-medium rounded-lg text-xl transition-colors ease-linear hover:bg-purple-700 hover:text-neutral-400">
          Entre em contato agora mesmo!
        </button>
      </div>
    </div>
  );
}
