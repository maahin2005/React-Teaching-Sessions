import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "skyblue",
        padding: "10px",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
