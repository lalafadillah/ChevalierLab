import React from 'react';

// Stateless Component (Tampilan)
export default function ButtonStateless({ label, onClick, color = "bg-blue-500" }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 ${color} text-white font-medium rounded hover:opacity-90 transition-all`}
    >
      {label}
    </button>
  );
}