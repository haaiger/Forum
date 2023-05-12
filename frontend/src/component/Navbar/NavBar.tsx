import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/login">
        <h5>Login</h5>
      </Link>
      <Link to="/registration">
        <h5>Registration</h5>
      </Link>
      <Link to="/home">
        <h5>Home</h5>
      </Link>
      <Outlet />
    </div>
  );
};

export default NavBar;
