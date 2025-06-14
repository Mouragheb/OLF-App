# 📚 OLF-App — Open Library Fetching App

A React + TypeScript web application that allows users to fetch and manage book data using the [Open Library API](https://openlibrary.org/dev/docs/api/books). Users can add books by OLID (Open Library ID), view details like cover image, author, and description, sort and search the list, and edit or delete entries.

![App Screenshot](screenshot.png)

---

## ✨ Features

- 🔎 **Fetch books** by OLID using Open Library API  
- 📘 **Display** book cover, title, author, publish date, and description  
- 📝 **Edit / Delete** added books  
- 📚 **Sort** by title, author, date, or order added  
- 🔍 **Search** books by title, author, or description  
- 🗃️ **Local storage** persistence on page refresh  
- 🚫 **Prevents duplicates** by OLID  
- 🌐 Fully responsive & styled with **Tailwind CSS**

---

## 🧰 Tech Stack

- ⚛️ React
- 💬 TypeScript
- 🎨 Tailwind CSS
- 🌍 Open Library API
- 🗂 Local Storage
- 🛠 Vite (or Create React App, depending on your setup)

---

## 📦 How it works:

```bash
cd OLF-App
npm install
npm start