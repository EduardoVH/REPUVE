import '../assets/styles/homeMap.css'

function HomeMap() {
    return(
        <>
            <section className="container-map">
                <div className="container homemap">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4 informacion-contacto">
                            <h1 className="title-map">CONTACTO</h1>
                            <p className="subtitle-map">Av. Insurgentes Sur 263, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</p>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-6 map">
                            <iframe className="map-frame" src="https://maps.google.com/maps?width=auto;height=auto;hl=es&amp;q=Av.%20Insurgentes%20Sur%20263,%20Roma%20Nte.,%20Cuauht%C3%A9moc,%2006700%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(Control%20Vehicular%20CDMX)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeMap;