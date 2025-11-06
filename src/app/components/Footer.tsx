import { motion } from "framer-motion";
import config from "../db/config";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="w-full py-5 sm:py-6 text-center text-gray-400 text-xs sm:text-sm  backdrop-blur-md"
    >
      <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2">
        <span>
          Made with 🫶🏻 by{" "}
          <a
            href={config.link.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {config.bio.author}
          </a>
        </span>

        <span className="text-gray-500 hidden sm:inline">•</span>

        <span className="opacity-80">
          Last updated:{" "}
          <time
            dateTime={config.lastUpdated}
            className="font-mono text-gray-400"
          >
            {config.lastUpdated.replace(/-/g, ".")}
          </time>
        </span>
      </p>
    </motion.footer>
  );
};

export default Footer;
