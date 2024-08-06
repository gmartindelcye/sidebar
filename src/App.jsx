// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Render from "./components/Render";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null); // No default selection
  const [data, setData] = useState({ nodes: [], edges: [] }); // Initialize data structure

  return (
    <div className="flex h-screen">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex-1 p-4 overflow-auto">
        <Render
          selectedOption={selectedOption}
          data={data}
          setData={setData}
        />{" "}
        {/* Pass setData */}
      </div>
    </div>
  );
};

export default App;
