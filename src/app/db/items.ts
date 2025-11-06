
import {
  FileUser,
  Github,
  Instagram,
  Mail,
  MessageCircleQuestion,
  Twitter,
  User
} from "lucide-react";
import { LinkedInIcon, StackOverflowIcon, TelegramIcon } from "../components/CustomIcons";
import { MenuItemData } from "../components/Menuitem";
import { SocialIconData } from "../components/SocialIcon";
import config from "./config";



export const menuItems: MenuItemData[] = [
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
    icon: LinkedInIcon,
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

export const socialIcons: SocialIconData[] = [
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
    icon: TelegramIcon,
    label: "Telegram",
    onClick: () => window.open(config.link.telegram, "_blank"),
    link: config.link.telegram,
  },
];