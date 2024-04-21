import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    document.title = `${numero}`;
  }, [numero]);

  useEffect(() => {
    const id = setInterval(() => {
      setNumero((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Calculadora</h1>

      <p>{numero}</p>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setNumero(0);
          }}
        >
          0
        </button>

        <button
          onClick={() => {
            setNumero(numero + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setNumero(numero - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setNumero(numero * 2);
          }}
        >
          x
        </button>
        <button
          onClick={() => {
            setNumero(numero / 2);
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
