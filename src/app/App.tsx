import { Route, Routes } from "react-router-dom";
import Core from "./components/Core";
import NotFound from "./components/NotFound";
import SilkBackground from "./components/SilkBackground";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Silk shader background */}
      <SilkBackground
        className="absolute inset-0"
        speed={15}
        scale={1}
        color="#0f2927"
        opacity={0.3}
      />

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
