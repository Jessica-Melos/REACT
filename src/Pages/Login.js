import Background from '../Componentes/Background/background';
import Logo from '../Componentes/Logo/logo';
import './Login.css';


function Login() {
  return (
    <div className="Login">
      <Logo/>
      <Background/>
      <p className='footer'>Copyright 2025 - Todos os Direitos Reservados <br></br>
        Desenvolvido por <strong>Universidade MV</strong>
      </p>
    </div>
  );
}

export default Login;
