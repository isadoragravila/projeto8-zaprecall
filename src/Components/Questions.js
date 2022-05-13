import React from "react";
import setinha from "../Assets/images/setinha.png";

export default function Questions({ question, answer, clique, setClique, number }) {
  return (
    <>
      {clique === "question" ? (
        <div className="question">
          <p>{question}</p>
          <img src={setinha} alt="setinha" onClick={() => setClique("answer")} />
        </div>
      ) : (
        <Answers answer={answer} clique={clique} setClique={setClique} number={number} />
      )}
    </>
  );
}

function Answers({ answer, clique, setClique, number }) {
  const [color, setColor] = React.useState("red");
  const [icone, setIcone] = React.useState("close-circle");

  return (
    <>
      {clique === "answer" ? (
        <div className="question">
          <p>{answer}</p>
          <div className="answer">
            <div className="botao vermelho" onClick={() => { setColor("red"); setIcone("close-circle"); setClique("cardsdone"); }} >
              <p>Não lembrei</p>
            </div>
            <div className="botao laranja" onClick={() => { setColor("orange"); setIcone("help-circle"); setClique("cardsdone") }} >
              <p>Quase não lembrei</p>
            </div>
            <div className="botao verde" onClick={() => { setColor("green"); setIcone("checkmark-circle"); setClique("cardsdone") }} >
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

function CardsDone({ number, color, icone }) {
  return (
    <div className="card">
      <p className={`riscado ${color}`}>Pergunta {number}</p>
      <ion-icon name={icone}></ion-icon>
    </div>
  );
}
