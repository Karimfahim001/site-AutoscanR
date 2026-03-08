import PublicNavbar from '../components/layout/PublicNavbar';
import SiteFooter from '../components/home/SiteFooter';
import AboutHero from '../components/about/AboutHero';
import WhyChoose from '../components/about/WhyChoose';
import AboutFeatures from '../components/about/AboutFeatures';
import FAQ from '../components/about/FAQ';
import AboutStats from '../components/about/AboutStats';
import '../styles/globals.css';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <PublicNavbar />
            <main>
                <AboutHero />
                <WhyChoose />
                <AboutFeatures />
                <FAQ />
                <AboutStats />
            </main>
            <SiteFooter />
        </div>
    );
}
