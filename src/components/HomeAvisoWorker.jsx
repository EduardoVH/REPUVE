import '../assets/styles/homeAvisoWorker.css'
function HomeAviso() {
    return(
        <>
        <section className="container-aviso">
            <div className={"container-inf"}>
                <h2 className={"h2-cont-avisoW"}>Aviso Importante</h2>
                <p></p>
                <h1 className={"h1-cont-avisoW"}>800 REPUVE 1</h1>
                <h3 className={"h3-cont-avisoW"}>(800-737-883-1)</h3>
                <p>
                    <b>Horarios de atencion</b><br/>
                    Lunes a Sabado de 09:00 a 19:00.<br/>
                    Domingos de 09:00 a 15:00.
                </p>
            </div>
            <div className={"container-img"}>
                <img className={"content-img"}/>
            </div>
        </section>
        </>
    );
}
export default HomeAviso;