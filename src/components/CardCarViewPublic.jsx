/*Hooks*/
import {useContext, useEffect, useState} from "react";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
/*Paginas Exportadas*/
/*Imagenes Exportadas*/

/*CSS*/
import '../assets/styles/cardCarViewPublic.css';

function CardCarViewPublic() {
    const {id} =useContext(VehicleIdContext)
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/id/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data.data))
            .catch(err=>console.log(err))
    },[])

    return (  
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-car">
                        <div className="container ">
                            <div className="row inform-card">
                                <div className="col-6 image-cars">
                                    <img src={data.vehiclePicture} alt="Foto" id="image-car"/>
                                </div>
                                <div className="col-6 ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="model-car">MODELO</span><br />
                                                <span className="name-model">{data.model}</span>
                                            </div>
                                        </div>
                                        <div className="row datos-car">
                                            <div className="col-6">
                                                <h3 className="info-car">MARCA</h3>
                                                <span className="inf">{data.brand}</span>
                                                <h3 className="info-car">AÑO</h3>
                                                <span className="inf">{data.year}</span>
                                                <h3 className="info-car">COLOR</h3>
                                                <span className="inf">{data.color}</span>
                                                <h3 className="info-car">TIPO DE MOTOR</h3>
                                                <span className="inf">{data.engineType}</span>
                                                <h3 className="info-car">TIPO DE COMBUSTIBLE</h3>
                                                <span className="inf">{data.fuelType}</span>
                                                <h3 className="info-car">NUMERO DE SERIE</h3>
                                                <span className="inf">{data.vehicleNumberId}</span>
                                            </div>
                                            <div className="col-6">
                                                <h3 className="info-car">NUMERO DE PLACAS</h3>
                                                <span className="inf">{data.plateNumber}</span>
                                                <h3 className="info-car">NVI</h3>
                                                <span className="inf">{data.vehicleNumberId}</span>
                                                <h3 className="info-car">AGENCIA PROCEDENCIA</h3>
                                                <span className="inf">{data.agencyName}</span>
                                                <h3 className="info-car">PRECIO</h3>
                                                <span className="inf">{data.price}</span>
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

export default CardCarViewPublic;