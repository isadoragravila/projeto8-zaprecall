import React from "react";
import setinha from "../Assets/images/setinha.png";
import Answers from "./Answers";

export default function Questions({
  question,
  answer,
  clique,
  setClique,
  number,
  arrIcons,
  setArrIcons
}) {
  return (
    <>
      {clique === "question" ? (
        <div className="question">
          <p>{question}</p>
          <img
            src={setinha}
            alt="setinha"
            onClick={() => setClique("answer")}
          />
        </div>
      ) : (
        <Answers
          answer={answer}
          clique={clique}
          setClique={setClique}
          number={number}
          arrIcons={arrIcons}
          setArrIcons={setArrIcons}
        />
      )}
    </>
  );
}
