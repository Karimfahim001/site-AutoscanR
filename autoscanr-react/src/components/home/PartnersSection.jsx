import './PartnersSection.css';

const PARTNERS = [
    'Dekra', 'Norauto', 'Autovision', 'Speedy', 'Midas', 'Eureka'
];

export default function PartnersSection() {
    return (
        <section className="partners-section" aria-labelledby="partners-title">
            <div className="partners-inner">
                <h2 id="partners-title" className="partners-title">Nos partenaires</h2>
                <div className="partners-logos">
                    {PARTNERS.map(name => (
                        <div key={name} className="partner-logo" aria-label={name}>
                            <span className="partner-logo-text">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
