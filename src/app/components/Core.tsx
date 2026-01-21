import dp from "../../assets/dp.jpeg";
import config from "../db/config";
import AboutMe from "./AboutMe";

import { motion } from "framer-motion";
import { menuItems, socialIcons } from "../db/items";
import Footer from "./Footer";
import { MenuList } from "./Menulist";
import { SocialIconList } from "./SocialIconList";

function Core() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8 md:py-12"
    >
      {/* Main Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Top Section - About Me */}

        <AboutMe
          title={config.bio.name}
          subtitle={config.bio.description}
          logoUrl={dp}
        />

        {/* Social Icons Section */}
        <div className="w-full mt-2 sm:mt-4">
          <SocialIconList icons={socialIcons} />
        </div>

        {/* Menu Section */}
        <div className="w-full mt-4 sm:mt-6">
          <MenuList items={menuItems} />
        </div>
      </div>

      {/* Footer (pinned to bottom) */}
      <Footer />
    </motion.div>
  );
}

export default Core;
