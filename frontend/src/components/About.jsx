import React from "react";

const About = () => {
  return (
    <div id="about" className="p-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I am <span className="font-semibold">Ibrahima Ndiaye</span>, a researcher at <span className="text-blue-400">Otto von Guericke University</span>.
        My focus is on <span className="text-blue-400">6G, IoT, Digital Twins & Quantum Computing</span>.  
        I have a background in <span className="text-blue-400">Computer Science & Software Engineering</span>.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Education</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>📌 MSc in Computer Science - Jacobs University Bremen (2022-2024)</li>
        <li>📌 BEng in Computer Engineering - Dnipro University of Technology (2018-2022)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Work Experience</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>🔹 Researcher - Otto von Guericke University (2025 - Present)</li>
        <li>🔹 Research Intern - ATLAS ELEKTRONIK (2024)</li>
        <li>🔹 Project & Data Management - EIS Electronics (2024)</li>
      </ul>
    </div>
  );
};

export default About;
