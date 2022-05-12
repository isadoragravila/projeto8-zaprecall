import React from "react";

const flashcards = [
    { number: 1, question: "O que é JSX?" },
    { number: 2, question: "O React é __" },
    { number: 3, question: "Componentes devem iniciar com __" },
    { number: 4, question: "Podemos colocar __ dentro do JSX" },
    { number: 5, question: "O ReactDOM nos ajuda __" },
    { number: 6, question: "Usamos o npm para __" },
    { number: 7, question: "Usamos props para __" },
    { number: 8, question: "Usamos estado (state) para __" }
];

function Flashcard({ number, question }) {
    const [clique, setClique] = React.useState("card");
    return (
        <div className="cards">
            {clique === "card" ? <Card number={number} setClique={setClique} /> : <Question question={question} /> }
        </div>
    );
}

function Card({ number, setClique }) {
    return (
        <div className="card">
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline" onClick={() => setClique("question")}></ion-icon>
        </div>
    );
}

function Question({ question }) {
    return (
        <div className="question">
            <p>{question}</p>
            <img src="./images/setinha.png" alt="setinha" />
        </div>
    );
}

export default function Deck() {
    return (
        <div className="deck">
            <header>
                <img src="./images/logo.png" alt="logo" />
                <h2>ZapRecall</h2>
            </header>
            {flashcards.map((flashcard, index) => <Flashcard key={index} number={flashcard.number} question={flashcard.question} />)}
            <footer>
                <p>0/{flashcards.length} CONCLUÍDOS</p>
            </footer>
        </div>
    );
}