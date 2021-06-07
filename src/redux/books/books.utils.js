export const editBook = (books, editedBook) => {
    const foundIndex = books.findIndex(book => book.id === editedBook.id);
    books.splice(foundIndex, 1, editedBook);
    return books;
};