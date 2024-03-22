import React from "react";
import Index from "./router";
import MlNavbar from "./components/MlNavbar";
function App() {
  return (
    <>
    <MlNavbar/>
    <section className="container">
      <article className="row">
        <article className="col">
        <Index/>
        </article>
      </article>
    </section>
    </>
  );
}

export default App;
