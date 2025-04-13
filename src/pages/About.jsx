import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-amber-800 mb-6">Our Story</h1>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2010, Cozy Corner Café started with a simple mission: to create a warm and welcoming space where people could enjoy exceptional coffee and delicious food.
            </p>
            <p>
              Our master baristas are passionate about coffee and trained to prepare the perfect cup every time. We source our beans from sustainable farms around the world and roast them in small batches to ensure the highest quality.
            </p>
            <p>
              Beyond coffee, we're proud to offer a selection of house-made pastries and light meals prepared fresh daily in our kitchen. We believe in using quality ingredients and traditional methods to create food that complements our coffee perfectly.
            </p>
          </div>
        </div>
        
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe interior"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;