import React from "react";
import { useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import LogInForm from "../../components/LogInForm/LogInForm";

const LoginPage = () => {
  const [users, setUsers] = useState(null);
  const saveUser = (user) => {
    setUsers(user ? user : false);
  };
  return (
    <div>
      <HeaderComponent />
      <LogInForm users={users} setUsers={setUsers} saveUser={saveUser} />
    </div>
  );
};

export default LoginPage;
