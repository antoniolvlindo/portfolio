import allogo from '../../assets/allogo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-40">
      <img src={allogo} alt="Logo" width="60px"/>
      <a
        href="https://drive.google.com/file/d/1AXJgpU6idcu2UIil-l5hXMzu-q24lClh/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
      >
        Get my CV
      </a>
    </nav>
  );
}

export default Navbar;
