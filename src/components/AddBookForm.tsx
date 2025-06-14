import React,{ useState } from "react";
import { useBookContext } from "../context/BookContext";
import { fetchBookByOlid } from "../utils/fetchBookByOlid";

const AddBookForm = () => {
  const { state, dispatch } = useBookContext();
  const [olid, setOlid] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddBook = async () => {
    if (!olid.trim()) return;

    // Check for duplicate OLID
  const isDuplicate = state.books.some((book) => book.id === olid.trim());
  if (isDuplicate) {
    setError('This book has already been added.');
    return;
  }

    setLoading(true);
    setError('');

    try{
      const newBook = await fetchBookByOlid(olid);
      dispatch({ type: 'ADD_BOOK', payload: newBook });
      setOlid('');
    } catch (err) {
      setError('Something wentwrong. Try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="m-4 ">
      <h2 className="test-base sm:text-lg md:text-xl font-semibold mb-2 ml-1 sm:ml-2 text-gray-600 dark:text-white">
        Add Book by Open Library ID Number
      </h2>
      <div className="flex items-center gap-4">
        <input 
         type="text"
         value={olid}
         
         onChange={(e)=>setOlid(e.target.value)}
         placeholder = "OLID"
         className ="flex-grow text-center border border-gray-300 p-2 rounded-lg text-sm"
         />
        <button 
          onClick={handleAddBook}
          disabled ={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
        >
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
export default AddBookForm;