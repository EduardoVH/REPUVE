//HOOKS
import {useContext, useState} from "react";
import {IsLoginContext} from "../contexts/IsLoginContext.jsx";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
import {useNavigate} from "react-router-dom";
//CSS
import "../assets/styles/cardCarListWorker.css";
//Imagenes Importadas
import carGrey from "../assets/images/carGrey.svg";
import arrowR from "../assets/images/arrowRight.svg"
import { VehicleDataContext } from "../contexts/VehicleIdContext.jsx";
import data from "bootstrap/js/src/dom/data.js";


function CardCarListWorker({vehiclePicture,ide}) {
    const {isLogued} = useContext(IsLoginContext)
    const navigate=useNavigate();
    const {id, setId} =useContext(VehicleIdContext)

    const handlerBttn=()=>{
        setId(ide)
        console.log(id)
        isLogued?navigate('/gob/worker/viewcar'):navigate('/gob/worker/viewcar')
    }
    return (  
        <div className="card car">
            <img src={vehiclePicture} className="card-img-top" alt="..." id="fotoCarroList"/>
            <div className="card-body link-from-car">
                <button id="button-listCar" onClick={handlerBttn}>
                    <img src={arrowR} alt="" />
                </button>
            </div>
        </div>
    );
}

export default CardCarListWorker;