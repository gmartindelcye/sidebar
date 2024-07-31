// src/components/SelectionOption.jsx
import PropTypes from "prop-types";

const SelectionOption = ({ option }) => {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <h1 className="text-2xl font-bold">Selected: {option}</h1>
    </div>
  );
};

SelectionOption.propTypes = {
  option: PropTypes.string.isRequired,
};

export default SelectionOption;
