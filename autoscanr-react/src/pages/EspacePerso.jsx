import { useNavigate, Link } from 'react-router-dom';
import SiteFooter from '../components/home/SiteFooter';
import './EspacePerso.css';

export default function EspacePerso() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('autoscanr_user_type');
        navigate('/');
    };

    const explanations = [
        { code: 'P0217', title: 'Surchauffe moteur', desc: 'Température moteur trop élevée. Arrêtez-vous rapidement...', type: 'critique' },
        { code: 'P0401', title: 'Débit insuffisant du système EGR', desc: 'Le système EGR fonctionne mal. Cela peut augmenter la pollution...', type: 'warning' },
        { code: 'P0171', title: 'Mélange trop pauvre', desc: 'Trop d\'air ou pas assez de carburant. Cela peut causer des à-coups...', type: 'warning' }
    ];

    return (
        <div className="perso-page">
            {/* ── Header ── */}
            <header className="perso-header">
                <div className="perso-user-info">
                    <div className="perso-avatar">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                    </div>
                    <span className="perso-welcome-name">Bonjour Karim !</span>
                </div>

                <Link to="/" className="perso-header-logo">
                    <span className="logo-blue">AUTO</span>
                    <span className="logo-scan-blue">SCAN</span>
                    <span className="logo-r-blue">R</span>
                </Link>

                <button className="perso-burger-btn" onClick={handleLogout} title="Déconnexion">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </header>

            <main className="perso-main">
                <h1 className="perso-section-title">Suivi de votre diagnostic AutoScanR</h1>

                <div className="perso-grid">
                    {/* Carte Véhicule */}
                    <article className="perso-card">
                        <h2 className="perso-card-title">Mon véhicule</h2>
                        <h3 className="perso-card-subtitle">Renault Clio V</h3>
                        <p className="perso-card-info">AB - 123 - CD</p>

                        <div className="perso-v-plate"></div>

                        <div className="perso-v-status">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0ea5e9" strokeWidth="2">
                                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M5 17h-2v-6l2-5h9l4 5v6h-2" />
                            </svg>
                            Véhicule enregistré
                        </div>
                    </article>

                    {/* Carte Diagnostic */}
                    <article className="perso-card">
                        <h2 className="perso-card-title">Mon diagnostic</h2>
                        <p className="perso-card-info">Rapport AutoscanR - Aperçu</p>
                        <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '-12px', marginBottom: '12px' }}>Dernier scan : 10/03/2026 • 14:22</p>

                        <div className="diag-stats-card">
                            <p className="diag-summary-title">Diagnostic AutoscanR</p>
                            <p className="diag-summary-counts">Synthèse : 1 critique • 2 moyens • 0 mineur</p>

                            <div className="diag-code-item">
                                <span className="diag-badge critique">P0217</span>
                                <span className="diag-label">Surchauffe moteur</span>
                            </div>
                            <div className="diag-code-item">
                                <span className="diag-badge moyen">P0401</span>
                                <span className="diag-label">Début insuffisante</span>
                            </div>
                            <div className="diag-code-item">
                                <span className="diag-badge moyen">P0171</span>
                                <span className="diag-label">Mélange trop pauvre</span>
                            </div>

                            <p style={{ fontSize: '9px', textAlign: 'center', color: '#94a3b8', marginTop: '10px' }}>Voir le PDF pour le détail complet</p>
                        </div>

                        <div className="perso-card-actions">
                            <button className="btn-perso-action dark">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><polyline points="7 11 12 16 17 11" /><line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                                Télécharger PDF
                            </button>
                            <button className="btn-perso-action light">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                                Modifier
                            </button>
                        </div>
                    </article>
                </div>

                {/* Mes explications */}
                <section className="expl-section">
                    <h2 className="perso-section-title">Mes explications (?)</h2>
                    <div className="expl-list">
                        {explanations.map(exp => (
                            <Link key={exp.code} to={`/espace-perso/code/${exp.code}`} className="expl-item">
                                <div className="expl-left">
                                    <div className="expl-icon-small">
                                        {/* Petit indicateur de cercle rouge */}
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', border: `2px solid ${exp.type === 'critique' ? '#ef4444' : '#f59e0b'}`, opacity: 0.6 }}></div>
                                    </div>
                                    <div className="expl-content-wrap">
                                        <h4>{exp.code} – {exp.title}</h4>
                                        <p>{exp.desc}</p>
                                    </div>
                                </div>
                                <div className={`expl-alert-icon ${exp.type === 'warning' ? 'warning' : ''}`}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Mes rendez-vous */}
                <section className="rdv-section">
                    <h2 className="perso-section-title">Mes rendez-vous</h2>
                    <div className="rdv-card">
                        <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>À venir</h4>
                        <div className="rdv-content-box">
                            <div className="rdv-info-item">Garage Tfou</div>
                            <div className="rdv-info-item">01.02.03.04.05</div>
                            <div className="rdv-info-item">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                16/03/2026
                            </div>
                        </div>

                        <h3 className="rdv-cta-title">Prendre rdv avec nos experts</h3>
                        <button className="btn-perso-rdv">
                            <span style={{ marginRight: 8 }}>📅</span>
                            C'est parti !
                        </button>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
