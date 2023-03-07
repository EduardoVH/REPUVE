import "../assets/styles/consultaAviso.css";
//Imagenes Importadas
import nvi3 from "../assets/images/nvi3.svg";
function ConsultaAviso() {
    return (  
        <>
        <section>
            <div className="container body-aviso2">
                <div className="row">
                    <div className="col-5 aviso-importante2">
                        <div className="row">
                            <span className="title-aviso2">AVISO IMPORTANTE</span>
                        </div>
                        <div className="row">
                            <p className="subtitle-aviso2">El Registro Público Vehicular pone a su disposicon el numero telefonico</p>
                        </div>
                        <div className="row">
                            <span  className="number-aviso2">800 REPUVE 1</span>
                        </div>
                        <div className="row">
                            <span className="numbers-aviso2">(800-737-883-1)</span>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-11 horarios">
                                <span className="horario-aviso2">Horarios de atencion </span><br />
                                <span className="horas-aviso2">Lunes a Sabado de 9:00 a 19:00 hrs</span><br />
                                <span className="horas-aviso2">Domingos de 9:00 a 15:00 hrs</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <img src={nvi3} id="aviso2"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ConsultaAviso;