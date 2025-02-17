"use client";

import React, { useState } from "react";

export default function VideoUploadPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    professorName: "",
    videoLink: "",
    videoFile: null,
    keywords: "",
    playlist: "", // Add this field to categorize videos into playlists
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // If a video link is entered, clear any selected file, and vice versa.
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "videoLink" && value ? { videoFile: null } : {}),
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        videoFile: file,
        videoLink: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("professorName", formData.professorName);
    formDataToSend.append("keywords", formData.keywords);
    formDataToSend.append("playlist", formData.playlist);

    if (formData.videoLink) {
      formDataToSend.append("videoLink", formData.videoLink);
    } else if (formData.videoFile) {
      formDataToSend.append("videoFile", formData.videoFile);
    }

    try {
      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Video uploaded successfully!");
        setFormData({
          title: "",
          description: "",
          professorName: "",
          videoLink: "",
          videoFile: null,
          keywords: "",
          playlist: "",
        });
        setShowModal(false);
      } else {
        alert("Failed to upload video.");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <div className="container mx-auto px-6 py-10">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Upload Your Lecture Videos
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Professors can upload videos to share knowledge with students.
            Ensure your video is properly titled and categorized.
          </p>
        </header>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-gray-800">
              Why Upload Videos?
            </h2>
            <p className="mt-4 text-gray-600">
              Uploading videos allows students to access content anytime and
              anywhere. It enhances learning and creates a rich resource
              library.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-gray-800">
              Accepted Formats
            </h2>
            <p className="mt-4 text-gray-600">
              You can upload MP4, AVI, and MKV files directly or provide a
              YouTube link. Ensure your files are under 500 MB for smooth
              playback.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-gray-800">
              Tips for Uploading
            </h2>
            <p className="mt-4 text-gray-600">
              Use clear titles and descriptions for your videos. If uploading
              files, ensure they are well-compressed for faster upload times.
            </p>
          </div>
        </div>

        {/* Upload Button */}
        <div className="flex justify-center mb-8">
          <button
            id="openFormButton"
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-xl transform hover:scale-105 transition-all duration-300"
          >
            Upload Video
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            id="videoModal"
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
            onClick={(e) => {
              // Close the modal if clicked outside the modal content
              if (e.target.id === "videoModal") {
                setShowModal(false);
              }
            }}
          >
            <div className="bg-white p-10 rounded-lg max-w-4xl w-full relative space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Close Button */}
              <button
                id="closeModalButton"
                className="absolute top-4 right-4 text-gray-700 text-3xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>

              {/* Video Upload Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                encType="multipart/form-data"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="text-lg font-medium text-gray-700">
                      Video Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full p-4 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium text-gray-700">
                      Enter your Name
                    </label>
                    <input
                      type="text"
                      name="professorName"
                      value={formData.professorName}
                      onChange={handleInputChange}
                      className="w-full p-4 border rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Video Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-4 border rounded-md"
                    rows="2"
                  ></textarea>
                </div>

                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Video URL iFrame (YouTube)
                  </label>
                  <input
                    type="url"
                    name="videoLink"
                    value={formData.videoLink}
                    onChange={handleInputChange}
                    className="w-full p-4 border rounded-md"
                    placeholder="Enter YouTube URL"
                    disabled={formData.videoFile !== null}
                    required={!formData.videoFile}
                  />
                </div>

                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Or Upload a Video
                  </label>
                  <input
                    type="file"
                    name="videoFile"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="w-full p-4 border rounded-md"
                    disabled={formData.videoLink !== ""}
                    required={!formData.videoLink}
                  />
                </div>

                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Keyword
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    className="w-full p-4 border rounded-md"
                    required
                  />
                </div>

                {/* New Playlist Selection Field */}
                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Playlist Name
                  </label>
                  <input
                    type="text"
                    name="playlist"
                    value={formData.playlist}
                    onChange={(e) =>
                      setFormData({ ...formData, playlist: e.target.value })
                    }
                    className="w-full p-4 border rounded-md"
                    placeholder="Enter playlist name (e.g., Java Tutorials)"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transform hover:scale-105 hover:bg-green-700 transition-all duration-300"
                  >
                    Add Video
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
