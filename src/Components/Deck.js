import React from "react";
import logo from "../Assets/images/logo.png";
import Flashcards from "./Flashcards";
import Footer from "./Footer";

const flashcards = [
  { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
  { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __", answer: "Passar diferentes informações para componentes " },
  { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function Deck({ setTela, meta }) {
  const [arrIcons, setArrIcons] = React.useState([]);
  if (arrIcons.length === 0) {
    flashcards.sort(() => Math.random() - 0.5);
  }
  return (
    <div className="deck">
      <header>
        <img src={logo} alt="logo" />
        <h2>ZapRecall</h2>
      </header>
      {flashcards.map((flashcard, index) => (
        <Flashcards key={index} number={index + 1} question={flashcard.question} answer={flashcard.answer} arrIcons={arrIcons} setArrIcons={setArrIcons} /> ))}
      <Footer flashcards={flashcards} arrIcons={arrIcons} setTela={setTela} meta={meta} />
    </div>
  );
}
