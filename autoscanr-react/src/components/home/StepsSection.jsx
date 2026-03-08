import './StepsSection.css';

const STEPS = [
    {
        num: 1,
        title: 'Décision',
        desc: 'Réparez vous-même ou envoyez le rapport en 1 clic à nos garages partenaires.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M17 11l2 2 4-4" />
            </svg>
        ),
    },
    {
        num: 2,
        title: 'Traduction',
        desc: 'Recevez un rapport clair. Nous traduisons le code technique en français compréhensible.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
            </svg>
        ),
    },
    {
        num: 3,
        title: 'Diagnostic électronique',
        desc: "Nos algorithmes interrogent tous les calculateurs du véhicule en moins de 3 minutes.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        num: 4,
        title: 'Branchement',
        desc: 'Connectez le câble de la borne à la prise OBD de votre voiture (accessible sous le volant).',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18.8 4l-2 2M15 9l-2 2M11 13l-2 2M6.2 19L4 21.2M7.5 16.5L11 13M13 11l3.5-3.5M10.4 20h3.2a1 1 0 0 0 .9-.6l.7-1.4a1 1 0 0 1 .9-.6h.5a1 1 0 0 0 1-1v-2.8a1 1 0 0 0-.3-.7l-1.4-1.4a1 1 0 0 1-.3-.7v-.5a1 1 0 0 0-1-1h-2.8a1 1 0 0 0-.7.3l-1.4 1.4a1 1 0 0 1-.7.3h-.5a1 1 0 0 0-.9.6l-.7 1.4a1 1 0 0 0 .9.6h3.2" />
            </svg>
        ),
    },
    {
        num: 5,
        title: 'Identification',
        desc: 'Saisissez votre plaque ou sélectionnez votre modèle sur l\'écran tactile de la borne.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h3v3H7z" /><path d="M14 7h3v3h-3z" /><path d="M7 14h3v3H7z" /><path d="M14 14h3v3h-3z" />
            </svg>
        ),
    },
];

export default function StepsSection() {
    return (
        <section className="steps-section" aria-labelledby="steps-title">
            <div className="steps-header">
                <div className="section-badge">LE PARCOURS AUTOSCANR</div>
                <h2 id="steps-title" className="section-title">Du doute à la solution en 5 étapes</h2>
                <p className="section-subtitle">
                    Fini le stress du voyant inconnu. Voici comment nous transformons une panne complexe en une solution simple et actionnable.
                </p>
            </div>

            <div className="steps-inner">
                {/* Left kiosk illustration */}
                <div className="steps-illustration" aria-hidden="true">
                    <div className="steps-machine-wrap">
                        {/* Reuse existing machine structure but ensure it looks like the mockup machine */}
                        <div className="machine-body">
                            <div className="machine-header">
                                <span className="machine-logo-text">AUTO<strong>SCAN</strong><em>R</em></span>
                            </div>
                            <div className="machine-screen">
                                <div className="machine-screen-inner"></div>
                            </div>
                            <div className="machine-panel">
                                <div className="machine-numpad"></div>
                                <div className="machine-slots">
                                    <div className="m-slot"></div>
                                    <div className="m-slot-wide"></div>
                                </div>
                            </div>
                            <div className="machine-stripes">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: steps timeline reversed order for vertical flow matching circle 1 at top */}
                <div className="steps-timeline">
                    <div className="timeline-line"></div>
                    <div className="steps-list">
                        {STEPS.map(step => (
                            <div key={step.num} className="step-row">
                                <div className="step-number-circle">{step.num}</div>
                                <div className="step-card">
                                    <div className="step-card-icon">{step.icon}</div>
                                    <div className="step-card-content">
                                        <h3 className="step-card-title">{step.title}</h3>
                                        <p className="step-card-desc">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
