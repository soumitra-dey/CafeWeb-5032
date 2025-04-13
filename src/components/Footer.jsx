import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Cozy Corner Café</h3>
            <p className="mt-2">123 Coffee Street</p>
            <p>Brewville, BW 12345</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-200"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-amber-200"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-amber-200"><FaTwitter size={24} /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cozy Corner Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;