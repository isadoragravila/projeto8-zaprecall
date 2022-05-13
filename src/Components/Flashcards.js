import React from "react";
import Questions from "./Questions";

export default function Flashcards({
  number,
  question,
  answer,
  arrIcons,
  setArrIcons
}) {
  const [clique, setClique] = React.useState("card");
  return (
    <div className="cards">
      {clique === "card" ? (
        <div className="card">
          <p>Pergunta {number}</p>
          <ion-icon
            name="play-outline"
            onClick={() => setClique("question")}
          ></ion-icon>
        </div>
      ) : (
        <Questions
          question={question}
          answer={answer}
          clique={clique}
          setClique={setClique}
          number={number}
          arrIcons={arrIcons}
          setArrIcons={setArrIcons}
        />
      )}
    </div>
  );
}
