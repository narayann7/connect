import React from "react";
import { SocialIcon, SocialIconData } from "./Socialicon";

interface SocialIconListProps {
  icons: SocialIconData[];
  className?: string;
}

export const SocialIconList: React.FC<SocialIconListProps> = ({
  icons,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {icons.map((icon, index) => (
        <SocialIcon key={index} data={icon} />
      ))}
    </div>
  );
};
