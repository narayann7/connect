import { motion } from "framer-motion";
import StringUtils from "../utils/string_utils";

interface AboutMeProps {
  title: string;
  subtitle?: string;
  description: string;
  linkUrl?: string;
  logoUrl?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  title,
  subtitle,
  description,
  logoUrl,
  linkUrl,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6">
      {/* Logo with scale and fade animation */}
      {logoUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.img
            src={logoUrl}
            alt={`${title} logo`}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mb-3 sm:mb-4 shadow-lg ring-2 ring-white/10"
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(255,255,255,0.1)",
                "0 10px 40px rgba(255,255,255,0.15)",
                "0 10px 30px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      {/* Title with slide up animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1 sm:mb-2"
      >
        <span>{title}</span>
      </motion.h1>

      {/* Link with underline animation */}
      {linkUrl && (
        <motion.a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.05 }}
          className="relative text-xs sm:text-sm text-disabled mb-2 sm:mb-3 transition-colors group"
        >
          {StringUtils.parseUrlToDomain(linkUrl)}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-white/80"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-sm sm:text-base text-gray-700 max-w-sm sm:max-w-md md:max-w-xl leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default AboutMe;
