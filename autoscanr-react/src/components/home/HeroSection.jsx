import { useNavigate } from 'react-router-dom';
import heroDashboard from '../../assets/hero-dashboard.png';
import './HeroSection.css';

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="hero-section" aria-label="Section principale">
            <div className="hero-top-badge-wrap">
                <div className="hero-available-badge">
                    Disponible 24/7 sans rendez-vous
                </div>
            </div>

            <div className="hero-main-layout">
                {/* Left: dashboard image with blue border */}
                <div className="hero-image-col">
                    <div className="hero-img-container">
                        <img
                            src={heroDashboard}
                            alt="Tableau de bord automobile"
                            className="hero-car-img"
                        />
                    </div>
                </div>

                {/* Right: content */}
                <div className="hero-content-col">
                    <p className="hero-price-label">seulement</p>
                    <div className="hero-price">
                        <span className="hero-price-num">19€90</span>
                    </div>
                    <p className="hero-desc">
                        AutoScanR démocratise le diagnostic automobile. <br />
                        Branchez, analysez, comprenez. Une borne libre-service pour prendre soin de votre auto à petit prix.
                    </p>
                    <button
                        className="btn-hero-cta"
                        onClick={() => navigate('/connexion')}
                    >
                        Un diagnostic clair avec AutoScanR !
                    </button>
                </div>
            </div>
        </section>
    );
}
