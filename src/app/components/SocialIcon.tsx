import React from "react";

export interface SocialIconData {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}

interface SocialIconProps {
  data: SocialIconData;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ data }) => {
  const IconComponent = data.icon;

  return (
    <button
      onClick={data.onClick}
      aria-label={data.label}
      className="group flex items-center justify-center w-14 h-14 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ease-out  hover:border-white/20 hover:scale-105"
    >
      <IconComponent className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
    </button>
  );
};
