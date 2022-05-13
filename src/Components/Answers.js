export default function Answers({ answer, setCard, arrIcons, setArrIcons, setIcone, setColor }) {

  function resposta (color, icone) {
    setColor(color);
    setIcone(icone);
    setCard(true);
    setArrIcons([...arrIcons, icone]);
  }

  return (
    <div className="question">
      <p>{answer}</p>
      <div className="answer">
        <div className="botao vermelho" onClick={() => resposta ("red", "close-circle")}>
          <p>Não lembrei</p>
        </div>
        <div className="botao laranja" onClick={() => resposta ("orange", "help-circle")}>
          <p>Quase não lembrei</p>
        </div>
        <div className="botao verde" onClick={() => resposta ("green", "checkmark-circle")}>
          <p>Zap!</p>
        </div>
      </div>
    </div>
  );
}
