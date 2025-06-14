import { Book } from "../types/book";

export const fetchBookByOlid = async (olid:string): Promise<Book> => {
  const response = await fetch (`https://openlibrary.org/books/${olid}.json`);
  if (!response.ok) throw new Error('Book not found');

  const data = await response.json();

  return {
    id: olid,
    title: data.title || "Unknown Title",
    author: data.by_statement || "Unknown Author",
    published: data.publish_date || 'N/A',
    description:
      typeof data.description === 'string'
        ? data.description
        : data.description?.value || 'No description available',
    libraryUrl: `https://openlibrary.org/books/${olid}`,
    coverImage: `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`, // ⭐️ Added cover image
  };
};