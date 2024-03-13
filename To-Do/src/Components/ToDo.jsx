import React, { useState } from "react";
import TodoTable from "./TodoTable";

function ToDo() {
  const [input, setInput] = useState("");
  const [change, setChange] = useState("");

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [filtered, setFiltered] = useState("");

  const handleClick = () => {
    const newTodo = { task: input, priority: change, status: filtered };
    setData([...data, newTodo]);
    setInput("");
    setChange("");
  };

  const handelChangeSelect = (e) => {
    setChange(e.target.value);
  };

  const handleFilterTasks = (e) => {
    const filterValue = e.target.value;
    setFiltered(filterValue);

    if (filterValue === "complete") {
      setNewData(data.filter((el) => el.status === true));
    } else if (filterValue === "active") {
      setNewData(data.filter((el) => el.status === false));
    } else {
      setNewData(data);
    }
  };

  return (
    <div className="text-center">
      <div className="p-10 w-4/5 bg-slate-800 m-auto h-screen">
        <h1 className="text-white font-bold text-5xl">TODO APP</h1>
        <div className="w-3/5 bg-slate-600 m-auto mt-10 rounded-md p-5">
          <div className="flex justify-center  w-4/5 m-auto bg-slate-700">
            <input
              type="text"
              value={input}
              placeholder="Enter TODO"
              className="w-4/5 bg-transparent outline-none text-gray-100  p-3"
              onChange={(e) => setInput(e.target.value)}
            />
            <select
              className="text-center bg-slate-400 cursor-pointer"
              onChange={handelChangeSelect}
            >
              <option value="">Priority</option>
              <option value="high">Higher Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Lower Priority</option>
            </select>
            <button
              className="w-1/5  p-3 bg-blue-700 text-white hover:bg-blue-600"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
          <div className="text-center m-auto">
            <div className="mt-5">
              {data.length > 0 ? (
                <>
                  <div className="w-1/2 m-auto">
                    <select className="p-3 mb-3" onChange={handleFilterTasks}>
                      <option value="all">All Tasks</option>
                      <option value="complete">Completed Tasks</option>
                      <option value="active">Active Tasks</option>
                    </select>
                  </div>
                  <table className="bg-slate-500 m-auto">
                    <thead>
                      <tr>
                        <th className="p-3 border-2">Task</th>
                        <th className="p-3 border-2">Status</th>
                        <th className="p-3 border-2">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((el, i) => (
                        <TodoTable
                          key={i}
                          {...el}
                          setChecked={setChecked}
                          checked={checked}
                        />
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <p className="text-3xl text-white font-semibold">
                  Enter your Todos
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
