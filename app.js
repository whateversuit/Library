// make array for storing all of book objects
// add a function that can take user input and store new book objects into array
// Write function that dispalys each book on page
// make "cards" 
// "NEW BOOK" button 
// add a button on each books display to remove from library
// associate DOM elements to the acual book objects. Maybe give attriute that corresponds to array index
// add a button on each books display to change its read status - function that toggles a funktion on books read status on Book prototype
// add local storage functionality. 
// make user put info into a HTML form

// array storing books
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}    


// function that takes user input and store new book objects into the array
function addBookToLibrary() {
    const book1 = new Book('Eye of The World', 'Robert Jordan', '400', 'Read');
    const book2 = new Book('Lord of The Rings', 'J.R.R Tolkien', '350', 'Read')
    
    myLibrary.push(book1);
    myLibrary.push(book2);

    console.log([myLibrary])
    
}
addBookToLibrary();
