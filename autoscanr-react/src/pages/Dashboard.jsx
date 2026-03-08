import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout, getUser } from '../services/auth';
import '../styles/globals.css';
import './Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = getUser();

    // Read plate from navigation state or localStorage
    const [searchData, setSearchData] = useState(null);

    useEffect(() => {
        if (location.state?.plaque) {
            setSearchData({ ville: location.state.ville || '', plaque: location.state.plaque });
        } else {
            const stored = localStorage.getItem('autoscanr_search');
            if (stored) {
                try { setSearchData(JSON.parse(stored)); } catch { }
            }
        }
    }, [location.state]);

    function handleLogout() {
        logout();
        localStorage.removeItem('autoscanr_search');
        navigate('/');
    }

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div className="dashboard-logo">
                    <span className="dl-auto">AUTO</span>
                    <span className="dl-scan">SCAN</span>
                    <span className="dl-r">R</span>
                </div>
                <button className="btn dashboard-logout-btn" onClick={handleLogout}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Déconnexion
                </button>
            </header>

            <main className="dashboard-main">
                <div className="dashboard-welcome">
                    <div className="dashboard-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                    </div>
                    <h1 className="dashboard-title">Bienvenue dans votre espace</h1>
                    {user?.email && (
                        <p className="dashboard-email">{user.email}</p>
                    )}
                    {searchData?.plaque && (
                        <div className="dashboard-plate-info">
                            <span className="dashboard-plate-label">Véhicule analysé</span>
                            <div className="dashboard-plate-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 16, height: 16 }}>
                                    <rect x="2" y="7" width="20" height="10" rx="2" />
                                    <path d="M7 11h2M12 11h2M17 11h.01" />
                                </svg>
                                <span className="dashboard-plate-number">{searchData.plaque}</span>
                                {searchData.ville && (
                                    <span className="dashboard-plate-city">— {searchData.ville}</span>
                                )}
                            </div>
                        </div>
                    )}
                    <p className="dashboard-desc">
                        Votre tableau de bord AutoScanR est en cours de construction.
                        Les fonctionnalités seront disponibles prochainement.
                    </p>
                </div>

                {/* Placeholder cards */}
                <div className="dashboard-grid">
                    {[
                        { label: 'Diagnostics', value: '—', icon: '🔍' },
                        { label: 'Véhicules', value: searchData?.plaque || '—', icon: '🚗' },
                        { label: 'Alertes', value: '—', icon: '🔔' },
                    ].map(item => (
                        <div key={item.label} className="dashboard-card card">
                            <span className="dc-icon">{item.icon}</span>
                            <div className="dc-info">
                                <span className="dc-label">{item.label}</span>
                                <span className="dc-value">{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
