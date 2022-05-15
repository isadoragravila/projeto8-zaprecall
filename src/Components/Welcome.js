
import React from "react";
import logo from "../Assets/images/logo.png";

export default function Welcome({ setTela, setMeta }) {
  const [botao, setBotao] = React.useState(false);

  function inputValue(valor) {
    let num = valor.target.value;
    num = Number(num);
    if (num >= 1 && num <= 8 && num % 1 === 0) {
      setMeta(num);
      setBotao(true);
    } else {
      setBotao(false);
    }
  }
    
  return (
    <div className="tela-inicio">
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <input type="text" className="meta" placeholder="Digite sua meta de zaps..." onKeyUp={(valor) => inputValue(valor)} />
      {botao === true ? (
        <div className="botao ativo" onClick={() => setTela("deck")}>
          <p>Iniciar Recall!!</p>
        </div>
      ) : (
        <div className="botao">
          <p>Iniciar Recall!!</p>
        </div>
      )}
    </div>
  );
}
