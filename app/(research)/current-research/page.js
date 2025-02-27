'use client';

import { useState } from "react";
import Link from "next/link";

export default function CurrentResearch() {
  const [activeResearchArea, setActiveResearchArea] = useState(null);

  const researchAreas = [
    {
      title: "High Voltage Rail Cooperation",
      description:
        "This project focuses on the integration of high voltage systems with rail transportation, aiming to improve efficiency and safety in electrical railways.",
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
      title: "Dynamic Voltage Restorer",
      description:
        "A Dynamic Voltage Restorer (DVR) is designed to provide protection and maintain power quality by restoring voltage during power sags or outages.",
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
      title: "Energy Storage Systems",
      description:
        "Energy storage systems play a crucial role in enabling the use of renewable energy by storing excess energy during low-demand periods for use during peak demand, ensuring grid stability and efficiency.",
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
        "Energy storage solutions, such as advanced batteries and pumped hydro systems, are key to stabilizing power grids as they integrate renewable energy. This research focuses on improving storage efficiency and management systems.",
    },
    {
      title: "Power System Stability",
      description:
        "Ensuring the stability of power systems is critical as the integration of intermittent renewable energy sources increases. Research focuses on methods to maintain voltage and frequency stability.",
      topics: [
        {
          title: "Voltage stability and control",
          detailedDescription:
            "Research in this area focuses on methods to maintain stable voltage levels in grids, especially with the increased penetration of renewable energy, to avoid power quality issues and failures.",
        },
        {
          title: "Frequency regulation in power systems",
          detailedDescription:
            "Focuses on techniques and strategies for controlling the frequency of electrical systems, ensuring the stable operation of grid-connected power sources and devices.",
        },
        {
          title: "Dynamic simulation models",
          detailedDescription:
            "Dynamic simulation models are used to predict the behavior of power systems under various conditions, including renewable energy fluctuations, allowing better planning and control strategies.",
        },
        {
          title: "Control strategies for large-scale grids",
          detailedDescription:
            "Developing control strategies to manage large-scale power grids, including integrating renewable sources, ensuring the stability of voltage, frequency, and overall grid performance.",
        },
      ],
      detailedDescription:
        "This research delves into maintaining the stability of power systems through advanced control strategies and dynamic modeling techniques, focusing on grids with a high penetration of renewable energy.",
    },
    {
      title: "Electric Vehicles (EVs) and Grid Integration",
      description:
        "With the rise of electric vehicles (EVs), research is focused on vehicle-to-grid (V2G) technologies, optimizing EV charging infrastructure, and assessing their impact on the power grid's stability and efficiency.",
      topics: [
        {
          title: "EV charging infrastructure",
          detailedDescription:
            "Explores the design and optimization of EV charging infrastructure to ensure reliable and efficient charging, and to minimize the impact on the grid during high demand periods.",
        },
        {
          title: "V2G (Vehicle-to-Grid) technology",
          detailedDescription:
            "V2G technology enables electric vehicles to return energy to the grid, supporting grid stability and allowing for more efficient energy use, especially during peak demand or emergencies.",
        },
        {
          title: "Impact of EVs on grid stability",
          detailedDescription:
            "This research focuses on the impact of widespread EV adoption on grid stability, including the load placed on the grid and strategies for mitigating potential disruptions.",
        },
        {
          title: "EV battery management and optimization",
          detailedDescription:
            "The topic focuses on the management of EV batteries to ensure longevity and efficient energy use, optimizing the charging and discharging cycles to support grid stability.",
        },
      ],
      detailedDescription:
        "As EV adoption grows, this research focuses on the impact of EVs on grid stability and the development of Vehicle-to-Grid (V2G) systems that allow vehicles to return power to the grid when needed.",
    },
    {
      title: "Advanced Power Electronics",
      description:
        "The field of power electronics focuses on designing efficient converters, inverters, and controllers to enhance the performance of power systems, facilitating the integration of renewable energy sources and electric vehicles.",
      topics: [
        {
          title: "Power conversion technologies",
          detailedDescription:
            "Research on power conversion technologies focuses on improving the efficiency of converters and inverters used in renewable energy systems, enhancing the overall energy efficiency of the power grid.",
        },
        {
          title: "High-efficiency inverters",
          detailedDescription:
            "This research focuses on designing inverters that are more efficient, reducing energy loss during power conversion, and enhancing the integration of renewable energy sources into the grid.",
        },
        {
          title: "Electric motor drives",
          detailedDescription:
            "Electric motor drives are essential for EVs and renewable energy systems. This research focuses on improving motor drive efficiency and performance in both grid-connected and off-grid systems.",
        },
        {
          title: "Power electronics for grid management",
          detailedDescription:
            "This topic explores how power electronics can be used for advanced grid management, ensuring better integration of renewables, enhanced control, and improved power quality in the grid.",
        },
      ],
      detailedDescription:
        "Power electronics are essential in facilitating the transition to renewable energy. This research focuses on the development of more efficient converters and inverters to improve grid management and integrate renewable technologies.",
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
        className="bg-gray-900 text-white py-32 bg-contain bg-center"
        style={{
          backgroundImage: 'url("/images/current-research.jpg")',
          backgroundSize: "contain", // Changed from "contain" to "cover"
        }}
      >
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-6">
            Current Research at IITB Power Systems Lab
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
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
                      <strong>{topic.title}</strong>: {topic.detailedDescription}
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
