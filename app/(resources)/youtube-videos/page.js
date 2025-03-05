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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        YouTube Playlist Videos
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading videos...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos found.</p>
      ) : (
        <>
          {/* Playlist Tabs */}
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {playlists.map((playlist) => (
              <button
                key={playlist}
                onClick={() => {
                  setSelectedPlaylist(playlist);
                  setCurrentIndex(0); // Reset pagination when changing playlist
                }}
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedPlaylist === playlist
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {playlistNameMapping[playlist] || playlist}{" "}
                {/* Show mapped name if exists */}
              </button>
            ))}
          </div>

          {/* Video List */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <ul className="space-y-3">
              {paginatedVideos.map((video, index) => (
                <li key={index} className="border-b pb-2">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.max(0, prev - videosPerPage))
              }
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-md font-medium ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500"
                  : "bg-blue-500 text-white"
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
              className={`px-4 py-2 rounded-md font-medium ${
                currentIndex + videosPerPage >= filteredVideos.length
                  ? "bg-gray-300 text-gray-500"
                  : "bg-blue-500 text-white"
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
