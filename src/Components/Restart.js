export default function Restart({ setTela }) {
  return (
    <div className="botao-reiniciar" onClick={() => setTela("welcome")}>
      <p>REINICIAR RECALL</p>
    </div>
  );
}
