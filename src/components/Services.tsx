import React from 'react';
import Card from './Card';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'bi-house',
      title: 'Residential Installation',
      description: 'Professional solar panel installation for homes with complete system design and optimization.',
      features: ['Site Assessment', 'Custom Design', 'Professional Installation', '24/7 Support']
    },
    {
      icon: 'bi-building',
      title: 'Commercial Solutions',
      description: 'Large-scale solar installations for businesses, warehouses, and industrial facilities.',
      features: ['Energy Audit', 'ROI Analysis', 'Scalable Systems', 'Maintenance Plans']
    },
    {
      icon: 'bi-tools',
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance services to keep your solar system running at peak efficiency.',
      features: ['Regular Cleaning', 'Performance Monitoring', 'Quick Repairs', 'System Upgrades']
    },
    {
      icon: 'bi-calculator',
      title: 'Energy Consultation',
      description: 'Expert advice on energy efficiency and solar system optimization for maximum savings.',
      features: ['Energy Analysis', 'Cost Estimation', 'Financing Options', 'Permit Assistance']
    },
    {
      icon: 'bi-battery-charging',
      title: 'Battery Storage',
      description: 'Advanced battery storage solutions for energy independence and backup power.',
      features: ['Backup Power', 'Grid Independence', 'Smart Management', 'Expandable Storage']
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Monitoring Systems',
      description: 'Real-time monitoring and analytics to track your solar system performance.',
      features: ['Real-time Data', 'Mobile App', 'Performance Alerts', 'Usage Reports']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to installation and maintenance, we provide comprehensive 
            solar solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <i className="bi bi-check-circle-fill text-primary-600 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
