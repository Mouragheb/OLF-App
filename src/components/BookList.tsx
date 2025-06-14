import React, { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import { sortBooks, SortOption } from "../utils/sortBooks";

const BookList = () => {
  const { state, dispatch } = useBookContext();
  const [sortOption, setSortOption] = useState<SortOption>('added-asc');

  {/** search bar part */ }
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = state.books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.description.toLowerCase().includes(term) ||
      book.published.toLowerCase().includes(term)
    );
  });

  const sortedBooks = sortBooks(filteredBooks, sortOption);

  return (
    <div>
      {/** search bar input */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 text-sm rounded-lg px-3 py-2 mb-4 w-full"
      />
      {/**Sorting Section*/}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        <h2 className="text-lg font-semibold">Your Books</h2>
        <div className="flex flex-col items-start">
          <label
            htmlFor="sortOrder"
            className="text-sm font-medium text-gray-700 mb-1 dark:text-white"
          >
            Sort order
          </label>
          <select
            id="sortOrder"
            className="border border-gray-300 text-sm rounded-lg px-3 py-2 dark:text-gray-900"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="added-asc">First Added </option>
            <option value="added-desc">Last Added </option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A) </option>
            <option value="author-asc">Author (A-Z)</option>
            <option value="author-desc">Author (Z-A) </option>
            <option value="date-asc">Published (Oldest)</option>
            <option value="date-desc">Published (Newest)</option>
          </select>
        </div>
      </div>

      {/** This Line is to show which ordrer of Sorting the user has chose to use*/}
      <p className="text-sm text-center text-gray-500 mt-2 italic mb-8 dark:text-white">
        Showing books sorted by: {sortOption.replace('-', ' ').toUpperCase()}
      </p>

      {/** Scrollable card section */}
      {sortedBooks.map((book) => (
        <div
        key={book.id}
        className="py-3 border-b border-gray-300 transition duration-300 ease-in-out transform hover:scale-[1.01] hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-md rounded-lg px-4"
      >
          <div className="flex gap-4">
            {/* Cover Image */}
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              className="w-20 h-28 object-cover rounded shadow"
            />

            <div className="flex flex-col justify-between flex-1">
              {/* Title and Author */}
              <div>
                <div className="text-sm font-semibold text-gray-800 dark:text-white">
                  {book.title}{' '}
                  <span className="text-gray-500 font-normal">({book.published})</span>
                </div>
                <div className="italic text-gray-600 text-sm">({book.author})</div>
              </div>

              {/* Description */}
              <p className="text-sm italic text-gray-600 mt-1">{book.description}</p>

              {/* Actions */}
              <div className="mt-2 flex gap-4 flex-wrap text-sm">
                <a
                  href={book.libraryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔎 Check Book
                </a>
                <Link to={`/edit/${book.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <button
                  onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;