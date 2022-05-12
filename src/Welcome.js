export default function Welcome ({ setTela }) {
    return (
        <div className="tela-inicio">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <div className="botao" onClick={() => setTela("deck")}><p>Iniciar Recall!!</p></div>
        </div>
    )
}