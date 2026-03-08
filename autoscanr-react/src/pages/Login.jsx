import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/auth';
import '../styles/globals.css';
import './Login.css';

function LogoInline() {
    return (
        <Link to="/" className="login-logo" aria-label="AutoScanR accueil">
            <span className="login-logo-auto">AUTO</span>
            <span className="login-logo-scan">SCAN</span>
            <span className="login-logo-r">R</span>
        </Link>
    );
}

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        /* Simulate slight async delay for UX */
        await new Promise(r => setTimeout(r, 400));

        const result = login(email, password);
        setLoading(false);

        if (result.success) {
            localStorage.setItem('autoscanr_user_type', 'personnel');
            navigate('/espace-perso');
        } else {
            setError(result.error);
        }
    }

    return (
        <div className="login-page">
            {/* ── Header ── */}
            <header className="login-header">
                <LogoInline />
                <Link to="/" className="login-back-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Retour page d'accueil
                </Link>
            </header>

            {/* ── Main ── */}
            <main className="login-main">
                {/* Badge */}
                <div className="login-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    Espace Personnel
                </div>

                {/* Title */}
                <h1 className="login-title">Connexion</h1>
                <p className="login-subtitle">Accédez à votre espace AutoScanR</p>

                {/* Card */}
                <div className="login-card card">
                    <form onSubmit={handleSubmit} noValidate>
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="label">Adresse e-mail</label>
                            <input
                                id="email"
                                type="email"
                                className="input"
                                placeholder="votre.email@exemple.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                aria-required="true"
                                disabled={loading}
                            />
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password" className="label">Mot de passe</label>
                            <input
                                id="password"
                                type="password"
                                className="input"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                aria-required="true"
                                disabled={loading}
                            />
                        </div>

                        {/* Checkbox + forgot */}
                        <div className="login-options">
                            <label className="checkbox-wrapper" htmlFor="remember">
                                <div
                                    className={`checkbox-custom${remember ? ' checked' : ''}`}
                                    onClick={() => setRemember(v => !v)}
                                    role="checkbox"
                                    aria-checked={remember}
                                    tabIndex={0}
                                    onKeyDown={e => e.key === ' ' && setRemember(v => !v)}
                                >
                                    {remember && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2 6 5 9 10 3" />
                                        </svg>
                                    )}
                                </div>
                                <span className="checkbox-label">Se souvenir de moi</span>
                            </label>
                            <span className="login-forgot">Mot de passe oublié ?</span>
                        </div>

                        {/* Error message — shown ABOVE the submit button */}
                        {error && (
                            <div className="login-error" role="alert" aria-live="assertive">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="btn-spinner" aria-hidden="true" />
                            ) : null}
                            {loading ? 'Connexion…' : 'Se connecter'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">ou</div>

                    {/* Register hint */}
                    <p className="login-register">
                        Pas encore de compte ?{' '}
                        <span className="login-register-link">Créer un compte</span>
                    </p>
                </div>

                {/* SSL mention */}
                <div className="login-ssl">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 8 12 12 14 14" />
                    </svg>
                    Connexion sécurisée SSL
                </div>
            </main>
        </div>
    );
}
