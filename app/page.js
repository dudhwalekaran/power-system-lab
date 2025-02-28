"use client"; // Ensure the component is rendered on the client side
import WordCloud from "@/app/components/WordCloud";

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

  // List of words with more dynamic, randomized sizes for a truly random word cloud
  const words = [
    {
      text: "Synchronous Machine",
      link: "/educational-video",
      size: Math.floor(Math.random() * (45 - 40 + 1)) + 45,
    }, // Random size between 45 and 55
    {
      text: "Small Signal Stability",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (50 - 30 + 1)) + 30,
    }, // Random size between 30 and 50
    {
      text: "Research",
      link: "/research",
      size: Math.floor(Math.random() * (50 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Projects",
      link: "/current-project",
      size: Math.floor(Math.random() * (48 - 38 + 1)) + 40,
    }, // Random size between 40 and 55
    {
      text: "Powerflow",
      link: "http://127.0.0.1:8000/",
      size: Math.floor(Math.random() * (50 - 40 + 1)) + 45,
    }, // Random size between 45 and 55
    {
      text: "Fault Analysis",
      link: "/research",
      size: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    }, // Random size between 20 and 40
    {
      text: "Simulation",
      link: "http://127.0.0.1:8000/",
      size: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
    }, // Random size between 25 and 40
    {
      text: "HVDC",
      link: "http://127.0.0.1:8000/",
      size: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
    }, // Random size between 30 and 45
    {
      text: "Microprocessor",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    }, // Random size between 15 and 30
    {
      text: "Hardware",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (50 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Transformer",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    }, // Random size between 20 and 40
    {
      text: "Inverter based resources",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
    }, // Random size between 35 and 45
    {
      text: "Grid Analysis",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (35 - 20 + 1)) + 20,
    }, // Random size between 20 and 35
    {
      text: "RLC Circuit",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    }, // Random size between 15 and 30
    {
      text: "Power Electronics",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Stability",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
    }, // Random size between 25 and 45
    {
      text: "Network",
      link: "/educational-videos",
      size: Math.floor(Math.random() * (35 - 20 + 1)) + 20,
    }, // Random size between 20 and 35
  ];

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
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex items-center justify-center px-4 md:px-0">
          {/* Flex container for text and image */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Text Section */}
            <div className="text-left w-full md:w-1/2 pl-5">
              {" "}
              {/* Added pl-5 for left padding */}
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                About the Lab
              </h2>{" "}
              {/* Heading stays centered */}
              <p className="text-lg max-w-4xl mb-6">
                Power Systems Laboratory @ IIT Bombay The power systems lab in
                IITB Bombay is dedicated to the research in the power systems
                domain. The research area ranges from the power system dynamics,
                stability and its control to the research and development of the
                software and hardware simulation tools in the power system and
                power electronics domain. The researh and curriculum of the
                power system and power electronics are focused on the conceptual
                and a well rounded understanding for the undergraduate and post
                graduate students. A few scholars are assocaited with the
                national missons on the development of photovolatics Cutting
                edge technologies such as hybrid simulation digital and analog
                domains, Real time digital hybrid simulation, Electricity and
                Energy markets, stability and control of modern power system,
                High voltage DC systems are, development of ever changing load
                models and microprocess and memory management etc are explored.
                'Sequel' an inhouse digital simulation software is developed in
                the lab. The PSLAB youtube channel is a host to various videos
                for the skill development in power system. Various video
                lectures for the educational outreach of the students.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/about.jpg" // replace with your image URL
                alt="Power Systems Lab"
                className="w-[80%] h-auto rounded-lg shadow-lg ml-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: "20px" }}>
        <WordCloud words={words} /> {/* Use the WordCloud component */}
      </div>

      {/* News Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dynamic Voltage Restorer",
                description:
                  "A Dynamic Voltage Restorer (DVR) is designed to provide protection and maintain power quality by restoring voltage during power sags or outages.",
              },
              {
                title: "High Voltage Rail Cooperation",
                description:
                  "This project focuses on the integration of high voltage systems with rail transportation, aiming to improve efficiency and safety in electrical railways.",
              },
              {
                title: "Impact of Inverter Based Resources on Power Systems",
                description: (
                  <>
                    <div>Date: 4-5 November 2024</div>
                    <div>Prof. Anil Kulkarni</div>
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="text-sm">{item.description}</div>{" "}
                {/* Use div instead of p */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "High Voltage Rail Cooperation",
                description:
                  "This project focuses on the integration of high voltage systems with rail transportation, aiming to improve efficiency and safety in electrical railways.",
                startDate: "January 2023",
                imageSrc: "/images/rail.avif", // Replace with actual image paths
                imageAlt: "Grid Stability and Resilience",
              },
              {
                title: "Dynamic Voltage Restorer",
                description:
                  "A Dynamic Voltage Restorer (DVR) is designed to provide protection and maintain power quality by restoring voltage during power sags or outages.",
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
            {[
              "images/img.jpg",
              "images/generator.avif",
              "images/transformer.avif",
              "images/motor.avif",
            ].map((img, index) => (
              <img
                key={index}
                src={`/${img}`}
                alt={`Project ${index + 1}`}
                className="w-72 h-48 ml-8 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white">
        <div
          id="contact-us"
          className="container mx-auto text-center pb-10"
          style={{ backgroundImage: 'url("/images/world.avif")' }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-12"></p>
          <form className="max-w-xl mx-auto p-6 bg-white rounded-2xl border-2 border-black shadow-xl space-y-6 bg-cover bg-center">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-4 rounded-lg shadow-xl border border-gray-400 text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
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
