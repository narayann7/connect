import React from "react";
import { SocialIcon, SocialIconData } from "./SocialIcon";

type LayoutType = "horizontal" | "grid";

interface SocialIconListProps {
  icons: SocialIconData[];
  className?: string;
  layout?: LayoutType;
  gridColumns?: 2 | 3 | 4 | 5 | 6;
}

export const SocialIconList: React.FC<SocialIconListProps> = ({
  icons,
  className = "",
  layout = "horizontal",
  gridColumns = 4,
}) => {
  // Generate grid column classes
  const getGridColumnClass = () => {
    const columnMap = {
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    };
    return columnMap[gridColumns];
  };

  // Base layout classes
  const layoutClasses = {
    horizontal: "flex items-center gap-4",
    grid: `grid ${getGridColumnClass()} gap-4`,
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {icons.map((icon, index) => (
        <SocialIcon key={index} data={icon} />
      ))}
    </div>
  );
};
