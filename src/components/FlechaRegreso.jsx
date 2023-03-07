/*Imagenes Exportadas*/
import flecha from "../assets/images/LeftArrow.svg";
/*CSS*/
import "../assets/styles/flecha.css";

function FlechaRegreso() {
    return (
        <div className="container-flecha-alineacion">
            <div className="container-flecha">
                <button id="flechaLeft"><img src={flecha} alt="flecha" id="flechaleft" /></button>
            </div>
        </div>
    );
}

export default FlechaRegreso;