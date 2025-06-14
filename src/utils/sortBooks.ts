import { Book } from "../types/book";

export type SortOption = 'added-asc' | 'added-desc' | 'title-asc' | 'title-desc' | 'author-asc' | 'author-desc' |'date-asc' | 'date-desc';

export const sortBooks = (books: Book[], sortOption: SortOption): Book[] => {
  const sorted = [...books];

  switch (sortOption) {
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'author-asc':
      return sorted.sort((a, b) => a.author.localeCompare(b.author));
    case 'author-desc':
      return sorted.sort((a, b) => b.author.localeCompare(a.author));
    case 'date-asc':
      return sorted.sort((a, b) => new Date(a.published || '1900-01-01').getTime() - new Date(b.published || '1900-01-01').getTime());
    case 'date-desc':
      return sorted.sort((a, b) => new Date(b.published || '1900-01-01').getTime() - new Date(a.published || '1900-01-01').getTime());
    case 'added-asc':
      return sorted; // original order assumed
    case 'added-desc':
      return sorted.reverse(); // if added in order, reversing shows newest first
    default:
      return sorted;
  }
};