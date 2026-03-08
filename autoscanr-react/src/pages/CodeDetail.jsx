import { useParams, Link, useNavigate } from 'react-router-dom';
import SiteFooter from '../components/home/SiteFooter';
import './CodeDetail.css';

export default function CodeDetail() {
    const { code } = useParams();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('autoscanr_user_type');
        navigate('/');
    };

    return (
        <div className="code-detail-page">
            <header className="code-detail-header">
                <Link to="/espace-perso" className="btn-code-back">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Retour
                </Link>

                <Link to="/" className="perso-header-logo">
                    <span className="logo-blue">AUTO</span>
                    <span className="logo-scan-blue">SCAN</span>
                    <span className="logo-r-blue">R</span>
                </Link>

                <button className="perso-burger-btn" onClick={handleLogout}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </header>

            <main className="code-detail-main">
                {/* Top Card */}
                <article className="code-card">
                    <div className="code-top-info">
                        <div className="code-image-placeholder"></div>
                        <div className="code-details-wrap">
                            <span className="code-badge-critique">{code} - Critique</span>
                            <h1 className="code-detail-title">Surchauffe moteur</h1>
                            <p className="code-detail-subtitle">
                                Température moteur trop élevée. Arrêtez-vous rapidement et laissez refroidir pour éviter des dégâts importants.
                            </p>
                            <div className="alert-red-box">
                                <span style={{ fontSize: '14px' }}>⚠</span>
                                Arrêt immédiat recommandé
                            </div>
                        </div>
                    </div>
                </article>

                {/* Signification */}
                <section className="code-card">
                    <h2 className="content-block-title">Qu'est-ce que cela signifie ?</h2>
                    <p className="content-block-text">
                        Le code {code} indique que la température du liquide de refroidissement du moteur a dépassé les limites acceptables. Ce problème nécessite une attention immédiate car une surchauffe prolongée peut causer des dommages irréversibles au moteur, y compris la déformation du joint de culasse, l'endommagement des pistons et la fusion des composants métalliques.
                    </p>
                </section>

                {/* Causes */}
                <section className="code-card">
                    <h2 className="content-block-title">Causes possibles</h2>
                    <div className="causes-grid">
                        {[
                            'Niveau de liquide de refroidissement insuffisant',
                            'Thermostat défectueux bloqué en position fermée',
                            'Pompe à eau défaillante',
                            'Radiateur obstrué ou endommagé',
                            'Ventilateur de refroidissement ne fonctionnant pas',
                            'Fuite dans le système de refroidissement'
                        ].map((cause, i) => (
                            <div key={i} className="cause-item">
                                <span className="cause-num">{i + 1}</span>
                                {cause}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solutions */}
                <section className="code-card">
                    <h2 className="content-block-title">Solutions recommandées</h2>
                    <div className="solutions-list">
                        {[
                            'Arrêtez le véhicule immédiatement et laissez refroidir le moteur',
                            'Vérifiez le niveau de liquide de refroidissement (moteur froid uniquement)',
                            'Inspectez le système pour détecter les fuites visibles',
                            'Testez le fonctionnement du ventilateur de refroidissement',
                            'Remplacez le thermostat si nécessaire',
                            'Faites inspecter la pompe à eau et le radiateur par un professionnel'
                        ].map((sol, i) => (
                            <div key={i} className="solution-item">
                                <span className="sol-check">✓</span>
                                {sol}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Placeholder BD */}
                <section className="code-card media-placeholder-block">
                    <h2 className="media-placeholder-title">BD explicative</h2>
                    <div className="placeholder-rect">
                        <span className="placeholder-icon">ℹ</span>
                        <p>Schéma explicatif</p>
                    </div>
                </section>

                {/* Placeholder Vidéo */}
                <section className="code-card media-placeholder-block">
                    <h2 className="media-placeholder-title">Intégration Vidéo YouTube</h2>
                    <div className="placeholder-rect">
                        <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'red', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'white', marginBottom: '10px' }}>
                            <span style={{ fontSize: '24px', marginLeft: '4px' }}>▶</span>
                        </div>
                        <p style={{ fontSize: '10px', color: '#94a3b8' }}>Tutoriel vidéo : Comment diagnostiquer et réparer le code {code}</p>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="code-bottom-cta">
                    <h3>Besoin d'aide pour réparer ?</h3>
                    <p>Nos garages partenaires sont là pour vous aider. Envoyez votre diagnostic en 1 clic !</p>
                    <button className="btn-cta-rdv">
                        <span>📅</span>
                        Prendre rendez-vous
                    </button>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
