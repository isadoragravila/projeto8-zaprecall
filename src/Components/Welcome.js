import logo from "../Assets/images/logo.png";

export default function Welcome ({ setTela }) {
    return (
        <div className="tela-inicio">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <div className="botao" onClick={() => setTela("deck")}>
                <p>Iniciar Recall!!</p>
            </div>
        </div>
    );
}