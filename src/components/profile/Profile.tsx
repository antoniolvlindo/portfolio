import "./Profile.css";

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
    <div className="text-center">
      <img className="flex justify-center mb-16" src={profile.avatar_url} alt="" />
      <div>
      <h1>Olá! Me chamo  <br /> {profile.name}</h1>
      <h2>Sou um desenvolvedor Full Stack.</h2>
      </div>
    </div>
  );
}

export default Profile