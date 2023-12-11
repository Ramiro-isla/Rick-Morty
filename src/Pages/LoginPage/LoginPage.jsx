import React from "react";
import { useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import LogInForm from "../../components/LogInForm/LogInForm";

const LoginPage = ({ setUsers }) => {
  const saveUser = (user) => {
    setUsers(user ? user : false);
  };
  return (
    <div>
      <HeaderComponent />
      <LogInForm saveUser={saveUser} />
    </div>
  );
};

export default LoginPage;
