import { v4 as uuidv4 } from 'uuid';

const BOOKS_DATA = [
    {
        id: uuidv4(),
        title: 'Dracula',
        author: 'Bram Stoker',
        price: 25,
        category: 'horror'
    },
    {
        id: uuidv4(),
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        price: 28,
        category: 'history'
    },
    {
        id: uuidv4(),
        title: 'Frida: A Biography of Frida Kahlo',
        author: 'Hayden Herrera',
        price: 20,
        category: 'biography'
    },
    {
        id: uuidv4(),
        title: 'The War of the Worlds',
        author: 'Herbert George Wells',
        price: 25,
        category: 'sci-fi'
    },
    {
        id: uuidv4(),
        title: 'Robinson Crusoe',
        author: 'Daniel Defoe',
        price: 23,
        category: 'adventure'
    },
    {
        id: uuidv4(),
        title: 'Nineteen Eighty-Four',
        author: 'George Orwell',
        price: 28,
        category: 'sci-fi'
    },
    {
        id: uuidv4(),
        title: 'The Three Musketeers',
        author: 'Alexandre Dumas',
        price: 24,
        category: 'adventure'
    },
    {
        id: uuidv4(),
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        price: 26,
        category: 'kids'
    },
    {
        id: uuidv4(),
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        price: 27,
        category: 'history'
    },
    {
        id: uuidv4(),
        title: 'Frankenstein',
        author: 'Mary Shelley',
        price: 24,
        category: 'horror'
    }
];


export default BOOKS_DATA;