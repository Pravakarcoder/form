import React from "react";

const Input = ({ label, id, type, placeholder, options }) => {
  if (type === "select" && options && options.length > 0) {
    return (
      <div>
        <label
          className="block text-gray-600 text-sm font-medium mb-2"
          htmlFor={id}
        >
          {label}
        </label>
        <select
          id={id}
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  if (type === "textarea" && options && options.length > 0) {
    return (
      <div>
        <label></label>
        <textarea />
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div>
        <label
          className="block text-gray-600 text-sm font-medium mb-2"
          htmlFor={id}
        >
          {" "}
          {label}
        </label>
        <textarea
          id={id}
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  return (
    <div>
      <label
        className="block text-gray-600 text-sm font-medium mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
