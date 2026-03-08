import whyChooseImg from '../../assets/about-why-choose.png';
import './WhyChoose.css';

export default function WhyChoose() {
    return (
        <section className="why-choose" aria-labelledby="why-title">
            <div className="why-choose-inner">
                <div className="why-image-col">
                    <img src={whyChooseImg} alt="Borne AutoScanR en action" className="why-img" />
                </div>
                <div className="why-text-col">
                    <h2 id="why-title" className="why-title">Pourquoi choisir AutoScanR ?</h2>
                    <p className="why-p">
                        Une approche révolutionnaire de l'entretien automobile, centrée sur la transparence et l'autonomie.
                    </p>
                    <p className="why-p">
                        C'est pourquoi nous avons créé AutoScanR : la première borne de diagnostic automobile en libre-service,
                        accessible 24/7, pour seulement 19,90€.
                    </p>
                    <p className="why-p">
                        Notre technologie avancée analyse tous les calculateurs de votre véhicule et traduit les codes d'erreur en explications claires et actionnables.
                    </p>
                </div>
            </div>
        </section>
    );
}
