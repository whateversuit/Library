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
const btn_newBook = document.getElementById('btn_newBook')
const modal_container = document.getElementById('modal_container')
const submit = document.getElementById('submit')


btn_newBook.addEventListener('click', () => {
    modal_container.classList.add('show');
    
})

submit.addEventListener('click', (e) => {
    e.preventDefault();     // prevent submit form from submitting
    addBookToLibrary();     // add Book function, adding to object into the array
    modal_container.classList.remove('show'); // removes modal from showing
})

// array storing books
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}    


// function that takes user input and store new book objects and pushes into the array
function addBookToLibrary() {
    const book = new Book(document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('hasReadYes').value,
    document.getElementById('hasReadNo').value);

    myLibrary.push(book);  
}

