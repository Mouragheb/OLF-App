import React from 'react';
import AddBookForm from '../components/AddBookForm';
import BookList from '../components/BookList';



const BookManager = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('/library-bg8.JPG')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.95,
      }}
    >


      <div className="w-full max-w-5xl bg-library-paper dark:bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-200 dark:border-gray-700">
      <h1
          className="text-3xl sm:text-3xl font-bold tracking-wide text-library-brown drop-shadow-md text-center mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            WebkitTextStroke: '1px black', // black border around text
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // subtle shadow
          }}
        >
          📚 BOOK MANAGER
        </h1>

        <AddBookForm />

        <div className="max-h-[500px] overflow-y-auto pr-2 mt-8">
          <BookList />
        </div>
      </div>
    </div>
  );
}
export default BookManager;