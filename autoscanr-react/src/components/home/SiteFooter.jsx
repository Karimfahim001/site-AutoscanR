import { Link } from 'react-router-dom';
import './SiteFooter.css';

export default function SiteFooter() {
    return (
        <footer className="site-footer" role="contentinfo">
            <div className="footer-inner">
                {/* Brand column */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo" aria-label="AutoScanR accueil">
                        <span className="footer-logo-auto">AUTO</span>
                        <span className="footer-logo-scan">SCAN</span>
                        <span className="footer-logo-r">R</span>
                    </Link>
                    <p className="footer-brand-desc">
                        La borne de diagnostic automobile au service de tous.
                        Transparence, pédagogie et innovation.
                    </p>
                    <div className="footer-socials">
                        {/* Facebook */}
                        <a href="#" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>
                </div>

                {/* Plateformes */}
                <div className="footer-col">
                    <h3 className="footer-col-title">Plateformes</h3>
                    <nav aria-label="Liens plateformes">
                        <ul className="footer-links">
                            <li><Link to="/" className="footer-link">Page d'accueil</Link></li>
                            <li><Link to="/connexion" className="footer-link">Connexion</Link></li>
                            <li><Link to="/qui-sommes-nous" className="footer-link">Qui sommes-nous</Link></li>
                            <li><Link to="/mediation" className="footer-link">Espace Médiation</Link></li>
                            <li><Link to="/dashboard" className="footer-link">Espace Conducteur</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h3 className="footer-col-title">Contact</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="mailto:contact@autoscanr.com" className="footer-link footer-link-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                contact@autoscanr.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+33600000000" className="footer-link footer-link-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" /></svg>
                                +33 6 00 00 00 00
                            </a>
                        </li>
                        <li>
                            <span className="footer-link footer-link-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                                Bordeaux, France
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <span>© 2026 AutoScanR. Tous droits réservés.</span>
                <div className="footer-bottom-links">
                    <a href="#" className="footer-link-sm">Confidentialité</a>
                    <a href="#" className="footer-link-sm">CGU</a>
                    <a href="#" className="footer-link-sm">Cookies</a>
                </div>
            </div>
        </footer>
    );
}
