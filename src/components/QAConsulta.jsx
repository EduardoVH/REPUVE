import '../assets/styles/QAConsulta.css';
//Imagenes Importadas
import QA from '../assets/images/qaPic.png';
import nvi1 from "../assets/images/nvi1.svg";
import nvi2 from "../assets/images/nvi2.svg";
function QAConsulta() {
    return(
        <>
            <section className="container-QA">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 title-donde">
                            <p className="text-donde">¿Donde puedo encontrar mi <b>numero de Identificacion Vehicular</b>?</p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row images-info">
                        <div className="col-4">
                            <img src={nvi1} id="nvi1"/>        
                        </div>
                        <div className="col-8">
                            <img src={nvi2} id="nvi2"/> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default QAConsulta;