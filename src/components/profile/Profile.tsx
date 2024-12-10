import "./Profile.css";
import nodeIcon from '../../assets/icons/icons8-nodejs-50.png';
import expressIcon from '../../assets/icons/icons8-express-js-50.png';
import typescriptIcon from '../../assets/icons/icons8-typescript-50.png';
import javascriptIcon from '../../assets/icons/icons8-javascript-50.png';
import dotnetIcon from '../../assets/icons/icons8-net-50.png';
import csharpIcon from '../../assets/icons/icons8-c-50.png';
import dockerIcon from '../../assets/icons/icons8-docker-50.png';
import reactIcon from '../../assets/icons/icons8-react-50.png';
import mysqlIcon from '../../assets/icons/icons8-mysql-50.png';

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
      <div className="flex justify-center mb-16">
        <img src={profile.avatar_url} alt="" className="mainfoto"/>
      </div>
      <div>
      <h1>Olá! Me chamo  <br /> {profile.name}</h1>
      <h2>Desenvolvedor Full Stack.</h2>
      <div className="flex flex-wrap justify-center space-x-4 mt-4">
        <img src={nodeIcon} alt="NodeJS" className="icon"/>
        <img src={expressIcon} alt="Express" className="icon"/>
        <img src={typescriptIcon} alt="TypeScript" className="icon"/>
        <img src={javascriptIcon} alt="JavaScript" className="icon"/>
        <img src={dotnetIcon} alt=".NET" className="icon"/>
        <img src={csharpIcon} alt="C#" className="icon"/>
        <img src={dockerIcon} alt="Docker" className="icon"/>
        <img src={reactIcon} alt="React" className="icon"/>
        <img src={mysqlIcon} alt="MySQL" className="icon"/>
      </div>
      </div>
    </div>
  );
}

export default Profile