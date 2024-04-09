import React from "react";

function Navbar() {
  return (
    <div className="h-16 w-full bg-blue-400 sm:bg-red-300 lg:bg-yellow-500 flex px-10 justify-around items-center">
      <h1 className="text-4xl font-semibold">Portfolio</h1>
      <ul className="sm:flex justify-around sm:w-1/2 lg:w-1/4 font-medium hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contacts</li>
      </ul>
      <button className="inline-block sm:hidden">:::</button>
    </div>
  );
}

export default Navbar;
