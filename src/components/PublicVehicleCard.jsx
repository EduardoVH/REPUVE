import {useContext, useEffect, useState} from "react";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";

function PublicVehicleCard() {
    const {id} =useContext(VehicleIdContext)
    const [data,setData]=useState([])


    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/id/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <div className="card-car-view-container">
            <div className="image-card">
                <img src={data.vehiclePicture} alt="Foto" id="img-car"/>
            </div>
            <div className="info-card">
                <span className="model-car">MODELO</span>
                <span className="name-model">{data.model}</span>
                <br />
                <span className="info">AÑO</span>
                <span className="subtitle">{data.year}</span>
                <span className="info">COLOR</span>
                <span className="subtitle">{data.color}</span>
                <span className="info">TIPO DE MOTOR</span>
                <span className="subtitle">{data.engineType}</span>
                <span className="info">TIPO DE COMBUSTIBLE</span>
                <span className="subtitle">{data.fuelType}</span>
                <span className="info">NUMERO DE PLACA</span>
                <span className="subtitle">{data.plateNumber}</span>
                <span className="info">AGENCIA DE PROCEDENCIA</span>
                <span className="subtitle">{data.agencyName}</span>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <span className="info">NVI</span>
                <span className="subtitle">{data.vehicleNumberId}</span>
                <span className="info">PRECIO</span>
                <span className="subtitle">{data.price}</span>
            </div>
        </div>
    );
}

export default PublicVehicleCard;