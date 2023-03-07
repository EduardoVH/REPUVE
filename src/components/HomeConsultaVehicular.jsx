import vehicle from '../assets/images/vehiclePic.png'
import { useNavigate } from 'react-router';
import '../assets/styles/homeConsultaVehicular.css'

function HomeConsultaVehicular() {
const navigate=useNavigate();

const move=()=>{
    navigate('/vehicular/consult')
}

    return(
        <>
            <section className="container-consultaVehicular">
                <div className="container consulta-vehicular">
                    <div className="row">
                        <div className="col-5 information">
                            <p className="consulta">CONSULTA</p>
                            <p className="vehicular">VEHICULAR</p>
                            <button className="button-consultar" onClick={move}>Consultar</button>
                        </div>
                        <div className="col-7">
                            <div>
                                <img src={vehicle} alt="" id="imagencoche"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeConsultaVehicular;