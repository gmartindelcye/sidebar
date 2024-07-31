// src/components/SelectedOption.jsx
import PropTypes from "prop-types";

const SelectedOption = ({ title, isSelected, onSelect }) => {
  return (
    <div
      className={`cursor-pointer p-2 rounded ${
        isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-200"
      }`}
      onClick={onSelect}
    >
      {title}
    </div>
  );
};

SelectedOption.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectedOption;
