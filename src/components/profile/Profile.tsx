import React, { useEffect, useState } from 'react'
import getProfile from '../../services/profileAPI'

function Profile() {
  const [profile, setProfile] = useState<{ name: string } | null>(null);

  useEffect(() => {
    getProfile().then(data => setProfile(data));
  }, []);

  return (
    <div>
      <h1>
        {profile ? `Hello, ${profile.name}!` : 'Loading...'}
      </h1>
    </div>
  )
}

export default Profile