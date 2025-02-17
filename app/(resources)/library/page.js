'use client';

import { useState, useEffect } from 'react';

export default function Library() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    subject: '',
    edition: '',
    copies: 0,
  });

  // Fetch books from the API
  useEffect(() => {
    fetch('/api/books')
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
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.subject.toLowerCase().includes(query)
    );
    setFilteredBooks(results);
  };

  // Handle input change for the modal form
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // Add a new book
  const handleAddBook = () => {
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((addedBook) => {
        setBooks([...books, addedBook]);
        setFilteredBooks([...books, addedBook]);
        setIsModalOpen(false);
        setNewBook({ title: '', author: '', subject: '', edition: '', copies: 0, });
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

        {/* Book List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.length === 0 ? (
            <p className="col-span-full text-center text-gray-600">No books found</p>
          ) : (
            filteredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-gray-600">Subject: {book.subject}</p>
                <p className="text-gray-600">Edition: {book.edition}</p>
                <p className="text-gray-600">Copies: {book.copies}</p>
              </div>
            ))
          )}
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
      </div>
    </div>
  );
}
