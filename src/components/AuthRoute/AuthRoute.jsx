import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ users, component: Component }) => {
  if (!users)
    return (
      <div>
        <Navigate to="/" />
      </div>
    );
  if (users) return Component;
};

export default AuthRoute;