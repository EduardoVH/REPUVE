import Formulario from "../components/Formulario.jsx";
import Footer from "../components/Footer.jsx";
import Imagen from '../assets/images/image 35.png'
import '../assets/styles/WorkerRegister.css'
function WorkerRegistrer(){
  return(
      <>
        <div className="Contenedor-Page">
          <Formulario/>
        </div>
        <Footer/>
      </>
  );
}
export default WorkerRegistrer;