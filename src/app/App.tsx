import { Route, Routes } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import Core from "./components/Core";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="flex items-center justify-center flex-col relative z-10">
        <Routes>
          <Route path="/" element={<Core />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
