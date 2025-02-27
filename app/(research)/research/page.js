import React from 'react';

const researchTopics = [
  {
    id: 1,
    title: 'Passivity based decentralized small signal stability criteria for power systems',
    description: 'A detailed exploration of quantum computing advancements.',
    link: 'https://shodhganga.inflibnet.ac.in/handle/10603/443781#',
  },
  {
    id: 2,
    title: 'Stability analysis and design of wide area damping controllers',
    description: 'Research on the latest trends in AI and machine learning.',
    link: 'https://shodhganga.inflibnet.ac.in/handle/10603/609476',
  },
  {
    id: 3,
    title: 'Robotics and Automation',
    description: 'Innovations in robotics and automation technologies.',
    link: 'https://example.com/robotics-automation',
  },
  // Add more topics as needed
];

const ResearchPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Research Topics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchTopics.map((research) => (
          <div key={research.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{research.title}</h2>
            <p className="text-gray-700 mb-4">{research.description}</p>
            <a
              href={research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
