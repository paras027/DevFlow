import { useState } from 'react';

type CustomCheckboxProps = {
  label?: string; // Optional label for the checkbox
  checked?: boolean; // Controlled checked state
  onChange?: (checked: boolean) => void; // Callback for change events
};

const CustomCheckbox = ({ checked = false, onChange }: CustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {/* Hidden native checkbox for functionality and accessibility */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="sr-only" // Tailwind class to hide but keep accessible

      />
      {/* Custom checkbox visual */}
      <span
        className={`w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ${
          isChecked ? 'bg-indigo-500 border-indigo-500' : 'bg-white'
        }`}
      >
        {isChecked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {/* Optional label */}

    </label>
  );
};

export default CustomCheckbox;