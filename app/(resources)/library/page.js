"use client";

import { useState, useEffect } from "react";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    subject: "",
    edition: "",
    copies: 0,
    cover: "", // added cover image URL field
  });

  // Fetch books from the API
  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  }, []);

  // Filter books based on search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter books when search query changes
    const results = books.filter((book) => {
      const title = book.title ? book.title.toLowerCase() : "";
      const author = book.author ? book.author.toLowerCase() : "";
      const subject = book.subject ? book.subject.toLowerCase() : "";

      return (
        title.includes(query) ||
        author.includes(query) ||
        subject.includes(query)
      );
    });

    // Update the filtered books state
    setFilteredBooks(results);
  };

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
          cover: "",
        });
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            IITB Power Systems Lab Library
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore a comprehensive collection of books on electrical
            engineering, power systems, smart grids, and renewable energy
            research.
          </p>
        </section>

        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search by title, author, or subject..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black placeholder-gray-500"
          />
        </div>

        {/* Book Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-black font-semibold">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-black font-semibold">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-black font-semibold">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-black font-semibold">
                  Edition
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-black">
                    No books found
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-black">{book.title}</td>
                    <td className="px-6 py-4 text-black">{book.author}</td>
                    <td className="px-6 py-4 text-black">{book.subject}</td>
                    <td className="px-6 py-4 text-black">{book.edition}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Modal for Adding a New Book */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold text-black mb-4">Add a New Book</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newBook.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={newBook.author}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={newBook.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="edition"
                  placeholder="Edition"
                  value={newBook.edition}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="number"
                  name="copies"
                  placeholder="Copies"
                  value={newBook.copies}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="cover"
                  placeholder="Cover Image URL"
                  value={newBook.cover}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}