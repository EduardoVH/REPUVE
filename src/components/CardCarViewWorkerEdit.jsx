/*Imagenes Exportadas*/
import carGrey from '../assets/images/car-metalic.svg';
import edit from "../assets/images/Edit.svg";
/*CSS*/
import '../assets/styles/cardCarViewPublic.css';
/*FALTA HACER QUE ACTUALICE LOS DATOS DEL VEHICULO*/
function CardCarViewWorker(props) {
    return (  
        <div className="card-car-view-container">
            <div className="image-card">
                <img src={carGrey} alt="Foto" id="img-car"/>
            </div>
            <div className="info-card">
                <span className="model-car">MODELO</span>
                <input type="text" />
                <br />
                <span className="info">AÑO</span>
                <input type="text" className="edit" />
                <span className="info">COLOR</span>
                <input type="text" className="edit" />
                <span className="info">TIPO DE MOTOR</span>  
                <input type="text" className="edit" />       
                <span className="info">TIPO DE COMBUSTIBLE</span> 
                <input type="text" className="edit" />        
                <span className="info">NUMERO DE SERIE</span>
                <input type="text" className="edit" />        
                <span className="info">NUMERO DE PLACA</span>  
                <input type="text" className="edit" />       
                <br /><br /><br /><br /><br /><br /><br />
                <span className="info">AGENCIA DE PROCEDENCIA</span>
                <input type="text" className="edit" />
                <span className="info">NVI</span> 
                <input type="text" className="edit" />        
                <span className="info">PRECIO</span>   
                <input type="text" className="edit" />
                <span className="info">ID DEL VEHICULO</span>   
                <input type="text" className="edit" />
                <br />
                <span className="info-dueño">DATOS DEL DUEÑO</span>  
                <span className="datos-dueño">Nombre del Dueño</span>
                <input type="text" className="edit-owner" /> 
                <span className="datos-dueño">Apellidos del Dueño</span>
                <input type="text" className="edit-owner" />  
            </div>
            <button className="container-flecha"><img src={edit} alt="" /></button>
        </div>
    );
}

export default CardCarViewWorker;