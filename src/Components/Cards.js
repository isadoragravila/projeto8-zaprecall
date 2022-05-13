export default function Cards({ number, setCard, color, icone, type }) {
    return (
      <>
        {type ? (
          <Card number={number} setCard={setCard} />
        ) : (
          <CardDone number={number} color={color} icone={icone} />
        )}
      </>
    );
  }
  
  function Card({ number, setCard }) {
    return (
      <div className="card">
        <p>Pergunta {number}</p>
        <ion-icon name="play-outline" onClick={() => setCard(false)}></ion-icon>
      </div>
    );
  }
  
  function CardDone({ number, color, icone }) {
    return (
      <div className="card">
        <p className={`riscado ${color}`}>Pergunta {number}</p>
        <ion-icon name={icone}></ion-icon>
      </div>
    );
  }