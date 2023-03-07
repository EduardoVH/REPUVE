//Componentes Importados
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import CardCarViewWorker from "../components/CardCarViewWorker";
import Footer from "../components/Footer";
//Imagenes Importadas
import regreso from "../assets/images/LeftArrow.svg"
//CSS
import "../assets/styles/workerCarView.css";

function WorkerCarView() {
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
        <CardCarViewWorker />
        <Footer />
        </>
    );
}

export default WorkerCarView;