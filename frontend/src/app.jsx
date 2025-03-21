import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex flex-col items-center px-6">
        <h1 className="text-2xl font-bold text-white mb-4">Ibrahima Ndiaye</h1>
       
      </div>
    </nav>

      <div className="mt-16">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;



