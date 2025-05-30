import { useState, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import LMS from "../assets/lms.png";
import bigyan from "../assets/bigyan.jpg";
import SPMS from "../assets/spms.png";

export default function Portfolio() {
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-sans text-white bg-gradient-to-br from-[#1e1e2f] to-[#3c3c5c] min-h-screen px-16 py-4 pb-4">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Bigyan</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <button
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
            onClick={scrollToContact}
          >
            Let’s Talk
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between my-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            I’m <span className="text-purple-500">Bigyan Khanal</span>
          </h2>
          <p className="mt-6 text-xl">
            I design and develop impactful digital products with a user-first
            mindset and clean, scalable code.
          </p>
          <div className="mt-12 flex justify-center md:justify-start space-x-12">
            <div>
              <h3 className="text-3xl font-bold">UI/UX Designer</h3>
              <p>2+ Years</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Web Developer</h3>
              <p>1+ Years</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src={bigyan}
            alt="Bigyan Khanal"
            className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-purple-600"
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="px-4 max-w-3xl ">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-white">
          I'm a passionate full-stack developer and UI/UX designer who loves
          crafting elegant digital experiences that not only look great but also
          solve real-world problems. My journey began with curiosity, evolved
          through hands-on projects, and continues to grow as I explore new
          technologies and creative solutions.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
          Whether it’s building dynamic web applications, leading team projects,
          or participating in hackathons, I enjoy taking on challenges that push
          my boundaries. I'm currently focused on improving my skills in React,
          TypeScript, and backend development using .NET and Django.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p>
              Modern, responsive and fast-loading websites tailored to your
              brand.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">UI/UX Strategy</h3>
            <p>Intuitive designs crafted through research and user feedback.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img src={LMS} alt="Project 1" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">
              Library Management System
            </h3>
            <p>
              The Library Management System using React is a modern web application that streamlines the management of books, members, and borrowing activities, providing an intuitive user interface for efficient library operations and real-time tracking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={SPMS}
              alt="Project 2"
              className="mb-4 rounded-lg"
              sizes="20px"
            />
            <h3 className="text-xl font-bold mb-2">Student Portfolio Management System</h3>
            <p>
              The Student Portfolio Management System (SPMS) is a web application designed to help students systematically track, showcase, and manage their academic and extracurricular achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-900 p-8 rounded-lg mb-20">
        <p className="text-2xl italic mb-4">
          “Bigyan created a site that reflects our identity and vision. Highly
          recommend!”
        </p>
        <div className="flex items-center space-x-4">
          
          <div>
            <h4 className="font-bold text-right">Abhishek Adhikari</h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-20 px-4" ref={contactRef}>
        <div className="max-w-2xl mx-auto ml-200">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Send me a <span className="text-purple-500">message</span>
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="bg-purple-600 px-6 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-purple-700"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 pt-6 border-t border-gray-700">
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <FaFacebook />
          <FaGithub />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <p className="text-sm">
          <strong>Bigyan Khanal </strong> <strong>| &#169; 2023 </strong> | All
          rights reserved.|{" "}
        </p>
      </footer>
    </main>
  );
}
