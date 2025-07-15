import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
