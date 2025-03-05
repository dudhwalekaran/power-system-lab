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
        "This project focuses on the integration of high voltage systems with rail transportation, aiming to improve efficiency and safety in electrical railways.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10312681",
      topics: [
        {
          title: "Advanced grid management",
          detailedDescription:
            "This topic focuses on modern techniques used for managing electrical grids, including real-time monitoring, automation, and forecasting to improve reliability and efficiency in high voltage rail networks.",
        },
        {
          title: "Distributed energy resources (DER)",
          detailedDescription:
            "DER integration involves managing small-scale energy sources like solar, wind, or storage systems to support rail infrastructure, enabling flexibility and improving overall grid resilience.",
        },
        {
          title: "Integration of IoT and AI in grid control",
          detailedDescription:
            "This topic delves into how IoT devices and AI can be used for grid optimization, predictive maintenance, and real-time decision-making to enhance the stability and reliability of rail networks.",
        },
        {
          title: "Grid resilience and cybersecurity",
          detailedDescription:
            "Focuses on improving the resilience of power grids against potential attacks and cyber threats, ensuring the continuity of operations in rail systems even during emergencies or cyber incidents.",
        },
      ],
      detailedDescription:
        "This research involves cutting-edge methodologies for integrating high voltage power systems with railway infrastructure, making use of smart grid technologies and improving safety and sustainability in rail transport.",
    },
    {
      title:
        "Frequency Scanning based Design of Supplementary Damping Controllers for Inverter-Based Resources",
      description:
        "A Dynamic Voltage Restorer (DVR) is designed to provide protection and maintain power quality by restoring voltage during power sags or outages.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10688593",
      topics: [
        {
          title: "Solar and wind energy integration",
          detailedDescription:
            "This research examines how solar and wind energy systems can be integrated into dynamic voltage restoration to maintain power quality during fluctuations in renewable energy production.",
        },
        {
          title: "Hybrid energy systems",
          detailedDescription:
            "Focuses on using a mix of renewable and traditional energy sources to ensure reliable voltage restoration, especially in power systems heavily reliant on intermittent renewable sources.",
        },
        {
          title: "Energy forecasting and optimization",
          detailedDescription:
            "This topic explores techniques for forecasting energy demands and optimizing energy usage to enhance the performance of dynamic voltage restorers in the grid.",
        },
        {
          title: "Grid stability with intermittent renewable sources",
          detailedDescription:
            "Studies how dynamic voltage restorers help maintain grid stability when integrating intermittent renewable energy sources like wind and solar, reducing disruptions in power supply.",
        },
      ],
      detailedDescription:
        "DVRs are critical in maintaining grid stability, particularly in areas where renewable energy sources, such as wind and solar, are prone to fluctuation. This research focuses on improving DVR systems for better grid resilience.",
    },
    {
      title:
        "Low-Frequency and Small-Signal Aggregate Load Model Estimation using Ambient Measurements",
      description:
        "Load modeling is a challenging problem even today due to the diverse, time-varying and complex nature of loads. The paper investigates the use of the well-known ARMAX method for obtaining a low-frequency, small-signal, aggregate, and dynamic load model using ambient measurements.",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/10876325", // External link for th research
      topics: [
        {
          title: "Battery energy storage technologies",
          detailedDescription:
            "This topic focuses on the development of advanced battery technologies, including solid-state batteries and lithium-ion innovations, to improve the efficiency and scalability of energy storage systems.",
        },
        {
          title: "Pumped hydro storage",
          detailedDescription:
            "Pumped hydro storage technology uses gravity to store energy by pumping water uphill during low demand and releasing it to generate electricity during peak periods, helping maintain grid stability.",
        },
        {
          title: "Energy storage and management systems",
          detailedDescription:
            "Explores advanced management systems that control the charging, discharging, and storage of energy, ensuring maximum efficiency and minimizing loss in grid-connected storage systems.",
        },
        {
          title: "Hybrid and advanced storage solutions",
          detailedDescription:
            "Hybrid storage solutions combine multiple types of energy storage technologies, such as batteries and flywheels, to provide higher efficiency and more flexible energy supply options.",
        },
      ],
      detailedDescription:
        "Load modeling is a challenging problem even today due to the diverse, time-varying and complex nature of loads. The paper investigates the use of the well-known ARMAX method for obtaining a low-frequency, small-signal, aggregate, and dynamic load model using ambient measurements. A realistic model of a 16-machine system driven by random low-level load switching is used to analyze the accuracy of this method. The paper highlights the limitations of the method and the conditions under which it is suitable for identifying the load models. It is shown that the influence of the local load switching noise on the local bus voltage and frequency is a critical factor for accurate estimation. The method works well only if this feedback or the level of local load switching noise is low. An indicator to flag the estimates that are likely to be unreliable is proposed and validated.",
    },
  ];

  const handleResearchAreaClick = (area) => {
    // If the same area is clicked again, toggle the details off; otherwise, show the details.
    setActiveResearchArea((prevArea) => (prevArea === area ? null : area));
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="bg-gray-600 text-white py-12 bg-contain bg-center" // Reduced py-20 to py-12
        style={{
          backgroundImage: 'url("/images/current-research.jpg")',
          backgroundSize: "cover", // Changed from "contain" to "cover" for a more dynamic background
        }}
      >
        <div className="container mx-auto text-center px-6">
          <h1 className="text-2xl font-bold mb-4">
            {" "}
            {/* Reduced margin-bottom from mb-6 to mb-4 */}
            Current Research at IITB Power Systems Lab
          </h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            {" "}
            {/* Reduced margin-bottom from mb-8 to mb-6 */}
            Explore the cutting-edge research being conducted at IITB's Power
            Systems Lab in the fields of electrical engineering, smart grids,
            renewable energy, and power system stability.
          </p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">
            Our Current Research Areas
          </h2>

          {/* Research Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3
                  className="text-2xl font-semibold text-gray-800 cursor-pointer mb-4"
                  onClick={() => handleResearchAreaClick(area)}
                >
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>

                {/* Topics List */}
                <ul
                  className={`transition-all duration-500 ease-in-out space-y-2 text-sm ${
                    activeResearchArea === area
                      ? "max-h-72 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {area.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-600">
                      <strong>{topic.title}</strong>:{" "}
                      {topic.detailedDescription}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 text-gray-700 hover:text-gray-900 font-semibold"
                  onClick={() => handleResearchAreaClick(area)}
                >
                  {activeResearchArea === area ? "Show Less" : "Learn More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Research Section */}
      {activeResearchArea && (
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto text-center px-6">
            <h3 className="text-3xl font-semibold mb-6">
              {activeResearchArea.title} - Detailed Overview
            </h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              {activeResearchArea.detailedDescription}
            </p>
            <Link
              href={activeResearchArea.externalLink} // Link to external research page
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-gray-900 transition duration-300"
            >
              Explore Full Research
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
