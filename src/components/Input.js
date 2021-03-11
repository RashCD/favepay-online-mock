import React from 'react';

const Input = ({ name, desc, type = 'text', placeholder }) => {
  return (
    <label htmlFor={name} className="flex justify-between w-full mb-2">
      <p>{desc}:</p>
      <input
        type={type}
        id={name}
        className="border-2 focus:border-blue-400 focus:outline-none rounded w-1/2"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
