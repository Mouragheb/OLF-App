import react, {createContext, useContext, useReducer, ReactNode, useEffect} from 'react';
import { Book } from '../types/book'

type State = {
  books: Book[];
}

type Action = 
| { type: 'ADD_BOOK'; payload: Book }
| { type: 'EDIT_BOOK'; payload: Book }
| { type: 'DELETE_BOOK'; payload: string }
| { type: 'SET_BOOK'; payload: Book[] };

// Parse saved Stringied Books in localStorage
const localData = localStorage.getItem('books');
const initialState: State = {
  books: localData ? JSON.parse(localData) : [],
};

function bookReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_BOOK':
      return {books: [...state.books, action.payload]};
    case 'EDIT_BOOK':
      return {books: state.books.map((book)=>book.id === action.payload.id? action.payload : book)};
    case 'DELETE_BOOK':
      return {books: state.books.filter((book) => book.id !== action.payload)} ;
    case 'SET_BOOK': 
      return {books: action.payload};
    default:
      return state;
  }
}

type BookContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider = ({children}: {children:ReactNode}) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  {/** This useEffect is to store books in localStorage*/}
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state.books));
  }, [state.books]);


  return (
    <BookContext.Provider value = {{state, dispatch}}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = ()=> {
  const context = useContext(BookContext);
  if (!context){
    throw new Error('useBookContext must be used within a BookProvider');

  }
  return context;
}



