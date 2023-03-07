//HOOKS
import {useContext, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {IsLoginContext} from "../contexts/IsLoginContext";
import {UserContext} from '../contexts/UserContext';
import Swal from "sweetalert2";
import "../assets/styles/formularioLogin.css";
//Imagenes Importadas
import icon from "../assets/images/foto-login.svg";
import iconU from "../assets/images/user.svg";
import lock from "../assets/images/Lock.svg";

function FormularioLogin() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [data, setData]=useState(null);
    const navigate=useNavigate();

    const handlerMailInput = (e) => setEmail(e.target.value);
    const handlerPasswordInput = (e) =>setPassword(e.target.value);

    const {setIsLogued} = useContext(IsLoginContext)
    const {user,setUser} = useContext(UserContext)

    const workerData = (data) => {
        if ( data.data == null ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not Found!',
                footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
            })
        }else {
            setData(data.data)
            setUser(data.data)
            setIsLogued(true);
            navigate('/gob/home')
        }
    }
    const handlerForm = (e) => {
        e.preventDefault();
        const dataJSON =  JSON.stringify({
            email:email,
            password:password
        })
        console.log(dataJSON)
        const option = {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Connection: "keep-alive",
            },
            body: dataJSON,
        };
        fetch(`http://18.215.246.106:8080/worker/signIn`, option)
            .then((response) => response.json())
            .then((data) => workerData(data))
            .catch((err) =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User not Found!',
                    footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
                })
            );
    };

    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 div-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 div-item">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form onSubmit={handlerForm}>
                                        <p className="txt-form"><img src={iconU} className="icons-form"/>Usuario</p>
                                        <input onChange={handlerMailInput} type="email" id="floatingInput" placeholder="name@example.com" className="input-form" />
                                        <p className="txt-form"><img src={lock} className="icons-form"/>Contraseña</p>
                                        <input onChange={handlerPasswordInput} type="password" id="floatingPassword" placeholder="Password" className="input-form" />
                                    </form>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form onSubmit={handlerForm}>
                                        <button className="button-entrar">Entrar</button>
                                    </form>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormularioLogin;