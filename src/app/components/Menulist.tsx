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
        <h2 className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-wider mb-2 sm:mb-3 px-2 text-center">
          {header}
        </h2>
      )}

      <div className="flex flex-col gap-2 sm:gap-3 w-full">
        {items.map((item, index) => (
          <MenuItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
