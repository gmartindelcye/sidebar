// src/components/Sidebar.jsx
const Sidebar = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ];

  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <h2 className="text-xl font-bold p-4">Menu</h2>
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option.value}>
            <button
              className={`w-full text-left p-2 hover:bg-gray-700 ${
                selectedOption === option.value ? "bg-gray-600" : ""
              }`}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
