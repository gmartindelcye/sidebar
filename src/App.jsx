// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Option1 from "./components/Option1";
import Option2 from "./components/Option2";
import Option3 from "./components/Option3";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const renderOption = () => {
    switch (selectedOption) {
      case "Option 1":
        return <Option1 />;
      case "Option 2":
        return <Option2 />;
      case "Option 3":
        return <Option3 />;
      default:
        return <Option1 />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex-1 p-4">{renderOption()}</div>
    </div>
  );
};

export default App;
