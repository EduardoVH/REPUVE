import { createContext, useEffect, useState} from "react";

export const IsLoginContext = createContext();


export const IsLoginDataContext = ({children}) =>{

    const [isLogued, setIsLogued]=useState(() =>{
        try{
            const IsLoginLocalStorage = localStorage.getItem('loginUser')
            return IsLoginLocalStorage ? JSON.parse(IsLoginLocalStorage) : [false]
        }
        catch (error) {
            return[false]
        }
    });




    useEffect(() => {
        localStorage.setItem('loginUser', JSON.stringify(isLogued))
    }, [isLogued])


    console.log(isLogued)

    return(
        <IsLoginContext.Provider value={{isLogued, setIsLogued}}>
            {children}
        </IsLoginContext.Provider>
    );
}
