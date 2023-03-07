//HOOKS
import {useNavigate} from "react-router-dom";
//Componentes Importadas
import Header from "../components/Header";
import CardCarViewPublic from "../components/CardCarViewPublic";
import Footer from "../components/Footer";
//Imagenes Importadas
import lupa from "../assets/images/lupa.svg";
import regreso from "../assets/images/LeftArrow.svg"
//Css
import "../assets/styles/carView.css";

function CarView() {
    return (  
        <>
        <Header />
        <section className="1">
            <div className="container">
                <div className="row">
                    <div className="col-5 encabezado-consulta">
                            <p className="title-consulta">
                            <img src={lupa} id="lupa"/>Consulta Vehicular</p>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-1">
                        <a href="/vehicular/consult">                        
                        <button className="regreso">
                            <img src={regreso} alt=""/>
                        </button></a>

                    </div>
                </div>
            </div>
        </section>
        <CardCarViewPublic/>
        <Footer></Footer>
        </>
    );
}

export default CarView;