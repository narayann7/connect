import { motion } from "framer-motion";
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

  const Wrapper = data.link ? motion.a : motion.button;
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group w-full flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl transition-all duration-200 ease-out border border-white/10 hover:border-white/20 hover:shadow-lg touch-manipulation"
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <motion.div
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0"
          whileHover={{ rotate: [-5, 5, -5, 0], transition: { duration: 0.5 } }}
        >
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </motion.div>
        <span className="text-base sm:text-lg font-medium text-white truncate">
          {data.title}
        </span>
      </div>

      <motion.div whileHover={{ x: 3, y: -3 }} transition={{ duration: 0.2 }}>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
      </motion.div>
    </Wrapper>
  );
};
