
import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <img 
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWxlY3llOHZib3FoaWZxOXBnNGFtZDU0cmp6dGs3eDA2eTY3ZGpjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K7o9FdCoDnwEo/giphy.gif"
          alt="Animated overlay"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      {/* Animated clouds for extra sky effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-8 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-32 left-1/3 w-24 h-10 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 text-center">
        {/* GIF on top */}
        
        
        {/* Coming Soon text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-pulse">
          COMING SOON
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 drop-shadow-md">
          Something amazing is on the way...
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-700 to-transparent"></div>
    </div>
  );
}