import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-center flex-wrap">
        <Link
          to="/"
          className={`${
            location.pathname === '/' ? 'text-black' : 'text-gray-400'
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === '/about' ? 'text-black' : 'text-gray-400'
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`${
            location.pathname === '/services' ? 'text-black' : 'text-gray-400'
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === '/services' ? 'page' : undefined}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === '/contact' ? 'text-black' : 'text-gray-400'
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
