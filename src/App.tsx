import { Carousel } from "./components/Carousel";
import { Header } from "./components/Header";
import projects from "./projects.json";

function App() {
  return (
    <div className="w-screen h-screen">
      <Header.Wrapper>
        <Header.Button placeholder="Início" selected />
        <Header.Button placeholder="Projetos pessoais" />
      </Header.Wrapper>

      <div className="w-full h-full bg-neutral-900 flex flex-col pl-8 pr-4 py-32">
        <Carousel.Wrapper title="Projetos">
          {projects.map((project, index) => (
            <Carousel.Card
              id={index}
              title={project.title}
              thumb={project.thumb}
              key={index}
              description={project.description}
            />
          ))}
        </Carousel.Wrapper>
      </div>
    </div>
  );
}

export default App;
