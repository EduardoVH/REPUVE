//HOOKS
import {useState, useEffect, useRef} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
//Imagenes Importadas
import upload from "../assets/images/upload.svg";
import registroPhoto from "../assets/images/registro-carro.png";
import registreV from "../assets/images/image-registreV.svg";
//CSS
import "../assets/styles/RegistroCarro.css";


function RegistroCarro() {
      //Variables para registro;
      const [model, setModel] = useState("");
      const [brand, setBrand] = useState("");
      const [year, setYear] = useState("");
      const [color, setColor] = useState("");
      const [engineType, setEngineType] = useState("");
      const [fuelType, setFuelType] = useState("");
      const [serialNumber, setSerialNumber] = useState("");
      const [plate, setPlate] = useState("");
      const [niv, setNiv] = useState("");
      const [name, setName] = useState("");
      const [lastname, setLastname] = useState("");
      const [agencyName, setAgencyName] = useState("");
      const [price, setPrice] = useState("");
      const [data,setData]=useState([]);
      const [info,setInfo]=useState(false);

      //Consulta de las agencias
      const [agencys, setAgencys] = useState([]);
    //set id para la imagen
      const [registro,setRegistro]=useState(false)
      const navigate=useNavigate();
      /* `${api}/agency` */
      const getProducts = async () => {
        await axios 
          .get(`http://18.215.246.106:8080/agency`)
          .then(({ data }) => setAgencys(data.data));
      };

      useEffect(() => {
        getProducts();
      }, []);

      const submitHandler = (e) => {
        e.preventDefault();

        const option = {
          method: "POST",
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
            vehicleNumberId: niv,
            ownerName: name,
            ownerLastName: lastname,
            price: price,
            agencyId: agencyName,
          }),
        };

        fetch(`http://18.215.246.106:8080/vehicle`, option)
          .then(response => response.json())
          .then((data) => {
            setRegistro(true)
            setData(data.data)
            setInfo(true)
            console.log(data.data)
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
      };

      // Handlers onChange
      const hModel = (e) => setModel(e.target.value);
      const hBrand = (e) => setBrand(e.target.value);
      const hYear = (event) => setYear(event.target.value);
      const hColor = (e) => setColor(e.target.value);
      const hEngineType = (e) => setEngineType(e.target.value);
      const hFuelType = (e) => setFuelType(e.target.value);
      const hSerialNumber = (e) => setSerialNumber(e.target.value);
      const hPlate = (e) => setPlate(e.target.value);
      const hNvi = (e) => setNiv(e.target.value);
      const hName = (e) => setName(e.target.value);
      const hLastname = (e) => setLastname(e.target.value);
      const hAgencyName = (e) => setAgencyName(e.target.value);
      const hPrice = (e) => setPrice(e.target.value);

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
                title: 'Vehiculo Registrado',
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
        <div className="row car-registrer">
          <div className="col-1"></div>
          <div className="col-5">
            <form onSubmit={submitHandler}>
              <span className="infor-car">Modelo del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="model" onChange={hModel}/>
              <span className="infor-car">Marca del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="brand" onChange={hBrand}/>
              <span className="infor-car">Año del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="year" onChange={hYear}/>
              <span className="infor-car">Color del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="color" onChange={hColor}/>
              <span className="infor-car">Tipo de Motor</span>
              <input type="text" className="form-control inputclass" name="engineType" onChange={hEngineType}/>
              <span className="infor-car">Tipo de Combustible</span>
              <input type="text" className="form-control inputclass" name="fuelType" onChange={hFuelType}/>
              <span className="infor-car">Numero de Serie</span>
              <input type="text" className="form-control inputclass" name="serialNumber" onChange={hSerialNumber}/>
              <span className="infor-car">Numero de Placa</span>
              <input type="text" className="form-control inputclass" name="plate" onChange={hPlate}/>
              <span className="infor-car">Numero de indentificacion Vehicular (NVI)</span>
              <input type="text" className="form-control inputclass" name="serialNumber" onChange={hNvi}/>
              <span className="infor-car">Precio del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="price" onChange={hPrice}/>
              <span className="infor-car">Nombre(s) del Dueño</span>
              <input type="text" className="form-control inputclass" name="name" onChange={hName}/>
              <span className="infor-car">Apellido(s) del Dueño</span>
              <input type="text" className="form-control inputclass" name="lastname" onChange={hLastname}/>
              <span className="infor-car">Nombre de la Agencia que Procede</span>
              <select name="agency" onChange={hAgencyName} id="form-select">
                <option value="">seleccionar-agencias</option>
                  {agencys.map((agency) => {
                    return <option  key={agency.id} value={agency.id}>{agency.name}</option>;
                  })}
              </select>
              <button className="registrar-car" id="botton-registrarCarro">Registrar</button>
            </form>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img src={registreV} alt="" id="foto-register"/>
          </div>
        </div>
        <div className="row div-button">
          <div className="col-2"></div>
          <div className="col-3">
            { info&&<form>
            <span className="infor-car">Foto del Vehiculo</span><br />
              <input type="file" className="form-control inputclass" id="foto-car"  onChange={(e)=>hUploadFile(e)}/>
              <label htmlFor="foto-car" id="container-upload">
                <img src={upload} alt="" />
              </label>
              </form>}
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </section>
  );
}

export default RegistroCarro;
