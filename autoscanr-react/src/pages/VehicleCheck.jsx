import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PublicNavbar from '../components/layout/PublicNavbar';
import SiteFooter from '../components/home/SiteFooter';
import MapSection from '../components/home/MapSection';
import { getVehicleInfo } from '../services/vehicleApi';
import './VehicleCheck.css';

export default function VehicleCheck() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [vehicle, setVehicle] = useState(null);
    const [showToast, setShowToast] = useState(false);

    // Get plaque and ville from navigation state or localStorage
    const searchParams = location.state || JSON.parse(localStorage.getItem('autoscanr_search') || '{}');
    const { plaque, ville } = searchParams;

    useEffect(() => {
        if (!plaque) {
            setLoading(false);
            return;
        }

        async function fetchVehicle() {
            try {
                setLoading(true);
                const data = await getVehicleInfo(plaque);
                setVehicle(data);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            } catch (err) {
                setError('Impossible de récupérer les informations du véhicule. Vérifiez la plaque et réessayez.');
            } finally {
                setLoading(false);
            }
        }

        fetchVehicle();
    }, [plaque]);

    if (!plaque && !loading) {
        return (
            <div className="vehicle-check-page">
                <PublicNavbar />
                <main className="check-main">
                    <div className="error-container card">
                        <h2>Aucune plaque détectée</h2>
                        <p>Veuillez saisir une plaque sur la page d’accueil pour vérifier votre véhicule.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/')}>Retour à l'accueil</button>
                    </div>
                </main>
                <SiteFooter />
            </div>
        );
    }

    if (loading) {
        return (
            <div className="vehicle-check-page loading">
                <PublicNavbar />
                <main className="check-main">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <p>Analyse de votre véhicule en cours...</p>
                    </div>
                </main>
                <SiteFooter />
            </div>
        );
    }

    if (error) {
        return (
            <div className="vehicle-check-page">
                <PublicNavbar />
                <main className="check-main">
                    <div className="error-container card">
                        <h2>Oups !</h2>
                        <p>{error}</p>
                        <button className="btn btn-primary" onClick={() => navigate('/')}>Retour à l'accueil</button>
                    </div>
                </main>
                <SiteFooter />
            </div>
        );
    }

    return (
        <div className="vehicle-check-page">
            <PublicNavbar />

            {showToast && (
                <div className="toast-success">
                    Véhicule détecté ✅ Compatible AutoScanR
                </div>
            )}

            <main className="check-main container">
                {/* Header / Breadcrumb */}
                <header className="check-header">
                    <button className="back-link" onClick={() => navigate('/')}>
                        ← Retour page d'accueil
                    </button>
                    <h1>Vérification du véhicule</h1>
                    <p className="subtitle">Nous analysons votre véhicule pour préparer le diagnostic AutoScanR.</p>
                </header>

                {/* Banner UX */}
                <section className="check-banner">
                    <div className="banner-content">
                        <span className="banner-icon">✓</span>
                        <p>Bonne nouvelle : votre véhicule est éligible au diagnostic AutoScanR.</p>
                    </div>
                </section>

                <div className="check-grid">
                    {/* Info Card */}
                    <div className="info-card card">
                        <div className="card-header">
                            <h2>Votre véhicule</h2>
                            <span className="badge-plate">{plaque}</span>
                        </div>
                        <div className="vehicle-details">
                            <div className="detail-item">
                                <span className="detail-label">Marque</span>
                                <span className="detail-value">{vehicle?.brand || 'N/A'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Modèle</span>
                                <span className="detail-value">{vehicle?.model || 'N/A'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Année</span>
                                <span className="detail-value">{vehicle?.year || 'N/A'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Carburant</span>
                                <span className="detail-value">{vehicle?.fuel || 'N/A'}</span>
                            </div>
                            <div className="detail-item vin-item">
                                <span className="detail-label">VIN</span>
                                <span className="detail-value">{vehicle?.vin || 'Données masquées'}</span>
                            </div>
                        </div>
                        {!vehicle?.vin && (
                            <p className="partial-data-hint">Note: Données partielles pour ce véhicule.</p>
                        )}
                    </div>

                    {/* Compatibility Card */}
                    <div className="compatibility-card card">
                        <div className="card-header">
                            <h2>Compatibilité</h2>
                            <span className={`badge-status ${vehicle?.compatible ? 'status-green' : 'status-orange'}`}>
                                {vehicle?.compatible ? 'Compatible' : 'À vérifier'}
                            </span>
                        </div>
                        <ul className="comp-list">
                            <li>
                                <span className="check-circle">✓</span>
                                <div>
                                    <strong>Diagnostic OBD disponible</strong>
                                    <p>Accès complet aux systèmes électroniques.</p>
                                </div>
                            </li>
                            <li>
                                <span className="check-circle">✓</span>
                                <div>
                                    <strong>Lecture des codes défaut</strong>
                                    <p>Analyse instantanée de tous les capteurs.</p>
                                </div>
                            </li>
                            <li>
                                <span className="check-circle">✓</span>
                                <div>
                                    <strong>Rapport et recommandations</strong>
                                    <p>Rapport détaillé envoyé par email.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className="check-map-wrapper">
                    <MapSection />
                </div>

                {/* Contact Block */}
                <section className="contact-block card">
                    <div className="contact-content">
                        <h3>Besoin d'aide ?</h3>
                        <p>Une question sur la compatibilité de votre véhicule ou sur nos bornes ?</p>
                        <div className="contact-grid">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span>contact@autoscanr.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>0800 123 456</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>123 Route de Paris, 75000 Paris</span>
                            </div>
                        </div>
                        <button className="btn btn-primary contact-btn" onClick={() => navigate('/contact')}>Nous contacter</button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
