import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  // Definir os estados para os inputs
  const [curso, setCurso] = useState("");
  const [carga, setCarga] = useState("");

  // Função para adicionar o curso
  const adicionarCurso = () => {
    if (curso && carga) {
      // Lógica para adicionar o curso (exemplo: salvar em um array ou enviar para uma API)
      console.log("Curso Adicionado:", { curso, carga });
      // Limpar os campos após adicionar
      setCurso("");
      setCarga("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    
    <div id="container">
      <h2>Cadastro de Cursos</h2>
      <div id="input-container">
        <span>
          Informe o nome do curso, sua carga horária e, <br /> em seguida, clique em Adicionar.
        </span>
        <input
          type="text"
          id="curso"
          placeholder="Informe o Curso"
          value={curso} // Valor vindo do estado
          onChange={(e) => setCurso(e.target.value)} // Atualiza o estado quando o valor muda
        />
        <input
          type="number"
          id="carga"
          placeholder="Carga Horária"
          min="1"
          value={carga} // Valor vindo do estado
          onChange={(e) => setCarga(e.target.value)} // Atualiza o estado quando o valor muda
        />
        <button id="mais" onClick={adicionarCurso}>
          <img
            src="/Imagens/adicionar (2).png"
            alt="Adicionar Curso"
            title="Adicionar"
          />
        </button>
      </div>
    </div>
  );
};

export default Form;
