import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="h-[500px] bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Cozy Corner Café</h1>
            <p className="text-xl">Where every cup tells a story</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Quality Coffee</h3>
            <p className="text-gray-600">Expertly roasted beans from around the world</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Fresh Pastries</h3>
            <p className="text-gray-600">Baked fresh daily in our kitchen</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Cozy Atmosphere</h3>
            <p className="text-gray-600">The perfect place to relax and unwind</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;