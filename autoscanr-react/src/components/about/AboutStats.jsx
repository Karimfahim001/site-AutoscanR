import './AboutStats.css';

const aboutStats = [
    { value: "15k+", label: "Utilisateurs" },
    { value: "120+", label: "Bornes Installées" },
    { value: "50k+", label: "Diagnostics réalisés" },
    { value: "4.9/5", label: "Satisfaction client" }
];

export default function AboutStats() {
    return (
        <section className="about-stats" aria-label="Statistiques clés">
            <div className="about-stats-inner">
                <h2 className="about-stats-title">AutoScanR en chiffres</h2>
                <div className="about-stats-grid">
                    {aboutStats.map((stat, idx) => (
                        <div key={idx} className="about-stat-item">
                            <div className="about-stat-value">{stat.value}</div>
                            <div className="about-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
