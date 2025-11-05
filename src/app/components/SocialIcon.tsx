import React, { useState } from "react";

export interface SocialIconData {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  link?: string;
}

interface SocialIconProps {
  data: SocialIconData;
  showPreview?: boolean;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  data,
  showPreview = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = data.icon;

  return (
    <div className="relative flex justify-center">
      <button
        onClick={data.onClick}
        aria-label={data.label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center justify-center w-14 h-14 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ease-out hover:border-white/20 hover:scale-105"
      >
        <IconComponent className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
      </button>

      {/* Link Preview Tooltip */}
      {showPreview && (data.link || data.label) && isHovered && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 pointer-events-none z-50 min-w-max">
          <div className="px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-xs rounded-lg animate-fadeIn border border-white/10">
            <div className="font-medium">{data.label}</div>
            {data.link && (
              <div className="text-white/60 text-[10px] mt-0.5 max-w-[180px] truncate">
                {data.link}
              </div>
            )}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-black/90 border-b border-r border-white/10 rotate-45"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
