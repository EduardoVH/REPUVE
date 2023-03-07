//HOOKS
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
//Componentes Importados
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import CardCarListWorker from "../components/CardCarListWorker";
import Footer from "../components/Footer";
//CSS
import "../assets/styles/workerListCars.css";
//Imagenes Importadas
import Left from "../assets/images/L.svg";
import Right from "../assets/images/R.svg";

function WorkerListCars() {
    const [data, setData]=useState([]);
    const [pages,setPages]=useState(0);
    
    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/page/${pages}`)
            .then(response=>response.json())
            .then(data=>setData(data.content))
            .catch(err=>console.log(err))
    },[pages])




    return (  
        <>
        <HeaderWorker />
        <WorkerPerfil />
        <OptionsWorker />
        <div className="container">
            <div className="row list-cards">
                <div className="col-12 listaCarros">
                    {
                        data && data.map( v =>(
                            <CardCarListWorker 
                            key={v.id}
                            ide={v.id}
                            vehiclePicture={v.vehiclePicture}
                            />
                        ))
                    }
                    
                </div>
            </div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-2 buttons">
                    <button className="atrasList" onClick={()=>{setPages(pages-1)
                    }}> <img src={Left} alt=""  className="flechas"/></button>
                    <button className="adelanteList" onClick={()=>{setPages(pages+1)
                 }}><img src={Right} alt="" className="flechas"/></button>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default WorkerListCars;
