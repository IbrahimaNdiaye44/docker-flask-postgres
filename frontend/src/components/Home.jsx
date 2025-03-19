import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">Ibrahima Ndiaye</h1>
      <p className="text-xl mt-4">Researcher | Computer Scientist | Engineer</p>
      <p className="text-lg mt-2 text-gray-400">Exploring 6G, IoT, Digital Twins & Quantum Computing</p>
      <a href="#about" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600">
        Learn More About Me
      </a>
    </div>
  );
};

export default Home;
