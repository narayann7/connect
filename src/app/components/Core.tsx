// import dp from "../../assets/lp_logo.png";
import dp from "../../assets/dp.jpeg";
import config from "../utils/configs/config";
import AboutMe from "./AboutMe";

import {
  FileUser,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MessageCircleQuestion,
  Twitter,
  User,
} from "lucide-react";
import React from "react";
import { MenuItemData } from "./Menuitem";
import { MenuList } from "./Menulist";
import { SocialIconData } from "./SocialIcon";
import { SocialIconList } from "./SocialIconList";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-xs text-gray-500">
      <p>Developed by Narayan · Last updated Nov 2024</p>
    </footer>
  );
};

function Core() {
  const menuItems: MenuItemData[] = [
    {
      icon: User,
      title: "About Me",
      onClick: () => window.open(config.link.portfolio, "_blank"),
    },
    {
      icon: MessageCircleQuestion,
      title: "Get Guidance",
      onClick: () => window.open(config.link.topMate, "_blank"),
    },
    {
      icon: FileUser,
      title: "Download Resume",
      onClick: () => window.open(config.link.resume, "_blank"),
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      onClick: () => window.open(config.link.linkedin, "_blank"),
    },
    {
      icon: Mail,
      title: "Drop a Email",
      onClick: () => window.open(`mailto:${config.link.gmail}`),
    },
    {
      icon: MessageCircle,
      title: "Drop a Message",
      onClick: () => window.open(config.link.telegram, "_blank"),
    },
  ];

  // Custom Stack Overflow Icon
  const StackOverflowIcon: React.FC<{ className?: string }> = ({
    className,
  }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
    </svg>
  );

  // Custom WhatsApp Icon
  const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  const socialIcons: SocialIconData[] = [
    {
      icon: Twitter,
      label: "Twitter",
      onClick: () => window.open(config.link.twitter, "_blank"),
      link: config.link.twitter,
    },
    {
      icon: Instagram,
      label: "Instagram",
      onClick: () => window.open(config.link.instagram, "_blank"),
      link: config.link.instagram,
    },
    {
      icon: Github,
      label: "Github",
      onClick: () => window.open(config.link.github, "_blank"),
      link: config.link.github,
    },
    {
      icon: StackOverflowIcon,
      label: "Stack Overflow",
      onClick: () => window.open(config.link.stackOverflow, "_blank"),
      link: config.link.stackOverflow,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      onClick: () => window.open(config.link.whatsapp, "_blank"),
      link: config.link.whatsapp,
    },
  ];

  return (
    <div className="w-[25vw] h-screen overflow-y-auto flex flex-col items-center px-6 py-8 scrollbar-hide overflow-x-visible justify-center">
      {/* Top Section - About Me (Sticky or at top) */}
      <div className="flex-shrink-0 w-full mb-8">
        <AboutMe
          title={config.bio.name}
          description="Leveling up one code at a time"
          linkUrl={config.link.portfolio}
          subtitle={config.bio.description}
          logoUrl={dp}
        />
      </div>

      {/* Social Icons Section */}
      <div className="flex-shrink-0 w-full mb-8">
        <SocialIconList icons={socialIcons} />
      </div>

      {/* Menu Section - Takes remaining space */}
      <div className="flex-shrink-0 w-full">
        <MenuList items={menuItems} />
      </div>

      {/* Optional: Footer spacing */}
      <div className="h-8 flex-shrink-0" />
      <Footer />
    </div>
  );
}

export default Core;
