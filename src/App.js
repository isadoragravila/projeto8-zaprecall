import React from "react";
import Welcome from "./Welcome";
import Deck from "./Deck";

export default function App () {
    const [tela, setTela] = React.useState("welcome");

    return (
        <>
            {tela === "welcome" ? <Welcome setTela={setTela} /> : <Deck />}
        </>
    );
}