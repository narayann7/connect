import blur_circle from "../assets/blur_circle.png";
import Core from "./components/Core";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] sm:bg-[size:16px_26px] md:bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main content */}
      <div className="flex items-center justify-center flex-col relative z-10">
        <Core />

        {/* Blur circle decoration - responsive positioning and sizing */}
        <div
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] bg-no-repeat bg-contain pointer-events-none bottom-[-20vh] sm:bottom-[-40vh] md:bottom-[-50vh] opacity-20 sm:opacity-25 right-[-30vh] sm:right-[-30vh] md:right-[-40vh] rotate-[60deg] sm:rotate-[65deg] md:rotate-[70deg]"
          style={{ backgroundImage: `url(${blur_circle})` }}
        />
      </div>
    </div>
  );
}

export default App;
