'use client';

import { useState } from 'react';
import Head from 'next/head'; // Importing Head for page metadata

export default function Library() {
  // State to manage the list of books
  const [books, setBooks] = useState([
    { name: '', author: '', edition: '', copies: '' },
  ]);

  // Handle change in input fields
  const handleChange = (e, index, field) => {
    const updatedBooks = [...books];
    updatedBooks[index][field] = e.target.value;
    setBooks(updatedBooks);
  };

  // Handle adding a new row for a book
  const addBookRow = () => {
    setBooks([...books, { name: '', author: '', edition: '', copies: '' }]);
  };

  // Handle removing a book row
  const removeBookRow = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <>
      {/* Adding Head for metadata */}
      <Head>
        <title>Library Books</title>
      </Head>

      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Library Books</h1>
        </div>
      </header>

      {/* Table Section */}
      <div className="container mx-auto my-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Library Books List</h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700 font-medium border border-gray-200">
                    Book Name
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-medium border border-gray-200">
                    Author Name
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-medium border border-gray-200">
                    Edition
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-medium border border-gray-200">
                    Copies
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-medium border border-gray-200">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-3 border border-gray-200">
                      <input
                        type="text"
                        value={book.name}
                        onChange={(e) => handleChange(e, index, 'name')}
                        placeholder="Book Name"
                        className="w-full p-2 border rounded-md"
                      />
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      <input
                        type="text"
                        value={book.author}
                        onChange={(e) => handleChange(e, index, 'author')}
                        placeholder="Author Name"
                        className="w-full p-2 border rounded-md"
                      />
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      <input
                        type="text"
                        value={book.edition}
                        onChange={(e) => handleChange(e, index, 'edition')}
                        placeholder="Edition"
                        className="w-full p-2 border rounded-md"
                      />
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      <input
                        type="number"
                        value={book.copies}
                        onChange={(e) => handleChange(e, index, 'copies')}
                        placeholder="Copies"
                        className="w-full p-2 border rounded-md"
                      />
                    </td>
                    <td className="px-6 py-3 border border-gray-200 text-center">
                      <button
                        onClick={() => removeBookRow(index)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Row Button */}
          <div className="mt-6 text-center">
            <button
              onClick={addBookRow}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Add New Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
