import React from 'react';

const researchTopics = [
 
  {
    id: 1,
    title: 'Stability analysis and design of wide area damping controllers',
    description: 'Researcher: Kevin Gajjar, Guide: A M Kulkarni',
    link: 'https://shodhganga.inflibnet.ac.in/handle/10603/609476',
  },
  {
    id: 2,
    title: 'Emt companion circuit based approach for eigenanalysis of power systems with power electronic controllers',
    description: 'Researcher: Vinay T S Chindu, Guide: A M Kulkarni',
    link: 'https://shodhganga.inflibnet.ac.in/handle/10603/611032',
  },
  {
    id: 3,
    title: 'Passivity based decentralized small signal stability criteria for power systems',
    description: 'Researcher: Kaustav Dey, Guide: A M Kulkarni',
    link: 'https://shodhganga.inflibnet.ac.in/handle/10603/443781#',
  },
  // Add more topics as needed
];

const ResearchPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-16">Explore Research Thesis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
