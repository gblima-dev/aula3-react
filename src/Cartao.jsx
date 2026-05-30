import "./Cartao.css";

function porcentagem(parte, total){
    return Math.round((parte / total) * 100);
}

function Cartao() {
    const titulo = "Progresso Academico";
    const totalTopicos = 5;
    const concluidos = 3;
    const progressoAtual = porcentagem(concluidos, totalTopicos);

    return (
        <div className="cartao">
            <h3>{titulo}</h3>
            <p>Nesta aula eu estou aprendendo React, JSX  e componentes funcionais</p>

            <ul>
                <li className="destaque">O que e react?</li>
                <li>Sintaxe JSX</li>
                <li>Componentes funcionais</li>
            </ul>

            <p>Progresso do conteudo: {progressoAtual}%</p>
            <p>Faltam {totalTopicos - concluidos} topicos para concluir</p>

            <p className="status-feedback">
                Status: {progressoAtual >= 50 ? "Estou no caminho certo!" : "Continue melhorando!"}
            </p>
        </div>
    );
}

export default Cartao;