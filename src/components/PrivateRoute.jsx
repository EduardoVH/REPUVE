import {useContext} from 'react'
import {Navigate, Outlet } from 'react-router-dom';
import {IsLoginContext} from "../contexts/IsLoginContext";

function PrivateRoute() {
    const {isLogued} = useContext(IsLoginContext)

    console.log(isLogued)
    return (isLogued ? <Outlet /> : <Navigate to='/home'/>)
}

export default PrivateRoute;