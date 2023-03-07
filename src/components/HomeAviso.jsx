import '../assets/styles/homeAviso.css'
//Imagenes Importadas
import aviso from "../assets/images/AvisoRepuve.svg";

function HomeAviso() {
    return(
        <>
        <section className="aviso-importante">
            <div className="container text-center">
                    <div className="row">
                        <div className="col-7 imagen-aviso">
                            <img src={aviso} alt="Foto-Aviso" id="aviso"/>
                        </div>
                        <div className="col-5">
                            <div className="info-aviso">
                                <h2 className="title-aviso"> AVISO IMPORTANTE</h2>
                                <span className="subtitle-aviso">El Registro Público Vehicular pone a su disposicion el numero telefonico</span>
                                <h1 className="number-aviso">800 REPUVE 1</h1>
                                <h3 className="numbers-aviso">(800-737-883-1)</h3>
                                <div>
                                    <span className="hours-aviso">Horarios de Atencion</span><br />
                                    <span className="days-aviso">Lunes a Sabado de 09:00 a 19:00.<br/>
                                            Domingos de 09:00 a 15:00.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
}
export default HomeAviso;