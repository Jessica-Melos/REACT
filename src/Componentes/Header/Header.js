import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaUser, FaCog } from "react-icons/fa";


import ManagerIcon from "../ManagerIcon/ManagerIcon";
import Saudacao from "../Saudacao/Saudacao";
import Dropdown from "../Dropdown/dropdown";

import "./Header.css";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header id="profile">
      {/* Ícone do menu no topo direito */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuAberto ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu flutuante */}
      {menuAberto && (
        <ul className={`menu-lista ${menuAberto ? "aberto" : ""}`}>
          <li><a href="#inicio"><FaHome />PA </a></li>
          <li><a href="#perfil"><FaUser />PDI </a></li>
          <li><a href="#config"><FaCog/>MPC</a></li>
        </ul>
      )}

      <div id="profile-container">
        <ManagerIcon />

        <div className="text-logo">
          <h1 className="nome_gestor">Nome do Gestor Aqui</h1>
          <h2 className="nome_diretoria">Diretoria Corporativa de Gente e Gestão</h2>
          <Dropdown />
          <div id="saudacao">
            <Saudacao />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
