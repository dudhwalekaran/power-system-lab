"use client";

import { useEffect, useState } from "react";
import { BsFileText, BsFilePdf, BsFile } from "react-icons/bs";  // Importing updated icons for file types

const DocumentList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1Yf_CkW8vOZl4mjCSgSNntSKNNcKPZvJoIkmYLgY2Mko/gviz/tq?tqx=out:csv"
      );
      const csvText = await res.text();

      // Parse CSV data
      const rows = csvText.split("\n").map((row) => row.split(","));

      // Assuming the first column is title and the second is link
      const fileLinks = rows.slice(1).map((row) => ({
        name: row[2]?.trim(), // Title (trim any unwanted spaces)
        link: row[1]?.replace(/['"]+/g, "").trim(), // Clean up any quotes around the URL
      }));

      // Filter out any row that doesn't have a title or link (to remove any rows like timestamp)
      const filteredFiles = fileLinks.filter((file) => file.name && file.link);

      setFiles(filteredFiles);
    };

    fetchFiles();
  }, []);

  // Function to convert old format to new format for Drive link
  const convertToNewFormat = (oldLink) => {
    if (oldLink.includes("drive.google.com/open?id=")) {
      const fileId = oldLink.split("id=")[1];
      return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    }
    return oldLink; // If it's already in the new format, return it as is
  };

  // Function to generate a preview link for the document
  const generatePreview = (fileLink) => {
    const newLink = convertToNewFormat(fileLink);  // Convert to new format if needed
    const fileIdMatch = newLink.match(/file\/d\/([^/]+)\//);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return null;
  };

  // Function to detect file type and return an icon
  const getFileIcon = (fileLink) => {
    if (fileLink.includes('.pdf')) {
      return <BsFilePdf className="text-red-500 text-3xl" />;  // Updated to BsFilePdf for PDF files
    } else if (fileLink.includes('.docx') || fileLink.includes('.doc')) {
      return <BsFileText className="text-blue-500 text-3xl" />;  // Updated to BsFileText for text files
    } else {
      return <BsFile className="text-gray-500 text-3xl" />;  // Updated to BsFile for general files
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Research Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {files.length > 0 ? (
          files.map((file, index) => {
            const previewLink = generatePreview(file.link);
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 p-6"
              >
                <div className="flex justify-center mb-4">
                  {getFileIcon(file.link)}  {/* Display the appropriate icon */}
                </div>
                <h2 className="text-xl font-semibold text-center mb-4">{file.name}</h2>

                {previewLink ? (
                  <div className="mb-4">
                    <iframe
                      src={previewLink}
                      width="100%"
                      height="200"
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay; encrypted-media"
                      title="Document Preview"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">No preview available</p>
                )}

                <div className="flex justify-center mt-4">
                  <a
                    href={convertToNewFormat(file.link)}  // Convert link to new format
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition duration-200"
                  >
                    View Document
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full">No documents available.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentList;
