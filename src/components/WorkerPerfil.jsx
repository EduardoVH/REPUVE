//HOOKS
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.jsx'
import { IsLoginContext } from "../contexts/IsLoginContext";
import Swal from "sweetalert2";
import axios from "axios";
//Imagenes Importadas
import GobiernoIcon from '../assets/images/GobiernoDeMexico.png'
import InicioS from '../assets/images/inicioS.png'
import Perfil from '../assets/images/perfil.png'
import Home from '../assets/images/Home.png'
//CSS
import '../assets/styles/workerPerfil.css'

function HeaderWorker() {
    const { user,setUser } = useContext(UserContext)
    const { setIsLogued} = useContext(IsLoginContext)

    const handleClick = () => {
        setUser([])
        setIsLogued(false)
    }


    const handlePic=()=>{
        Swal.fire({
            title: 'Suba su foto de perfil',
            input: 'file',
            showCancelButton: true,
            confirmButtonText: 'Subir',
            showLoaderOnConfirm: true,
            preConfirm: (e) => {
                let file =e

                let formData =new FormData();
                formData.append('image', file)
                formData.append('idWorker', user.id )
                return(
                axios({
                    url:`http://18.215.246.106:8080/file/worker`,
                    method:"POST",
                    headers:{
                        "Content-Type": "multipart/form-data",
                        "Accept": "application/json",
                        "type": "formData"      },
                    data:formData
                }).then((resp)=>{
                }).then(data=> {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Foto Actualizada, el cambio puede tardar en reflejarce',
                            showConfirmButton: false,
                            timer: 1500
                        })

                }
                ))
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }

    return ( 
        <section>
            <div className="container">
                <div className="row header-perfil">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 className="title-welcome">¡Hola de Nuevo!</h2>
                        <p className="name-worker">{user.name + " "+ user.lastName}</p>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-2">
                        <div className="perfil-circle">
                            <img className="subirfoto-label" onClick={(handlePic)}  src={user.profilePicture}/>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h1 className="wyd">Que deseas realizar hoy...</h1>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </section>
    );
}

export default HeaderWorker;

          //  <div className='user'>
            //    <div className='userconter'>
          //          <div className='hola'>
            //            <p className='saludo'>Hola de Nuevo!</p>
                //        <p className='nombre'>{user.name}</p>
              //      </div>
                   // <img className='Perfil' onClick={(handlePic)}  src={user.profilePicture}/>
                //</div>

          //  <span>que quieres hacer hoy...</span>
             //   <div className='Opciones'>
               //     <img className='Home' src={Home} />
                //    <ul className='Acciones'>
              //          <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
            //            <li><a href="/gob/vehicular/consult">Consulta Vehicular</a></li>
          //              <li><a href="/gob/vehicular/catalog">Lista de Vehiculos</a></li>
           //             <li><a href="/gob/registry/agency">Registro Agencia</a></li>
          //          </ul>
          //      </div>
         //   </div>


          //  </div>//

