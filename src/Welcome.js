export default function Welcome () {

    function openDeck () {
        console.log("abriu o deck");
    }
    
    return (
        <div className="tela-inicio">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <div className="botao" onClick={openDeck}><p>Iniciar Recall!!</p></div>
        </div>
    )
}