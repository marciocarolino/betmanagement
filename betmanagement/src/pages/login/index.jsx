import React from "react";
import "./style.css";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div id="login">
      <h1 className="title">Login do Sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
