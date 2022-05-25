import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <NavLink exact="true" to="/">
        Prodcuts
      </NavLink>
      <NavLink exact="true" to="/orders">
        Orders
      </NavLink>
      <NavLink exact="true" to="/requests">
        Requests
      </NavLink>
      <NavLink exact="true" to="/manage">
        Manage
      </NavLink>
    </div>
  );
};

export default Navigation;
