import '../assets/styles/workerHomeAviso.css'
import worker from '../assets/images/workerHome.png'
//Imagenes Importadas
import etiqueta1 from "../assets/images/etiqueta1.svg";
import fotoAviso from "../assets/images/aviso-importante2.svg";

function WorkerHomeAviso() {
    return(
        <>
            <section className="container-worker-home">
                <div className="container">
                    <div className="row fila2">
                        <div className="col-1"></div>
                        <div className="col-6">
                            <h1 className="title-avisorepuve">AVISO IMPORTANTE</h1>
                            <p className="subtitle-avisorepuve">Para el programa de regularización de vehiculos usados de procedencia extranjera, se implementarán módulos de inscripción vehicular en las entidades referidad en el Decreto: Para solicitar este trámite deberá realizar una cita mediante un sistema de citas electronicas</p>
                            <div>
                                <img src={etiqueta1} alt="etiqueta" id="image-aviso"/>
                            </div>
                        </div>
                        <div className="col-5 ">
                            <img src={fotoAviso} alt="foto-aviso" id="foto-aviso" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default WorkerHomeAviso;
