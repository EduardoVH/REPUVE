//Componentes Importados
import Header from "../components/Header.jsx";
import HomeAvisoImportante from "../components/WorkerHomeAviso.jsx";
import HomeWhatsRepuve from "../components/HomeWhatsRepuve.jsx";
import HomeConsultaVehicular from "../components/HomeConsultaVehicular.jsx";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeMap from "../components/HomeMap.jsx";
import Footer from "../components/Footer.jsx";
//Imagenes Importadas
import logo from "../assets/images/logoMX.svg";
import etiqueta1 from "../assets/images/etiqueta1.svg";
import fotoAviso from "../assets/images/aviso-importante2.svg";
import queEsRepuve from "../assets/images/queesRepuve.svg";
//CSS
import "../assets/styles/generalHome.css";

function GeneralHome() {
    return(
        <>
        <Header />
        <section className="1">
            <div className="container body-container">
                <div className="row">
                    <div className="col-1">
                        <img src={logo} alt="Foto-Logo" id="logo"/>
                    </div>
                    <div className="col-9">
                        <span className="title-home">Registro Publico Vehicular</span><br />
                        <p className="subtitle-home">Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública | 24 de julio de 2020</p>
                    </div>
                    <hr />
                </div>
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
        <HomeWhatsRepuve/>
        <HomeConsultaVehicular/>
        <HomeAviso/>
        <HomeMap/>
        <Footer/>
        </>
    );
}
export default GeneralHome;

        //import {Header} from "../components/Header";
       // import Footer from "../components/Footer.jsx";
        //import WorkerHomeAviso from "../components/WorkerHomeAviso.jsx";

        //function GeneralHome() {
           // return(
               // <>
                //<Header></Header>
              //  <WorkerHomeAviso></WorkerHomeAviso>
              //  <HomeWhatsRepuve></HomeWhatsRepuve>
              //  <HomeConsultaVehicular></HomeConsultaVehicular>
               // <HomeAviso></HomeAviso><br/>
               // <HomeMap></HomeMap>
                //<Footer></Footer>