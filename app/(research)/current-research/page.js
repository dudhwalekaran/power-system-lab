"use client";

import { useState } from "react";
import Link from "next/link";

export default function CurrentResearch() {
  const [activeResearchArea, setActiveResearchArea] = useState(null);

  const researchAreas = [
    {
      title: "Smart Grid Technologies",
      description:
        "Research on smart grids aims to modernize electricity networks with advanced communication, control systems, and automation, improving the efficiency, reliability, and sustainability of power grids.",
      topics: [
        "Advanced grid management",
        "Distributed energy resources (DER)",
        "Integration of IoT and AI in grid control",
        "Grid resilience and cybersecurity",
      ],
    },
    {
      title: "Renewable Energy Integration",
      description:
        "The integration of renewable energy sources such as solar, wind, and hydropower into the existing power grid is vital to reducing carbon emissions and improving grid sustainability without sacrificing stability.",
      topics: [
        "Solar and wind energy integration",
        "Hybrid energy systems",
        "Energy forecasting and optimization",
        "Grid stability with intermittent renewable sources",
      ],
    },
    {
      title: "Energy Storage Systems",
      description:
        "Energy storage systems play a crucial role in enabling the use of renewable energy by storing excess energy during low-demand periods for use during peak demand, ensuring grid stability and efficiency.",
      topics: [
        "Battery energy storage technologies",
        "Pumped hydro storage",
        "Energy storage and management systems",
        "Hybrid and advanced storage solutions",
      ],
    },
    {
      title: "Power System Stability",
      description:
        "Ensuring the stability of power systems is critical as the integration of intermittent renewable energy sources increases. Research focuses on methods to maintain voltage and frequency stability.",
      topics: [
        "Voltage stability and control",
        "Frequency regulation in power systems",
        "Dynamic simulation models",
        "Control strategies for large-scale grids",
      ],
    },
    {
      title: "Electric Vehicles (EVs) and Grid Integration",
      description:
        "With the rise of electric vehicles (EVs), research is focused on vehicle-to-grid (V2G) technologies, optimizing EV charging infrastructure, and assessing their impact on the power grid's stability and efficiency.",
      topics: [
        "EV charging infrastructure",
        "V2G (Vehicle-to-Grid) technology",
        "Impact of EVs on grid stability",
        "EV battery management and optimization",
      ],
    },
    {
      title: "Advanced Power Electronics",
      description:
        "The field of power electronics focuses on designing efficient converters, inverters, and controllers to enhance the performance of power systems, facilitating the integration of renewable energy sources and electric vehicles.",
      topics: [
        "Power conversion technologies",
        "High-efficiency inverters",
        "Electric motor drives",
        "Power electronics for grid management",
      ],
    },
  ];

  const handleResearchAreaClick = (area) => {
    setActiveResearchArea(area === activeResearchArea ? null : area);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-32 bg-contain bg-center"
        style={{
          backgroundImage: 'url("/current-research.jpg")',
          backgroundSize: "contain", // Changed from "contain" to "cover"
        }}
      >
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-6">
            Current Research at IIT Power Systems Lab
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Explore the cutting-edge research being conducted at IIT's Power
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
                      {topic}
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
              Dive deeper into the research happening in the{" "}
              {activeResearchArea.title}. Our research aims to solve some of the
              most pressing challenges in power systems, energy sustainability,
              and grid management.
            </p>
            <ul className="space-y-4 text-left max-w-3xl mx-auto">
              {activeResearchArea.topics.map((topic, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <strong>{topic}</strong>: Detailed exploration into the latest
                  advancements, methodologies, and practical applications.
                </li>
              ))}
            </ul>
            <Link
              href={`/research/${activeResearchArea.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
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
