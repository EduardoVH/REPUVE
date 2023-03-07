//Hooks
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
//Componentes Importados
import VehicleCard from "../components/VehicleCard";
import { VehicleIdContext } from "../contexts/VehicleIdContext";
//CSS
import "../assets/styles/consultaWorker.css";
function ConsultaVehicularWorker() {
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
                text: 'Vehicle not Found!',
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
        .catch(err=>console.log("Unexpected error, try again later"));
    }

    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="container">
                            <div className="row div-formularioBusqueda">
                                <div className="col-12 ">
                                    <form onSubmit={handlerSubmitForm}>
                                        <span className="title-busquedaWorker">Ingrese Numero de Indetificacion Vehicular (NVI)</span><br />
                                        <input id="input-busqueda"  onChange={handlerNivInput} type="text" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row div-botonBusqueda">
                                <div className="col-3"></div>
                                <div className="col-6 button-div">
                                    <form onSubmit={handlerSubmitForm} className="buscarVehiculoForm">
                                        <button className="buscarVehiculo">Buscar</button>
                                    </form>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6">
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
                                <div className="col-3"></div>
                            </div>
                            <div className="row ley busqueda-ley">
                                <span className="ley-info">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
    );
}

export default ConsultaVehicularWorker;