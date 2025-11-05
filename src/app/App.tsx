import blur_circle from "../assets/blur_circle.png";
import Core from "./components/Core";

function App() {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main content */}
      <div className="flex items-center justify-center flex-col">
        <Core />
        <div
          className="absolute w-[1000px] h-[1000px] bg-no-repeat bg-contain pointer-events-none bottom-[-50vh] opacity-25 right-[-40vh] rotate-[70deg]"
          style={{ backgroundImage: `url(${blur_circle})` }}
        ></div>
      </div>
    </div>
  );
}

export default App;

//theme one
// <div
//   className="min-h-screen bg-no-repeat bg-fixed flex items-center justify-center bg-mobile "
//   style={{
//     backgroundImage: `url(${blur_circle})`,
//     backgroundSize: "100%",
//     backgroundPosition: "-50vh 10%",
//   }}
// >
//   <Core />
// </div>

//theme two
{
  /* <div className="absolute inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex items-center justify-center">
  <Core />
</div>; */
}
