import React from 'react';

const HeroImage = () => {
  return (
    <div className="hidden lg:block">
      <div className="relative">
        <div className="absolute -inset-4 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
          alt="Fitness Coach"
          className="relative rounded-2xl object-cover w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroImage;