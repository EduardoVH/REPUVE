//CSS
import "../assets/styles/Header.css"
//Imagenes Importadas
import gobiernoLogo from "../assets/images/GobiernoMexico.svg";
import userIcon from "../assets/images/MaleUser.svg";

function Header() {
    return (
        <nav className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2 logo">
                        <a href="/home">
                        <img src={gobiernoLogo} alt="" id="LogoMx" />
                        </a>
                    </div>
                    <div className="col-2 opciones">
                        <a href="/vehicular/consult" className="link">Consulta Vehicular</a>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-1 icons-div">
                        <a href="/signIn"><img src={userIcon} alt="" id="icon-perfil"/></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;







            //<div className="opciones">
                //<a href="/vehicular/consult">Consulta Vehicular</a>
                //<a href="/signIn"> <img src={userIcon} alt="User icon" /> </a>
           // </div>
        //</header>
    //)
//}
