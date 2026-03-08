import { Link, useNavigate } from 'react-router-dom';
import './ChooseAccount.css';

export default function ChooseAccount() {
    const navigate = useNavigate();

    return (
        <div className="choose-page">
            {/* ── Header ── */}
            <header className="choose-header">
                <Link to="/" className="choose-logo" aria-label="AutoScanR accueil">
                    <span className="logo-auto">AUTO</span>
                    <span className="logo-scan">SCAN</span>
                    <span className="logo-r">R</span>
                </Link>
                <Link to="/" className="choose-back-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Retour
                </Link>
            </header>

            <main className="choose-main">
                <h1 className="choose-title">Choisissez votre espace</h1>
                <p className="choose-subtitle">Sélectionnez le type de compte qui correspond à vos besoins</p>

                <div className="choose-cards-grid">
                    {/* Personnel */}
                    <article className="choose-card">
                        <div className="choose-card-icon-top">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                        </div>
                        <h2 className="choose-card-title">Espace Personnel</h2>
                        <p className="choose-card-desc">Pour les particuliers qui souhaitent diagnostiquer leur propre véhicule</p>

                        <ul className="choose-card-features">
                            <li><span className="check">✓</span> Diagnostic complet de votre véhicule</li>
                            <li><span className="check">✓</span> Explications détaillées des codes erreur</li>
                            <li><span className="check">✓</span> Accès aux garages partenaires</li>
                            <li><span className="check">✓</span> Historique de vos diagnostics</li>
                        </ul>

                        <button
                            className="btn-choose-card"
                            onClick={() => navigate('/connexion')}
                        >
                            Cliquez pour continuer
                        </button>
                    </article>

                    {/* Professionnel */}
                    <article className="choose-card pro">
                        <div className="choose-card-icon-top">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h2 className="choose-card-title">Espace Professionnel</h2>
                        <p className="choose-card-desc">Pour les garages et professionnels de l'automobile</p>

                        <ul className="choose-card-features">
                            <li><span className="check">✓</span> Gestion de multiples véhicules</li>
                            <li><span className="check">✓</span> Outils professionnels avancés</li>
                            <li><span className="check">✓</span> Réception de demandes clients</li>
                            <li><span className="check">✓</span> Statistiques et rapports détaillés</li>
                        </ul>

                        <button
                            className="btn-choose-card"
                            onClick={() => navigate('/connexion-pro')}
                        >
                            Cliquez pour continuer
                        </button>
                    </article>
                </div>
            </main>
        </div>
    );
}
