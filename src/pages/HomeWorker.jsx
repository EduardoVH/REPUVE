//Componentes Importadas
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import WorkerHomeAviso from "../components/WorkerHomeAviso";
import Footer from "../components/Footer";


function HomeWorker() {
    return(
        <>
        <HeaderWorker />
        <WorkerPerfil />
        <OptionsWorker />
        <WorkerHomeAviso></WorkerHomeAviso>
        <Footer />
        </>
    );
}
export default HomeWorker;