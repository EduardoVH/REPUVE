import {useEffect,createContext,useState} from "react";

export const VehicleIdContext = createContext();


export const VehicleDataContext = ({children}) =>{

    const [id, setId]=useState(()=>{
        try{
            const VehicleIdLocalStorage = localStorage.getItem('vehicleIdContenido')
            return VehicleIdLocalStorage ? JSON.parse(VehicleIdLocalStorage) : ''
        }
        catch (error) {
            return''
        }
    });

    useEffect(() => {
        localStorage.setItem('VehicleIdContenido', JSON.stringify(id))
    }, [id])


    console.log(id)


    return(
        <VehicleIdContext.Provider value={{id,setId}}>
            {children}
        </VehicleIdContext.Provider>

    );
}