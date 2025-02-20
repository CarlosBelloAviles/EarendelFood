import React from "react";

function Aside({ onSelectCategoria }) {
  return (
    <section className="section_lateral">
      <div className="Category">
      <div
          id="menu"
          className="menu__desayuno"
          onClick={() => onSelectCategoria("Todas")}
        >
         <div id="NameCategory"><h3>All</h3></div>
        </div>
        <div
          id="menu"
          className="menu__desayuno"
          onClick={() => onSelectCategoria("Desayuno")}
        >
         <div id="NameCategory"><h3>Desayuno</h3></div>
        </div>
        <div
          id="menu"
          className="menu_almuerzo"
          onClick={() => onSelectCategoria("Almuerzo")}
        >
         <div id="NameCategory"><h3>Almuerzo</h3></div>
        </div>
        <div 
        id="menu"
        className="menu_parrilladas"
        onClick={() => onSelectCategoria("Parrilladas")}>
          <div id="NameCategory"><h3>Parrilladas</h3></div>
        </div>
        <div 
        id="menu"
        className="menu_postres"
        onClick={() => onSelectCategoria("Postres")}>
          <div id="NameCategory"><h3>Postres</h3></div>
        </div>
        <div
        id="menu"
        className="menu_licores"
        onClick={() => onSelectCategoria("Licores")}
        >
           <div id="NameCategory"><h3>Licores</h3></div>
        </div>
      </div>
    </section>
  );
}

export default Aside;
