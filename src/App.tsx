import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import BookManager from './pages/BookManager';
import EditBookPage from './pages/EditBookPage';
import Header from './components/Header'; // ⬅️ Import it here




function App() {
  return (

    <BookProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<BookManager />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;