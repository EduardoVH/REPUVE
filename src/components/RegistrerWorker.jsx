//Imagenes Importadas
import icon from "../assets/images/foto-login.svg";

import {useState} from "react";
import data from "bootstrap/js/src/dom/data.js";
import Swal from "sweetalert2";


function RegistrerWorker() {
    const [data,setData]=useState([])
   const [name,setName]=useState('')
    const [lastname,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [workerCode,setWorkerCode]=useState('')

    const handlerSubmit = (e) => {
e.preventDefault()
        console.log(name)
        console.log(lastname)
        console.log(email)
        console.log(password)
        console.log(workerCode)

 const option={
     method:'POST',
     headers: {
         Accept: "*/*",
         "Content-Type": "application/json",
         Connection: "keep-alive",
     },
     body:JSON.stringify({
         name:name,
         lastName:lastname,
         email:email,
         password:password,
         workerCode:workerCode

     })
 };

 fetch('http://18.215.246.106:8080/worker',option)
     .then(response=>response.json())
     .then(data=> {
         data.status ?Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
                 text: 'Algo salio mal, intente de nuevo mas tarde!',
                 footer: ''
             }):
         Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Trabajador Registrado',
             showConfirmButton: false,
             timer: 1500
         })
     })
     .catch(err=>{console.log("Unexpected error, try again later")
         if (navigator.onLine)
         {console.log('online');
         } else
         {Swal.fire({
             icon: 'error',
             title: 'Error de Conexion',
             text: 'Problemas con la conexion a internet',
             footer: '<b>error?</b><br/><span>Verifique que este conectado a una red estable</span>'
         })
             console.log('offline');}
     });

 }

 const hName = (e) => {
   setName(e.target.value)
 }
const hLastName = (e) => {
setLastName(e.target.value)
    }
const hEmail = (e) => {
  setEmail(e.target.value)
}
const hWorkerCode = (e) => {
  setWorkerCode(e.target.value)
}
const hPassword = (e) => {
setPassword(e.target.value)
    }


    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 div-formSing">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 div-item">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form onSubmit={handlerSubmit}>
                                        <p className="txt-form">Nombre</p>
                                        <input  type="text"  placeholder="" className="input-form"  onChange={hName}/>
                                        <p className="txt-form">Apellido</p>
                                        <input  type="text" placeholder="" className="input-form" onChange={hLastName} />
                                        <p className="txt-form">Correo</p>
                                        <input  type="email"  placeholder="name@example.com" className="input-form" onChange={hEmail}/>
                                        <p className="txt-form">Contraseña</p>
                                        <input  type="password"  placeholder="Password" className="input-form" onChange={hPassword}/>
                                        <p className="txt-form">Codigo de Trabajador:</p>
                                        <input  type="password"  placeholder="Password" className="input-form" onChange={hWorkerCode}/>
                                        <button className="button-entrarWorker">Entrar</button>
                                    </form>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    {/*<form>*/}
                                    {/*    <button className="button-entrarWorker">Entrar</button>*/}
                                    {/*</form>*/}
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

export default RegistrerWorker;