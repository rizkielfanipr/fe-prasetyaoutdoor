import React from 'react';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import bgImage from '/bg-home.jpg'; // Pastikan path ini benar
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  // Media query untuk deteksi mode mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div 
      className="hero min-h-screen mb-20 relative" 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay untuk menurunkan kecerahan */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className={`hero-content p-4 rounded-lg relative z-10 ${isMobile ? 'flex-col text-center' : 'flex-col lg:flex-row-reverse lg:ml-[-260px]'}`}>
        <div className={`${isMobile ? 'mx-auto' : ''}`}>
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-white font-press-start`}>
            Peralatan Berkualitas
          </h1>
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-white font-press-start mt-2`}>
            Petualangan Alammu!
          </h1>
          <p className={`py-4 text-white ${isMobile ? 'text-sm' : 'text-base'}`}>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className={`flex ${isMobile ? 'flex-col space-y-2 items-center' : 'space-x-4'} lg:justify-start`}>
            <button className="btn bg-[#FFC61A] text-black border-0 hover:bg-[#e6b800] transition duration-300 flex items-center px-4 py-2 text-sm">
              <FaShoppingCart className="mr-2" />
              Pesan Sekarang
            </button>
            <button className="btn border border-[#FFC61A] text-[#FFC61A] bg-transparent hover:bg-[#FFC61A] hover:text-black transition duration-300 flex items-center px-4 py-2 text-sm">
              <FaSignInAlt className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
