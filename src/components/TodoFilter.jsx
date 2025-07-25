import React from "react";
import "../App.css";
function TodoFilter({ filter, setFilter }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex justify-center gap-4 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-900 text-white" : "bg-gray-200"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
