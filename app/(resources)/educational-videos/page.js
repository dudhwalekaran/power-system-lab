"use client";

import { useState, useEffect } from "react";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All"); // Default to "All"
  const [loading, setLoading] = useState(false);

  // Fetch videos from the API endpoint
  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/videos"); // Adjust endpoint if needed
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      const data = await response.json();
      setVideos(data);
      setFilteredVideos(data); // Initially show all videos
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Filter videos based on the search term and selected subject
  const filterVideos = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return videos.filter((video) => {
      const matchesSearchTerm =
        (video.title && video.title.toLowerCase().includes(lowerSearchTerm)) ||
        (video.professorName &&
          video.professorName.toLowerCase().includes(lowerSearchTerm)) ||
        (video.description &&
          video.description.toLowerCase().includes(lowerSearchTerm)) ||
        (video.keywords &&
          video.keywords.toLowerCase().includes(lowerSearchTerm));

      const matchesSubject =
        selectedSubject === "All" ||
        (selectedSubject === "Playlists" && video.playlist) ||
        (selectedSubject === "Softwares" &&
          video.keywords &&
          video.keywords.toLowerCase().includes("softwares")) ||
        (selectedSubject === "Experiments" &&
          video.keywords &&
          video.keywords.toLowerCase().includes("experiments")) ||
        (selectedSubject === "Tutorials" &&
          video.keywords &&
          video.keywords.toLowerCase().includes("tutorials"));

      return matchesSearchTerm && matchesSubject;
    });
  };

  // Helper function to render video cards
  const renderVideos = (videoList) => {
    return videoList.map((video, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0"
      >
        {video.videoLink ? (
          <iframe
            src={video.videoLink}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" // Removed autoplay here
            allowFullScreen
            className="w-full h-48 rounded-lg shadow-md"
          ></iframe>
        ) : video.videoFile ? (
          <video
            src={video.videoFile}
            controls
            className="w-full h-48 rounded-lg shadow-md"
          ></video>
        ) : null}

        <p className="text-xl mt-4 font-medium text-gray-800">
          {video.title || "Untitled Video"}
        </p>
        <p className="text-md mt-2 text-gray-600">
          {video.professorName || "No Subtitle"}
        </p>
        <p className="text-sm mt-2 text-gray-500">
          {video.description || "No Description Available"}
        </p>
        <p className="text-sm mt-2 text-gray-500">
          {video.keywords || "No Keywords Available"}
        </p>
      </div>
    ));
  };

  // Subject Categories (you can customize this list as needed)
  const subjects = [
    "All",
    "Playlists",
    "Softwares",
    "Tutorials",
    "Experiments",
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Empowering Research with Educational Videos
          </h1>
          <p className="text-lg font-medium mb-6 max-w-2xl mx-auto">
            A curated collection of advanced lectures, tutorials, and research
            material to support your academic journey.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center my-8">
        <input
          type="text"
          id="search"
          placeholder="Search videos or playlists"
          className="border border-gray-300 rounded-lg px-6 py-3 w-full max-w-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
      </div>

      {/* Subject Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        {subjects.map((subject, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              selectedSubject === subject
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-400 transition`}
            onClick={() => {
              setSelectedSubject(subject);
              setSearchTerm(""); // Reset search term when subject is changed
            }}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* Filtered and Rendered Videos */}
      <div
        id="uploaded-videos-container"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4"
      >
        {renderVideos(filterVideos()).length > 0 ? (
          renderVideos(filterVideos())
        ) : (
          <p className="text-center col-span-full">No videos to display.</p>
        )}
      </div>
    </div>
  );
}
