import MRTMap from "./components/MRTMap";
import TravelDetails from "./components/TravelDetails";

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/3 h-screen">
          <MRTMap />
        </div>
        <div className="w-1/3 h-screen border-solid	border-2 border-sky-500">
          <TravelDetails />
        </div>
      </div>
    </>
  );
}

export default App;
