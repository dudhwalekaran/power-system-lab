"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 5; // Show 5 videos at a time

  // Playlist name mapping for renaming tabs
  const playlistNameMapping = {
    "ARPIT Videos": "Custom Name Here",
  };

  // Function to get mapped playlist name
  const getMappedPlaylistName = (originalName) => {
    return playlistNameMapping[originalName] || originalName;
  };

  useEffect(() => {
    async function fetchVideos() {
      try {
        const sheetUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrUuqWO9ktMsdhoSHO2go9sMvcx8-fp11B9KdCAgDTyWCqHUv6kpVjhRzYne7vy1bzHTfvWuBluVP_/pub?output=csv";
        console.log("Fetching data from:", sheetUrl);

        const response = await fetch(sheetUrl);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const text = await response.text();
        console.log("Fetched CSV Data:", text);

        const rows = text.split("\n").slice(1); // Skip header row

        const parseCSV = (row) =>
          row
            .match(/(?:\"([^\"]+)\")|([^,]+)/g)
            ?.map((col) => col.replace(/\"/g, "").trim()) || [];

        const videoData = rows
          .map((row) => {
            const columns = parseCSV(row);
            if (columns.length < 3) return null;
            return {
              playlist: columns[0] || "Unknown Playlist",
              title: columns[1] || "No Title",
              link: columns[2] || "#",
            };
          })
          .filter(Boolean);

        if (videoData.length === 0)
          throw new Error("No valid videos found in the sheet");

        const uniquePlaylists = [
          ...new Set(videoData.map((video) => video.playlist)),
        ];

        setVideos(videoData);
        setPlaylists(uniquePlaylists);
        setSelectedPlaylist(uniquePlaylists[0] || "");
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(
    (video) => video.playlist === selectedPlaylist
  );
  const paginatedVideos = filteredVideos.slice(
    currentIndex,
    currentIndex + videosPerPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        Video lectures/ Tutorials
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading videos...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos found.</p>
      ) : (
        <>
          {/* Playlist Tabs with Horizontal Scrolling */}
          <div className="mb-6">
            <div
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              style={{
                maxWidth: "100%", // Ensure container doesn't exceed parent width
                scrollBehavior: "smooth",
              }}
            >
              {playlists.map((playlist) => (
                <button
                  key={playlist}
                  onClick={() => {
                    setSelectedPlaylist(playlist);
                    setCurrentIndex(0); // Reset pagination when changing playlist
                  }}
                  className={`flex-shrink-0 px-6 py-3 text-lg rounded-lg transition-all ease-in-out duration-300 font-medium ${
                    selectedPlaylist === playlist
                      ? "bg-teal-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-teal-500"
                  }`}
                  style={{
                    minWidth: "calc(20% - 1rem)", // Ensure 5 tabs fit within the container (20% each minus spacing)
                  }}
                >
                  {playlistNameMapping[playlist] || playlist}
                </button>
              ))}
            </div>
          </div>

          {/* Video List */}
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <ul className="space-y-4">
              {paginatedVideos.map((video, index) => (
                <li
                  key={index}
                  className="transition-all ease-in-out duration-300 transform"
                >
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:text-teal-600 hover:underline"
                  >
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.max(0, prev - videosPerPage))
              }
              disabled={currentIndex === 0}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all ease-in-out duration-300 ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-teal-600 text-white"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(filteredVideos.length - 1, prev + videosPerPage)
                )
              }
              disabled={currentIndex + videosPerPage >= filteredVideos.length}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all ease-in-out duration-300 ${
                currentIndex + videosPerPage >= filteredVideos.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-teal-600 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}