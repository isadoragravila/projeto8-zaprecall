import party from "../Assets/images/party.png";
import sad from "../Assets/images/sad.png";

export default function Final({ arrIcons }) {
  let emoji = party;
  let title = "Parabéns!";
  let phrase = "Você não esqueceu de nenhum flashcard!";

  if (arrIcons.includes("close-circle")) {
    emoji = sad;
    title = "Putz...";
    phrase = "Ainda faltam alguns... Mas não desanime!";
  }
  return (
    <div className="final">
      <div className="titulo">
        <img src={emoji} alt="emoji" />
        <p><strong>{title}</strong></p>
      </div>
      <p>{phrase}</p>
    </div>
  );
}
