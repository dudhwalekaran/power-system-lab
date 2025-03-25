"use client";

import { useState } from "react";
import Link from "next/link";

export default function CurrentResearch() {
  const [activeResearchArea, setActiveResearchArea] = useState(null);

  const researchAreas = [
    {
      title:
        "Analog Acceleration in Digital and Real-Time Simulation for Power Engineering Applications",
      description:
        "This project focuses on integrating high voltage systems with rail transportation to enhance efficiency and safety in electrical railways.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10312681",
      topics: [
        {
          title: "Advanced Grid Management",
          detailedDescription:
            "Modern techniques for managing electrical grids, including real-time monitoring, automation, and forecasting to improve reliability and efficiency in high voltage rail networks.",
        },
        {
          title: "Distributed Energy Resources (DER)",
          detailedDescription:
            "Managing small-scale energy sources like solar, wind, or storage systems to support rail infrastructure, enhancing flexibility and grid resilience.",
        },
        {
          title: "IoT and AI in Grid Control",
          detailedDescription:
            "Using IoT devices and AI for grid optimization, predictive maintenance, and real-time decision-making to enhance rail network stability.",
        },
        {
          title: "Grid Resilience and Cybersecurity",
          detailedDescription:
            "Improving grid resilience against attacks and cyber threats, ensuring operational continuity in rail systems during emergencies.",
        },
      ],
      detailedDescription:
        "This research explores cutting-edge methodologies for integrating high voltage power systems with railway infrastructure, leveraging smart grid technologies to improve safety and sustainability in rail transport.",
    },
    {
      title:
        "Frequency Scanning based Design of Supplementary Damping Controllers for Inverter-Based Resources",
      description:
        "Designing Dynamic Voltage Restorers (DVR) to protect and maintain power quality by restoring voltage during sags or outages.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10688593",
      topics: [
        {
          title: "Solar and Wind Energy Integration",
          detailedDescription:
            "Examining how solar and wind energy systems can be integrated into dynamic voltage restoration to maintain power quality during fluctuations.",
        },
        {
          title: "Hybrid Energy Systems",
          detailedDescription:
            "Using a mix of renewable and traditional energy sources to ensure reliable voltage restoration in systems with intermittent renewables.",
        },
        {
          title: "Energy Forecasting and Optimization",
          detailedDescription:
            "Techniques for forecasting energy demands and optimizing usage to enhance DVR performance in the grid.",
        },
        {
          title: "Grid Stability with Intermittent Sources",
          detailedDescription:
            "Maintaining grid stability with DVRs when integrating intermittent renewable sources like wind and solar.",
        },
      ],
      detailedDescription:
        "DVRs are vital for grid stability, especially in areas with fluctuating renewable energy sources. This research enhances DVR systems for better resilience.",
    },
    {
      title:
        "Low-Frequency and Small-Signal Aggregate Load Model Estimation using Ambient Measurements",
      description:
        "Investigating the ARMAX method to model low-frequency, small-signal, aggregate, and dynamic loads using ambient measurements.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10876325",
      topics: [
        {
          title: "Battery Energy Storage Technologies",
          detailedDescription:
            "Developing advanced battery technologies, like solid-state and lithium-ion, to improve energy storage efficiency and scalability.",
        },
        {
          title: "Pumped Hydro Storage",
          detailedDescription:
            "Using gravity to store energy by pumping water uphill during low demand and releasing it during peak periods for grid stability.",
        },
        {
          title: "Energy Storage and Management Systems",
          detailedDescription:
            "Advanced systems to control charging, discharging, and storage, ensuring efficiency and minimizing loss in grid-connected storage.",
        },
        {
          title: "Hybrid and Advanced Storage Solutions",
          detailedDescription:
            "Combining multiple storage technologies, like batteries and flywheels, for higher efficiency and flexibility.",
        },
      ],
      detailedDescription:
        "This research addresses the challenge of load modeling with the ARMAX method, analyzing its accuracy in a 16-machine system and identifying conditions for reliable load model estimation.",
    },
  ];

  const handleResearchAreaClick = (area) => {
    setActiveResearchArea((prevArea) => (prevArea === area ? null : area));
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-20"
        style={{
          backgroundImage: 'url("/images/current-research.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center px-6 z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
            Current Research at IITB Power Systems Lab
          </h1>
          <p className="text-lg md:text-lg max-w-3xl mx-auto opacity-90">
            Discover groundbreaking research in electrical engineering, smart grids, renewable energy, and power system stability at IITB.
          </p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
            Our Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3
                  className="text-xl font-semibold text-black cursor-pointer mb-3 hover:text-indigo-900 transition-colors"
                  onClick={() => handleResearchAreaClick(area)}
                >
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    activeResearchArea === area
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="space-y-3 text-sm text-gray-600">
                    {area.topics.map((topic, idx) => (
                      <li key={idx}>
                        <span className="font-medium text-gray-800">{topic.title}:</span>{" "}
                        {topic.detailedDescription}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="mt-4 text-black hover:text-indigo-800 font-medium text-sm transition-colors"
                  onClick={() => handleResearchAreaClick(area)}
                >
                  {activeResearchArea === area ? "Collapse" : "Expand Details"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Research Section */}
      {activeResearchArea && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {activeResearchArea.title}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {activeResearchArea.detailedDescription}
            </p>
            <Link
              href={activeResearchArea.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Read Full Research
            </Link>
          </div>
        </section>
      )}

      {/* Footer Spacer */}
      <div className="py-8 bg-gray-50"></div>
    </div>
  );
}