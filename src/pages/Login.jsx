
//Imagenes Importadas
import imageLogin from "../assets/images/image-login.svg";
import regreso from "../assets/images/LeftArrow.svg"
//Componentes Importadas
import Formulario from "../components/FormularioLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";
//CSS
import "../assets/styles/login.css";

function Login() {
    return (  
        <>
        <Header />
        <section>
            <div className="container ">
                <div className="row body-login">
                    <div className="col-7 div-body-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 div-bottonregreso">
                                    <button className="regreso">
                                        <img src={regreso} alt=""/>
                                    </button>
                                </div>
                                <div className="col-10"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8 div-title">
                                    <h1 className="title-login">BIENVENIDOS</h1>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <Formulario/>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                                <div className="col-8 div-links">
                                    <a href="/signUp" className="link-regreso">
                                        <h2 className="regresar"><b>Registraterte aqui</b> para poder acceder</h2>
                                    </a>
                                </div>
                            <div className="col-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                                <div className="col-8 div-crearCuenta">
                                    <a href="/home" className="link-regreso">
                                        <h2 className="regresar"> Si deseas regresar al inicio <b>haz click aqui</b></h2>
                                    </a>
                                </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img src={imageLogin} alt="" id="imagen-login"/>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Login;