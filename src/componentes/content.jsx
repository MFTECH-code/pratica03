import React from "react";

export default function Content(props) {
    return(
        <section>
            {props.mostraConteudo()}
        </section>
    );
}