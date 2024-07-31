// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Render from "./components/Render";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null); // No default selection

  return (
    <div className="flex h-screen">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex-1 p-4 overflow-auto">
        <Render selectedOption={selectedOption} />{" "}
        {/* Display the selected option component */}
      </div>
    </div>
  );
};

export default App;
