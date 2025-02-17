'use client';

import React from "react";
import { useState } from "react";

export default function Page() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    subject: "",
    edition: "",
    copies: 0,
  });

  // Handle input change for the modal form
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // Add a new book
  const handleAddBook = () => {
    fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((addedBook) => {
        setBooks([...books, addedBook]);
        setFilteredBooks([...books, addedBook]);
        setIsModalOpen(false);
        setNewBook({
          title: "",
          author: "",
          subject: "",
          edition: "",
          copies: 0,
        });
      });
  };

  return (
    <>
      <header>
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">IIT Power Systems Lab</div>
            <ul className="flex space-x-6">
              <li>
                <a href="/home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/reserved-equip" className="hover:text-gray-300">
                  Equipment
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-gray-300">
                  Upload video
                </a>
              </li>
              <li>
                <a href="/lab-resources" className="hover:text-gray-300">
                  Lab resources
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mt-32 px-6 py-8 max-w-screen-xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome to the Lab Resource Portal
          </h2>
          <p className="text-lg text-gray-600">
            Explore our library, tools, and QR codes to access everything you
            need with ease.
          </p>
        </section>

        {/* Resource Links Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PDF Library Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.ee.iitb.ac.in/course/~emlab/assets/lab_Library.pdf"
              target="_blank"
              className="flex items-center p-6 space-x-4 hover:bg-blue-50 transition-all duration-300"
            >
              <img
                src="https://power-system-lab.vercel.app/public/pdf.png"
                alt="PDF Icon"
                className="h-16 w-16 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Library PDF
                </h3>
                <p className="text-gray-500">
                  Access the entire library of books in PDF format.
                </p>
              </div>
            </a>
          </div>

          {/* Excel Books Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://docs.google.com/spreadsheets/d/1JE8dekFtl8nRf9ugVjGcmOwo72homOud6lJizzsX0ZQ/edit?usp=sharing"
              target="_blank"
              className="flex items-center p-6 space-x-4 hover:bg-blue-50 transition-all duration-300"
            >
              <img
                src="https://power-system-lab.vercel.app/public/excel.png"
                alt="Excel Icon"
                className="h-16 w-16 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Excel Book Sheet
                </h3>
                <p className="text-gray-500">
                  Access a complete list of books in our library with detailed
                  information.
                </p>
              </div>
            </a>
          </div>

          {/* Excel Machines Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://docs.google.com/spreadsheets/d/1gr_0wAU0B0AuCWHfeRY5eE5LcFH3lv6LUXFE3sRdZPE/edit?usp=sharing"
              target="_blank"
              className="flex items-center p-6 space-x-4 hover:bg-blue-50 transition-all duration-300"
            >
              <img
                src="https://power-system-lab.vercel.app/public/excel.png"
                alt="Excel Icon"
                className="h-16 w-16 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Excel Machine Sheet
                </h3>
                <p className="text-gray-500">
                  View records of machines available in the lab.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-gray-900">
            Scan the QR Codes
          </h3>
          <p className="text-lg text-gray-600">
            Use the QR codes below to quickly access books or machines.
          </p>
          <div className="flex justify-center space-x-24">
            {/* QR Book Card */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-6">
              <img
                src="https://power-system-lab.vercel.app/qrcode.png"
                alt="QR Code for Book"
                className="w-40 h-40 mb-4 transition-all duration-300 transform hover:scale-110"
              />
              <p className="text-lg font-semibold text-gray-700">Get Book</p>
            </div>
            {/* QR Machine Card */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-6">
              <img
                src="https://power-system-lab.vercel.app/machineformqr.png"
                alt="QR Code for Machine"
                className="w-40 h-40 mb-4 transition-all duration-300 transform hover:scale-110"
              />
              <p className="text-lg font-semibold text-gray-700">Get Machine</p>
            </div>
          </div>
        </section>

        {/* Add Book Button */}
        <div className="mb-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Add Book
          </button>
        </div>

        {/* Modal for Adding a New Book */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newBook.title}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={newBook.author}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={newBook.subject}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="edition"
                placeholder="Edition"
                value={newBook.edition}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />
              <input
                type="text"
                name="copies"
                placeholder="Copies"
                value={newBook.copies}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleAddBook}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
