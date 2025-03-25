"use client"; // Ensure the component is rendered on the client side
import WordCloud from "@/app/components/WordCloud";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.error("Error during form submission:", error);
    }
  };

  const words = [
    { text: "Synchronous Machine", link: "https://mkdocs-three.vercel.app/homepage/Topics/Synchronous%20Machines/", size: Math.floor(Math.random() * (35 - 20 + 1)) + 45 },
    { text: "Small Signal Stability", link: "https://mkdocs-three.vercel.app/", size: Math.floor(Math.random() * (40 - 30 + 1)) + 30 },
    { text: "Research", link: "/research", size: Math.floor(Math.random() * (40 - 35 + 1)) + 35 },
    { text: "Projects", link: "/current-project", size: Math.floor(Math.random() * (38 - 30 + 1)) + 40 },
    { text: "Power system dynamics", link: "http://localhost:3000/youtube-videos", size: Math.floor(Math.random() * (32 - 25 + 1)) + 45 },
    { text: "Experiments", link: "http://localhost:3000/youtube-videos", size: Math.floor(Math.random() * (45 - 25 + 1)) + 20 },
    { text: "Simulation", link: "http://localhost:3001/youtube-videos", size: Math.floor(Math.random() * (40 - 25 + 1)) + 25 },
    { text: "Software tutorials", link: "http://localhost:3000/youtube-videos", size: Math.floor(Math.random() * (45 - 30 + 1)) + 30 },
    { text: "Microprocessor", link: "https://mkdocs-three.vercel.app/", size: Math.floor(Math.random() * (30 - 15 + 1)) + 15 },
    { text: "Experiments by students", link: "http://localhost:3000/youtube-videos", size: Math.floor(Math.random() * (40 - 35 + 1)) + 35 },
    { text: "Transformer", link: "http://localhost:3001/youtube-videos", size: Math.floor(Math.random() * (40 - 20 + 1)) + 20 },
    { text: "Inverter based resources", link: "https://mkdocs-three.vercel.app/", size: Math.floor(Math.random() * (45 - 35 + 1)) + 35 },
    { text: "Grid Analysis", link: "https://mkdocs-three.vercel.app/", size: Math.floor(Math.random() * (35 - 20 + 1)) + 20 },
    { text: "RLC Circuit", link: "/youtube-videos", size: Math.floor(Math.random() * (30 - 15 + 1)) + 15 },
    { text: "Power Electronics", link: "/youtube-videos", size: Math.floor(Math.random() * (45 - 35 + 1)) + 35 },
    { text: "Stability", link: "/youtube-videos", size: Math.floor(Math.random() * (45 - 25 + 1)) + 25 },
    { text: "Network", link: "/youtube-videos", size: Math.floor(Math.random() * (35 - 20 + 1)) + 20 },
  ];

  const images = [
    "/images/pic2.png",
    "/images/pic3.png",
    "/images/transformer.avif",
  ];

  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-gray-700 text-white py-24"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          minHeight: "60vh",
          transition: "background-image 0.5s ease-in-out",
        }}
        onClick={handleImageChange}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Welcome to the Power Systems Lab
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 animate-fade-in-delay">
            IIT Bombay - Leading Innovation in Power Systems and Electrical
            Engineering
          </p>
          <Link
            href="#research"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 animate-fade-in-delay-2"
          >
            Explore Research
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-6 text-left">
                About the Lab
              </h2>
              <p className="text-black leading-relaxed">
                The Power Systems Laboratory at IIT Bombay is dedicated to
                research, development, and innovation in power systems.
                Researchers are associated with the National Missions on the
                Development of Photovoltaics. We explore cutting-edge
                technologies such as hybrid simulation in digital and analog
                domains, High Voltage DC Systems, real-time digital hybrid
                simulation, electricity and energy management, stability and
                control of modern power systems, microprocessors, and memory
                management. 'Sequel' is a power electronics simulation software
                developed in-house.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/power-lab.jpg" // Replace with a relevant lab image
                alt="Power Systems Lab"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Key Research Areas
          </h2>
          <WordCloud words={words} />
        </div>
      </div>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <p className="text-green-500 mt-4">Thank you! Your message has been sent.</p>
            )}
            {isError && (
              <p className="text-red-500 mt-4">Something went wrong. Please try again later.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
