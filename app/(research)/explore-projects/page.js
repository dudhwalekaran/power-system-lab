import React from "react";

const projects = [
  {
    title: "Dynamic Voltage Restorer",
    description:
      "This project focuses on improving the efficiency and stability of power grids using machine learning algorithms for load forecasting and dynamic grid reconfiguration.",
    image: "/images/grid.avif",
    details: [
      "Developed load forecasting models using machine learning.",
      "Designed dynamic grid reconfiguration techniques.",
      "Conducted simulations to test algorithm effectiveness.",
    ],
  },
  {
    title: "High Speed rail coperation",
    description:
      "Design and implementation of a solar-powered microgrid system to supply electricity to remote areas using renewable energy sources.",
    image: "/images/energy.avif",
    details: [
      "Designed solar panels layout and battery storage systems.",
      "Implemented energy management system for optimal operation.",
      "Conducted load analysis for off-grid communities.",
    ],
  },
  {
    title: "Smart Metering for Power Systems",
    description:
      "This project involves the development of an IoT-based smart metering system to monitor and manage electricity consumption in real-time.",
    image: "/images/smart-metering.jpg",
    details: [
      "Developed IoT-based energy monitoring devices.",
      "Implemented cloud-based data analytics for real-time insights.",
      "Integrated with existing power grid infrastructure.",
    ],
  },
  // Add more projects with images
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
        Past Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-100"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-gray-500 mt-2 text-base">{project.description}</p>

              {/* Key Highlights */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-700">Key Highlights:</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>

              {/* View Details Button */}
              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-medium transition-all duration-300 transform hover:bg-blue-700 hover:scale-105">
                  View Project Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
