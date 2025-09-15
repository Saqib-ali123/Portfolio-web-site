import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import saqibImg from "./assets/saqib.jpg"; 
export default function SaqibPortfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 shadow-md sticky top-0 z-50">
        {/* <h1 className="text-2xl font-bold text-purple-400">Saqib Dev</h1> */}
        <div className="space-x-6">
          <a href="#about" className="hover:text-purple-300">
            About
          </a>
          <a href="#skills" className="hover:text-purple-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-300">
            Contact
          </a>
        </div>
      </nav>

        <div className="flex justify-center mb-4 mt-6">
    <img
  src={saqibImg}
      alt="Saqib Ali"
      className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
    />
  </div>

      

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Sayyed Saqib Ali
        </h2>
        <p className="text-lg sm:text-xl text-gray-300">
          Freelance Software Developer & AI/ML Enthusiast
        </p>
        <div className="mt-6 flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/saqib-ali123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sayyed-saqib-ali-39403a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:saqib.ali@email.com">
            <FaEnvelope />
          </a>
        </div>
        <a
          href="/saqib.pdf"
          className="mt-8 inline-block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-500 text-white"
          download
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b border-purple-500 pb-2 mb-4">
          About Me
        </h2>
        <p className="text-gray-300 text-lg">
  I am a passionate B.Tech (CSE-AIML) student from TIT College Bhopal with a strong foundation in AI/ML and full-stack development. I specialize in building scalable, responsive, and production-ready web applications using modern frameworks like React.js, Django REST, and FastAPI.

  <br /><br />
  With hands-on experience in real-world freelance projects, I focus on delivering high-quality solutions tailored to client needs — from intuitive UIs to robust backend APIs. I’m always eager to collaborate, learn, and contribute to impactful products, whether it's a startup, freelance gig, or an enterprise-level MNC.
</p>

      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b border-purple-500 pb-2 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 p-4 rounded-lg">React.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Django REST</div>
          <div className="bg-gray-800 p-4 rounded-lg">FastAPI</div>
          <div className="bg-gray-800 p-4 rounded-lg">Python</div>
          <div className="bg-gray-800 p-4 rounded-lg">Tailwind CSS</div>
          <div className="bg-gray-800 p-4 rounded-lg">Machine Learning</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b border-purple-500 pb-2 mb-6">
          Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Student Performance Predictor
            </h3>
            <p className="text-gray-300">
              Built a regression model using Scikit-learn to predict student
              marks based on attendance and internal scores. Visualized results
              with Matplotlib.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Student Management System
            </h3>
            <p className="text-gray-300">
              A full-stack web app for managing students, attendance, and fee
              records. Built with Django REST API and React frontend.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Invoice & Inventory Manager
            </h3>
            <p className="text-gray-300">
              Web-based app to handle billing, inventory control, and automatic
              PDF invoice generation using Django and JavaScript.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Invoice Management System
            </h3>
            <p className="text-gray-300">
              Developed a user-friendly web-app to generate and track invoices
              using React.js and Django REST Framework.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Inventory Management System
            </h3>
            <p className="text-gray-300">
              Built a system to monitor stock levels and inventory changes in
              real-time with efficient UI.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Incident Management System
            </h3>
            <p className="text-gray-300">
              Created a system to manage and track IT incidents for internal
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b border-purple-500 pb-2 mb-6">
          Contact
        </h2>
        <p className="text-lg text-gray-300">
          Email:{" "}
          <a
            href="mailto:sayyedsaqib406@gmail.com"
            className="text-purple-400 underline"
          >
            sayyedsaqib406@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-300">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sayyed-saqib-ali-39403a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-purple-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            /in/sayyedsaqib406
          </a>
        </p>
        <p className="text-lg text-gray-300">
          GitHub:{" "}
          <a
            href="https://github.com/saqib-ali123"
            className="text-purple-400 underline"
            target="_blank"
          >
            @saqib-ali123
          </a>
        </p>
      </section> */}
          {/* Contact Section */}
      <section id="contact" className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b border-purple-500 pb-2 mb-6">
          Contact
        </h2>
        <p className="text-lg text-gray-300">
          Email:{" "}
          <a
            href="mailto:sayyedsaqib406@gmail.com"
            className="text-purple-400 underline"
          >
            sayyedsaqib406@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-300">
          Phone:{" "}
          <a
            href="tel:+918871984531"
            className="text-purple-400 underline"
          >
            +91 8871984531
          </a>
        </p>
        <p className="text-lg text-gray-300">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sayyed-saqib-ali-39403a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-purple-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            /in/sayyedsaqib406
          </a>
        </p>
        <p className="text-lg text-gray-300">
          GitHub:{" "}
          <a
            href="https://github.com/saqib-ali123"
            className="text-purple-400 underline"
            target="_blank"
          >
            @saqib-ali123
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-gray-900 mt-10">
        © 2025 Saqib Ali. All rights reserved.
      </footer>
    </div>
  );
}
