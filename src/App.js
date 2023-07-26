import logo from './banco-do-brasil.png';
import Cabecalho from './componentes/Cabecalho';
import Conteudo,{OlaMundo} from './componentes/Conteudo';
import Rodape from './componentes/Rodape';
/*
arquivo app jsx
componente funcional = porque ele é uma funcao
*/ 
function App() {

  OlaMundo();
  /*todo componente deve retornar um html entre parenteses*/
  return (
    /*o react substitui classname por class pq class é palavra reservada do JS*/
    <>
    <Cabecalho logo="logo192.png"titulo="Favio.io" subtitulo="o melhor gerenciador de favoritos da internet brasileira"/>
    <Conteudo/>
    <Rodape/>

    </>
  );
}

export default App;
