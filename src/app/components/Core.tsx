// import dp from "../../assets/lp_logo.png";
import dp from "../../assets/dp.jpeg";
import config from "../utils/configs/config";
import AboutMe from "./AboutMe";

import { motion } from "framer-motion";
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
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-full py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-500"
    >
      <p>Developed by Narayan · Last updated Nov 2024</p>
    </motion.footer>
  );
};

function Core() {
  const menuItems: MenuItemData[] = [
    {
      icon: User,
      title: "About Me",
      onClick: () => window.open(config.link.portfolio, "_blank"),
      link: config.link.portfolio,
    },
    {
      icon: MessageCircleQuestion,
      title: "Get Guidance",
      onClick: () => window.open(config.link.topMate, "_blank"),
      link: config.link.topMate,
    },
    {
      icon: FileUser,
      title: "Download Resume",
      onClick: () => window.open(config.link.resume, "_blank"),
      link: config.link.resume,
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      onClick: () => window.open(config.link.linkedin, "_blank"),
      link: config.link.linkedin,
    },
    {
      icon: Mail,
      title: "Drop a Email",
      onClick: () => window.open(`mailto:${config.link.gmail}`),
      link: `mailto:${config.link.gmail}`,
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
      icon: MessageCircle,
      label: "Telegram",
      onClick: () => window.open(config.link.telegram, "_blank"),
      link: config.link.telegram,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-y-auto flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 md:py-12 scrollbar-hide justify-center"
    >
      {/* Top Section - About Me */}
      <div className="flex-shrink-0 w-full mb-6 sm:mb-8">
        <AboutMe
          title={config.bio.name}
          description="Leveling up one code at a time"
          linkUrl={config.link.portfolio}
          subtitle={config.bio.description}
          logoUrl={dp}
        />
      </div>

      {/* Social Icons Section */}
      <div className="flex-shrink-0 w-full mb-6 sm:mb-8 overflow-visible">
        <SocialIconList icons={socialIcons} />
      </div>

      {/* Menu Section - Takes remaining space */}
      <div className="flex-shrink-0 w-full">
        <MenuList items={menuItems} />
      </div>

      {/* Footer spacing */}
      <div className="h-6 sm:h-8 flex-shrink-0" />
      <Footer />
    </motion.div>
  );
}

export default Core;
