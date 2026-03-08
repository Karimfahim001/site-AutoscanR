import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPlateBlock.css';

export default function SearchPlateBlock() {
    const navigate = useNavigate();
    const [ville, setVille] = useState('');
    const [plaque, setPlaque] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!plaque.trim()) {
            setError('Veuillez saisir votre plaque');
            return;
        }
        setError('');
        // Store in localStorage for persistence
        localStorage.setItem('autoscanr_search', JSON.stringify({ ville, plaque }));
        navigate('/dashboard', { state: { ville, plaque } });
    }

    return (
        <div className="search-block-wrapper">
            <section className="search-card" aria-label="Recherche par plaque">
                <div className="search-card-label">
                    VÉRIFICATION INSTANTANÉE <span className="check-inline">✓</span>
                </div>

                <form className="search-card-form" onSubmit={handleSubmit}>
                    <div className="search-card-field">
                        <label htmlFor="search-ville">Ville</label>
                        <div className="search-card-input-wrap">
                            <input
                                id="search-ville"
                                type="text"
                                placeholder="Paris, Lyon..."
                                value={ville}
                                onChange={e => setVille(e.target.value)}
                            />
                            <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                        </div>
                    </div>

                    <div className="search-card-field">
                        <label htmlFor="search-plaque">Plaque d'immatriculation</label>
                        <div className="search-card-input-wrap">
                            <input
                                id="search-plaque"
                                type="text"
                                placeholder="AB-123-CD"
                                value={plaque}
                                onChange={e => {
                                    setPlaque(e.target.value.toUpperCase());
                                    if (e.target.value) setError('');
                                }}
                                maxLength={9}
                            />
                            <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                        </div>
                    </div>

                    {error && <p className="search-card-error">{error}</p>}
                </form>
            </section>
        </div>
    );
}
