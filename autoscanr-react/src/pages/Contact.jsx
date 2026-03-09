import { useState } from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';
import SiteFooter from '../components/home/SiteFooter';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        objet: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status.message) setStatus({ type: '', message: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation simple
        if (!formData.nom || !formData.prenom || !formData.objet || !formData.message) {
            setStatus({ type: 'error', message: 'Veuillez remplir tous les champs.' });
            return;
        }

        // Simuler envoi (démo)
        setStatus({ type: 'success', message: 'Message envoyé (démo). Nous vous répondrons rapidement.' });
        setFormData({ nom: '', prenom: '', objet: '', message: '' });
    };

    return (
        <div className="contact-page">
            <PublicNavbar />

            <main className="contact-main">
                <div className="contact-container">
                    <header className="contact-header">
                        <h1 className="contact-title">NOUS CONTACTER</h1>
                        <p className="contact-subtitle">
                            Une question sur AutoScanR ? Écrivez-nous via le formulaire ci-dessous.<br />
                            Réponse rapide (démo).
                        </p>
                    </header>

                    <div className="contact-content">
                        <section className="contact-form-card">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenom">Prénom</label>
                                        <input
                                            type="text"
                                            id="prenom"
                                            name="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="objet">Objet</label>
                                    <input
                                        type="text"
                                        id="objet"
                                        name="objet"
                                        value={formData.objet}
                                        onChange={handleChange}
                                        placeholder="Sujet de votre message"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-contact-submit">
                                    ENVOYER
                                </button>

                                {status.message && (
                                    <div className={`form-feedback ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </section>

                        <aside className="contact-info">
                            <div className="info-card">
                                <h3>Coordonnées</h3>
                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <a href="mailto:contact@autoscanr.com">contact@autoscanr.com</a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <span>+33 1 23 45 67 89</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <span>Toulon, France</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
