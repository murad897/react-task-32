import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import User from "./pages/createUserPage/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
