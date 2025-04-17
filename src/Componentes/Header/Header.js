import ManagerIcon from "../ManagerIcon/ManagerIcon"
import Saudacao from "../Saudacao/Saudacao";
import "./Header.css";

//ícone, nome e Diretoria do Gestor
const Header = () => {
    return (
    <header id="profile">
    <div id="profile-container">
      <ManagerIcon />

      <div className="text-logo">
        <h1 className="nome_gestor">Nome do Gestor Aqui</h1>
        <h2 className="nome_diretoria">Diretoria Corporativa de Gente e Cultura</h2>
        
        <div className="selection_plan">
        <label for="plan">Selecione o PA</label>
        <select id="plan" name="plan"></select>
        </div>
        
        
        <div id="saudacao">
            <Saudacao /></div>
     </div>   
   </div>
 </header>
    );
};

export default Header

