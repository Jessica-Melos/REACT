import ManagerIcon from "../ManagerIcon/ManagerIcon"
import Saudacao from "../Saudacao/Saudacao";
import Dropdown from "../Dropdown/dropdown";

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
          <Dropdown />

          {/*
            <div className="selection_plan">
                <select id="plan" name="plan" defaultValue="">
                <option value="" disabled hidden>Selecione o PA</option>
                <option value="pa1">PA 1</option>
              </select>
            </div>*/}
            

            
        
            <div id="saudacao">
              <Saudacao />
              
            </div>
          </div>   
        </div>
      </header>
    );
};

export default Header



