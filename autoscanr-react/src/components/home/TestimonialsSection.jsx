import './TestimonialsSection.css';

const TESTIMONIALS = [
    {
        initials: 'T.L.',
        name: 'Thomas L.',
        role: 'Conducteur, Paris',
        stars: 5,
        text: 'Ce scan m\'a permis de savoir exactement ce qui clochait sur ma voiture avant de l\'amener au garage. J\'ai économisé beaucoup. Réflexe numéro 1 désormais !',
        rating: null,
        highlight: false,
    },
    {
        initials: 'S.M.',
        name: 'Sarah M.',
        role: 'AutoScanR Pro',
        stars: 5,
        text: 'J\'ai ce que je voulais : je peux enfin vérifier moi-même l\'état de mes véhicules de flotte avant chaque mission. Du grand travail. Ce prix est vraiment avantageux.',
        rating: '4.9/5',
        highlight: true,
    },
    {
        initials: 'K.B.',
        name: 'Karim B.',
        role: 'Garagiste Indép.',
        stars: 5,
        text: 'Super outil que je propose à mes clients pour valider nos diagnostics ensemble. Ça instaure la confiance et ça simplifie mes explications techniques.',
        rating: null,
        highlight: false,
    },
];

function Stars({ count }) {
    return (
        <div className="stars" aria-label={`${count} étoiles sur 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill={i < count ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`star ${i < count ? 'filled' : ''}`}
                    aria-hidden="true"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="testimonials-section" aria-labelledby="testimonials-title">
            <div className="testimonials-inner">
                <div className="section-label">CE QU'EN PENSENT LES CONDUCTEURS</div>
                <h2 id="testimonials-title" className="section-title">
                    Rejoignez les milliers d'utilisateurs qui ont pris soin de leur voiture.
                </h2>
                <div className="testimonials-grid">
                    {TESTIMONIALS.map(t => (
                        <article key={t.name} className={`testimonial-card${t.highlight ? ' highlight' : ''}`}>
                            <Stars count={t.stars} />
                            <blockquote className="testimonial-text">"{t.text}"</blockquote>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar" aria-hidden="true">
                                    {t.initials}
                                </div>
                                <div className="testimonial-meta">
                                    <span className="testimonial-name">{t.name}</span>
                                    <span className="testimonial-role">{t.role}</span>
                                </div>
                                {t.rating && (
                                    <div className="testimonial-badge">{t.rating}</div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
