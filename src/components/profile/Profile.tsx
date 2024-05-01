import React, { useEffect, useState } from 'react'
import getProfile from '../../services/profileAPI'

function Profile() {
  const [profile, setProfile] = useState<{
    avatar_url: string | undefined; name: string 
} | null>(null);

  useEffect(() => {
    getProfile().then(data => setProfile(data));
  }, []);

  return (
    <div>
      {profile && <img src={profile.avatar_url} alt="" />}
      <h1>
        {profile ? `Hello, ${profile.name}!` : 'Loading...'}
      </h1>
    </div>
  )
}

export default Profile