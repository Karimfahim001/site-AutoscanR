import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/globals.css';
import './PublicNavbar.css';

/**
 * Logo AutoScanR — texte stylisé si pas d'image
 */
function Logo() {
    return (
        <Link to="/" className="navbar-logo" aria-label="AutoScanR accueil">
            <span className="logo-auto">AUTO</span>
            <span className="logo-scan">SCAN</span>
            <span className="logo-r">R</span>
        </Link>
    );
}

const NAV_LINKS = [
    { label: 'ACCUEIL', to: '/' },
    { label: 'QUI SOMMES-NOUS', to: '/qui-sommes-nous' },
    { label: 'MÉDIATION', to: '/mediation' },
    { label: 'NOUS CONTACTER', to: '/contact' },
];

export default function PublicNavbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    /* Ferme le burger si clic extérieur */
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    /* Ferme le menu au resize > 768px */
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) setMenuOpen(false);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar" aria-label="Navigation principale" ref={menuRef}>
            <div className="navbar-inner">
                {/* Logo */}
                <Logo />

                {/* Menu desktop */}
                <ul className="navbar-menu" role="menubar">
                    {NAV_LINKS.map(({ label, to }) => (
                        <li key={to} role="none">
                            <Link to={to} className="navbar-link" role="menuitem">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Actions droite */}
                <div className="navbar-actions">
                    <button
                        className="user-icon-btn"
                        onClick={() => navigate('/choix-compte')}
                        aria-label="Accéder à l'espace personnel"
                        title="Espace personnel"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                    </button>

                    {/* Burger mobile */}
                    <button
                        className={`burger-btn${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <div className="mobile-menu" role="menu" aria-label="Menu mobile">
                    {NAV_LINKS.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className="mobile-link"
                            role="menuitem"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/connexion"
                        className="mobile-link mobile-link-action"
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                    >
                        Espace Personnel
                    </Link>
                </div>
            )}
        </nav>
    );
}
