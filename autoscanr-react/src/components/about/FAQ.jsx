import { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
        question: "Combien coûte un diagnostic ?",
        answer: "Le diagnostic complet est facturé au tarif unique de 19,90€. Il inclut l'analyse de tous les calculateurs et l'envoi du rapport détaillé sur votre smartphone."
    },
    {
        question: "Est-ce que je peux réparer ma voiture moi-même ?",
        answer: "Certaines pannes simples signalées par notre système peuvent être résolues par un particulier. Pour les pannes complexes, notre rapport vous permet d'échanger d'égal à égal avec un professionnel."
    },
    {
        question: "La borne répare-t-elle la voiture ?",
        answer: "Non, la borne est un outil de diagnostic. Elle identifie les pannes mais n'effectue pas d'interventions mécaniques physiques. Elle peut cependant effacer certains codes défauts mineurs après contrôle."
    },
    {
        question: "Puis-je vendre ma voiture avec ce rapport ?",
        answer: "Absolument. Un rapport AutoScanR récent est un gage de transparence qui rassure les acheteurs potentiels et peut faciliter la transaction."
    }
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
                <div className="faq-answer-content">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <section className="faq-section" aria-labelledby="faq-title">
            <div className="faq-inner">
                <h2 id="faq-title" className="faq-title">Questions fréquentes</h2>
                <p className="faq-subtitle">Tout ce que vous devez savoir avant votre premier scan</p>

                <div className="faq-list">
                    {faqData.map((item, idx) => (
                        <FAQItem key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
