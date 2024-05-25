import React, { useState } from "react";

function FromHandling() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div
      style={{
        border: "3px dashed pink",
        padding: "10px",
      }}
    >
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email" onChange={handleEmail} />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlePassword}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FromHandling;
