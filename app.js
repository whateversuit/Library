// TODO:
// 1. add a button on each books display to change its read status - function that toggles a funktion on books read status on Book prototype
// 2. Fix styling on modal container
// 3. Add a button on modal container to hide (instead of only submit)
// 4. fix books stacking when displayed from array

const btn_newBook = document.getElementById('btn_newBook')
const modal_container = document.getElementById('modal_container')
const submit = document.getElementById('submit')

btn_newBook.addEventListener('click', () => {
    modal_container.classList.add('show');  // show modal when clicking on new book.
})

submit.addEventListener('click', (e) => {
    
    e.preventDefault();     // prevent submit form from submitting
    addBookToLibrary();     // add Book function, adding to object into the array
    modal_container.classList.remove('show'); // removes modal from showing
    
})
// get object from localstorage, parse back to array and then run add to page function
let myLibrary = (JSON.parse(localStorage.getItem('myLibrary')));
addBookToPage();

// Book object constructor
function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    

}    



// function that takes user input and store new book objects and pushes into the array
function addBookToLibrary() {
    if (myLibrary == null) {
        myLibrary = [];
    }
    const book = new Book(document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('hasRead').checked)
    myLibrary.push(book); // Push book to array
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // storing locally in browser, converting to JSON format
    addBookToPage(); // calling add book to Page function
}
// This functions loops through the local storage array myLibrary and displays it in cards
function addBookToPage(){
    
    if (localStorage.getItem('myLibrary') != null){
        myLibrary.forEach(Book => { // Loops through each Book object inside myLibrary
        
            divBorder = document.createElement('div'); // create a div
            card = document.createElement('div');
            divDelete = document.createElement('div');
            btnDelete = document.createElement('button');
            header = document.createElement('h3');
            newAuthor = document.createElement('p');
            totalPages = document.createElement('p');
            newHasRead = document.createElement('p');
            newImage = document.createElement('img');
            
            
            divBorder.classList = "bookborder"; // add class to div
            card.classList = "card";
            card.id = "card";
            divDelete.classList = "btn-divdelete";
            btnDelete.classList = "btn-delete";
            header.classList = "title";
            newAuthor.classList = "author";
            totalPages.classList = "pages";
            newHasRead.classList = "hasRead";
            newImage.classList = "img-card";

            container.appendChild(divBorder); // append div to already existing container div in HTML document.
            divBorder.appendChild(card);
            card.appendChild(divDelete);
            divDelete.appendChild(btnDelete);
            card.appendChild(header);
            card.appendChild(newAuthor);
            card.appendChild(totalPages);
            card.appendChild(newHasRead);
            card.appendChild(newImage);

            
            btnDelete.innerText = "x"; // Display innerText on cards
            header.innerText = `${Book.title}`;
            newAuthor.innerText = `Author: ${Book.author}`;
            totalPages.innerText = `Pages: ${Book.pages}`;
            newHasRead.innerText = `Finished: ${Book.hasRead}`;
            newImage.src = "https://www.nicepng.com/png/full/69-693155_books-open-book-clip-art-clipartix-open-book.png"
            
            
            card.addEventListener('click', (e) => {
                deleteBookCard(e.target);
                deleteBookStorage(`${Book.title}`);
                })
                
             
        })
    }
        
}
  // deleting a book from DOM
function deleteBookCard(book) {
    if(book.classList.contains('btn-delete')){
        book.parentElement.parentElement.parentElement.remove(); 
    } 
}
// delete book from localstorage array
function deleteBookStorage(book){
    myLibrary.forEach((Book, index) => {
    if(`${Book.title}` === book) {
        myLibrary.splice(index, 1);
    }
    })
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))   
}

