import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";  // Home Page
import ManagerProfile from "./Pages/ManagerProfile";  // Página do Perfil do Gestor


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/managerProfile" element={<ManagerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
