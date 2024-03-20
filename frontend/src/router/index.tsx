import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Item from "../pages/Item/Item";

const Index = (): JSX.Element => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/item/:id" Component={Item} />
        </Routes>
      </Router>
    </>
  );
};

export default Index;
