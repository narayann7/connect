import { motion } from "framer-motion";
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

  const Wrapper = data.link ? motion.a : motion.button;
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
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 hover:bg-white/10 active:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ease-out hover:border-white/20 touch-manipulation"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
        >
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.div>
      </Wrapper>
    </div>
  );
};
