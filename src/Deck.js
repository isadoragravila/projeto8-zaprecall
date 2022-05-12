const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function Question ({ number }) {
    return (
        <div className="question">
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
            <div className="questions">
                {numbers.map(number => <Question number={number} />)}
            </div>
            <footer>
                <p>0/{numbers.length} CONCLUÍDOS</p>
            </footer>
        </div>
    ); 
}