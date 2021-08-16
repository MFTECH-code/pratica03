import React from "react";
import "./styles/content.css";

export default function Content(props) {
    return(
        <section className="content">
            {props.mostraConteudo()}
        </section>
    );
}