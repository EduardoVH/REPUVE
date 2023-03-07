
//HOOKS
import React, {useContext, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {IsLoginContext, IsLoginDataContext} from "./contexts/IsLoginContext";
import {UserDataContext, UserContext} from "./contexts/UserContext";
import {VehicleDataContext} from "./contexts/VehicleIdContext";
import VehicleDataEdit from "./pages/VehicleDataEdit";
// import { useState } from "react";
// import UserContext from "../context/UserContext";
// import HeaderWorker from "./components/HeaderWorker";

//PAGINAS IMPORTADAS
import GeneralHome from "./pages/GeneralHome";
import ConsultaVehicular from "./pages/ConsultaVehicular";
import WorkerRegistrer from "./pages/WorkerRegistrer";
import AgencyWorker from "./pages/AgencyWorker"
import WorkerRegistrerVehicle from "./pages/WorkerRegistrerVehicle";
import WorkerCardEdit from"./pages/WorkerCarEdit";
import HomeWorker from "./pages/HomeWorker";
import WorkerCarView from "./pages/WorkerCarView";
import WorkerCarEdit from "./pages/WorkerCarEdit";
import SingIn from "./pages/SingIn";
//despues del pull
import CarView from "./pages/CarView";
import VehicularRegistry from "./pages/VehicularRegistry";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import VehicularCatalog from "./pages/VehicularCatalog";
import ConsultaWorker from "./pages/ConsultaWorker";
import WorkerListCars from "./pages/WorkerListCars";

//YA JALA POR FAVORRRRRRRRRRRRRRRRRRRRRR
function App() {
        return (
        <BrowserRouter>
            <IsLoginDataContext>
                <UserDataContext>
                    <VehicleDataContext>
                    <Routes>
                        <Route index element={<GeneralHome/>}/>
                        <Route path={'/home'} element={<GeneralHome/>}/>
                        <Route path={'/vehicular/consult'} element={<ConsultaVehicular/>}/>
                        <Route path={'/vehicle/consult'} element={<CarView/>}/>

                        <Route path={'/signIn'} element={<Login/>}/>
                        {/*/*/}
                        <Route element={<PrivateRoute/>}>
                            <Route path={'/signUp'} element={<SingIn/>}/>
                            <Route path={'/gob/home'} element={<HomeWorker/>}/>
                            <Route path={'/gob/registry/agency'} element={<AgencyWorker/>}/>
                            <Route path={'/gob/vehicular/consult'} element={<ConsultaWorker/>}/>
                            <Route path={'/gob/worker/viewcar'} element={<WorkerCarView/>}/>
                            <Route path={'/gob/worker/editcar'} element={<WorkerCarEdit/>}/>
                            <Route path={'/gob/worker/listcar'} element={<WorkerListCars/>}/>
                            <Route path={'/gob/vehicle/consult'} element={<WorkerRegistrerVehicle/>}/>
                            <Route path={'/gob/vehicular/catalog'} element={<VehicularCatalog/>}/>
                            <Route path={'/gob/registry/vehicle'} element={<VehicularRegistry/>}/>
                            <Route path={'/gob/vehicle/edit'} element={<WorkerCardEdit/>}/>
                        </Route>
                    </Routes>
                    </VehicleDataContext>
                </UserDataContext>
            </IsLoginDataContext>
        </BrowserRouter>
        /** dfkjnskjnvasñdnfsañovfñaosiungfoaiwjfgoñisanvñosanxovfsnoefnaosdnf
         * 
         * gasñdnosanfosd
         */
        );

}
export default App;


