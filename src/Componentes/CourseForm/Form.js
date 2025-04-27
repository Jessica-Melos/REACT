import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseList from "../List/CourseList";
import { SlList } from "react-icons/sl";
import { FaPlus } from "react-icons/fa"
import { IoArrowUndo } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import "./Form.css";


const Form = () => {
  const [curso, setCurso] = useState("");
  const [carga, setCarga] = useState("");
  const [cursosAdicionados, setCursosAdicionados] = useState([]);
  const [modo, setModo] = useState("form");

  const navigate = useNavigate(); // Declarar o hook useNavigate

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
            <button onClick={adicionarCurso} title="Adicionar Curso" className="botao-adicionar">
              <FaPlus size={16}/>
            </button>
            </div>

            
            <div className="menu-footer">

            <button className="home">
             <IoHome size={19}  color= "#fff"/>
             </button>

            <button className="ver-lista-btn" onClick={() => setModo("lista")}>
              <span title="Visualizar Cursos">
                < SlList size={20} color= "#fff"/>
             </span>
             
             </button>
             <button onClick={() => navigate(-1)} className="voltar-btn">
              <span title="Voltar">
                <IoArrowUndo size={20} color= "#fff" />
              </span>
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
