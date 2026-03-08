import { useNavigate } from 'react-router-dom';
import SiteFooter from '../components/home/SiteFooter';
import './EspacePro.css';

export default function EspacePro() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('autoscanr_user_type');
        navigate('/');
    };

    const requests = [
        { id: 1, name: 'Jean Dupont', vehicle: 'Peugeot 208', status: 'En attente' },
        { id: 2, name: 'Marie Curie', vehicle: 'Tesla Model 3', status: 'Rendez-vous pris' },
        { id: 3, name: 'Pierre Martin', vehicle: 'Renault Captur', status: 'Nouveau' }
    ];

    const diagnostics = [
        { id: 'DS-452', date: '08/03/2026', vehicle: 'Golf 7', outcome: 'Surchauffe' },
        { id: 'DS-451', date: '07/03/2026', vehicle: 'BMW X3', outcome: 'Injecteurs' },
        { id: 'DS-450', date: '06/03/2026', vehicle: 'Audi A3', outcome: 'RAS' }
    ];

    return (
        <div className="pro-dashboard">
            <header className="pro-header">
                <div className="pro-header-left">
                    <div className="pro-avatar-mock" style={{ width: 32, height: 32, borderRadius: '50%', background: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>G</div>
                    <div className="pro-title-wrap">
                        <h1>Espace Professionnel – Garage</h1>
                        <p>Garage de la Marina, Toulon</p>
                    </div>
                </div>
                <button className="btn-pro-logout" onClick={handleLogout}>
                    Déconnexion
                </button>
            </header>

            <main className="pro-main">
                <section className="pro-kpis">
                    <div className="pro-kpi-card">
                        <span className="pro-kpi-label">Clients actifs</span>
                        <span className="pro-kpi-value">124</span>
                    </div>
                    <div className="pro-kpi-card">
                        <span className="pro-kpi-label">Véhicules suivis</span>
                        <span className="pro-kpi-value">312</span>
                    </div>
                    <div className="pro-kpi-card">
                        <span className="pro-kpi-label">Alertes du jour</span>
                        <span className="pro-kpi-value">8</span>
                    </div>
                    <div className="pro-kpi-card">
                        <span className="pro-kpi-label">Chiffre d'affaires (mois)</span>
                        <span className="pro-kpi-value">4.2k€</span>
                    </div>
                </section>

                <div className="pro-sections">
                    <section className="pro-section-card">
                        <h2>
                            <span>💬</span>
                            Demandes clients
                        </h2>
                        <div className="requests-list">
                            {requests.map(req => (
                                <div key={req.id} className="request-item">
                                    <div className="req-info">
                                        <h4>{req.name}</h4>
                                        <p>{req.vehicle}</p>
                                    </div>
                                    <span className="req-status-tag">{req.status}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pro-section-card">
                        <h2>
                            <span>🔍</span>
                            Diagnostics récents
                        </h2>
                        <div className="pro-table-wrap">
                            <table className="pro-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Véhicule</th>
                                        <th>Résultat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {diagnostics.map(diag => (
                                        <tr key={diag.id}>
                                            <td style={{ color: '#38bdf8', fontWeight: 'bold' }}>{diag.id}</td>
                                            <td>{diag.date}</td>
                                            <td>{diag.vehicle}</td>
                                            <td>{diag.outcome}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
