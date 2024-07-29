// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SelectedOption from "./components/SelectedOption";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <div className="flex">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex-1 p-4">
        <SelectedOption option={selectedOption} />
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default App;
