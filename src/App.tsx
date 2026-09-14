import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function verMenor() {
    if (count <= 0) {
      setCount(0);
      alert("Não pode ser menor que zero!");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <p>Ola mundo!</p>

      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={() => verMenor()}>Diminuir</button>
      <button onClick={() => setCount(0)}>Resetar</button>

      <h1>{count}</h1>
    </>
  );
}

export default App;
