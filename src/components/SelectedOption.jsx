// src/components/SelectedOption.jsx
import PropTypes from "prop-types";

const SelectedOption = ({ option }) => {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <h1 className="text-2xl font-bold">Selected: {option}</h1>
    </div>
  );
};

SelectedOption.propTypes = {
  option: PropTypes.string.isRequired,
};

export default SelectedOption;
