import "../assets/styles/registerAgency.css";
import Agency from '../assets/images/agency.svg'
import { useState } from 'react';
import Swal from "sweetalert2";

function RegisterAgency() {

    const [nameAgency, setNameAgency] =useState('');
    const [address, setAddress] =useState('');
    const [city, setCity] =useState('');
    const [state, setState] =useState('');
    const [country, setCountry] =useState('');
    const [phoneNumber, setPhoneNumber] =useState('');

    const handleChangeNameAgency= (event)=> setNameAgency(event.target.value)
    const handleChangeCountry= (event)=> setCountry(event.target.value)
    const handleChangeState= (event)=> setState(event.target.value)
    const handleChangeCity= (event)=> setCity(event.target.value)
    const handleChangeAddress= (event)=> setAddress(event.target.value)
    const handleChangePhoneNumber= (event)=> setPhoneNumber(event.target.value)
    


        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("handleSubmit")
            const option ={
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({
                    name:nameAgency,
                    address:address,
                    city:city,
                    state:state,
                    country:country,
                    phoneNumber:phoneNumber
                })
            }
            fetch('http://18.215.246.106:8080/agency', option)
                .then(response=>response.json())
                //CHECAR
                .then(data=> data.status ? alert("fail"):Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agencia registrada correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  }))
                .catch(err=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                })
        }

    return ( 
        <section>
            <div className="container">
                <div className="row registroAgencia">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <form onSubmit={handleSubmit}>
                            <span className="info-agency">Nombre de la Agencia</span><br />
                            <input type="text" className="form-control inputclass" value={nameAgency} onChange={handleChangeNameAgency}/><br />
                            <span className="info-agency">Pais de Procedencia</span><br />
                            <input type="text" className="form-control inputclass" value={country} onChange={handleChangeCountry}/><br />
                            <span className="info-agency">Estado de Localizacion</span><br />
                            <input type="text" className="form-control inputclass" value={state} onChange={handleChangeState}/><br />
                            <span className="info-agency">Ciudad</span><br />
                            <input type="text" className="form-control inputclass" value={city} onChange={handleChangeCity}/><br />
                            <span className="info-agency">Direccion</span><br />
                            <input type="text-area" className="form-control inputclass"  id="input-direccion" value={address} onChange={handleChangeAddress}/><br />
                            <span className="info-agency">Numero de Telefono</span><br />
                            <input type="text-area" className="form-control inputclass"  id="input-direccion" value={phoneNumber} onChange={handleChangePhoneNumber}/>
                        </form>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <img src={Agency} alt="" id="image-agency"/>
                    </div>
                </div>
                <div className="row divbutton">
                    <div className="col-2"></div>
                    <div className="col-3">
                        <form onSubmit={handleSubmit}>
                            <button className="button-registrar">Registrar</button>
                        </form>
                        
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        </section>
    );
}

export default RegisterAgency;

//<form className="RegisterConten" onSubmit={handleSubmit}>
//<br/><label htmlFor="nameAgency">Nombre de la Agencia: </label> 
//<br/><input type="text" id='nameAgency' value={nameAgency} onChange={handleChangeNameAgency}/>

//<br/><label htmlFor='country'>Pais de Procedencia:</label>
//<br/><input type="text" id='country' value={country} onChange={handleChangeCountry}/>

//<br/><label htmlFor='state'>Estado de Localizacion:</label>
//<br/><input type="text" id='state' value={state} onChange={handleChangeState}/>

//<br/><label htmlFor='city'>Ciudad:</label>
//<br/><input type="text" id='city' value={city} onChange={handleChangeCity}/>

//<br/><label htmlFor='address'>Direccion:</label>
//<br/><input type="text" id='address' value={address} onChange={handleChangeAddress}/>
    
//<br/><label htmlFor='phoneNumber'>Numero Telefonico:</label>
//<br/><input  type="text" id='phoneNumber' value={phoneNumber} onChange={handleChangePhoneNumber}/>

//<button >REGISTRAR</button>
//</form>