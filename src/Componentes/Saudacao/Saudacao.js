import { useEffect, useState } from "react";
import "./Saudacao.css"; // se quiser estilizar separado

function Saudacao() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const atualizarMensagem = () => {
      const agora = new Date();
      const diaSemana = agora.toLocaleDateString("pt-BR", { weekday: "long" });
      const dia = agora.getDate();
      const mes = agora.toLocaleDateString("pt-BR", { month: "long" });
      const ano = agora.getFullYear();
      const hora = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      });

      
      let saudacaoTexto;
      const horaAtual = agora.getHours();

      if (horaAtual >= 6 && horaAtual < 12) {
        saudacaoTexto = "Bom dia!";
      } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacaoTexto = "Boa tarde!";
      } else {
        saudacaoTexto = "Boa noite!";
      }

      setMensagem(
        `<strong style="font-size:1rem;">${saudacaoTexto}</strong> <br>Hoje é ${diaSemana}, ${dia} de ${mes} de ${ano}, agora são ${hora}.`
      );
    };

    atualizarMensagem();
    const intervalo = setInterval(atualizarMensagem, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <p className="saudacao" dangerouslySetInnerHTML={{ __html: mensagem }} />

  );
}

export default Saudacao;
