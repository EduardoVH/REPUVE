/*Hooks*/
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
/*Imagenes Exportadas*/
import carGrey from "../assets/images/carGrey.svg";
import edit from "../assets/images/edit.svg";
/*CSS*/
import '../assets/styles/cardCarViewWorker.css';


function CardCarViewWorker() {
    const {id,setId} =useContext(VehicleIdContext)
    const [data,setData]=useState([])
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/id/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data.data))
            .catch(err=>console.log(err))
    },[])


    const editPage=()=>{
        setId(id)
        console.log(id)
    navigate('/gob/worker/editcar')
    }

    return (  
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-carW">
                        <div className="container">
                            <div className="row inform-cardW">
                                <div className="col-6 image-cars">
                                    <img src={data.vehiclePicture} alt="Foto" id="image-carW"/>
                                </div>
                                <div className="col-6">
                                    <div className="container">
                                        <div className="row edit-confi">
                                            <div className="col-6">
                                                <span className="model-carW">MODELO</span><br />
                                                <span className="name-modelW">{data.model}</span>
                                            </div>
                                            <div className="col-6 button-edit">
                                                <button onClick={editPage} className="editar" >
                                                        <img src={edit} alt=""  />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row datos-carW">
                                            <div className="col-6">
                                                <h3 className="info-carW">MARCA</h3>
                                                <span className="infW">{data.brand}</span>
                                                <h3 className="info-carW">AÑO</h3>
                                                <span className="infW">{data.year}</span>
                                                <h3 className="info-carW">COLOR</h3>
                                                <span className="infW">{data.color}</span>
                                                <h3 className="info-carW">TIPO DE MOTOR</h3>
                                                <span className="infW">{data.engineType}</span>
                                                <h3 className="info-carW">TIPO DE COMBUSTIBLE</h3>
                                                <span className="infW">{data.fuelType}</span>
                                                <h3 className="info-carW">NUMERO DE SERIE</h3>
                                                <span className="infW">{data.vehicleNumberId}</span>
                                                <h3 className="info-carW">NUMERO DE PLACA</h3>
                                                <span className="infW">{data.plateNumber}</span>
                                            </div>
                                            <div className="col-6">
                                                <h3 className="info-carW">NVI</h3>
                                                <span className="infW">{data.vehicleNumberId}</span>
                                                <h3 className="info-carW">AGENCIA</h3>
                                                <span className="infW">{data.agencyName}</span>
                                                <h3 className="info-carW">PRECIO</h3>
                                                <span className="infW">{data.price}</span>
                                                <h3 className="info-carW">ID VEHICULO</h3>
                                                <span className="infW">{data.id}</span>
                                                <h3 className="info-titleownerW">DATOS DEL DUEÑO</h3>
                                                <h4 className="info-ownerW">NOMBRE DEL DUEÑO</h4>
                                                <p className="infOW">{data.ownerName}</p>
                                                <h4 className="info-ownerW">APELLIDO DEL DUEÑO</h4>
                                                <p className="infOW">{data.ownerLastName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
        </>
    );
}

export default CardCarViewWorker;