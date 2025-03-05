"use client"; // Ensure this runs on the client-side
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use this to get the current pathname
import Link from "next/link";

export default function Home() {
  const pathname = usePathname(); // Get the current path
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Logic to conditionally hide or show header, footer, and sidebar
  const shouldHideLayout = pathname === "/login" || pathname === "/signup"; // Example paths to hide layout

  // Close the sidebar on scroll
  useEffect(() => {
    const handleScroll = () => setSidebarOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render nothing if we want to hide the layout (header, sidebar, footer)
  if (shouldHideLayout) {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Welcome to the MIT Power Systems Lab Portal
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            This platform is dedicated to MIT professors, PhD students, and lab
            members for managing projects, tasks, equipment, and educational
            resources.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking outside
      >
        <div
          className={`w-52 bg-gray-900 text-white fixed top-0 left-0 h-full p-6 transition-transform duration-300 ${
            isSidebarOpen ? "transform-none" : "transform -translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent click from closing sidebar when clicking inside
        >
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-white text-3xl">
              <i className="fas fa-times"></i> {/* Close icon */}
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/meeting"
              onClick={toggleSidebar}
              className="text-white text-lg hover:text-indigo-400 transition-colors"
            >
              Jitsi Meeting
            </Link>
            <Link
              href="/upmath"
              onClick={toggleSidebar}
              className="text-white text-lg hover:text-indigo-400 transition-colors"
            >
              Upmath
            </Link>
            <Link
              href="/excalidraw"
              onClick={toggleSidebar}
              className="text-white text-lg hover:text-indigo-400 transition-colors"
            >
              Excalildraw
            </Link>
            <Link
              href="/login-request"
              onClick={toggleSidebar}
              className="text-white text-lg hover:text-indigo-400 transition-colors"
            >
              Login Requests
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <i className="fas fa-bars"></i> {/* Hamburger Icon */}
          </button>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/reserved-equip" className="hover:text-gray-300">
                Equipment
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-gray-300">
                Upload video
              </Link>
            </li>
            <li>
              <Link href="/lab-resources" className="hover:text-gray-300">
                Lab resources
              </Link>
            </li>
            <li>
              <Link href="/upload-documents" className="hover:text-gray-300">
                Documents
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Welcome to the IITB Power Systems Lab Portal
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            This platform is dedicated to IITB professors, PhD students, and lab
            members for managing projects, tasks, equipment, and educational
            resources.
          </p>

          {/* Quick Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Management Box */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Manage Projects</h3>
            </div>
            <p className="text-gray-700 mb-4">Create, manage, and track project progress with deadlines, goals, and assigned tasks.</p>
            <a href="/projects" className="text-blue-500 hover:text-blue-700">Go to Projects</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Assign Task</h3>
            </div>
            <p className="text-gray-700 mb-4">Assing task to the particular students</p>
            <a href="/tasks" className="text-blue-500 hover:text-blue-700">Go to Tasks</a>
          </div> */}

            {/* Equipment Management Box */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full">
                  <span className="text-xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Manage Equipment
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Reserve equipment for experiments and track lab resources
                effectively.
              </p>
              <a
                href="/equipments"
                className="text-blue-500 hover:text-blue-700"
              >
                Go to Equipment
              </a>
            </div>

            {/* Educational Resources Box */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Educational Resources
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Upload and manage educational materials like videos for
                students.
              </p>
              <a
                href="/resources"
                className="text-blue-500 hover:text-blue-700"
              >
                Go to Resources
              </a>
            </div>

            {/* File upload Resources Box */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Code File Upload
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Upload and manage your code files, scripts, and projects for
                easy sharing.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdD6yPiYajXQOJAqqQOsQAw1AfE6XlhLMB1afqo6NN3qFO_jQ/viewform?usp=dialog"
                target="__black"
                className="text-blue-500 hover:text-blue-700"
              >
                Go to Upload
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">
            <button className="rounded-lg p-3 mt-10 bg-red-600 text-white font-semibold px-10">
              Log out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
