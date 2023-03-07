//Componentes Importadas
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import RegisterAgency from "../components/RegisterAgency";
import Footer from "../components/Footer";

function AgencyWorker() {
    return (  
        <>
            <HeaderWorker />
            <WorkerPerfil />
            <OptionsWorker />
            <RegisterAgency />
            <Footer />
        </>
    );
}

export default AgencyWorker;