import './AboutHero.css';

export default function AboutHero() {
    return (
        <section className="about-hero" aria-label="Introduction">
            <div className="about-hero-inner">
                <h1 className="about-hero-title">Qui sommes-nous ?</h1>
                <p className="about-hero-subtitle">
                    AutoScanR révolutionne le diagnostic automobile en le rendant
                    accessible, transparent et abordable pour tous les automobilistes.
                </p>
            </div>
        </section>
    );
}
