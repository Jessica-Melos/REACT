import { useState } from "react";
import {FaChevronDown} from 'react-icons/fa';
import "./Dropdown.css"; // se você estiver usando um arquivo de estilo separado

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Para controlar a abertura/fechamento
  const [selected, setSelected] = useState(null); // Para armazenar o item selecionado

  const options = [
    { label: "Opção 1", value: "1" },
    { label: "Opção 2", value: "2" },
    { label: "Opção 3", value: "3" }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen); // Abre/fecha o dropdown

  const handleSelect = (option) => {
    setSelected(option); // Atualiza o item selecionado
    setIsOpen(false); // Fecha o dropdown após selecionar
  };

  // Para fechar o dropdown quando clicar fora dele
  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  // Adicionando o evento de clique fora do componente (para fechar)
  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={toggleDropdown}>
        {selected ? selected.label : "Selecione uma opção"}
        <FaChevronDown style={{marginLeft:"46px"}} />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
