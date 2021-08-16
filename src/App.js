import React, {useState} from "react";
import Cabecalho from "./componentes/cabecalho";
import Sobre from "./componentes/sobre";
import Projetos from "./componentes/projetos";
import Redes from "./componentes/redes";
import Content from "./componentes/content";

export default function App() {
  const [sobre, setSobre] = useState(false);
  const [projetos, setProjetos] = useState(false);
  const [redes, setRedes] = useState(false)


  const mostraConteudo = () => {
    if (sobre) {
      return(
        <Sobre/>
      );
    } else if (projetos) {
      return(
        <Projetos/>
      );
    } else if (redes) {
      return(
        <Redes/>
      );
    } else {
      return <p>Seja bem vindo!</p>
    }
  }

  const changeStateSobre = () => {
    setSobre(!sobre)
    setProjetos(false)
    setRedes(false)
  }

  const changeStateProjetos = () => {
    setProjetos(!projetos)
    setSobre(false)
    setRedes(false)
  }

  const changeStateRedes = () => {
    setRedes(!redes)
    setSobre(false)
    setProjetos(false)
  }

  return (
    <>
      <Cabecalho 
        changeStateSobre={changeStateSobre}
        changeStateProjetos={changeStateProjetos}
        changeStateRedes={changeStateRedes}/>
      
      <Content mostraConteudo={mostraConteudo}/>
    </>
  );
}


