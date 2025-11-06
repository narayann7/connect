import React from "react";

export interface SocialIconData {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  link?: string;
}

interface SocialIconProps {
  data: SocialIconData;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ data }) => {
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
    <div className="flex justify-center">
      <Wrapper
        {...wrapperProps}
        aria-label={data.label}
        className="group flex items-center justify-center w-14 h-14 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ease-out hover:border-white/20 hover:scale-105"
      >
        <IconComponent className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
      </Wrapper>
    </div>
  );
};
