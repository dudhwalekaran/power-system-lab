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
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-6">
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search for books by title, author, or subject..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full sm:w-1/2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Book Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Author</th>
                <th className="px-6 py-4 text-left">Subject</th>
                <th className="px-6 py-4 text-left">Edition</th>
                <th className="px-6 py-4 text-left">Copies</th>
                <th className="px-6 py-4 text-left">Cover</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-600">
                    No books found
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4">{book.title}</td>
                    <td className="px-6 py-4">{book.author}</td>
                    <td className="px-6 py-4">{book.subject}</td>
                    <td className="px-6 py-4">{book.edition}</td>
                    <td className="px-6 py-4">{book.copies}</td>
                    <td className="px-6 py-4">
                      <img
                        src={book.cover}
                        alt="Book Cover"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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
                type="number"
                name="copies"
                placeholder="Copies"
                value={newBook.copies}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />
              <input
                type="text"
                name="cover"
                placeholder="Cover Image URL"
                value={newBook.cover}
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
      </div>
    </div>
  );
}
