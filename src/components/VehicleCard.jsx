
import {useContext, useState} from "react";
import {IsLoginContext} from "../contexts/IsLoginContext.jsx";
import {useNavigate} from "react-router-dom";
import data from "bootstrap/js/src/dom/data.js";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
//CSS
import '../assets/styles/vehicleCard.css'


function VehicleCard({vehiclePicture, model}) {
    const {isLogued} = useContext(IsLoginContext)
    const navigate=useNavigate();

    const handlerBttn=()=>{
        isLogued?navigate('/gob/worker/viewcar'):navigate('/vehicle/consult')
    }
    
    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <img className={"vehicle-image"} src={vehiclePicture} id="imagenCarroMostrarCard"/>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <h1 className="modelCar">Modelo</h1>
                            <span className="modelCarName">{model}</span>
                        </div>
                        <button onClick={handlerBttn} id="buttonDetalles">Detalles</button>
                    </div>
                </div>
            </div>
        </>
    )
}export default VehicleCard;