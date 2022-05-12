import React from "react";
import Questions from "./Questions";

export default function Flashcards ({ number, question, answer }) {
    const [clique, setClique] = React.useState("card");
    return (
        <div className="cards">
            {clique === "card" ? <Cards number={number} setClique={setClique} /> : <Questions question={question} answer={answer} clique={clique} setClique={setClique} /> }
        </div>
    );
}

function Cards ({ number, setClique }) {
    return (
        <div className="card">
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline" onClick={() => setClique("question")}></ion-icon>
        </div>
    );
}