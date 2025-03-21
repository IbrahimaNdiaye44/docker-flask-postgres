import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900">
    
      <p className="text-xl text-gray-300">Researcher | Computer Scientist | Engineer</p>
      <p className="text-lg text-gray-400 mt-2">
        Exploring 6G, IoT, Digital Twins & Quantum Computing.
      </p>
      <a
        href="#about"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg transition duration-300"
      >
        Learn More About Me
      </a>
    </section>
  );
};

export default Home;
