export default function Questions({ question, answer, clique, setClique }) {
    return (
        <>
            {clique === "question" ? 
            <div className="question">
                <p>{question}</p>
                <img src="./images/setinha.png" alt="setinha" onClick={() => setClique("answer")} />
            </div>
            :
            <Answers answer={answer} />
            }
        </>
    );
}

function Answers ({answer}) {
    return (
        <div className="question">
            <p>{answer}</p>
            <div className="answer">
                <div className="botao vermelho">
                    <p>Não lembrei</p>
                </div>
                <div className="botao laranja">
                    <p>Quase não lembrei</p>
                </div>
                <div className="botao verde">
                    <p>Zap!</p>
                </div>
            </div>
        </div>
    );
}