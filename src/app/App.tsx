import config from "../app/utils/configs/config";
import blur_circle from "../assets/blur_circle.png";

function App() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-fixed flex items-center justify-center bg-mobile "
      style={{
        backgroundImage: `url(${blur_circle})`,
        backgroundSize: "100%",
        backgroundPosition: "-50vh 10%",
      }}
    >
      <h1 className="text-3xl font-bold">{config.lastUpdated}</h1>
    </div>
  );
}

export default App;
