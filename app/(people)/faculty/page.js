'use client';

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Prof. Mahesh B Patil",
      title: "Professor in Electrical Engineering",
      researchInterests: [
        "Circuit simulation",
        "Simulation Tools",
        "Semiconductor device modelling and simulation",
        "Real-time simulation of power electronic circuits and systems"
      ],
      email: "mbpatil@ee.iitb.ac.in",
      phone: "+91-22-2576-7446",
      website: "https://www.ee.iitb.ac.in/wiki/faculty/mbpatil",
      image: "/faculty/mahesh.png"
    },
    {
      name: "Prof. Mukul Chandorkar",
      title: "Professor in Electrical Engineering",
      researchInterests: [
        "Not available",
      ],
      email: "mukul@ee.iitb.ac.in",
      phone: "+91-22-2576-7475",
      website: "https://www.ee.iitb.ac.in/~mukul/",
      image: "/faculty/mukul.png"
    },
    {
      name: "Prof. Anil Kulkarni",
      title: "Professor in Electrical Engineering",
      researchInterests: [
        "Power System Dynamics and Control",
        "Application of Power Electronics to Power Systems",
        "Flexible AC Transmission Systems",
        "HVDC Transmission Systems",
      ],
      email: "anil@ee.iitb.ac.in",
      phone: "+91-22-2576-7416",
      website: "https://www.ee.iitb.ac.in/wiki/faculty/anil",
      image: "/faculty/anil.png"
    },
    {
      name: "Prof. Himanshu Bahirat",
      title: "Associate Professor in Electrical Engineering",
      researchInterests: [
        "Renewable Energy Sources",
        "Grid Integration of Renewable Energy",
        "Circuit Breaker",
        "DC Power Systems"
      ],
      email: "hjbahirat@ee.iitb.ac.in",
      phone: "+91-22-2576-9415",
      website: "https://www.ee.iitb.ac.in/wiki/faculty/hjbahirat",
      image: "/faculty/himanshu.png"
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-12">Lab Professors</h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Meet the Lab Professors of the IITB Power Systems Lab. Our professors are experts in their respective fields, driving innovation and cutting-edge research in power systems and electrical engineering.
        </p>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left transform transition duration-500 hover:scale-105 hover:shadow-xl max-w-lg">
              <div className="flex items-center mb-4">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 mr-4 rounded-full transition duration-300 transform hover:scale-110"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{faculty.name}</h3>
                  <p className="text-gray-600 mb-2">{faculty.title}</p>
                </div>
              </div>
              
              {/* Research Interests as Bullet List */}
              <div className="mb-4">
                <p className="font-bold text-gray-700 mb-2">Research Interests</p>
                <ul className="list-disc pl-5 text-gray-500 mb-4">
                  {faculty.researchInterests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 mb-4">
                Email: <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:text-blue-800">{faculty.email}</a>
              </p>
              <p className="text-gray-500 mb-4">
                Phone: <a href={`tel:${faculty.phone}`} className="text-blue-600 hover:text-blue-800">{faculty.phone}</a>
              </p>
              <a
                href={faculty.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
