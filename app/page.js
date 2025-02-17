"use client"; // Ensure the component is rendered on the client side

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false); // For error handling
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
      // Make the POST request to the API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setIsSubmitted(true); // Show thank you message
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
        setIsError(false); // Reset error state
      } else {
        setIsError(true); // Show error message if form submission failed
      }
    } catch (error) {
      setIsError(true); // Handle error during the request
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section
        className="text-white flex items-center justify-center bg-center"
        style={{
          backgroundImage: "url(/images/cover.avif)", // Your image
          backgroundSize: "cover", // Ensures the image covers the entire container without distortion
          backgroundPosition: "center", // Centers the image in the section
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          minHeight: "75vh", // Adjusted height to 75vh for better proportion
          width: "100%", // Ensures the section takes up the full width
        }}
      >
        <div className="container mx-auto text-center px-6 py-16">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Power Systems Lab
          </h1>
          <p className="text-2xl font-semibold md:text-xl mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
            IIT Bombay
          </p>
          <Link
            href="#contact-us"
            className="inline-block bg-indigo-600 px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wide hover:bg-indigo-700 transform transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s shadow-lg hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About the Lab</h2>
          <p className="text-lg max-w-4xl mx-auto mb-6">
          Power Systems Laboratory @ IIT Bombay The power systems lab in IIT Bombay is dedicated to the research in the power systems domain. The research area ranges from the power system dynamics, stability and its control to the research and development of the software and hardware simulation tools in the power system and power electronics domain. The researh and curriculum of the power system and power electronics are focused on the conceptual and a well rounded understanding for the undergraduate and post graduate students. A few scholars are assocaited with the national missons on the development of photovolatics Cutting edge technologies such as hybrid simulation digital and analog domains, Real time digital hybrid simulation, Electricity and Energy markets, stability and control of modern power system, High voltage DC systems are, development of ever changing load models and microprocess and memory management etc are explored. 'Sequel' an inhouse digital simulation software is developed in the lab. The PSLAB youtube channel is a host to various videos for the skill development in power system. Various video lectures for the educational outreach of the students.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "New Research Paper Published",
              "Energy Efficiency Workshop",
              "New Collaboration with Industry Leaders",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-sm">
                  We’ve made significant progress in various fields such as
                  smart grids, renewable energy systems, and energy
                  optimization.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Ongoing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Grid Stability and Resilience",
                description:
                  "This research is focused on creating scalable solutions for the challenges faced by modern power grids and the integration of renewable sources.",
                startDate: "January 2023",
                imageSrc: "/images/grid.avif", // Replace with actual image paths
                imageAlt: "Grid Stability and Resilience",
              },
              {
                title: "Smart Metering and IoT",
                description:
                  "Exploring the role of IoT and smart metering technologies to enhance energy monitoring and management in modern power systems.",
                startDate: "March 2023",
                imageSrc: "/images/smart.avif", // Replace with actual image paths
                imageAlt: "Smart Metering and IoT",
              },
              {
                title: "Sustainable Energy Integration",
                description:
                  "Investigating methods to integrate renewable energy sources seamlessly into existing power systems for a sustainable future.",
                startDate: "June 2023",
                imageSrc: "/images/energy.avif", // Replace with actual image paths
                imageAlt: "Sustainable Energy Integration",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-4"
              >
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-36 object-cover rounded-t-xl mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  Research Start Date:{" "}
                  <span className="text-indigo-600 font-semibold">
                    {project.startDate}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section (Horizontal Scroll) */}
      <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Work in Action</h2>
          <div className=" flex space-x-4 overflow-x-auto">
            {["images/img.jpg", "images/generator.avif", "images/transformer.avif", "images/motor.avif"].map(
              (img, index) => (
                <img
                  key={index}
                  src={`/${img}`}
                  alt={`Project ${index + 1}`}
                  className="w-72 h-48 ml-8 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white">
        <div id="contact-us" className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Have any questions? Get in touch with us using the form below:
          </p>
          <form className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border-2 border-black shadow-xl space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-5 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-5 rounded-lg shadow-xl border border-gray-400 text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
            {isSubmitted && (
              <p className="text-green-500 text-center">
                Thank you! Your message has been sent.
              </p>
            )}
            {isError && (
              <p className="text-red-500 text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
