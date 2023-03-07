//Hooks
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
//Componentes Importados
import VehicleCard from "../components/VehicleCard";
import { VehicleIdContext } from "../contexts/VehicleIdContext";
import ConsultaVehicularInform from "./ConsultaVehicularInform";
//Imagenes Importadas
import lupa from "../assets/images/lupa.svg";
import fotoBusqueda from "../assets/images/image-consulta-vehicular1.svg";
import searchIcon from '../assets/images/searchIcon.png'
//CSS
import '../assets/styles/cosultaVehicular.css'
import Swal from "sweetalert2";

function ConsultaVehiculo() {
    const [niv,setNiv]= useState('');
    const [data,setData]=useState([]);
    const handlerNivInput=(e)=>setNiv(e.target.value);
    const [info,setInfo]=useState(false)
    const {setId}=useContext(VehicleIdContext)

    const vehicleData = (data) => {
        if ( data.data == null ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se encotro el vehiculo!',
                footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
            })
        }else {
            setData(data.data)
            console.log(data.data)
            setInfo(true)
            setId(data.data.id)
        }
    }

const handlerSubmitForm=(e)=>{
        e.preventDefault();

        fetch(`http://18.215.246.106:8080/vehicle/${niv}`)
        .then(response => response.json())
        .then (data => vehicleData(data))
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

    return(
        <>
            <div className="container body-busqueda">
                <div className="row">
                    <div className="col-5 encabezado-consulta">
                        <span className="title-consulta">
                        <img src={lupa} id="lupa"/>Consulta Vehicular</span>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="div-10">
                        <div className="alerta">
                            <span className="alerta-info">POR FAVOR INGRESE LOS DATOS COMO SE LE INDICA</span>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-6 formulario">
                        <form action="" onSubmit={handlerSubmitForm}>
                            <div className="row">
                                <p className="ingrese-nvi">Ingrese Numero de Indetificacion Vehicular (NVI)</p>
                                <input id="input-busqueda" onChange={handlerNivInput} type="text" className="form-control" placeholder="***********"/>
                            </div>
                            <br />
                            <div className="row boton-buscar">
                                <button className="buscar-vehiculo">Buscar</button>
                            </div>
                            <br /><br /><br /><br />
                            <div className="row ley">
                                <span className="ley-info">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={fotoBusqueda} id="foto-consultaVehicular"/>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-5">
                        <div className="CardMuestra">
                            {
                                info&& <VehicleCard
                                key={data.id}
                                id={data.id}
                                vehiclePicture={data.vehiclePicture}
                                model={data.model}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </>
    );

}
export default ConsultaVehiculo;

                //<button className={"bttn-searchForm"}>Buscar</button>
                //</form>
                //<br/>
                    //<div>
                        //{
                        //    info&& <VehicleCard
                         //   key={data.id}
                         //   id={data.id}
                          //  model={data.model}
                          //  brand={data.brand}
                          //  year={data.year}
                           // color={data.color}
                           // vehiclePicture={data.vehiclePicture}
                          //  />
                        //}//
                  //  </div>
              //  <ConsultaVehicularInform></ConsultaVehicularInform>