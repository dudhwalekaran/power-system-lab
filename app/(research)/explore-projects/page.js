import React from "react";

const projects = [
  {
    title: "Dynamic Voltage Restorer",
    description:
      "Voltage sags within power distribution systems are typically observed to occur due to a significant drop in the voltage level of only one phase. The faculties at Power electronics and Power system in IIT Bombay in collaboration with TATA Power developed a novel super-capacitor based transformerless Dynamic Voltage Restorer (DVR) with a Reconfigurable Thyristor Network (RTN), which can be used for compensating the phase with the largest voltage sag. Usage of the RTN in this approach overcomes the need for dedicated power conditioning units for each of the three phases, thereby eliminating redundant switching, magnetic and energy storage elements and other auxiliary components. This reduces system weight, size and cost. A laboratory prototype has been built and the response of the controller tested on a real-time digital simulator for proof-of-concept",
    image: "/images/transformer.avif",
    link: "/projects/dynamic-voltage-restorer", // Add the link for project details
  },
  {
    title: "Electric Traction Power Supply System (eTPSS)",
    description:
      "The planning and design of a traction power supply system requires extensive simulation studies to be carried out by the utilities and the railways. The recent developments in various metro projects and the introduction of High speed railway in India has created a necessity and an opportunity to develop an indigenous, flexible and an integrated simulation software. Indian Institute of Science (IISc Banga-lore), Indian Institute of Technology, Bombay (IITB)",
    image: "/images/rail.jpg",
    link: "/projects/etpss", // Add the link for project details
  },
  {
    title: "Miniature Model of Full Spectrum Simulator (FSS MINI)",
    description:
      "An indigenously developed system that provides both off-line and real-time simulation capabilities at an affordable cost, easily configurable for custom applications. A Miniature version is configured as an educational package and small system simulation.",
    image: "/images/fssmini.jpg",
    link: "/projects/fss-mini", // Add the link for project details
  },
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
              <p className="text-gray-500 mt-2 text-base">
                {project.description}
              </p>

              {/* View Details Button */}
              <div className="mt-6 text-center">
                <a
                  href={project.link} // Use the `link` property here
                  className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-medium transition-all duration-300 transform hover:bg-blue-700 hover:scale-105"
                >
                  View Project Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
