import React, { useState } from "react";
import "./contador.css"; // Importamos los estilos CSS

function Contador() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Contador</h1>
      <p className="count">{count}</p>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          Incrementar
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrementar
        </button>
      </div>
    </div>
  );
}

export default Contador;
