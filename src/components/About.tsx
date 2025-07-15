import React from 'react';
import Card from './Card';
import Button from './Button';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Installations' },
    { number: '50MW+', label: 'Total Capacity' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Solar energy pioneer with 20+ years in renewable energy sector.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Engineer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in solar system design and energy optimization solutions.'
    },
    {
      name: 'Mike Davis',
      role: 'Installation Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Certified installer with expertise in residential and commercial projects.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading the Solar Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At SolarTech Pro, we are committed to making clean, renewable energy 
              accessible to everyone. With over 15 years of experience in the solar 
              industry, we have helped thousands of customers reduce their energy 
              costs and carbon footprint.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified professionals uses cutting-edge technology and 
              premium components to deliver solar solutions that exceed expectations. 
              We believe in quality, reliability, and exceptional customer service.
            </p>
            <Button size="lg">
              <i className="bi bi-award mr-2"></i>
              Our Certifications
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Solar Installation Team"
              className="rounded-2xl shadow-2xl"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/800x600/22c55e/ffffff?text=Solar+Installation";
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600">25+</div>
              <div className="text-gray-600">Years Warranty</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          <p className="text-lg text-gray-600">
            Our experienced professionals are dedicated to delivering exceptional solar solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/300x300/22c55e/ffffff?text=${encodeURIComponent(member.name)}`;
                }}
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <div className="text-primary-600 font-medium mb-4">{member.role}</div>
              <p className="text-gray-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
