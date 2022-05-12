const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function Flashcard ({ number }) {
    return (
        <div className="card">
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}

export default function Deck () {
    return (
        <div className="deck">
            <header>
                <img src="./images/logo.png" alt="logo" />
                <h2>ZapRecall</h2>
            </header>
            <div className="cards">
                {numbers.map((number, index) => <Flashcard key={index} number={number} />)}
            </div>
            <footer>
                <p>0/{numbers.length} CONCLUÍDOS</p>
            </footer>
        </div>
    ); 
}