import React from 'react';

function Button({ value, className }) {
  return (
    <div className={`px-5 py-2 rounded-xs uppercase cursor-pointer transition-all duration-300 hover:translate-x-1 ${className || ''}`}>
      {value}
    </div>
  );
}

export default Button;