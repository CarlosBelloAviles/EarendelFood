import React from "react";

function Aside({ onSelectCategoria }) {
  return (
    <section className="section_lateral">
      <div className="Category">
        <div
          id="menu"
          className="menu__desayuno"
          onClick={() => onSelectCategoria("Desayuno")}
        >
          <h3 style={{ color: "black" }}>Desayuno</h3>
        </div>
        <div
          id="menu"
          className="menu_almuerzo"
          onClick={() => onSelectCategoria("Almuerzo")}
        >
          <h3>Almuerzo</h3>
        </div>
        <div onClick={() => onSelectCategoria("Cena")}>
          <h3>Postres</h3>
        </div>
        <div>
          <h3>Licores</h3>
        </div>
      </div>
    </section>
  );
}

export default Aside;
