import React from "react";

export default () => (
  <React.Fragment>
    <div className="page-container">
      <img src="/img/platzi-logo.png" alt="Platzi Logo" />
      <h2>Creado por Andoni González</h2>
    </div>
    <style jsx>{`
      .page-container {
        display: grid;
        height: 100vh;
        grid-auto-rows: max-content;
        justify-items: center;
        align-content: center;
      }

      img {
        max-width: 150px;
        height: auto;
      }

      h2 {
        color: #d3d3d3;
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: black;
      }
    `}</style>
  </React.Fragment>
);
