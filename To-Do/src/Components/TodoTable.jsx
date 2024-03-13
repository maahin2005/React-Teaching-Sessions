import React from "react";

function TodoTable({ task, priority, checked, setChecked }) {
  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <tr>
        <td className="p-3 border-2">{task}</td>
        <td className="p-3 border-2">
          <button
            className={`${
              checked ? "bg-green-800" : "bg-red-700"
            } p-2 rounded-md text-white`}
            onClick={handleCheck}
          >
            {checked ? "Completed" : "In-complete"}
          </button>
        </td>
        <td className="p-3 border-2">{priority}</td>
      </tr>
    </>
  );
}

export default TodoTable;
