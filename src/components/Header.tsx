import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-library-paper text-library-brown shadow-lg py-6 px-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <h1
          className="text-3xl sm:text-3xl font-bold tracking-wide text-library-brown drop-shadow-md text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            WebkitTextStroke: '1px black', // black border around text
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // subtle shadow
          }}
        >
          📖 Open Library Fetching App
        </h1>
      </div>
    </header>
  );
};

export default Header;