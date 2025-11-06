import { motion } from "framer-motion";
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
  // Generate responsive grid column classes
  const getGridColumnClass = () => {
    const columnMap = {
      2: "grid-cols-2",
      3: "grid-cols-2 sm:grid-cols-3",
      4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
      5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
      6: "grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
    };
    return columnMap[gridColumns];
  };

  // Base layout classes with responsive spacing
  const layoutClasses = {
    horizontal:
      "flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4",
    grid: `grid ${getGridColumnClass()} gap-3 sm:gap-4 place-items-center`,
  };

  return (
    <motion.div
      className={`${layoutClasses[layout]} ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.5, y: 20 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            },
          }}
        >
          <SocialIcon data={icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};
