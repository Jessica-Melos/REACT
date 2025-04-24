import React from "react";
import "./Form.css"; // se os estilos estiverem juntos

const CourseList = ({ cursos, onToggleSelecionado, onRemover, onVoltar }) => {
  const totalCarga = cursos.reduce((acc, item) => acc + item.carga, 0);

  return (
    <div className="fade-in">
      <div id="lista-container">
        <h2>Lista de Cursos</h2>
        <div id="listaCursos">
          {cursos.length > 0 ? (
            cursos.map((curso, index) => (
              <div
                key={index}
                className={`curso-item ${curso.selecionado ? "tachado" : ""}`}
                onClick={() => onToggleSelecionado(index)}
              >
                {curso.nome} - {curso.carga}h
              </div>
            ))
          ) : (
            <p>Nenhum curso adicionado ainda.</p>
          )}
        </div>

        <div id="botoes-container">
          <button onClick={onRemover}>Excluir</button>
          <button disabled={cursos.length === 0}>Inserir</button>
          <button
            onClick={onVoltar}
            style={{ backgroundColor: "#ddd", marginLeft: "10px" }}
          >
            Voltar para Adição
          </button>
        </div>
      </div>

      <div id="total-horas">
        <p className="total-horas__text">
          <strong>Total de Carga Horária:</strong>
          <span id="totalCarga"> {totalCarga} </span>
          <span id="unidadeHoras">horas</span>
        </p>
      </div>
    </div>
  );
};

export default CourseList;
