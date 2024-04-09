import React from "react";

function TodoTable({
  task,
  completed,
  priority,
  index,
  toggleCompleted,
  removeTodo,
}) {
  return (
    <>
      <tr key={index}>
        <td className="p-3 border-2">{task}</td>
        <td className="p-3 border-2">{priority}</td>
        <td className="p-3 border-2">
          <button
            className={`${
              completed ? "bg-green-800" : "bg-red-700"
            } p-2 rounded-md text-white`}
            onClick={() => toggleCompleted(index)}
          >
            {completed ? "Completed" : "Done ?"}
          </button>
        </td>

        <td className="p-3 border-2">
          <button
            className="p-2 rounded-md text-white bg-red-600"
            onClick={() => removeTodo(index)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}

export default TodoTable;
