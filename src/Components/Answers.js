import React from "react";
import CardsDone from "./CardsDone";

export default function Answers({
  answer,
  clique,
  setClique,
  number,
  arrIcons,
  setArrIcons
}) {
  const [color, setColor] = React.useState("red");
  const [icone, setIcone] = React.useState("close-circle");

  return (
    <>
      {clique === "answer" ? (
        <div className="question">
          <p>{answer}</p>
          <div className="answer">
            <div
              className="botao vermelho"
              onClick={() => {
                setColor("red");
                setIcone("close-circle");
                setClique("cardsdone");
                setArrIcons([...arrIcons, "close-circle"]);
              }}
            >
              <p>Não lembrei</p>
            </div>
            <div
              className="botao laranja"
              onClick={() => {
                setColor("orange");
                setIcone("help-circle");
                setClique("cardsdone");
                setArrIcons([...arrIcons, "help-circle"]);
              }}
            >
              <p>Quase não lembrei</p>
            </div>
            <div
              className="botao verde"
              onClick={() => {
                setColor("green");
                setIcone("checkmark-circle");
                setClique("cardsdone");
                setArrIcons([...arrIcons, "checkmark-circle"]);
              }}
            >
              <p>Zap!</p>
            </div>
          </div>
        </div>
      ) : (
        <CardsDone number={number} color={color} icone={icone} />
      )}
    </>
  );
}
