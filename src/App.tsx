import MRTInterface from "./components/MRTInterface";

function App() {
  return (
    <>
      <div className="w-full overflow-y-hidden flex items-center justify-center text-primary-content">
        <MRTInterface />
        <div className="absolute bg-white w-[200px] left-0 p-2 bottom-30 float-right text-xs opacity-65 text-gray-500">
          Disclaimer: This project was developed primarily to demonstrate the
          implementation of a node-based architecture and the A* algorithm for
          finding the quickest path between stations. It may not accurately
          represent the actual quickest path, as it does not account for factors
          such as walking times between interchanges, delays, or other
          real-world considerations. All data used in this project are sampled
          from Google Maps and are subject to change. Please note that the
          heuristic employed (Euclidean distance) might not perfectly represent
          some paths, but it is designed to provide the quickest path with the
          least cost overall. The results generated should be considered as
          approximations, not definitive solutions for real-world travel.
        </div>
      </div>
    </>
  );
}

export default App;
