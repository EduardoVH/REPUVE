import '../assets/styles/Formulario.css'
import {useState} from 'react'
function Formulario(){
  const [name,setName]= useState('')
  const [lastName, setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [workerCode,setWorkerCode]=useState('')

  const handleChangeName=(event)=>setName(event.target.value);
  const handleChangeLastName=(event)=>setLastName(event.target.value);
  const handleChangeEmail=(event)=>setEmail(event.target.value);
  const handleChangePassword=(event)=>setPassword(event.target.value);
  const handleChangeWorkerCode=(event)=>setWorkerCode(event.target.value);

  const handleSubmit = (e)=>{
    e.preventDefault();

    const option ={
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify({
       name:name,
        lastName:lastName,
        email:email,
        password:password,
        workerCode:workerCode

      })
    }
    fetch('34.207.225.27:8080/worker',option)
        .then(response => response.json())
        .then(data => data.status ? alert('registro exitoso') : alert('Ha ocurrido un error'))
        .catch(err => console.log(err+'no jala'))
  }
    return(
        <div className="contenedor-total">
          <div className="contenedor-Titulo">
            <h1 className="titulo">Registro</h1>
          </div>
          <div className="contenedor-Principal">
            <div className="contenedor-Secundario">
              <form className="formulario" onSubmit={handleSubmit}>
                <div className="inputs">
                  <input type="text" className="input-form" placeholder="Nombre" value={name} onChange={handleChangeName}/>
                </div>
                <div className="inputs">
                  <input type="text" className="input-form" placeholder="Apellido" value={lastName} onChange={handleChangeLastName}/>
                </div>
                <div className="inputs">
                  <input type="text" className="input-form" placeholder="Codigo de trabajador" value={workerCode} onChange={handleChangeWorkerCode}/>
                </div>
                <div className="inputs">
                  <input type="email" className="input-form" placeholder="Correo" value={email} onChange={handleChangeEmail}/>
                </div>
                <div className="inputs">
                  <input type="password" className="input-form" placeholder="Contraseña" value={password} onChange={handleChangePassword}/>
                </div>
                <button className="boton-registrar">Entrar</button>
              </form>
            </div>
          </div>
          <div className="contenedor-Final">
            <p className="textofinal">Si deseas regresar al inicio <b><a href="">Haz click aqui</a></b> </p>
          </div>
        </div>

    );
}
export default Formulario;