// src/components/Sidebar.jsx
import PropTypes from "prop-types";
import SelectedOption from "./SelectedOption";

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  const options = [
    "Simple Flow",
    "Connecting Nodes",
    "Drag Handle",
    "Custom Node",
    "Context Menu",
    "Better Context Menu",
  ];

  return (
    <div className="w-64 h-full p-4 border-r bg-gray-100">
      {options.map((option) => (
        <SelectedOption
          key={option}
          title={option}
          isSelected={selectedOption === option}
          onSelect={() => setSelectedOption(option)}
        />
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func,
};

export default Sidebar;
