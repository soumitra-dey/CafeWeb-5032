import { motion } from 'framer-motion';

const menuItems = {
  Coffee: [
    { name: 'Espresso', price: '3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '4.75', description: 'Espresso with lots of steamed milk' },
    { name: 'Americano', price: '3.75', description: 'Espresso with hot water' }
  ],
  'Fresh Pastries': [
    { name: 'Croissant', price: '3.25', description: 'Buttery and flaky' },
    { name: 'Chocolate Muffin', price: '3.50', description: 'Rich chocolate flavor' },
    { name: 'Cinnamon Roll', price: '4.00', description: 'Freshly baked with cream cheese frosting' }
  ],
  'Light Meals': [
    { name: 'Avocado Toast', price: '8.50', description: 'Sourdough bread with fresh avocado' },
    { name: 'Quiche of the Day', price: '9.00', description: 'Made fresh daily' },
    { name: 'Caprese Sandwich', price: '9.50', description: 'Fresh mozzarella, tomato, and basil' }
  ]
};

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Our Menu</h1>
      
      <div className="space-y-12">
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-amber-700 mb-6">{category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                    <span className="text-amber-800 font-bold">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;