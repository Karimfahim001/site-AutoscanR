import { useNavigate } from 'react-router-dom';
import PublicNavbar from '../components/layout/PublicNavbar';
import HeroSection from '../components/home/HeroSection';
import SearchPlateBlock from '../components/home/SearchPlateBlock';
import StatsSection from '../components/home/StatsSection';
import StepsSection from '../components/home/StepsSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import MapSection from '../components/home/MapSection';
import SiteFooter from '../components/home/SiteFooter';
import '../styles/globals.css';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <PublicNavbar />
            <main>
                <HeroSection />
                <SearchPlateBlock />
                <StatsSection />
                <StepsSection />
                <PartnersSection />
                <TestimonialsSection />
                <MapSection />
            </main>
            <SiteFooter />
        </div>
    );
}
