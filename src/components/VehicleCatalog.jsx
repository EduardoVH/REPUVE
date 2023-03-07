import {useEffect, useState} from "react";
import VehicleCard from "./VehicleCard.jsx";
import Swal from "sweetalert2";

function VehicleCatalog() {
const [data, setData]=useState([]);
const [pages,setPages]=useState(0);

useEffect(()=>{
    fetch(`http://18.215.246.106:8080/vehicle/page/${pages}`)
        .then(response=>response.json())
        .then(data=>setData(data.content))
        .catch(err=>console.log(err))
},[])



    return(
        <>
            <div className={"cards"}>
                {
                    data && data.map( v =>(
                        <VehicleCard
                    key={v.id}
                    brand={v.brand}
                    model={v.model}
                    year={v.year}
                    color={v.color}
                    vehiclePicture={v.vehiclePicture}
                        />
                    ))
                }
            </div>


            <div className={"bttns"}>
                <button onClick={()=>{
                    setPages(pages+1)
                    console.log(pages)
                }}>Next</button>
                <br/>
                <button onClick={()=> {
                    setPages(pages-1)
                    console.log(pages)
                }}>Prev</button>
            </div>
        </>
    )
}export default VehicleCatalog;