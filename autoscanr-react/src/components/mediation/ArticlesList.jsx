import { useState } from 'react';
import oilImg from '../../assets/mediation-oil.png';
import obdImg from '../../assets/mediation-obd.png';
import './ArticlesList.css';

const categories = ['Tous', 'Entretien', 'Diagnostic', 'Sécurité'];

const articles = [
    {
        id: 1,
        title: "Comment faire sa vidange soi-même ?",
        desc: "Découvrez les étapes essentielles pour réaliser la vidange de votre véhicule en toute sécurité. Un guide complet pour économiser et mieux comprendre votre voiture.",
        date: "15 Février 2026",
        category: "Entretien",
        image: oilImg
    },
    {
        id: 2,
        title: "Comprendre les codes erreur OBD",
        desc: "Les codes d'erreur OBD peuvent sembler cryptiques. Apprenez à les déchiffrer et à identifier les problèmes de votre véhicule rapidement.",
        date: "10 Février 2026",
        category: "Diagnostic",
        image: obdImg
    },
    {
        id: 3,
        title: "Quand changer ses plaquettes de frein ?",
        desc: "La sécurité avant tout ! Découvrez les signes qui indiquent qu'il est temps de remplacer vos plaquettes de frein et comment le faire.",
        date: "5 Février 2026",
        category: "Sécurité",
        image: oilImg // Placeholder since I hit quota
    },
    {
        id: 4,
        title: "L'entretien climatisation automobile",
        desc: "Maintenez votre climatisation en parfait état de fonctionnement. Conseils d'entretien et solutions aux problèmes courants.",
        date: "1 Février 2026",
        category: "Entretien",
        image: obdImg // Placeholder 
    },
    {
        id: 5,
        title: "Préparer son véhicule pour l'hiver",
        desc: "L'hiver approche ! Découvrez tous nos conseils pour préparer votre voiture aux conditions hivernales et rouler en toute sécurité.",
        date: "28 Janvier 2026",
        category: "Sécurité",
        image: oilImg // Placeholder
    }
];

export default function ArticlesList() {
    const [activeCat, setActiveCat] = useState('Tous');
    const [search, setSearch] = useState('');

    const filtered = articles.filter(a => {
        const matchesCat = activeCat === 'Tous' || a.category === activeCat;
        const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <section className="articles-section">
            <div className="articles-container">
                <div className="articles-controls">
                    <div className="category-tabs">
                        {categories.map(c => (
                            <button
                                key={c}
                                className={`cat-tab ${activeCat === c ? 'active' : ''}`}
                                onClick={() => setActiveCat(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="search-bar-wrap">
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            className="article-search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="articles-grid">
                    {filtered.map(article => (
                        <div key={article.id} className="article-card">
                            <div className="article-content">
                                <div className="article-meta">
                                    <span className={`article-cat-badge ${article.category.toLowerCase()}`}>{article.category}</span>
                                    <span className="article-date">{article.date}</span>
                                </div>
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-desc">{article.desc}</p>
                                <button className="article-btn">Lire plus</button>
                            </div>
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
