import {
  AddressBook,
  Moon,
  SquaresFour,
  Star,
  UserCircle,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import PabloImg from "../assets/pablo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faDiscord,
  faFigma,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const [screenWidth, setScreenWidth] = useState(screen.width);

  useEffect(() => {
    setScreenWidth(screen.width);
  }, []);

  const born = new Date("2003-09-30");
  const today = new Date();

  let age = today.getFullYear() - born.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  if (
    todayMonth < born.getMonth() ||
    (todayMonth === born.getMonth() && todayDay < born.getDate())
  ) {
    age--;
  }

  const myAge = age;

  const contactBtns = [
    {
      name: "Behance",
      icon: faBehance,
      url: "https://behance.net/acidpbl",
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/acidpbl",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://liknkedin.com/in/pabloalbrnz",
    },
    {
      name: "Figma",
      icon: faFigma,
      url: "https://figma.com/@acidpbl",
    },
    {
      name: "Mail",
      icon: faEnvelope,
      url: "mailto:pabloalbernazrincon@gmail.com",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram/acidpbl",
    },
    {
      name: "Discord",
      icon: faDiscord,
      url: "https://discord.com/invite/MJkjKTgS4p",
    },
    {
      name: "Spotify",
      icon: faSpotify,
      url: "https://open.spotify.com/user/22afnrsoqqy3diy2vxocgn6ga?si=5f00fa4163a943d1",
    },
  ];

  return (
    <div className="bg-black size-full md:w-screen md:h-screen flex flex-col md:flex-row">
      <aside className="flex flex-row md:flex-col p-4 md:p-8 md:pt-12 h-28 w-full md:h-full md:w-28 md:hover:w-62 box-border border-b md:border-b-0 md:border-r border-yellow-50 group/aside transition-all items-center">
        <div className="w-full h-10 pb-0 md:pb-15 flex items-center gap-4 transition-all ease-linear">
          <Moon
            weight="fill"
            size={30}
            className="relative text-accent-500 rotate-270"
          />
          <span className="md:group-hover/aside:ml-0 md:-ml-24 md:group-hover/aside:opacity-100 md:opacity-0 transition-all text-white">
            pbl
          </span>
        </div>
        <ul className="text-yellow-50 flex flex-row w-full gap-2 md:flex-col md:h-10/12 justify-end md:justify-normal md:-ml-2.5">
          <li className="flex gap-4 items-center justify-start group/asidebtn">
            <span
              onMouseOver={() => setIsHovered("projects")}
              onMouseOut={() => setIsHovered(null)}
              className="p-2.5 flex gap-4 rounded-full bg-transparent transition-colors ease-linear group-hover/asidebtn:bg-white group-hover/asidebtn:text-black"
            >
              <SquaresFour
                weight={isHovered === "projects" ? "fill" : "bold"}
                size={20}
              />
            </span>
            <span className="hidden md:flex group-hover/aside:ml-0 -ml-24 group-hover/aside:opacity-100 opacity-0 transition-all">
              Projects
            </span>
          </li>
          <li className="flex gap-4 items-center justify-start group/asidebtn">
            <span
              className="relative p-2.5 rounded-full bg-transparent group-hover/asidebtn:bg-white group-hover/asidebtn:text-black"
              onMouseOver={() => setIsHovered("address")}
              onMouseOut={() => setIsHovered(null)}
            >
              <AddressBook
                weight={isHovered == "address" ? "fill" : "bold"}
                size={20}
              />
            </span>
            <span className="hidden md:flex group-hover/aside:ml-0 -ml-24 group-hover/aside:opacity-100 opacity-0 transition-all">
              Contact
            </span>
          </li>
        </ul>
      </aside>
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 gap-4 md:grid-rows-8 p-4">
        <div className="p-4 md:p-8 rounded-xl row-start-1 row-end-6 col-start-1 col-end-3 bg-indigo-500 flex flex-col">
          <div className="flex gap-2 p-2 bg-transparent text-transparent">
            <UserCircle weight="fill" size={24} />
          </div>
          <div className="size-full flex flex-col items-center justify-center gap-2 md:gap-4">
            <span className="font-poppins font-medium selection:bg-black selection:text-white text-sm md:text-base">
              Graphic Designer
            </span>
            <span className="font-oi stroke-2 text-xl text-center md:text-4xl text-white selection:bg-white selection:text-indigo-500">
              Pablo Albernaz
            </span>
          </div>
          <div className="flex w-full pt-4 md:pt-0 items-center justify-between">
            <button
              onMouseOver={() => setIsHovered("ratebtn")}
              onMouseOut={() => setIsHovered(null)}
              className="flex gap-1.5 p-2 md:pr-3 font-medium rounded-full bg-transparent w-fit text-black font-poppins box-border border-2 border-black text-sm items-center selection:bg-black selection:text-white transition-all hover:bg-black hover:text-indigo-600 hover:border-indigo-600 cursor-pointer"
            >
              <Star weight={isHovered === "ratebtn" ? "fill" : "bold"} />
              {screenWidth <= 768 ? null : "RATE ME"}
            </button>
            <a
              className="flex gap-1.5 p-2 pr-3 font-medium rounded-full bg-black w-fit text-indigo-500 font-poppins self-end text-sm items-center selection:bg-indigo-500 selection:text-white hover:text-indigo-600 transition-all group/hirebtn"
              href="mailto:pabloalbernazrincon@gmail.com"
              target="_parent"
            >
              <UserCircle weight="fill" size={24} />
              <span className="text-white group-hover/hirebtn:text-gray-300 transition-all ">
                HIRE ME
              </span>
            </a>
          </div>
        </div>
        <div className="p-4 md:p-8 rounded-xl row-start-6 row-end-9 col-start-1 col-end-2 flex flex-col bg-yellow-500 md:grid md:grid-cols-4 md:grid-rows-6 gap-4 selection:bg-black selection:text-yellow-500">
          <h1 className="font-oi text-xl h-fit text-nowrap md:text-3xl row-start-2 row-end-1 col-start-1 col-end-4">
            ABOUT ME
          </h1>
          <p className="font-poppins leading-5.25 row-start-2 row-end-7 col-start-1 col-end-5 text-sm md:text-base">
            Hey! My name is Pablo, I'm 21 years old and I study Graphic Design
            and UI/UX.
            <br />I have always been passionate about visual arts,
            <br />
            and I believe that design is a powerful way to communicate ideas and
            improve people's experience. In addition to aesthetics, my priority
            is to solve problems creatively and efficiently.
            <br />I am driven by curiosity and the desire to understand what is
            behind every detail.
          </p>
          <span className="font-poppins font-medium hidden md:flex text-xs col-start-5 col-end-5 justify-self-end">
            Vai Corinthians!
          </span>
          <a
            href="https://instagram.com/acidpbl"
            target="_blank"
            className="justify-self-end row-start-6 self-end col-start-5 size-fit py-2 px-4 border-2 rounded-full font-jetbrains-mono ligatures transition-colors ease-linear hover:bg-black hover:text-yellow-500 hover:border-black"
          >
            {"-->"}
          </a>
        </div>
        <div className="p-4 md:p-8 rounded-xl row-start-6 row-end-9 col-start-2 col-end-3 bg-accent-400 grid md:grid-rows-4 md:grid-cols-8 items-end justify-between overflow-hidden selection:bg-white selection:text-accent-400 group/projectscard">
          <h1 className="font-oi text-xl h-fit text-nowrap md:text-3xl text-white row-start-4">
            PROJECTS
          </h1>
          <a
            href=""
            className="row-start-4 col-start-8 justify-self-end items-end w-fit py-2 px-4 border-2 text-nowrap border-white rounded-full text-white font-jetbrains-mono ligatures transition-colors ease-linear hover:bg-white hover:text-accent-400 hover:border-white"
          >
            {"-->"}
          </a>
          <span className="md:-mb-32 md:-ml-8 md:group-hover/projectscard:rotate-12 md:group-hover/projectscard:-ml-4 md:group-hover/projectscard:-mb-28 transition-all duration-500 group-hover/projectscard:text-accent-800">
            <SquaresFour
              weight="fill"
              className="-rotate-8"
              size={screenWidth <= 768 ? 110 : 220}
            />
          </span>
          <span className="font-poppins font-medium text-xs row-start-1 row-end-1 col-start-8 text-nowrap self-start justify-self-end text-white">
            2+ Projects Ended
          </span>
        </div>
      </div>
      <div className="w-full md:w-4/10 h-full border-t md:border-t-0 md:border-l border-yellow-50 p-4">
        <div className="flex flex-col gap-4 size-full">
          <img src={PabloImg} alt="Pablo Selfie" className="rounded-xl" />
          <div className="flex flex-col gap-4 size-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="text-accent-400 text-3xl font-oi">
                  Pablo Albernaz
                </span>
                <span className="text-zinc-400 text-lg font-medium font-poppins">
                  He/Him
                </span>
              </div>
              <span className="text-white font-poppins">{myAge} years old</span>
              <span className="text-white font-poppins">Graphic Designer</span>
            </div>
            <div className="h-px w-full bg-zinc-400" />
            <div className="grid grid-cols-4 gap-x-4 gap-y-8 p-4">
              {contactBtns.map((btn) => (
                <div className="flex flex-col gap-1 items-center">
                  <a
                    className="flex p-4 aspect-square min-h-16 items-center justify-center border-2 border-accent-400 rounded-lg transition-colors ease-linear text-accent-400 hover:bg-accent-400 hover:text-black"
                    target="_blank"
                    href={btn.url}
                  >
                    <FontAwesomeIcon size="xl" icon={btn.icon} />
                  </a>
                  <span className="text-accent-400">{btn.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
