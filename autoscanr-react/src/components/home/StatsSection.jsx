import './StatsSection.css';

const STATS = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        value: '15k+',
        label: 'UTILISATEURS\nEN FRANCE',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M6 8l2 2 4-4" />
            </svg>
        ),
        value: '450+',
        label: 'BORNES DE SCAN\nEN FRANCE',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        value: '4.9/5',
        label: 'SATISFACTION',
    },
];

export default function StatsSection() {
    return (
        <section className="stats-section" aria-label="Chiffres clés">
            <div className="stats-inner">
                {STATS.map(stat => (
                    <div key={stat.value} className="stat-item">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">
                            {stat.label.split('\n').map((line, i) => (
                                <span key={i}>{line}{i < stat.label.split('\n').length - 1 && <br />}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
