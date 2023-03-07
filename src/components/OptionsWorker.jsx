//Imagenes Importadas
import Home from "../assets/images/Home.svg";
//CSS
import "../assets/styles/optionsWorker.css";

function OptionsWorker() {
    return (  
        <section>
            <div className="container ">
                <div className="row opciones-trabajador">
                    <div className="col-1" id="columnaHome">
                        <a href="/gob/home">
                            <img src={Home} alt="" id="icon-home" />
                        </a>
                        </div>
                    <div className="col-2">
                        <a href="/gob/vehicle/consult">
                            <h3 className="options">Registro Vehicular</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/gob/vehicular/consult">
                            <h3 className="options">Consulta Vehicular</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/gob/worker/listcar">
                            <h3 className="options">Lista Vehiculos</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/gob/registry/agency">
                            <h3 className="options">Registro Agencia</h3>
                        </a>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </section>
    );
}

export default OptionsWorker;