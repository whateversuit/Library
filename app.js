// TODO:

// 1. Make delete button work - remove from local storage and from display
// 2. add a button on each books display to change its read status - function that toggles a funktion on books read status on Book prototype
// 3. Fix styling on modal container
// 4. Add a button on modal container to hide (instead of only submit)

 

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
// get object from localstorage, parse back to array and the run add to page function
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
    document.getElementById('hasReadYes').value,
    document.getElementById('hasReadNo').value);
    
    myLibrary.push(book); // Push book to array
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // storing locally in browser, converting to JSON format

    addBookToPage(); // calling add book to Page function
}
// This functions loops through the local storage array myLibrary and displays it in cards
function addBookToPage(){
    if (localStorage.getItem('myLibrary') != null){
        myLibrary.forEach(Book => { // Loops through each Book object inside myLibrary
        
            divBorder = document.createElement('div'); // create a div
            divBorder.classList = "bookborder"; // add class to div
            container.appendChild(divBorder); // append div to already existing container div in HTML document.
            
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
            btnDelete.innerText = "x";
        
            header = document.createElement('h3');
            header.classList = "title";
            card.appendChild(header);
            header.innerText = `${Book.title}`;
            
            newAuthor = document.createElement('p');
            newAuthor.classList = "author";
            card.appendChild(newAuthor);
            newAuthor.innerText = `Author: ${Book.author}`;
            
            totalPages = document.createElement('p');
            totalPages.classList = "pages";
            card.appendChild(totalPages);
            totalPages.innerText = `Pages: ${Book.pages}`;

            newHasRead = document.createElement('p');
            newHasRead.classList = "hasRead";
            card.appendChild(newHasRead);
            newHasRead.innerText = `Finished: ${Book.hasRead}`;
            
            newImage = document.createElement('img');
            newImage.classList = "img-card";
            newImage.src = "https://www.nicepng.com/png/full/69-693155_books-open-book-clip-art-clipartix-open-book.png"
            card.appendChild(newImage);
            
            
            
            card.addEventListener('click', (e) => {
                deleteBook(e.target);
                })
                
             
        })
    }
        
}

  // deleting a book from DOM
function deleteBook(el) {
    if(el.classList.contains('btn-delete')){
        el.parentElement.parentElement.parentElement.remove();
        
        // let myLibrary = (JSON.parse(localStorage.getItem('myLibrary')));
        //     myLibrary.forEach(el, index)
        //     if (myLibrary[i].title == title) {
        //         myLibrary.splice(i, 1);
        //     }
        // }
        // localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    } 
}
