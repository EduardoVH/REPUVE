//Hooks
import {useContext, useEffect, useState} from "react";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
/*Imagenes Exportadas*/
import carGrey from "../assets/images/carGrey.svg";
import edit from "../assets/images/edit.svg";
import upload from "../assets/images/upload.svg";
/*CSS*/
import "../assets/styles/cardCarViewWorker.css";

function CardCarEditWorker() {
    const {id}=useContext(VehicleIdContext)
    const [data,setData]=useState([])
    const navigate=useNavigate();


    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [engineType, setEngineType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [plate, setPlate] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [price, setPrice] = useState("");


    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/id/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data.data))
            .catch(err=>console.log(err))
    },[])

    const handlerUpdate=(e)=>{
        e.preventDefault()

        const option = {
            method: 'PUT',
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Connection: "keep-alive",
            },
            body: JSON.stringify({
                brand: brand,
                model: model,
                year: year,
                color: color,
                engineType: engineType,
                fuelType: fuelType,
                plateNumber: plate,
                vehicleNumberId: data.vehicleNumberId,
                ownerName: name,
                ownerLastName: lastname,
                price: price,
                agencyId: data.agencyId,
            }),
        };

        fetch(`http://18.215.246.106:8080/vehicle/${id}`, option)
            .then(response => response.json())
            .then((o) => {
                console.log(o.data) 
                navigate('/gob/worker/listcar')
            })
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




    const hModel=(e)=>setModel(e.target.value)
    const hBrand = (e) => setBrand(e.target.value);
    const hYear = (event) => setYear(event.target.value);
    const hColor = (e) => setColor(e.target.value);
    const hEngineType = (e) => setEngineType(e.target.value);
    const hFuelType = (e) => setFuelType(e.target.value);
    const hPlate = (e) => setPlate(e.target.value);
    const hName = (e) => setName(e.target.value);
    const hLastname = (e) => setLastname(e.target.value);
    const hPrice = (e) => setPrice(e.target.value);


    // pa la foto
    const hUploadFile = (e) => {
        let file =e.target.files[0]

        let formData =new FormData();
        formData.append('image', file)
        formData.append('idVehicle', data.id)

        axios({
            url:`http://18.215.246.106:8080/file/vehicle`,
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
                    title: 'Foto Actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/gob/worker/listcar')
            }
        )

    }

    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-carW">
                        <div className="container">
                            <div className="row inform-cardW">
                                <div className="col-6 image-cars">
                                    <input type="file" id="foto-car-upload" className="form-control inputclass" onChange={(e)=>hUploadFile(e)}/>
                                    <label htmlFor="foto-car-upload" id="image-car-upload">
                                        <img src={upload} alt="" />
                                    </label>
                                </div>
                                <div className="col-6">
                                    <div className="container">
                                        <div className="row edit-confi">
                                            <div className="col-6">
                                                <form  onSubmit={handlerUpdate}>
                                                    <span className="model-carW">MODELO</span><br />
                                                    <input type="text" className="form-control EWC" onChange={hModel} placeholder={data.model}/>
                                                </form>
                                            </div>
                                            <div className="col-6 button-edit">
                                                <button className="editar">
                                                    <img src={edit} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row datos-carW">
                                            <div className="col-6">
                                                <form  onSubmit={handlerUpdate}>
                                                    <h3 className="info-carW">MARCA</h3>
                                                    <input type="text" className="form-control EWC" onChange={hBrand} placeholder={data.brand}/>
                                                    <h3 className="info-carW">AÑO</h3>
                                                    <input type="text" className="form-control EWC" onChange={hYear} placeholder={data.year}/>
                                                    <h3 className="info-carW">COLOR</h3>
                                                    <input type="text" className="form-control EWC" onChange={hColor} placeholder={data.color}/>
                                                    <h3 className="info-carW">TIPO DE MOTOR</h3>
                                                    <input type="text" className="form-control EWC" onChange={hEngineType} placeholder={data.engineType}/>
                                                    <h3 className="info-carW">TIPO DE COMBUSTIBLE</h3>
                                                    <input type="text" className="form-control EWC" onChange={hFuelType} placeholder={data.fuelType}/>
                                                    <h3 className="info-carW">NUMERO DE PLACA</h3>
                                                    <input type="text" className="form-control EWC" onChange={hPlate} placeholder={data.plateNumber}/>
                                                </form>
                                            </div>
                                            <div className="col-6">
                                                <form  onSubmit={handlerUpdate}>
                                                    <h3 className="info-carW">PRECIO</h3>
                                                    <input type="text" className="form-control EWC" onChange={hPrice} placeholder={data.price}/>
                                                    <h3 className="info-titleownerW">DATOS DEL DUEÑO</h3>
                                                    <h4 className="info-ownerW">NOMBRE DEL DUEÑO</h4>
                                                    <input type="text" className="form-control EWC"  onChange={hName} placeholder={data.ownerName}/>
                                                    <h4 className="info-ownerW">APELLIDO(s) DEL DUEÑO</h4>
                                                    <input type="text" className="form-control EWC"  onChange={hLastname} placeholder={data.ownerLastName}/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row div-button">
                    <div className="col-5"></div>
                    <div className="col-2">
                        <form  onSubmit={handlerUpdate}>
                        <button id="button-actualizar">Actualizar</button>
                        </form>
                        
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </section>
    );
}

export default CardCarEditWorker;