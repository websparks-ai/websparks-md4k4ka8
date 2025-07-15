import React from 'react';
import Card from './Card';
import Button from './Button';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Residential Solar Panels',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$2,999',
      power: '400W',
      efficiency: '22.1%',
      warranty: '25 Years',
      features: ['High Efficiency', 'Weather Resistant', 'Easy Installation']
    },
    {
      id: 2,
      name: 'Commercial Solar System',
      image: 'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$15,999',
      power: '2000W',
      efficiency: '21.8%',
      warranty: '25 Years',
      features: ['Scalable Design', 'Remote Monitoring', 'Grid Integration']
    },
    {
      id: 3,
      name: 'Portable Solar Kit',
      image: 'https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$599',
      power: '100W',
      efficiency: '20.5%',
      warranty: '10 Years',
      features: ['Lightweight', 'Foldable Design', 'USB Charging']
    },
    {
      id: 4,
      name: 'Solar Battery Storage',
      image: 'https://images.pexels.com/photos/9875465/pexels-photo-9875465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$4,999',
      power: '10kWh',
      efficiency: '95%',
      warranty: '15 Years',
      features: ['Backup Power', 'Smart Control', 'Expandable']
    },
    {
      id: 5,
      name: 'Solar Water Heater',
      image: 'https://images.pexels.com/photos/9875478/pexels-photo-9875478.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$1,299',
      power: '200L',
      efficiency: '85%',
      warranty: '12 Years',
      features: ['Energy Efficient', 'All Weather', 'Low Maintenance']
    },
    {
      id: 6,
      name: 'Solar Inverter System',
      image: 'https://images.pexels.com/photos/9875489/pexels-photo-9875489.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: '$899',
      power: '5000W',
      efficiency: '98%',
      warranty: '10 Years',
      features: ['Pure Sine Wave', 'LCD Display', 'Overload Protection']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Solar Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar solutions designed 
            to meet your energy needs and budget requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || `https://placehold.co/600x400/22c55e/ffffff?text=${product.name}`}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.power}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">{product.price}</div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Efficiency:</span>
                    <div className="font-medium">{product.efficiency}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Warranty:</span>
                    <div className="font-medium">{product.warranty}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <i className="bi bi-check-circle-fill text-primary-600 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <i className="bi bi-cart-plus mr-2"></i>
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    <i className="bi bi-eye"></i>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            <i className="bi bi-grid-3x3-gap mr-2"></i>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
