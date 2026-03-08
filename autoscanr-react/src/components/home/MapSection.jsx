import './MapSection.css';

const BORNES = [
    { name: 'Centre de Tastes', city: 'Bordeaux', status: 'libre', dist: '1.2 km' },
    { name: 'Centre Merignac', city: 'Mérignac', status: 'occupée', dist: '3.8 km' },
    { name: 'DieBus Total', city: 'Talence', status: 'libre', dist: '5.1 km' },
    { name: 'Mont Blot / Floges', city: 'Floirac', status: 'libre', dist: '7.3 km' },
    { name: 'Pont de Lias', city: 'Léguevin', status: 'occupée', dist: '9.6 km' },
];

export default function MapSection() {
    return (
        <section className="map-section" aria-labelledby="map-title">
            <div className="map-inner">
                {/* Left: map placeholder */}
                <div className="map-col">
                    <h2 id="map-title" className="map-title">
                        Trouvez une borne AutoScanR autour de vous
                    </h2>
                    <div className="map-placeholder" aria-label="Carte des bornes AutoScanR">
                        <div className="map-bg">
                            {/* Decorative map dots */}
                            <div className="map-dot" style={{ top: '42%', left: '35%' }} />
                            <div className="map-dot active" style={{ top: '55%', left: '48%' }} />
                            <div className="map-dot" style={{ top: '38%', left: '60%' }} />
                            <div className="map-dot" style={{ top: '65%', left: '30%' }} />
                            <div className="map-dot" style={{ top: '30%', left: '52%' }} />
                        </div>
                        <div className="map-overlay-label">Carte / liste</div>
                    </div>
                </div>

                {/* Right: list of bornes */}
                <div className="map-list-col">
                    <div className="map-tabs">
                        <button className="map-tab active">Carte</button>
                        <button className="map-tab">Liste</button>
                    </div>
                    <div className="bornes-list" role="list" aria-label="Liste des bornes proches">
                        {BORNES.map(b => (
                            <div key={b.name} className="borne-item" role="listitem">
                                <div className="borne-info">
                                    <span className="borne-name">{b.name}</span>
                                    <span className="borne-city">{b.city}</span>
                                </div>
                                <div className="borne-right">
                                    <span className={`borne-status ${b.status}`}>
                                        <span className="borne-dot" />
                                        {b.status === 'libre' ? 'Libre' : 'Occupée'}
                                    </span>
                                    <span className="borne-dist">{b.dist}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-map-cta">
                        ➜ Itinéraire vers la plus proche
                    </button>
                </div>
            </div>
        </section>
    );
}
