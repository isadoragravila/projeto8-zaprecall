import React from "react";
import Cards from "./Cards";
import Questions from "./Questions";
import Answers from "./Answers";

export default function Flashcards({ number, question, answer, arrIcons, setArrIcons }) {
  const [card, setCard] = React.useState(true);
  const [type, setType] = React.useState(true);
  const [color, setColor] = React.useState("red");
  const [icone, setIcone] = React.useState("close-circle");

  return (
    <div className="cards">
      {card ? (
        <Cards number={number} setCard={setCard} color={color} icone={icone} type={type} />
      ) : (
        <>
          {type ? (
            <Questions question={question} setType={setType} />
          ) : (
            <Answers answer={answer} setCard={setCard} arrIcons={arrIcons} setArrIcons={setArrIcons} setIcone={setIcone} setColor={setColor} />
          )}
        </>
      )}
    </div>
  );
}