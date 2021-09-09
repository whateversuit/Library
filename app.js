// Write function that dispalys each book on page
// add a button on each books display to remove from library
// associate DOM elements to the acual book objects. Maybe give attriute that corresponds to array index
// add a button on each books display to change its read status - function that toggles a funktion on books read status on Book prototype
 

const btn_newBook = document.getElementById('btn_newBook')
const modal_container = document.getElementById('modal_container')
const submit = document.getElementById('submit')
//const card = document.getElementById('card')


btn_newBook.addEventListener('click', () => {
    modal_container.classList.add('show');  // show modal when clicking on new book.
})

submit.addEventListener('click', (e) => {
    
    e.preventDefault();     // prevent submit form from submitting
    addBookToLibrary();     // add Book function, adding to object into the array
    modal_container.classList.remove('show'); // removes modal from showing
    
})
let myLibrary = (JSON.parse(localStorage.getItem('myLibrary')))


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
    document.getElementById('hasReadYes').value,
    document.getElementById('hasReadNo').value);
    
    myLibrary.push(book); // Push book to array
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // storing locally in browser, converting to JSON format
    
}

function addBookToPage(){
    if (localStorage.getItem('myLibrary') != null){
        myLibrary.forEach(Book => {
            console.table(Book)
            divBorder = document.createElement('div');
            divBorder.classList = "bookborder";
            container.appendChild(divBorder);
            
            card = document.createElement('div');
            card.classList = "card";
            card.id = "card";
            
            divBorder.appendChild(card);
            divDelete = document.createElement('div');
            divDelete.classList = "btn-divdelete";
            card.appendChild(divDelete);
            
            btnDelete = document.createElement('button');
            btnDelete.classList = "btn-delete";
            divDelete.appendChild(btnDelete);
            
            header = document.createElement('h3');
            header.classList = "title";
            card.appendChild(header);
            
            newAuthor = document.createElement('p');
            newAuthor.classList = "author";
            card.appendChild(newAuthor);
            
            totalPages = document.createElement('p');
            totalPages.classList = "pages";
            card.appendChild(totalPages);

            newHasRead = document.createElement('p');
            newHasRead.classList = "hasRead";
            card.appendChild(newHasRead);
            
            newImage = document.createElement('img');
            newImage.classList = "img-card";
            newImage.src = "https://www.nicepng.com/png/full/69-693155_books-open-book-clip-art-clipartix-open-book.png"
            card.appendChild(newImage);
            

            
        });
        

    }

}
addBookToPage();