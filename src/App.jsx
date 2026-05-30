import Cabecalho from "./Cabecalho"
import Saudacao from "./Saudacao"
import Cartao from "./Cartao"
import Rodape from "./Rodape"

function App() {
  const meuNome = "Gabriel Candido Silva de Lima";
  const meuCurso = "Analise e Desenvolvimento de Sistemas";

  return (
    <>
      <Cabecalho/>

      <main style = {{padding: "0 20px"}}>
        <Saudacao />
        <Cartao />

        <div className="cartao">
          <h3>Sobre Mim</h3>
          <p><strong>Nome: </strong>{meuNome}</p>
          <p><strong>Curso: </strong>{meuCurso}</p>
          <h4>Meus Hobbies</h4>
            <ul>
              <li>Correr logo apos acordar no periodo da manha</li>
              <li>Jogar no meu PS5 e no PC tambem</li>
              <li>Estudar de 2 a 4 horas por dia para manter a mente fresca</li>
            </ul>
        </div>
      </main>

      <Rodape />
    </>
  );
}

export default App;