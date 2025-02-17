'use client';

import Head from 'next/head';

export default function ToolsDashboard() {
  // Tool data
  const tools = [
    {
      name: 'Jitsi Meeting',
      description: 'Host and join secure video meetings.',
      link: '/tools/jitsi',
      icon: '📹',
    },
    {
      name: 'Etherpad',
      description: 'Collaborative real-time text editor.',
      link: '/tools/etherpad',
      icon: '📝',
    },
    {
      name: 'Rocket.Chat',
      description: 'Team communication and collaboration platform.',
      link: '/tools/rocket-chat',
      icon: '💬',
    },
    {
      name: 'Excalidraw',
      description: 'Virtual whiteboard for sketching and brainstorming.',
      link: '/tools/excalidraw',
      icon: '🎨',
    },
    {
      name: 'Nextcloud',
      description: 'Self-hosted cloud storage and file sharing.',
      link: '/tools/nextcloud',
      icon: '☁️',
    },
  ];

  return (
    <>
      <Head>
        <title>Tools Dashboard</title>
      </Head>

      {/* Navbar */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">MIT Collaboration Tools</h1>
          <nav>
            <ul className="flex space-x-6">
            <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/equipment" className="hover:underline">Equipment</a></li>
              <li><a href="/tasks" className="hover:underline">Tasks</a></li>
              <li><a href="/resources" className="hover:underline">Resources</a></li>
              <li><a href="/progress" className="hover:underline">Progress</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Tools Dashboard */}
      <main className="container mx-auto my-8 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              href={tool.link}
              key={index}
              className="block bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105"
            >
              <div className="text-4xl">{tool.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{tool.name}</h3>
              <p className="text-gray-600 mt-2">{tool.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
