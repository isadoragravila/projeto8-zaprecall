import setinha from "../Assets/images/setinha.png";

export default function Questions({ question, setType }) {
  return (
    <div className="question">
      <p>{question}</p>
      <img src={setinha} alt="setinha" onClick={() => setType(false)} />
    </div>
  );
}
