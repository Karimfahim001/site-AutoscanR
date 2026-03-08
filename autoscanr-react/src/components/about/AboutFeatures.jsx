import happyWoman from '../../assets/about-happy-woman.png';
import obdDark from '../../assets/mediation-obd.png';
import './AboutFeatures.css';

export default function AboutFeatures() {
    return (
        <section className="about-features" aria-label="Nos points forts">
            <div className="about-features-container">
                {/* Anti-Arnaque Card */}
                <div className="feature-card-large feature-fraud">
                    <div className="feature-card-content">
                        <div className="feature-badge">
                            <span className="badge-icon">🛡️</span>
                        </div>
                        <h3 className="feature-card-title">Anti-Arnaque & Transparence</h3>
                        <p className="feature-card-p">
                            Ne changez plus de pièces inutilement. Notre diagnostic est neutre :
                            nous ne vendons pas de réparations, nous vous disons juste la vérité.
                        </p>
                        <ul className="feature-list">
                            <li><span className="check">✓</span> Rapport objectif</li>
                            <li><span className="check">✓</span> Preuve pour la vente</li>
                            <li><span className="check">✓</span> Zéro commission cachée</li>
                        </ul>
                    </div>
                    <div className="feature-card-image-wrap">
                        <img src={happyWoman} alt="Femme heureuse dans sa voiture" className="feature-img-woman" />
                    </div>
                </div>

                {/* Compréhension Card (Dark) */}
                <div className="feature-card feature-dark">
                    <div className="feature-badge dark-badge">
                        <span className="badge-icon">📱</span>
                    </div>
                    <h3 className="feature-card-title">Compréhension Immédiate</h3>
                    <p className="feature-card-p">
                        Fini le jargon technique incompréhensible. Nos algorithmes traduisent les codes défauts
                        P0xxx en langage clair, avec des conseils actionnables.
                    </p>
                    <div className="feature-mini-ui">
                        <div className="mini-card-dark">
                            <div className="mini-header">
                                <span className="mini-icon-warn">⚠️</span>
                                <div>
                                    <div className="mini-label">Code P0300 détecté</div>
                                    <div className="mini-time">Il y a 2 min</div>
                                </div>
                            </div>
                            <div className="mini-body">
                                "Des ratés d'allumage aléatoires ont été détectés. Cela peut venir des bougies."
                            </div>
                        </div>
                    </div>
                </div>

                {/* Médiation Card */}
                <div className="feature-card feature-mediation">
                    <div className="feature-badge mediation-badge">
                        <span className="badge-icon">⚡</span>
                    </div>
                    <h3 className="feature-card-title">Centre de Médiation</h3>
                    <p className="feature-card-p">
                        Vidéos, guides et BD pour comprendre vos problèmes et apprendre à connaître votre voiture.
                    </p>
                    <a href="/mediation" className="feature-link">Explorer →</a>
                </div>

                {/* Rapide Card */}
                <div className="feature-card feature-fast">
                    <div className="feature-badge fast-badge">
                        <span className="badge-icon">🕒</span>
                    </div>
                    <h3 className="feature-card-title">Rapide & Pas Cher</h3>
                    <p className="feature-card-p">
                        Moins de 20€, sans rendez-vous. Résultat en 10 minutes chrono.
                    </p>
                </div>
            </div>
        </section>
    );
}
