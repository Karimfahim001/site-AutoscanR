import PublicNavbar from '../components/layout/PublicNavbar';
import SiteFooter from '../components/home/SiteFooter';
import MediationHero from '../components/mediation/MediationHero';
import ArticlesList from '../components/mediation/ArticlesList';
import '../styles/globals.css';
import './Mediation.css';

export default function Mediation() {
    return (
        <div className="mediation-page">
            <PublicNavbar />
            <main>
                <MediationHero />
                <ArticlesList />
            </main>
            <SiteFooter />
        </div>
    );
}
