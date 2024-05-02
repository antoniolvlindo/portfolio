import { useEffect, useState } from 'react'
import getProfile from './services/profileAPI'
import Profile from './components/profile/Profile'

function App() {
  const [profile, setProfile] = useState<{ avatar_url: string; name: string } | null>(null);

  useEffect(() => {
    getProfile().then(data => setProfile(data));
  }, []);

  return (
    <div>
      <Profile profile={profile} />
    </div>
  )
}

export default App
