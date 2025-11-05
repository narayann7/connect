// import dp from "../../assets/lp_logo.png";
import dp from "../../assets/dp.jpeg";
import config from "../utils/configs/config";
import AboutMe from "./AboutMe";

import {
  Figma,
  FileText,
  Github,
  Instagram,
  Package,
  Triangle,
  Twitter,
} from "lucide-react";
import { MenuItemData } from "./Menuitem";
import { MenuList } from "./Menulist";
import { SocialIconData } from "./Socialicon";
import { SocialIconList } from "./Socialiconlist";

const menuItems: MenuItemData[] = [
  {
    icon: Package,
    title: "Use this template",
    onClick: () => console.log("Use template clicked"),
  },
  {
    icon: Triangle,
    title: "Deploy on Vercel",
    onClick: () => console.log("Deploy clicked"),
  },
  {
    icon: FileText,
    title: "Documentation",
    onClick: () => console.log("Documentation clicked"),
  },
  {
    icon: Github,
    title: "Github",
    onClick: () => console.log("Github clicked"),
  },
];

const socialIcons: SocialIconData[] = [
  {
    icon: Twitter,
    label: "Twitter",
    onClick: () => window.open("https://twitter.com", "_blank"),
  },
  {
    icon: Instagram,
    label: "Instagram",
    onClick: () => window.open("https://instagram.com", "_blank"),
  },
  {
    icon: Github,
    label: "Github",
    onClick: () => window.open("https://github.com", "_blank"),
  },
  {
    icon: Figma,
    label: "Figma",
    onClick: () => window.open("https://figma.com", "_blank"),
  },
];

function Core() {
  return (
    <div className="w-[30vw] h-screen overflow-y-auto flex flex-col items-center justify-center px-4 py-8 scrollbar-hide">
      <AboutMe
        title={config.bio.name}
        description="Leveling up one code at a time"
        linkUrl={config.link.portfolio}
        //   subtitle={config.bioConfig.subtitle}
        subtitle={config.bio.description}
        logoUrl={dp}
      />

      <SocialIconList icons={socialIcons} />

      <MenuList header="INSTALL" items={menuItems} />
    </div>
  );
}

export default Core;
