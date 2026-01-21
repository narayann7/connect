import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import blur_circle from "../assets/blur_circle.png";
import Core from "./components/Core";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Animated Grid background with pulse effect */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#afafaf39_1px,transparent_1px),linear-gradient(to_bottom,#c3c3c339_1px,transparent_1px)] bg-[size:14px_24px] sm:bg-[size:16px_26px] md:bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="flex items-center justify-center flex-col relative z-10">
        <Routes>
          <Route path="/" element={<Core />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Animated blur circle decoration with rotation and pulse */}
        <motion.div
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] bg-no-repeat bg-contain pointer-events-none bottom-[-30vh] sm:bottom-[-40vh] md:bottom-[-50vh] opacity-20 sm:opacity-25 right-[-20vh] sm:right-[-30vh] md:right-[-40vh]"
          style={{ backgroundImage: `url(${blur_circle})` }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
