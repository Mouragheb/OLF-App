import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import { Book } from "../types/book";



const EditBookPage =() =>{
  const {id} = useParams< {id: string}>();
  const navigate = useNavigate();
  const {state, dispatch} = useBookContext();
  const bookToEdit = state.books.find((b) => b.id === id);

  const [form, setform] = useState<Book | null>(null);

  useEffect(()=>{
    if (bookToEdit) setform(bookToEdit)
  },[bookToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(!form) return;
    setform({ ...form, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    if (form) {
      dispatch({type: 'EDIT_BOOK', payload: form});
      navigate('/');
    }
  };

  if (!form) return <p className="p-4 text-center text-gray-500 dark:text-red-400">Book not found</p>;

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
    <div className="w-full max-w-screen-md min-h-fit bg-library-paper dark:bg-gray-800 text-gray-800 dark:text-red-300 p-6 rounded-lg shadow-lg">
      
    <h1
          className="text-3xl sm:text-3xl font-bold tracking-wide text-library-brown drop-shadow-md text-center mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            WebkitTextStroke: '1px black', // black border around text
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // subtle shadow
          }}
        > ✏️ EDIT BOOK</h1>
      
      <img
        src={form.coverImage}
        alt={`${form.title} cover`}
        className="w-20 h-28 object-cover rounded shadow mx-auto mb-6"
      />

      {/* ID (readonly) */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label className="text-sm font-medium mb-1 sm:mb-0 sm:mr-4 w-24">ID:</label>
        <p className="text-sm break-words">{form.id}</p>
      </div>

      {/* Title */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label className="text-sm font-medium mb-1 sm:mb-0 sm:mr-4 w-24">Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      {/* Author */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label className="text-sm font-medium mb-1 sm:mb-0 sm:mr-4 w-24">Author:</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      {/* Published */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label className="text-sm font-medium mb-1 sm:mb-0 sm:mr-4 w-24">Published:</label>
        <input
          type="text"
          name="published"
          value={form.published}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-evenly gap-4 mt-6">
        <button
          onClick={handleSave}
          className="w-full sm:w-auto border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Save
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full sm:w-auto border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
);
};

export default EditBookPage;