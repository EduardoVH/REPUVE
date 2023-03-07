import '../assets/styles/homeWhatsRepuve.css'
import queEsRepuve from "../assets/images/queesRepuve.svg";
function HomeWhatsRepuve() {
return(
    <>
    <section className="container-general">
        <div className="container general">
            <div className="row">
                <div className="col-5">
                    <img src={queEsRepuve} alt="" id="QUEESREPUVE"/>
                </div>
                <div className="col-7">
                    <h1 className="title-QueEs">¿Qué es REPUVE?</h1>
                    <p className="info-repuve">El Registro Público Vehicular (REPUVE) es una Dirección General que depende del
                Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública. Su objetivo,
                es otorgar seguridad jurídica a los actos que se realicen con vehículos que circulan
                en el territorio nacional,
                mediante la identificación vehicular.</p>
                </div>
            </div>
        </div>
    </section>
    </>
);
}
export default HomeWhatsRepuve;
