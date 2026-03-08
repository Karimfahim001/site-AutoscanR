import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Mediation from './pages/Mediation';
import Contact from './pages/Contact';
import ChooseAccount from './pages/ChooseAccount';
import LoginPro from './pages/LoginPro';
import EspacePerso from './pages/EspacePerso';
import EspacePro from './pages/EspacePro';
import CodeDetail from './pages/CodeDetail';
import './styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil — navbar incluse dans le composant */}
        <Route path="/" element={<Home />} />

        {/* Qui sommes-nous */}
        <Route path="/qui-sommes-nous" element={<About />} />

        {/* Médiation */}
        <Route path="/mediation" element={<Mediation />} />

        {/* Nous contacter */}
        <Route path="/contact" element={<Contact />} />

        {/* Page connexion personnel */}
        <Route path="/connexion" element={<Login />} />

        {/* Page connexion pro */}
        <Route path="/connexion-pro" element={<LoginPro />} />

        {/* Choix du compte */}
        <Route path="/choix-compte" element={<ChooseAccount />} />

        {/* Espace Personnel */}
        <Route path="/espace-perso" element={<EspacePerso />} />
        <Route path="/espace-perso/code/:code" element={<CodeDetail />} />

        {/* Espace Professionnel */}
        <Route path="/espace-pro" element={<EspacePro />} />

        {/* Ancien Dashboard — redirigé vers espace-perso par défaut ou supprimé */}
        <Route path="/dashboard" element={<EspacePerso />} />
      </Routes>
    </BrowserRouter>
  );
}
