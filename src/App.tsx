import { useEffect, useState } from 'react'
import getProfile from './services/profileAPI'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar';
import './assets/tailwind.css';
import 'normalize.css';
import Features from './components/features/Features';
import PortfolioSection from './components/portfolio/portfolio';
import EducationSection from './components/education/education';
import SkillsSection from './components/skills/skills';
import ExperienceSection from './components/experience/experience';
import Footer from './components/footer/footer';

function App() {
  const [profile, setProfile] = useState<{ avatar_url: string; name: string } | null>(null);

  useEffect(() => {
    getProfile().then(data => setProfile(data));
  }, []);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'pt', includedLanguages: 'en,pt' },
        'google_translate_element'
      );
    };

    window.googleTranslateElementInit = googleTranslateElementInit;
    addGoogleTranslateScript();
  }, []);

  return (
    <div className="container mx-auto px-4">
      
      <Navbar />
      <Profile profile={profile} />
      <div id="google_translate_element" className="my-4"></div>
      <Features />
      <PortfolioSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  )
}

export default App
