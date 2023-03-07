//Componentes Importados
import Header from "../components/Header";
import RegistrerWorker from "../components/RegistrerWorker";
import Footer from "../components/Footer";
//Imagenes Importadas
import imageLogin from "../assets/images/image-login.svg";
import regreso from "../assets/images/LeftArrow.svg"

function SingIn() {
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
                                    <h1 className="title-login">REGISTRO</h1>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <RegistrerWorker/>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                                <div className="col-8 div-links">
                                </div>
                            <div className="col-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                                <div className="col-8 div-crearCuenta">
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

export default SingIn;