import React from "react";
import { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { checkUser } from "../../helpers/auth.helper";
import "./LogInForm.scss";

const INITIAL_VALUE = { name: "", password: "" };
const LogInForm = ({ saveUser }) => {
  const [form, setForm] = useState(INITIAL_VALUE);
  const navigate = useNavigate();
  const submitForm = (ev) => {
    ev.preventDefault();
    const existUsers = checkUser(form);
    saveUser(existUsers);
    navigate("/characters");
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
        <p className="login_info">LogIn to see all the characters</p>
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
        <button onClick={submitForm}>LogIn</button>
        <Link to="/register">Create an Account</Link>
      </div>
    </form>
  );
};

export default LogInForm;
