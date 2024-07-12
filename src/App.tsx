import { useEffect, useState } from 'react'
import getProfile from './services/profileAPI'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar';
import './tailwind.css';
import 'normalize.css';

function App() {
  const [profile, setProfile] = useState<{ avatar_url: string; name: string } | null>(null);

  useEffect(() => {
    getProfile().then(data => setProfile(data));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Profile profile={profile} />
    </div>
  )
}

export default App
