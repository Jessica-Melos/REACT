import React, { useState } from "react";
import "./Form.css";
import CourseList from "./List"; // ✅ importação

const Form = () => {
  const [curso, setCurso] = useState("");
  const [carga, setCarga] = useState("");
  const [cursosAdicionados, setCursosAdicionados] = useState([]);
  const [modo, setModo] = useState("form");

  const adicionarCurso = () => {
    if (curso.trim() && carga.trim()) {
      const novoCurso = {
        nome: curso.trim(),
        carga: parseInt(carga),
        selecionado: false,
      };

      setCursosAdicionados((prev) => [...prev, novoCurso]);
      setCurso("");
      setCarga("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const toggleSelecionado = (index) => {
    const novosCursos = [...cursosAdicionados];
    novosCursos[index].selecionado = !novosCursos[index].selecionado;
    setCursosAdicionados(novosCursos);
  };

  const removerCursosTachados = () => {
    const atualizados = cursosAdicionados.filter((curso) => !curso.selecionado);
    setCursosAdicionados(atualizados);
  };

  return (
    <div id="container">
      {modo === "form" ? (
        <div className="fade-in">
          <h2>Cadastro de Cursos</h2>
          <div id="input-container">
            <span>
              Informe o nome do curso, sua carga horária e, <br /> em seguida, clique em Adicionar.
            </span>
            <input
              type="text"
              placeholder="Informe o Curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            />
            <input
              type="number"
              placeholder="Carga Horária"
              min="1"
              value={carga}
              onChange={(e) => setCarga(e.target.value)}
            />
            <button id="mais" onClick={adicionarCurso}>
              <img
                src="/Imagens/adicionar (2).png"
                alt="Adicionar Curso"
                title="Adicionar"
              />
            </button>
            <button className="ver-lista-btn" onClick={() => setModo("lista")}>
              Ver Lista de Cursos
            </button>
          </div>
        </div>
      ) : (
        <CourseList
          cursos={cursosAdicionados}
          onToggleSelecionado={toggleSelecionado}
          onRemover={removerCursosTachados}
          onVoltar={() => setModo("form")}
        />
      )}
    </div>
  );
};

export default Form;
