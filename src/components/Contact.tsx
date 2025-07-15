import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      details: ['123 Solar Street', 'Green City, GC 12345', 'United States']
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 8AM-6PM']
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      details: ['info@solartechpro.com', 'support@solartechpro.com', 'sales@solartechpro.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us today for a free consultation 
            and personalized quote for your solar energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${info.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-gray-600">{detail}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Installation</option>
                    <option value="commercial">Commercial Solutions</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="consultation">Energy Consultation</option>
                    <option value="battery">Battery Storage</option>
                    <option value="monitoring">Monitoring Systems</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your solar energy needs..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <i className="bi bi-send mr-2"></i>
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <i className="bi bi-shield-check text-primary-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully licensed and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-award text-primary-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Certified</h4>
                    <p className="text-gray-600 text-sm">NABCEP certified professionals with proven expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-clock text-primary-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">Quick Response</h4>
                    <p className="text-gray-600 text-sm">Fast response times and efficient project completion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-headset text-primary-600 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock customer support and monitoring.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote</h3>
              <p className="mb-6">
                Ready to save on your energy bills? Get a personalized quote in minutes!
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <i className="bi bi-calculator mr-2"></i>
                Calculate Savings
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
