//Fotos Importadas
import GobiernoMexico from "../assets/images/GobiernoMexico.svg";
import Facebook from '../assets/images/Facebook.svg'
import Twitter from '../assets/images/Twitter.svg'
//CSS
import "../assets/styles/Footer.css";

function Footer() {
    return (
        <>
        <section className="container-footer">
            <div className="container div-footer">
                <div className="row">
                    <div className="col-3">
                        <img src={GobiernoMexico} alt="Foto-Logo" id="Foto-Logo"/>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-3">
                        <p className="title-siguenos">Siguenos en</p>
                        <div className="iconos">
                            <img src={Facebook} alt="Facebook" className="icons"/>
                            <img src={Twitter} alt="Twitter" className="icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Footer;