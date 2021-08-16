import React from "react";

export default function Cabecalho(props) {
    return(
        <header>
            <h1>Matheus Feitosa Silva</h1>
            <p>Programador Full Stack</p>
            <ul>
            <li><button onClick={() => props.changeStateSobre()}>Sobre</button></li>
            <li><button onClick={() => props.changeStateProjetos()}>Projetos</button></li>
            <li><button onClick={() => props.changeStateRedes()}>Redes</button></li>
            </ul>
        </header>
    );
}