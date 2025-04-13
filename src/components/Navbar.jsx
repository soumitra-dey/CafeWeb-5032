import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-amber-800 text-white py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <FaCoffee />
          <span>Cozy Corner Café</span>
        </Link>
        
        <div className="flex space-x-8">
          {[
            ['Home', '/'],
            ['Menu', '/menu'],
            ['About', '/about'],
            ['Contact', '/contact']
          ].map(([title, path]) => (
            <Link
              key={path}
              to={path}
              className="relative"
            >
              <span className={`text-lg ${isActive(path) ? 'text-amber-200' : 'hover:text-amber-200'}`}>
                {title}
              </span>
              {isActive(path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-amber-200"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;