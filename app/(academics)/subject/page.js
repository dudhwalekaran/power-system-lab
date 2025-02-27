"use client";

import { useState } from "react";
import Link from "next/link";

export default function Academics() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjectDetails = {
    "Power Systems Analysis": {
      description:
        "Power Systems Analysis is focused on the study of electrical power generation, transmission, and distribution systems, emphasizing system stability, load flow analysis, and fault diagnosis.",
      topics: [
        "Basic principles of power systems",
        "Load flow analysis techniques",
        "Fault analysis and protection schemes",
        "Power system stability and dynamics",
      ],
      moreDetails: {
        overview:
          "Power Systems Analysis is a core field in electrical engineering, focusing on the methods used to assess the operational performance of electrical grids. The subject covers fundamental concepts that are crucial for the design, analysis, and operation of power systems.",
        applications:
          "This course helps students develop the necessary skills to analyze power systems under various conditions, ensuring efficient and stable electricity distribution across regions.",
      },
    },
    CAPSA: {
      description:
        "CAPSA (Computer Applications in Power System Analysis) explores the use of computational tools in the analysis and simulation of power systems, including the application of numerical methods and optimization techniques.",
      topics: [
        "Numerical methods for power system analysis",
        "Optimization techniques in power systems",
        "Simulation of power system behavior",
        "Real-time system monitoring and control",
      ],
      moreDetails: {
        overview:
          "CAPSA explores the integration of computer-based tools with power systems to simulate, analyze, and optimize system performance. It includes computational techniques that allow for more efficient decision-making and system management.",
        applications:
          "Students will gain hands-on experience using computational methods and software tools for real-world power system analysis, making them industry-ready.",
      },
    },
    "Power system operation and control": {
      description:
        "This subject deals with the real-time operation of power systems, focusing on control methods, energy management, and system security to maintain stable and reliable power distribution.",
      topics: [
        "Real-time control of power systems",
        "Energy management systems",
        "System security and reliability",
        "Economic dispatch and unit commitment",
      ],
      moreDetails: {
        overview:
          "In Power System Operation and Control, students will understand the real-time challenges of maintaining a reliable and secure power system. Topics include control techniques, optimization, and grid security.",
        applications:
          "This course prepares students to tackle challenges like energy crisis management, grid reliability, and system optimization under changing demand.",
      },
    },
    "Dynamics and Transients": {
      description:
        "This subject covers the dynamic behavior of power systems during disturbances, including transient stability analysis, power oscillations, and the effects of different faults on system stability.",
      topics: [
        "Transient stability analysis",
        "Power oscillations and damping",
        "System responses to faults",
        "Dynamic simulation and modeling",
      ],
      moreDetails: {
        overview:
          "Dynamics and Transients explores the behavior of power systems during fault conditions, focusing on how disturbances affect the system's performance. This subject is critical for ensuring power systems can recover quickly from disruptions.",
        applications:
          "Students will learn how to analyze and model power system responses to transients and faults, an essential skill in grid operation and protection.",
      },
    },
    Protection: {
      description:
        "Protection systems are critical for the safe operation of power grids. This subject focuses on protective relaying, fault detection, and the design of protection schemes to prevent system failures.",
      topics: [
        "Protective relaying principles",
        "Fault detection and isolation",
        "Relay coordination and protection schemes",
        "Power system protection techniques",
      ],
      moreDetails: {
        overview:
          "Protection is crucial in power systems to prevent damage during faults. This subject focuses on designing, coordinating, and implementing protection systems that ensure reliability and safety in the grid.",
        applications:
          "This course teaches students the design and operational implementation of protection schemes that are widely used in industry, protecting critical infrastructure from failures.",
      },
    },
    "Power System Economics": {
      description:
        "Power System Economics examines the economic aspects of power generation and distribution, including pricing models, cost optimization, and market structures for efficient power system operations.",
      topics: [
        "Economic dispatch and cost optimization",
        "Pricing models and market structures",
        "Energy trading and deregulated markets",
        "Power system economics and policy",
      ],
      moreDetails: {
        overview:
          "Power System Economics focuses on the financial aspects of running a power system. Students will explore economic models, energy markets, and strategies for optimizing energy generation and distribution.",
        applications:
          "Students will gain insights into market-driven energy systems and how to optimize power generation for cost-effective and sustainable operations.",
      },
    },
    HVDC: {
      description:
        "HVDC (High Voltage Direct Current) systems are used for efficient long-distance power transmission. This subject covers the principles and technologies of HVDC systems and their applications.",
      topics: [
        "Principles of HVDC transmission",
        "Converters and inverters in HVDC systems",
        "HVDC control systems",
        "Applications of HVDC in power systems",
      ],
      moreDetails: {
        overview:
          "HVDC technology allows for the efficient transmission of power over long distances with minimal losses. The subject explores HVDC system components and their role in modern power grids.",
        applications:
          "This course prepares students to understand and design HVDC systems for both interconnection of power grids and the integration of renewable energy sources.",
      },
    },
    Mathematics: {
      description:
        "This subject focuses on mathematical tools and techniques applied to electrical engineering, including linear algebra, differential equations, and optimization techniques.",
      topics: [
        "Linear algebra and matrices",
        "Differential equations",
        "Fourier and Laplace transforms",
        "Optimization and numerical methods",
      ],
      moreDetails: {
        overview:
          "Mathematics is the foundation for understanding complex systems in electrical engineering. This subject equips students with the tools needed for analyzing and solving power system problems.",
        applications:
          "Students will gain the mathematical skills to model and analyze power systems, from optimization to dynamic analysis of system behavior.",
      },
    },
    "Electrical Grid/Measurement/Design/Control (Miscellaneous)": {
      description:
        "This subject covers the integration and control of electrical grids, measurement techniques, and the design of electrical systems for various applications.",
      topics: [
        "Grid integration techniques",
        "Measurement systems in electrical engineering",
        "Control methods in electrical grid design",
        "Electrical system design and optimization",
      ],
      moreDetails: {
        overview:
          "Students will explore the design and control aspects of electrical grids, focusing on the practical challenges in grid integration, measurement, and control systems.",
        applications:
          "This course provides practical knowledge and skills to design, control, and optimize electrical systems for both large-scale and distributed generation.",
      },
    },
    Controls: {
      description:
        "Control theory focuses on the analysis and design of control systems, with applications in power systems, robotics, and automation.",
      topics: [
        "Control system fundamentals",
        "PID controllers",
        "State-space analysis",
        "Stability and performance of control systems",
      ],
      moreDetails: {
        overview:
          "Control theory is fundamental to understanding the behavior and stability of dynamic systems. Students will learn how to design control systems to regulate electrical systems effectively.",
        applications:
          "Students will apply control theory to power systems, robotics, and automation, learning to ensure the desired performance of various dynamic systems.",
      },
    },
    "Digital Communication": {
      description:
        "Digital Communication focuses on the principles and technologies used in transmitting data over various communication channels, with applications in power system monitoring and control.",
      topics: [
        "Digital modulation and coding",
        "Error detection and correction",
        "Communication protocols in power systems",
        "Data transmission techniques",
      ],
      moreDetails: {
        overview:
          "Digital Communication is vital for modern power systems, enabling efficient data exchange between devices. This subject covers the essential communication technologies used in electrical engineering applications.",
        applications:
          "Students will explore how digital communication technologies are applied in monitoring, control, and data analysis in power systems.",
      },
    },
    "Signal and Systems": {
      description:
        "Signal and Systems deals with the study of signals and their analysis, including both continuous and discrete signals, and the system behaviors that process these signals.",
      topics: [
        "Signal representation and classification",
        "Fourier series and transforms",
        "Linear time-invariant systems",
        "Sampling and reconstruction",
      ],
      moreDetails: {
        overview:
          "This subject introduces students to the fundamental concepts of signals and systems, with a focus on their analysis and processing techniques.",
        applications:
          "Students will learn to apply signal processing techniques in power systems, telecommunications, and control systems.",
      },
    },
    Microprocessors: {
      description:
        "Microprocessors are central to modern computing systems. This subject covers the architecture, programming, and application of microprocessors in various engineering domains.",
      topics: [
        "Microprocessor architecture and design",
        "Assembly language programming",
        "I/O interfacing and peripherals",
        "Embedded systems applications",
      ],
      moreDetails: {
        overview:
          "Microprocessors form the backbone of modern electronic systems. This subject provides students with knowledge of microprocessor architecture and programming skills.",
        applications:
          "Students will learn to design and implement embedded systems, applying microprocessor technologies in fields such as control, automation, and power systems.",
      },
    },
    Machine: {
      description:
        "Machine learning techniques are used to analyze and predict the behavior of complex systems. This subject covers both supervised and unsupervised learning techniques and their applications in electrical engineering.",
      topics: [
        "Supervised learning algorithms",
        "Unsupervised learning and clustering",
        "Neural networks and deep learning",
        "Machine learning in power systems",
      ],
      moreDetails: {
        overview:
          "Machine learning has revolutionized many engineering fields, including electrical power systems. Students will learn to apply machine learning techniques to analyze and optimize system performance.",
        applications:
          "This course will teach students to apply machine learning models in tasks such as system prediction, fault detection, and optimization in power systems.",
      },
    },
    "Power Electronics": {
      description:
        "Power Electronics is concerned with the conversion and control of electrical power using semiconductor devices. This subject covers the analysis, design, and applications of power converters.",
      topics: [
        "Power semiconductor devices",
        "DC-DC converters and AC-DC rectifiers",
        "Inverters and motor drives",
        "Power electronics applications in power systems",
      ],
      moreDetails: {
        overview:
          "Power Electronics enables efficient power conversion and control. This subject explores the fundamentals of power electronic devices and their applications in modern electrical systems.",
        applications:
          "Students will gain knowledge on the design of power electronic systems for energy conversion and efficient management of electrical power.",
      },
    },
    "Computer Programming": {
      description:
        "Computer Programming covers the fundamental concepts of programming, including algorithms, data structures, and software development techniques used in electrical engineering applications.",
      topics: [
        "Introduction to programming languages",
        "Algorithms and data structures",
        "Software development life cycle",
        "Applications of programming in electrical systems",
      ],
      moreDetails: {
        overview:
          "Computer programming is a vital skill for electrical engineers. This subject teaches programming fundamentals and their application in solving real-world electrical engineering problems.",
        applications:
          "Students will learn to develop software for automation, system control, and data analysis in power systems and other electrical engineering applications.",
      },
    },
  };

  const handleSubjectClick = (subject) => {
    // Toggles the subject's detailed view, while collapsing others
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-24 bg-contain bg-center"
        style={{
          backgroundImage: 'url("/images/sinwave.avif")',
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Academics at IITB (PEPS)
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Dive deep into the world of electrical engineering and power systems
            through our cutting-edge academic programs and research.
          </p>
        </div>
      </section>

      {/* Academics Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Academic Programs</h2>
          <p className="text-lg max-w-4xl mx-auto mb-6">
            The IITB Power Systems Lab offers a diverse range of academic
            programs that cover the latest advancements in power systems
            analysis, Dynamics and Transients, power system economics, and more.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Academic Subjects</h2>

          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(subjectDetails).map((subject, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 cursor-pointer"
                  onClick={() => handleSubjectClick(subject)}
                >
                  {subject}
                </h3>
                <div
                  className={`space-y-2 text-sm transition-all duration-500 ease-in-out ${
                    selectedSubject === subject
                      ? "max-h-72 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600">{subjectDetails[subject].description}</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    {subjectDetails[subject].topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Details Section (Dynamic) */}
      {selectedSubject && (
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Detailed Information on {selectedSubject}
            </h3>
            <p className="text-lg max-w-4xl mx-auto mb-6">
              {subjectDetails[selectedSubject].moreDetails.overview}
            </p>
            <p className="text-lg max-w-4xl mx-auto mb-6">
              {subjectDetails[selectedSubject].moreDetails.applications}
            </p>
            <Link
              href="/academics/courses"
              className="bg-indigo-600 px-6 py-3 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Explore Full Course Catalog
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
