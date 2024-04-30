import React, { useEffect, useState } from 'react'
import getProfile from '../services/profileAPI'

function Profile() {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		getProfile().then(data => setProfile(data));
	}, []);

	return (
		<div>
			{profile && `Olá, eu sou o ${profile.name} e sou um ${profile.bio}!`}
		</div>
	)
}

export default Profile