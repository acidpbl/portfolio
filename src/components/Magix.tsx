import magixThumb from "../assets/projects/magix/thumb.jpg";

export function Magix() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <img src={magixThumb} alt="" className="w-80 rounded-lg" />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-4xl text-amber-500">
            Magix Kids - Redesign
          </h2>
          <span className="text-neutral-300 font-jet">
            Magix Kids é uma marca de massinha de modelar e giz de cera, fundada
            a mais de 10 anos, a marca possui alta relevância no mercado.
            <br />
            O Redesign foi pensado na modernização da marca e reposicionar ela no mercado mantendo sua base.
          </span>
        </div>
      </div>
    </div>
  );
}
