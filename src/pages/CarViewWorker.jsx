/*Hooks*/
import CardCarViewWorker from "../components/CardCarViewWorker";
import { useEffect, useState } from 'react';
/*Foto Importadas*/
import lupa from "../assets/images/lupa.svg";
/*Componentes Importados */
import FlechaRegreso from "../components/FlechaRegreso";
/*css*/
import "../assets/styles/carViewPublic.css";

/*AQUI FALTA AGREGAR HEADER Y FOOTER Y EL BOTON DE REGRESAR QUE REGRESE*/
function CarViewWorker() {
    const [character, setCharacter] = useState(null)
    useEffect(()=> {
        fetch(`http://54.160.253.80:8080/vehicle/id/2`)
        .then(responde => responde.json())
        .then (data => setCharacter(data.data))
    },[])
    return (
        character && (
            <>
                <FlechaRegreso/>
                <CardCarViewWorker character={character}/>
            </>
        )
    );
}

export default CarViewWorker;