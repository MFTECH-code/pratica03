import React from "react";
import "./styles/cabecalho.css";

export default function Cabecalho(props) {
    return(
        <header className="cabecalho">
            <h1 className="nome">Matheus Feitosa Silva</h1>
            <p className="descricao">Programador Full Stack</p>
            <ul className="menu">
                <li><button onClick={() => props.changeStateSobre()}>Sobre</button></li>
                <li><button onClick={() => props.changeStateProjetos()}>Projetos</button></li>
                <li><button onClick={() => props.changeStateRedes()}>Redes</button></li>
            </ul>
        </header>
    );
}