"use client"; // Ensure the component is rendered on the client side
import WordCloud from "@/app/components/WordCloud";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      link: "https://mkdocs-three.vercel.app/homepage/Topics/Synchronous%20Machines/",
      size: Math.floor(Math.random() * (35 - 20 + 1)) + 45,
    }, // Random size between 45 and 55
    {
      text: "Small Signal Stability",
      link: "https://mkdocs-three.vercel.app/",
      size: Math.floor(Math.random() * (40 - 30 + 1)) + 30,
    }, // Random size between 30 and 50
    {
      text: "Research",
      link: "/research",
      size: Math.floor(Math.random() * (40 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Projects",
      link: "/current-project",
      size: Math.floor(Math.random() * (38 - 30 + 1)) + 40,
    }, // Random size between 40 and 55
    {
      text: "Power system dynamics",
      link: "http://localhost:3000/youtube-videos",
      size: Math.floor(Math.random() * (32 - 25 + 1)) + 45,
    }, // Random size between 45 and 55
    {
      text: "Experiments",
      link: "http://localhost:3000/youtube-videos",
      size: Math.floor(Math.random() * (45 - 25 + 1)) + 20,
    }, // Random size between 20 and 40
    {
      text: "Simulation",
      link: "http://localhost:3001/youtube-videos",
      size: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
    }, // Random size between 25 and 40
    {
      text: "Software tutorials",
      link: "http://localhost:3000/youtube-videos",
      size: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
    }, // Random size between 30 and 45
    {
      text: "Microprocessor",
      link: "https://mkdocs-three.vercel.app/",
      size: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    }, // Random size between 15 and 30
    {
      text: "Experiments by students",
      link: "http://localhost:3000/youtube-videos",
      size: Math.floor(Math.random() * (40 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Transformer",
      link: "http://localhost:3001/youtube-videos",
      size: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    }, // Random size between 20 and 40
    {
      text: "Inverter based resources",
      link: "https://mkdocs-three.vercel.app/",
      size: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
    }, // Random size between 35 and 45
    {
      text: "Grid Analysis",
      link: "https://mkdocs-three.vercel.app/",
      size: Math.floor(Math.random() * (35 - 20 + 1)) + 20,
    }, // Random size between 20 and 35
    {
      text: "RLC Circuit",
      link: "/youtube-videos",
      size: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    }, // Random size between 15 and 30
    {
      text: "Power Electronics",
      link: "/youtube-videos",
      size: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
    }, // Random size between 35 and 50
    {
      text: "Stability",
      link: "/youtube-videos",
      size: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
    }, // Random size between 25 and 45
    {
      text: "Network",
      link: "/youtube-videos",
      size: Math.floor(Math.random() * (35 - 20 + 1)) + 20,
    }, // Random size between 20 and 35
  ];

  // List of image URLs
  const images = [
    "/images/pic2.png",
    "/images/pic3.png", // Add your third image
    "/images/transformer.avif", // Add your second image
  ];

  // Function to handle image change on click
  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section
        className="text-white flex items-center justify-center bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "55vh",
          width: "100%",
          transition: "background-image 0.5s ease-in-out", // Smooth transition for image change
        }}
        onClick={handleImageChange} // Trigger image change on click
      >
        <div className="container mx-auto text-center px-6 py-12 relative">
          <h1
            className="text-5xl font-extrabold mb-4 text-white relative z-10"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }} // Adding text shadow for better contrast
          >
            Welcome to the Power Systems Lab
          </h1>
          <p
            className="text-2xl font-semibold md:text-xl mb-8 leading-relaxed text-white relative z-10"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }} // Text shadow for better visibility
          >
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
                Power Systems Laboratory @ IIT Bombay is dedicated to the
                research, development and innovation in the power systems.
                Researchers are also associated with the National Missons on the
                Development of Photovolatics. Development of cutting edge
                technologies such as hybrid simulation in digital and analog
                domain, High Voltage DC Systems, Real time digital hybrid
                simulation, Electricity and Energy management, stability and
                control of modern power system, microprocess and memory
                management, etc are explored. 'Sequel' is a power electronics
                simulation software developed inhouse in IITB Power sysetms lab.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="null" // replace with your image URL
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

      {/* Contact Us Section */}
      <section className="py-16 bg-white">
        <div
          id="contact-us"
          className="container mx-auto text-center pb-10"
          style={{
            backgroundImage: 'url("/images/world.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form className="max-w-sm mx-auto p-4 bg-white rounded-2xl border border-black shadow-xl space-y-6 bg-cover bg-center">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-100 rounded-lg shadow-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg shadow-xl border border-gray-400 text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
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
