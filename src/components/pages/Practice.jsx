import React from "react";
import Timer from "./timer/Timer";
import "./pagesStyles/PageStyle.css";

const Practice = () => {
  return (
    <>
      <div className="container">
        <section className="section">
          <Timer />
        </section>
        <section className="section">second</section>
        <section className="section">third</section>
      </div>
    </>
  );
};

export default Practice;
