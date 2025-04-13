import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-amber-800" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-amber-800" />
                <span>hello@cozycornercafe.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-amber-800" />
                <span>123 Coffee Street, Brewville, BW 12345</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Hours</h2>
            <div className="flex items-start space-x-4">
              <FaClock className="text-amber-800 mt-1" />
              <div>
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-800 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;