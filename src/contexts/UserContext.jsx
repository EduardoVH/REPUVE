import {  useEffect,createContext,useState} from "react";

export const UserContext = createContext();


export const UserDataContext = ({children}) =>{

    const [user, setUser]=useState(()=>{
        try{
            const UserLocalStorage = localStorage.getItem('UserContenido')
            return UserLocalStorage ? JSON.parse(UserLocalStorage) : []
        }
        catch (error) {
            return[]
        }
    });

    useEffect(() => {
        localStorage.setItem('UserContenido', JSON.stringify(user))
    }, [user])


    console.log(user.name)


    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    );
}