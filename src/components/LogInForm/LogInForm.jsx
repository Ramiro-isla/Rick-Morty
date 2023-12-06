import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { checkUser } from "../../helpers/auth.helper";
import "./LogInForm.scss";

const INITIAL_VALUE = { name: "", password: "" };
const LogInForm = ({ users, setUsers, saveUser }) => {
  const [form, setForm] = useState(INITIAL_VALUE);

  const submitForm = (ev) => {
    ev.preventDefault();
    const existUsers = checkUser(form);
    saveUser(existUsers);
  };
  const handleSubmit = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <div>
        <p>Hello!</p>
        <h2>
          <span>Login</span> your account
        </h2>
        <div>
          <label>UserName</label>
          <input
            type="text"
            onChange={handleSubmit}
            value={form.name}
            name="name"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={handleSubmit}
            value={form.password}
            name="password"
          />
        </div>
        <button>LogIn</button>
        <Link to="/register">Create an Account</Link>
      </div>
    </form>
  );
};

export default LogInForm;
