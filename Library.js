const modalForm = document.getElementById("modal-form");
const btn = document.getElementById("add-book-form");
const addBook = document.getElementById("add-book");
const books = document.getElementById("books");
const del = document.querySelector('.delete');
let bookCount = 0;
var close = document.getElementsByClassName("close")[0];
let myLibrary = [];

function book(url, title, author, pages, read){
    console.log("Entered book");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    if(read == "yes"){
        this.read = "Finished"
    }
    else{
        this.read = "Not Finished"
    }
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + this.read;
    }
}

function addBookToLibrary(event){
    event.preventDefault();
    console.log("Entered addBookToLibrary");
    var title = document.getElementById("input-title").value;
    var author = document.getElementById("input-author").value;
    var pages = document.getElementById("input-pages").value;
    var url = document.getElementById("image-url").value;
    console.log(title);
    console.log(author);
    console.log(pages);
    var read = "";
    if(document.getElementById('yes').checked) {     
        read += "Finished";
      }else {
        read += "Not Finished";
    }
    if (!url) {
        url = "images/help.svg"
    }
    createBook(url, title, author, pages, read);
    const Book = new book(url, title, author, pages, read);
    var bookObj = {
        url: url,
        title: title,
        author: author,
        pages: pages,
        read: read
    }
    localStorage.setItem(title, JSON.stringify(bookObj));
    console.log(localStorage);
    myLibrary.push(Book);
}
function setStorage(){
    Object.keys(localStorage).forEach((key) => {
        items = JSON.parse(localStorage.getItem(key));
        myLibrary.push(items);
    });
    console.log(localStorage);
}
function createBook(url, title, author, pages, read){
    console.log("Entered createBook");
    const book = document.createElement('div');
    book.setAttribute('class', 'book');
    book.setAttribute('id', title);
    book.setAttribute('data-index', bookCount);

    this.title = document.createElement('span');
    this.title.setAttribute('class', 'title');
    this.title.textContent = "Title: " + title;

    this.author = document.createElement('span');
    this.author.setAttribute('class', 'author');
    this.author.textContent = "Author: " + author;

    this.pages = document.createElement('span');
    this.pages.setAttribute('class', 'pages');
    this.pages.textContent = "Pages: " + pages;

    this.read = document.createElement('span');
    this.read.setAttribute('class', 'read');
    this.read.textContent = "Finished: " + read;
    this.read.setAttribute('data-status', "status");


    this.url = document.createElement('img');
    this.url.setAttribute('class', 'url');
    this.url.alt = title + " image";
    this.url.src = url;

    this.delete = document.createElement('button');
    this.delete.setAttribute('class', 'delete');
    this.delete.textContent = "Delete Book";
    this.delete.setAttribute('onclick', "deleteBook(event, this);");

    book.appendChild(this.url);
    book.appendChild(this.title);
    book.appendChild(this.author);
    book.appendChild(this.pages);
    book.appendChild(this.read);
    book.appendChild(this.delete);
    books.appendChild(book);
    bookCount++;
}
function deleteBook(event, b){
    const book = b.parentNode;
    console.log(book);
    let index = book.getAttribute('data-index');
    let id = book.getAttribute('id');
    const element = document.getElementById(id);
    element.remove();
    localStorage.removeItem(id);
    myLibrary.splice(index, 1);
    bookCount--;
}

btn.onclick = function() {
    modalForm.style.display = "flex";
}

close.onclick = function() {
    modalForm.style.display = "none";
}  

addBook.addEventListener("click", addBookToLibrary, false);


const harryPotter = new book("https://wallpapercave.com/wp/wp6289310.jpg", "Harry Potter and the sorcerer's stone", "J.K. Rowling", 309, "yes");
myLibrary.push(harryPotter);

setStorage();
myLibrary.forEach(function (book, index) {
    createBook(book.url, book.title, book.author, book.pages, book.read);
});

