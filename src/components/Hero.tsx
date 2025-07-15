import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-800 to-primary-800"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop' || 'https://placehold.co/1920x1080/22c55e/ffffff?text=Solar+Panels')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Power Your Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Clean Energy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your home or business with premium solar panel solutions. 
            Save money, reduce your carbon footprint, and invest in sustainable energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="animate-bounce-slow">
              <i className="bi bi-calculator mr-2"></i>
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              <i className="bi bi-play-circle mr-2"></i>
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">25+</div>
              <div className="text-gray-200">Years Warranty</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-400 mb-2">90%</div>
              <div className="text-gray-200">Energy Savings</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary-400 mb-2">5000+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="bi bi-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
