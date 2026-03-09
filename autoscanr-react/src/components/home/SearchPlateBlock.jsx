import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CITIES } from '../../data/cities';
import './SearchPlateBlock.css';

export default function SearchPlateBlock() {
    const navigate = useNavigate();
    const [ville, setVille] = useState('');
    const [plaque, setPlaque] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isCityValid, setIsCityValid] = useState(false);
    const [isPlateValid, setIsPlateValid] = useState(false);
    const [plateError, setPlateError] = useState('');

    const suggestionRef = useRef(null);

    // Handle clicks outside suggestions to close the list
    useEffect(() => {
        function handleClickOutside(event) {
            if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // City logic: filtration and validation
    function handleCityChange(e) {
        const val = e.target.value;
        setVille(val);
        setIsCityValid(false);

        if (val.length >= 2) {
            const filtered = CITIES.filter(c =>
                c.name.toLowerCase().includes(val.toLowerCase()) ||
                c.zip.includes(val)
            ).slice(0, 10);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }

    function selectCity(city) {
        setVille(city.name);
        setIsCityValid(true);
        setShowSuggestions(false);
    }

    // Plate logic: formatting and validation
    function handlePlateChange(e) {
        let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');

        // Format: AA-123-AA
        if (val.length > 2 && val.length <= 5) {
            val = val.slice(0, 2) + '-' + val.slice(2);
        } else if (val.length > 5) {
            val = val.slice(0, 2) + '-' + val.slice(2, 5) + '-' + val.slice(5, 7);
        }

        setPlaque(val);

        const plateRegex = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/;
        if (plateRegex.test(val)) {
            setIsPlateValid(true);
            setPlateError('');
        } else {
            setIsPlateValid(false);
            if (val.length === 9) setPlateError('Format attendu : AB-123-CD');
            else setPlateError('');
        }
    }

    function handleSubmit(e) {
        if (e) e.preventDefault();

        if (isCityValid && isPlateValid) {
            localStorage.setItem('autoscan_city', ville);
            localStorage.setItem('autoscan_plate', plaque);
            // Compatibility with existing storage just in case
            localStorage.setItem('autoscanr_search', JSON.stringify({ ville, plaque }));

            navigate('/vehicule', { state: { ville, plaque } });
        }
    }

    function handleKeyDown(e, type) {
        if (e.key === 'Enter') {
            if (type === 'city' && suggestions.length > 0 && showSuggestions) {
                e.preventDefault();
                selectCity(suggestions[0]);
            } else if (type === 'plate') {
                handleSubmit(e);
            }
        }
    }

    return (
        <div className="search-block-wrapper">
            <section className="search-card" aria-label="Recherche par plaque">
                <div className="search-card-label">
                    VÉRIFICATION INSTANTANÉE
                </div>

                <form className="search-card-form" onSubmit={handleSubmit}>
                    {/* Field Ville */}
                    <div className="search-card-field" ref={suggestionRef}>
                        <label htmlFor="search-ville">Ville</label>
                        <div className="search-card-input-wrap">
                            <input
                                id="search-ville"
                                type="text"
                                placeholder="Paris, Lyon..."
                                value={ville}
                                onChange={handleCityChange}
                                onKeyDown={(e) => handleKeyDown(e, 'city')}
                                autoComplete="off"
                            />
                            {isCityValid && <span className="validation-text">Ville validée</span>}
                        </div>

                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="suggestions-list">
                                {suggestions.map((city, index) => (
                                    <li key={index} onClick={() => selectCity(city)}>
                                        <strong>{city.name}</strong> — {city.zip}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Field Plaque */}
                    <div className="search-card-field">
                        <label htmlFor="search-plaque">Plaque d'immatriculation</label>
                        <div className="search-card-input-wrap">
                            <input
                                id="search-plaque"
                                type="text"
                                placeholder="AB-123-CD"
                                value={plaque}
                                onChange={handlePlateChange}
                                onKeyDown={(e) => handleKeyDown(e, 'plate')}
                                maxLength={9}
                                autoComplete="off"
                            />
                            {isPlateValid && <span className="validation-text">Plaque validée</span>}
                        </div>
                        {plateError && <p className="search-card-error">{plateError}</p>}
                    </div>

                    {/* CTA Button */}
                    <div className="search-card-cta">
                        <button
                            type="submit"
                            className="btn btn-primary cta-search"
                            disabled={!isCityValid || !isPlateValid}
                        >
                            Vérifier mon véhicule
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
