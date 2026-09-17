import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  function verMenor() {
    if (count <= 0) {
      setCount(0);
      setHide(true);
      //alert("Não pode ser menor que zero!");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <p>Ola mundo!</p>

      <button
        onClick={() => {
          setCount(count + 1);
          setHide(false);
        }}
      >
        Adicionar
      </button>
      <button
        onClick={() => {
          verMenor();
        }}
      >
        Diminuir
      </button>
      <button
        onClick={() => {
          setCount(0);
          setHide(false);
        }}
      >
        Resetar
      </button>

      <h1>{count}</h1>
      {hide && <h1 style={{ color: "red" }}>Não pode ser menor que zero!</h1>}
    </>
  );
}

export default App;
