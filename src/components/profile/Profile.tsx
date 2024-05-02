import React from "react";

interface ProfileProps {
  profile: {
    avatar_url: string;
    name: string;
  } | null;
}

function Profile({ profile }: ProfileProps) {
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={profile.avatar_url} alt="" />
      <h1>Hello, {profile.name}!</h1>
    </div>
  );
}

export default Profile