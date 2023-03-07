import CardCarViewWorkerEdit from "../components/CardCarViewWorkerEdit";
import "../assets/styles/carViewWorkerEdit.css";
/*AQUI FALTA HEADER, HEADERWORKER, FOOTER Y QUE JALEN LAS RUTAS Y LA DE REGRESO*/ 
function CarViewWorkerEdit() {
    return (  
        <>
        <div className="body-container-edit">
            <CardCarViewWorkerEdit />
            <br /><br /><br />
            <button className="update">Actualizar</button>
        </div>
        </>
    );
}

export default CarViewWorkerEdit;