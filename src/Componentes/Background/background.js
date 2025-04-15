function Background (){
        const backgroundStyle = {
          backgroundImage: "url('/Imagens/PERFIL_CURSOS.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          position: "fixed", 
          top: 0,
          left: 0,
          zIndex: -1, 
        };
      
        return <div style={backgroundStyle} />;
      }
      
    
export default Background