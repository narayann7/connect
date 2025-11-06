import { ArrowUpRight } from "lucide-react";
import React from "react";

export interface MenuItemData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  link?: string;
  onClick?: () => void;
}

interface MenuItemProps {
  data: MenuItemData;
}

export const MenuItem: React.FC<MenuItemProps> = ({ data }) => {
  const IconComponent = data.icon;

  const Wrapper = data.link ? "a" : "button";
  const wrapperProps = data.link
    ? {
        href: data.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { onClick: data.onClick };

  return (
    <Wrapper
      {...wrapperProps}
      className="group w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-200 ease-out border border-white/10 hover:border-white/20"
    >
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg">
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-medium text-white">{data.title}</span>
      </div>

      <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
    </Wrapper>
  );
};
