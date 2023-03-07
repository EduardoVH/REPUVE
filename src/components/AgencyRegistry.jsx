import '../assets/styles/registerAgency.css'
import Agency from '../assets/images/Agency.png'
import { useState } from 'react';

function AgencyRegistry() {

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
                .then(data=> data.status ? alert('Registro erronio'):alert('Registro Exitoso'))
                .catch(err=>console.log('err'))
        }
    return (
        <>
        <div className='RegisterAgency'>
            <div className='AllConten'>
                <form className="RegisterConten" onSubmit={handleSubmit}>
                    <br/><label htmlFor="nameAgency">Nombre de la Agencia: </label> 
                    <br/><input type="text" id='nameAgency' value={nameAgency} onChange={handleChangeNameAgency}/>

                    <br/><label htmlFor='country'>Pais de Procedencia:</label>
                    <br/><input type="text" id='country' value={country} onChange={handleChangeCountry}/>
                
                    <br/><label htmlFor='state'>Estado de Localizacion:</label>
                    <br/><input type="text" id='state' value={state} onChange={handleChangeState}/>

                    <br/><label htmlFor='city'>Ciudad:</label>
                    <br/><input type="text" id='city' value={city} onChange={handleChangeCity}/>

                    <br/><label htmlFor='address'>Direccion:</label>
                    <br/><input type="text" id='address' value={address} onChange={handleChangeAddress}/>
                        
                    <br/><label htmlFor='phoneNumber'>Numero Telefonico:</label>
                    <br/><input  type="text" id='phoneNumber' value={phoneNumber} onChange={handleChangePhoneNumber}/>
                    
                    <button >REGISTRAR</button>
                </form>
                <img className='Agency' src={Agency} />
            </div>
        </div>
    </>
    );
}

export default AgencyRegistry;