// src/components/Sidebar.jsx
import SelectionOption from "./SelectionOption";

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="w-64 p-4 border-r">
      {options.map((option) => (
        <SelectionOption
          key={option}
          title={option}
          isSelected={selectedOption === option}
          onSelect={() => setSelectedOption(option)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
