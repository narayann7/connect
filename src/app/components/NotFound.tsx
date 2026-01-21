import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8 md:py-12"
    >
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-8xl sm:text-9xl font-bold text-white mb-6">404</h1>
        <p className="text-lg text-gray-400 mb-2">Page not found</p>
        <p className="text-sm text-gray-500 mb-8 italic">
          Not all who wander are lost
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-white text-black rounded-full text-sm hover:opacity-80 transition-opacity"
        >
          Go home
        </Link>
      </div>
      <Footer />
    </motion.div>
  );
}

export default NotFound;
