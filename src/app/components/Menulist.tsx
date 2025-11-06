import { motion } from "framer-motion";
import React from "react";
import { MenuItem, MenuItemData } from "./Menuitem";

interface MenuListProps {
  header?: string;
  items: MenuItemData[];
}

export const MenuList: React.FC<MenuListProps> = ({ header, items }) => {
  return (
    <div className="w-full max-w-xl sm:max-w-2xl flex flex-col items-center px-4 sm:px-6 md:px-0">
      {header && (
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-wider mb-2 sm:mb-3 px-2 text-center"
        >
          {header}
        </motion.h2>
      )}

      <motion.div
        className="flex flex-col gap-2 sm:gap-3 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <MenuItem data={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
