//Paginas Importadas
import Header from "../components/Header";
import ConsultaVehiculo from "../components/ConsultaVehicular";
import ConsultaAviso from "../components/ConsultaAviso";
import QAConsulta from "../components/QAConsulta";
import Footer from "../components/Footer";


function ConsultaVehicular() {
    return(
        <>
            <Header/>
            <ConsultaVehiculo/>
            <QAConsulta/>
            <ConsultaAviso />
            <Footer />
        </>
    );
}
export default ConsultaVehicular;

/*<Header></Header>
<ConsultaVehiculo></ConsultaVehiculo>
<br/><QAConsulta></QAConsulta><br/>
<HomeAvisoWorker></HomeAvisoWorker>
<Footer></Footer>*/