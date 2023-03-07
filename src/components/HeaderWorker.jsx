//HOOKS
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.jsx'
import { IsLoginContext } from "../contexts/IsLoginContext";
import Swal from "sweetalert2";
import axios from "axios";

//Imagenes Importadas
import gobiernoLogo from "../assets/images/GobiernoMexico.svg";
import userIcon from "../assets/images/MaleUser.svg";

//CCS
import "../assets/styles/Header.css";


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
        <nav className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2 logo">
                        <img src={gobiernoLogo} alt="" id="LogoMx" />
                    </div>
                    <div className="col-2 opciones">
                        <a href="/gob/vehicle/consult" className="link"> Registro Vehicular</a>
                    </div>
                    <div className="col-2 opciones">
                        <a href="/gob/vehicular/consult" className="link">Consulta Vehicular</a>  
                    </div>
                    <div className="col-2 opciones">
                        <a href="/gob/worker/listcar" className="link">Lista Vehicular</a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2 icons-div">
                        <img src={userIcon} alt="" id="icon-perfil"/>
                        <button className="cerrarSesion" onClick={() =>handleClick()}>Cerrar Sesion</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default HeaderWorker;

            //<div className='HeaderWorker'>
           // <div className='greenPartHeader'>
                //<img className='GobiernoIcon' src={GobiernoIcon}/>
              //  <ul className='navegar'>
               //     <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
               //     <li><a href="/gob/vehicular/catalog">Lista Vehicular</a></li>
               //     <li><a href="/gob/vehicular/consult">Consulta Vehicular</a></li>
             //   </ul>
             //   <img className='InicioS' src={InicioS} />
             //   <button className='cerrarSesion' onClick={() =>handleClick()}>Cerrar Sesion</button>
          //  </div>
