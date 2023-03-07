import {useContext, useEffect, useState} from "react";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function vehicleUpdateData() {
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
            })
            .catch((err) => console.log(err));

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
                navigate('/gob/vehicular/catalog')
            }
        )

    }

    return(
        <>
            <form onSubmit={handlerUpdate}>
                <div className={"container-infor"}>
                    <span className={"new-data"}>modelo :</span>
                    <input className={"input-data"} type={'text'} onChange={hModel} placeholder={data.model}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>marca nueva:</span>
                    <input className={"input-data"} type={'text'} onChange={hBrand} placeholder={data.brand}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>año nuevo:</span>
                    <input className={"input-data"} type={'number'} onChange={hYear} placeholder={data.year}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>color nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hColor} placeholder={data.color}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>tipo de motor nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hEngineType} placeholder={data.engineType}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>tipo de combustible nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hFuelType} placeholder={data.fuelType}/>
                </div>


                <div className={"container-infor"}>
                    <span className={"new-data"}>numero de placa nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hPlate} placeholder={data.plateNumber}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>nombre(s) del dueño nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hName} placeholder={data.ownerName}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>apellido(s) del dueño nuevo:</span>
                    <input className={"input-data"} type={'text'} onChange={hLastname} placeholder={data.ownerLastName}/>
                </div>

                <div className={"container-infor"}>
                    <span className={"new-data"}>precio nuevo:</span>
                    <input className={"input-data"} type={'number'} onChange={hPrice} placeholder={data.price}/>
                </div>

                <form>
                    <label htmlFor={"imageUpload"}> foto del vehiculo</label>
                    <input id={"imageUpload"} type={"file"} onChange={(e)=>hUploadFile(e)}/>
                </form>

                <button> Actualizar</button>
            </form>



        </>
    )
}export default vehicleUpdateData;