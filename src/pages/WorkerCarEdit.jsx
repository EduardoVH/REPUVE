//Componentes Importados
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import CardCarEditWorker from "../components/CardCarEditWorker";
import Footer from "../components/Footer";
//Imagenes Importadas
import regreso from "../assets/images/LeftArrow.svg"
//CSS
import "../assets/styles/workerCarView.css";
function WorkerCarEdit() {
    return (  
        <>
        <HeaderWorker />
        <WorkerPerfil />
        <OptionsWorker />
        <div className="container">
            <div className="row regreso-work">
                <div className="col-1">
                    <button className="regreso">
                        <img src={regreso} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <CardCarEditWorker />
        <Footer />
        </>
    );
}

export default WorkerCarEdit;