import {
  BehanceLogo,
  DiscordLogo,
  Envelope,
  FigmaLogo,
  GithubLogo,
  Icon,
  InstagramLogo,
  LinkedinLogo,
  SpotifyLogo,
} from "@phosphor-icons/react";

interface ContactProps {
  name: string;
  url: string;
  icon: Icon;
}

export const contact: ContactProps[] = [
  {
    name: "GitHub",
    url: "https://github.com/acidpbl",
    icon: GithubLogo,
  },
  {
    name: "Behance",
    url: "https://behance.net/acidpbl",
    icon: BehanceLogo,
  },
  {
    name: "Email",
    url: "mailto:pabloalbernazrincon@gmail.com",
    icon: Envelope,
  },
  {
    name: "Figma",
    url: "https://www.figma.com/@acidpbl",
    icon: FigmaLogo,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pabloalbrnz",
    icon: LinkedinLogo,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/acidpbl",
    icon: InstagramLogo,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/MJkjKTgS4p",
    icon: DiscordLogo,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/22afnrsoqqy3diy2vxocgn6ga?si=38ecc8b7234a4b0c",
    icon: SpotifyLogo,
  },
];
