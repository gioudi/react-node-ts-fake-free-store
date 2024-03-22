import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Item from "../pages/Item/Item";
import MlNavbar from "../components/MlNavbar";

const Index = (): JSX.Element => {
  return (
    <>
      <Router>
        <MlNavbar />
        <section className="container">
          <article className="row">
            <article className="col">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/item/:id" Component={Item} />
              </Routes>
            </article>
          </article>
        </section>
      </Router>
    </>
  );
};

export default Index;
